import { NextResponse } from "next/server";

import { siteContact } from "@/lib/site";

export const runtime = "nodejs";

type Payload = {
  name: string;
  email: string;
  phone: string;
  type: "family" | "business";
  message: string;
  company: string;
  lang: "en" | "es";
};

const RESEND_ENDPOINT = "https://api.resend.com/emails";

function isNonEmptyString(value: unknown): value is string {
  return typeof value === "string" && value.trim().length > 0;
}

function looksLikeEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

/** Escape user input before it goes into the HTML body of the notification. */
function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

export async function POST(request: Request) {
  let body: Partial<Payload>;

  try {
    body = (await request.json()) as Partial<Payload>;
  } catch {
    return NextResponse.json({ error: "invalid_json" }, { status: 400 });
  }

  // A filled honeypot means a bot. Answer as if it worked so it does not retry.
  if (isNonEmptyString(body.company)) {
    return NextResponse.json({ ok: true });
  }

  const name = isNonEmptyString(body.name) ? body.name.trim() : "";
  const email = isNonEmptyString(body.email) ? body.email.trim() : "";
  const message = isNonEmptyString(body.message) ? body.message.trim() : "";
  const phone = isNonEmptyString(body.phone) ? body.phone.trim() : "";
  const type = body.type === "business" ? "business" : "family";
  const lang = body.lang === "es" ? "es" : "en";

  if (!name || !email || !message || !looksLikeEmail(email)) {
    return NextResponse.json({ error: "invalid_fields" }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL ?? siteContact.email;
  const from = process.env.CONTACT_FROM_EMAIL ?? `Padres Con Poder <no-reply@padresconpoder.com>`;

  if (!apiKey) {
    // Without a key nothing can be delivered. Fail loudly rather than showing a
    // success screen for a message nobody will ever receive.
    console.error("[contact] RESEND_API_KEY is not set — message was not delivered.");
    return NextResponse.json({ error: "email_not_configured" }, { status: 503 });
  }

  const audience = type === "business" ? "Employer" : "Family";
  const subject = `[${audience}] New message from ${name}`;
  const html = `
    <h2>New website enquiry</h2>
    <p><strong>Reaching out as:</strong> ${escapeHtml(audience)}</p>
    <p><strong>Name:</strong> ${escapeHtml(name)}</p>
    <p><strong>Email:</strong> ${escapeHtml(email)}</p>
    <p><strong>Phone:</strong> ${phone ? escapeHtml(phone) : "—"}</p>
    <p><strong>Site language:</strong> ${lang === "es" ? "Spanish" : "English"}</p>
    <hr />
    <p>${escapeHtml(message).replace(/\n/g, "<br />")}</p>
  `;

  try {
    const response = await fetch(RESEND_ENDPOINT, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from,
        to: [to],
        // So replying from the inbox goes straight back to the family.
        reply_to: email,
        subject,
        html,
      }),
    });

    if (!response.ok) {
      const detail = await response.text();
      console.error(`[contact] Resend responded ${response.status}: ${detail}`);
      return NextResponse.json({ error: "delivery_failed" }, { status: 502 });
    }
  } catch (error) {
    console.error("[contact] Could not reach the email provider:", error);
    return NextResponse.json({ error: "delivery_failed" }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
