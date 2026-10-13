// Resend REST API ile e-posta gönderimi (ek paket gerektirmez).

const API = "https://api.resend.com";

export function mailConfigured() {
  return Boolean(process.env.RESEND_API_KEY);
}

async function call(path, body) {
  const res = await fetch(API + path, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });
  if (!res.ok) {
    const text = await res.text().catch(() => "");
    throw new Error(`Resend ${path} ${res.status}: ${text.slice(0, 300)}`);
  }
  return res.json().catch(() => ({}));
}

export async function sendMail({ to, subject, html, text, replyTo }) {
  if (!mailConfigured()) {
    if (process.env.NODE_ENV !== "production") {
      console.log("[mail:dev] E-posta gönderilmedi (RESEND_API_KEY yok):", { to, subject, text });
      return { dev: true };
    }
    throw new Error("RESEND_API_KEY tanımlı değil");
  }
  return call("/emails", {
    from: process.env.MAIL_FROM || "MFSD <bildirim@mfsd.com.tr>",
    to: Array.isArray(to) ? to : [to],
    subject,
    html,
    text,
    ...(replyTo ? { reply_to: replyTo } : {}),
  });
}

export async function addSubscriber(email) {
  const audience = process.env.RESEND_AUDIENCE_ID;
  if (!audience || !mailConfigured()) return { skipped: true };
  return call(`/audiences/${audience}/contacts`, { email, unsubscribed: false });
}
