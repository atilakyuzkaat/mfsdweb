import { siteUrl } from "@/lib/site";
export default function sitemap() {
  const paths = ["", "/hizmetler", "/projeler", "/projeler/partoai", "/ekip", "/hakkimizda", "/iletisim", "/kvkk", "/cerez-politikasi"];
  return paths.map((p) => ({ url: siteUrl + p, lastModified: new Date(), changeFrequency: "monthly", priority: p === "" ? 1 : 0.7 }));
}
