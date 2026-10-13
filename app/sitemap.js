import { siteUrl } from "@/lib/site";
import { routes } from "@/lib/i18n";

export default function sitemap() {
  const out = [];
  for (const [key, r] of Object.entries(routes)) {
    for (const lang of ["tr", "en"]) {
      out.push({
        url: siteUrl + (r[lang] === "/" ? "" : r[lang]),
        lastModified: new Date(),
        changeFrequency: "monthly",
        priority: key === "home" ? (lang === "tr" ? 1 : 0.9) : 0.7,
        alternates: { languages: { "tr-TR": siteUrl + (r.tr === "/" ? "" : r.tr), en: siteUrl + r.en } },
      });
    }
  }
  return out;
}
