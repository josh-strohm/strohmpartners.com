import type { Handler } from "@netlify/functions";

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

export const handler: Handler = async (event) => {
  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ error: "Method not allowed" }),
    };
  }

  const crmUrl = getCrmSubmitUrl();
  if (!crmUrl) {
    return {
      statusCode: 500,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ error: "CRM submission is not configured" }),
    };
  }

  try {
    const upstream = await fetch(crmUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: event.body ?? "{}",
    });

    const responseBody = await upstream.text();
    const contentType =
      upstream.headers.get("content-type") ?? "application/json";

    return {
      statusCode: upstream.status,
      headers: { "Content-Type": contentType },
      body: responseBody,
    };
  } catch (error) {
    console.error("[crm-submit proxy] upstream request failed", error);
    return {
      statusCode: 502,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ error: "CRM submission failed" }),
    };
  }
};