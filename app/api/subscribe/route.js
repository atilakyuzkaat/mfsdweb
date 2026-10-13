import { NextResponse } from "next/server";
import { clean, isEmail, escapeHtml, rateLimited, clientIp } from "@/lib/validate";
import { sendMail, addSubscriber, mailConfigured } from "@/lib/mail";
import { company } from "@/lib/site";
import { getDict } from "@/lib/i18n";

export const runtime = "nodejs";

export async function POST(req) {
  let b;
  try {
    b = await req.json();
  } catch {
    return NextResponse.json({ error: getDict("tr").api.badRequest }, { status: 400 });
  }
  const lang = b.lang === "en" ? "en" : "tr";
  const t = getDict(lang).api;
  if (b.website) return NextResponse.json({ ok: true });

  if (rateLimited("s:" + clientIp(req), 5)) {
    return NextResponse.json({ error: t.subRate }, { status: 429 });
  }

  const email = clean(b.email, 254).toLowerCase();
  if (!isEmail(email)) return NextResponse.json({ error: t.email }, { status: 422 });
  if (b.consent !== true) return NextResponse.json({ error: t.subConsent }, { status: 422 });

  if (!mailConfigured() && process.env.NODE_ENV === "production") {
    return NextResponse.json({ error: t.subUnavailable }, { status: 503 });
  }

  try {
    await addSubscriber(email);
    await sendMail({
      to: process.env.CONTACT_TO || company.email,
      subject: `[mfsd.com.tr] Yeni bülten abonesi: ${email}`,
      text: `Yeni abone: ${email}\nDil: ${lang}\nİzin onayı: ${new Date().toISOString()}`,
      html: `<p style="font-family:Arial,sans-serif">Yeni bülten abonesi: <b>${escapeHtml(email)}</b><br><small>Dil: ${lang} · İzin onayı: ${new Date().toISOString()}</small></p>`,
    });
  } catch (e) {
    console.error("[subscribe]", e.message);
    return NextResponse.json({ error: t.subFailed }, { status: 502 });
  }
  return NextResponse.json({ ok: true });
}
