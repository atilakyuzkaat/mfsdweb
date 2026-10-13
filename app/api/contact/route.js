import { NextResponse } from "next/server";
import { clean, isEmail, escapeHtml, rateLimited, clientIp } from "@/lib/validate";
import { sendMail, mailConfigured } from "@/lib/mail";
import { company } from "@/lib/site";
import { getDict } from "@/lib/i18n";

export const runtime = "nodejs";

const trTopics = Object.fromEntries(getDict("tr").contact.form.topics);

export async function POST(req) {
  let b;
  try {
    b = await req.json();
  } catch {
    return NextResponse.json({ error: getDict("tr").api.badRequest }, { status: 400 });
  }
  const lang = b.lang === "en" ? "en" : "tr";
  const t = getDict(lang);
  const userTopics = Object.fromEntries(t.contact.form.topics);

  // Bot tuzağı: görünmez alan doluysa ya da form 3 sn'den kısa sürede gönderildiyse sessizce kabul et.
  if (b.website || (b.startedAt && Date.now() - Number(b.startedAt) < 3000)) {
    return NextResponse.json({ ok: true });
  }
  if (rateLimited("c:" + clientIp(req))) {
    return NextResponse.json({ error: t.api.rate }, { status: 429 });
  }

  const data = {
    name: clean(b.name, 120),
    org: clean(b.org, 160),
    email: clean(b.email, 254).toLowerCase(),
    phone: clean(b.phone, 40),
    topic: trTopics[b.topic] ? b.topic : "diger",
    message: clean(b.message, 5000),
  };

  const errors = {};
  if (data.name.length < 2) errors.name = t.api.name;
  if (!isEmail(data.email)) errors.email = t.api.email;
  if (data.message.length < 10) errors.message = t.api.message;
  if (b.kvkk !== true) errors.kvkk = t.api.kvkk;
  if (Object.keys(errors).length) return NextResponse.json({ errors }, { status: 422 });

  if (!mailConfigured() && process.env.NODE_ENV === "production") {
    return NextResponse.json({ error: t.api.unavailable(company.email) }, { status: 503 });
  }

  const topicLabel = trTopics[data.topic];
  const rows = [
    ["Ad soyad", data.name],
    ["Kurum", data.org || "—"],
    ["E-posta", data.email],
    ["Telefon", data.phone || "—"],
    ["Konu", topicLabel],
    ["Dil", lang === "en" ? "İngilizce site" : "Türkçe site"],
  ];
  const html = `
    <h2 style="font-family:Arial,sans-serif;color:#3d1f52">Web sitesinden yeni mesaj</h2>
    <table style="font-family:Arial,sans-serif;font-size:14px;border-collapse:collapse">
      ${rows.map(([k, v]) => `<tr><td style="padding:4px 12px 4px 0;color:#6e6275">${k}</td><td style="padding:4px 0"><b>${escapeHtml(v)}</b></td></tr>`).join("")}
    </table>
    <p style="font-family:Arial,sans-serif;font-size:14px;white-space:pre-wrap;border-left:3px solid #b83a62;padding-left:12px">${escapeHtml(data.message)}</p>
    <p style="font-family:Arial,sans-serif;font-size:12px;color:#6e6275">Aydınlatma metni onaylandı · ${new Date().toISOString()}</p>`;
  const text = rows.map(([k, v]) => `${k}: ${v}`).join("\n") + "\n\n" + data.message;

  try {
    await sendMail({
      to: process.env.CONTACT_TO || company.email,
      subject: `[mfsd.com.tr${lang === "en" ? " EN" : ""}] ${topicLabel}: ${data.name}${data.org ? " (" + data.org + ")" : ""}`,
      html,
      text,
      replyTo: data.email,
    });

    if (process.env.CONTACT_AUTO_REPLY !== "false") {
      const lines = t.api.autoReplyBody(data.name, userTopics[data.topic]);
      await sendMail({
        to: data.email,
        subject: t.api.autoReplySubject,
        text: `${lines.join("\n\n")}\n\nMFSD\n${company.legalName}\n${company.email}`,
        html:
          lines.map((l) => `<p style="font-family:Arial,sans-serif;font-size:14px">${escapeHtml(l)}</p>`).join("") +
          `<p style="font-family:Arial,sans-serif;font-size:13px;color:#6e6275">MFSD<br>${escapeHtml(company.legalName)}<br>${company.email}</p>`,
      }).catch((e) => console.error("[contact] otomatik yanıt gönderilemedi", e.message));
    }
  } catch (e) {
    console.error("[contact]", e.message);
    return NextResponse.json({ error: t.api.failed(company.email) }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
