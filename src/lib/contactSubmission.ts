export type ContactFormPayload = {
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  company?: string;
  website?: string;
  message: string;
};

type SubmissionMeta = {
  pageUrl: string;
  referrer: string | null;
};

function getCrmSubmitUrl() {
  const baseUrl =
    process.env.NEXT_PUBLIC_CRM_API_BASE_URL ?? "http://43.166.202.83:8000";
  const slug = process.env.NEXT_PUBLIC_CRM_FORM_SLUG ?? "contact-2";
  const key = process.env.NEXT_PUBLIC_CRM_API_KEY;

  if (!key || key.includes("YOUR_CRM_API_KEY")) return null;

  return `${baseUrl.replace(/\/$/, "")}/api/public/forms/${slug}/submit?key=${encodeURIComponent(key)}`;
}

function getN8nWebhookUrl() {
  const webhookUrl = process.env.NEXT_PUBLIC_N8N_WEBHOOK_URL;
  if (!webhookUrl || webhookUrl.includes("YOUR_N8N_WEBHOOK_URL")) return null;
  return webhookUrl;
}

function buildCrmRequestBody(data: ContactFormPayload, meta: SubmissionMeta) {
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
    page_url: meta.pageUrl,
    referrer: meta.referrer,
    website: "",
  };
}

function shouldUseCrmProxy() {
  return window.location.protocol === "https:";
}

async function submitToCrm(data: ContactFormPayload, meta: SubmissionMeta) {
  if (!getCrmSubmitUrl()) return;

  const body = JSON.stringify(buildCrmRequestBody(data, meta));
  const url = shouldUseCrmProxy() ? "/api/crm-submit" : getCrmSubmitUrl();

  if (!url) return;

  const res = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body,
  });

  if (!res.ok) {
    const label = shouldUseCrmProxy() ? "CRM proxy" : "CRM API";
    throw new Error(`${label} returned ${res.status}`);
  }
}

async function submitToN8n(data: ContactFormPayload) {
  const url = getN8nWebhookUrl();
  if (!url) return;

  const res = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      ...data,
      source: "strohmpartners.com contact form",
      submittedAt: new Date().toISOString(),
    }),
  });

  if (!res.ok) {
    throw new Error(`N8N webhook returned ${res.status}`);
  }
}

function formatFailure(
  label: string,
  result: PromiseSettledResult<void>
): string | null {
  if (result.status === "fulfilled") return null;
  const message =
    result.reason instanceof Error ? result.reason.message : "submission failed";
  return `${label}: ${message}`;
}

export async function submitContactForm(data: ContactFormPayload) {
  const meta: SubmissionMeta = {
    pageUrl: window.location.href,
    referrer: document.referrer || null,
  };

  const hasCrm = getCrmSubmitUrl() !== null;
  const hasN8n = getN8nWebhookUrl() !== null;

  if (!hasCrm && !hasN8n) {
    console.warn(
      "[ContactForm] No CRM or N8N destination configured; submission logged to console only.",
      data
    );
    await new Promise((resolve) => setTimeout(resolve, 600));
    return { devMode: true as const };
  }

  const [crmResult, n8nResult] = await Promise.allSettled([
    submitToCrm(data, meta),
    submitToN8n(data),
  ]);

  const failures = [
    hasCrm ? formatFailure("CRM", crmResult) : null,
    hasN8n ? formatFailure("N8N", n8nResult) : null,
  ].filter((failure): failure is string => failure !== null);

  if (failures.length > 0) {
    throw new Error(failures.join("; "));
  }

  return { devMode: false as const };
}