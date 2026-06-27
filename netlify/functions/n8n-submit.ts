import type { Handler } from "@netlify/functions";

function getN8nWebhookUrl() {
  const webhookUrl =
    process.env.N8N_WEBHOOK_URL ?? process.env.NEXT_PUBLIC_N8N_WEBHOOK_URL;

  if (!webhookUrl || webhookUrl.includes("YOUR_N8N_WEBHOOK_URL")) return null;
  return webhookUrl;
}

export const handler: Handler = async (event) => {
  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ error: "Method not allowed" }),
    };
  }

  const webhookUrl = getN8nWebhookUrl();
  if (!webhookUrl) {
    return {
      statusCode: 500,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ error: "N8N webhook is not configured" }),
    };
  }

  try {
    const upstream = await fetch(webhookUrl, {
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
    console.error("[n8n-submit proxy] upstream request failed", error);
    return {
      statusCode: 502,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ error: "N8N submission failed" }),
    };
  }
};