import type { Handler } from "@netlify/functions";

type ContactPayload = {
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  company?: string;
  website?: string;
  message: string;
  pageUrl?: string;
  referrer?: string | null;
};

function parsePayload(eventBody: string | null): ContactPayload {
  const parsed = JSON.parse(eventBody ?? "{}") as ContactPayload;

  if (!parsed.firstName || !parsed.lastName || !parsed.email || !parsed.message) {
    throw new Error("Missing required contact fields");
  }

  return parsed;
}

function getCrmSubmitUrl() {
  const baseUrl =
    process.env.CRM_API_BASE_URL ??
    process.env.NEXT_PUBLIC_CRM_API_BASE_URL ??
    "http://43.166.202.83:8000";
  const slug =
    process.env.CRM_FORM_SLUG ??
    process.env.NEXT_PUBLIC_CRM_FORM_SLUG ??
    "contact-2";
  const key =
    process.env.CRM_API_KEY ?? process.env.NEXT_PUBLIC_CRM_API_KEY;

  if (!key || key.includes("YOUR_CRM_API_KEY")) return null;

  return `${baseUrl.replace(/\/$/, "")}/api/public/forms/${slug}/submit?key=${encodeURIComponent(key)}`;
}

function getN8nWebhookUrl() {
  const webhookUrl =
    process.env.N8N_WEBHOOK_URL ?? process.env.NEXT_PUBLIC_N8N_WEBHOOK_URL;

  if (!webhookUrl || webhookUrl.includes("YOUR_N8N_WEBHOOK_URL")) return null;
  return webhookUrl;
}

function buildCrmBody(data: ContactPayload) {
  return {
    fields: {
      firstName: data.firstName,
      lastName: data.lastName,
      email: data.email,
      phone: data.phone ?? "",
      company: data.company ?? "",
      website: data.website ?? "",
      message: data.message,
    },
    page_url: data.pageUrl ?? "",
    referrer: data.referrer ?? null,
    website: "",
  };
}

function buildN8nBody(data: ContactPayload) {
  return {
    firstName: data.firstName,
    lastName: data.lastName,
    email: data.email,
    phone: data.phone ?? "",
    company: data.company ?? "",
    website: data.website ?? "",
    message: data.message,
    source: "strohmpartners.com contact form",
    submittedAt: new Date().toISOString(),
  };
}

async function postJson(
  url: string,
  body: Record<string, unknown>
): Promise<{ ok: boolean; status: number; body: string }> {
  const response = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });

  return {
    ok: response.ok,
    status: response.status,
    body: await response.text(),
  };
}

export const handler: Handler = async (event) => {
  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ error: "Method not allowed" }),
    };
  }

  const crmUrl = getCrmSubmitUrl();
  const n8nUrl = getN8nWebhookUrl();

  if (!crmUrl && !n8nUrl) {
    return {
      statusCode: 500,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ error: "No submission destinations configured" }),
    };
  }

  try {
    const payload = parsePayload(event.body);
    const tasks: Promise<{ destination: "crm" | "n8n"; result: Awaited<ReturnType<typeof postJson>> }>[] = [];

    if (crmUrl) {
      tasks.push(
        postJson(crmUrl, buildCrmBody(payload)).then((result) => ({
          destination: "crm" as const,
          result,
        }))
      );
    }

    if (n8nUrl) {
      tasks.push(
        postJson(n8nUrl, buildN8nBody(payload)).then((result) => ({
          destination: "n8n" as const,
          result,
        }))
      );
    }

    const results = await Promise.all(tasks);
    const failures = results
      .filter(({ result }) => !result.ok)
      .map(
        ({ destination, result }) =>
          `${destination} returned ${result.status}: ${result.body}`
      );

    if (failures.length > 0) {
      console.error("[contact-submit] upstream failures", failures);
      return {
        statusCode: 502,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ok: false, errors: failures }),
      };
    }

    return {
      statusCode: 200,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        ok: true,
        destinations: results.map(({ destination, result }) => ({
          destination,
          status: result.status,
        })),
      }),
    };
  } catch (error) {
    console.error("[contact-submit] request failed", error);
    return {
      statusCode: 400,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        error:
          error instanceof Error ? error.message : "Contact submission failed",
      }),
    };
  }
};