import tr from "./content/tr";
import en from "./content/en";

export const locales = ["tr", "en"];
const dicts = { tr, en };
export const getDict = (lang) => dicts[lang] || tr;

// Sayfa anahtarı → dile göre adres. Dil geçişi ve hreflang bu tablodan üretilir.
export const routes = {
  home: { tr: "/", en: "/en" },
  services: { tr: "/hizmetler", en: "/en/services" },
  projects: { tr: "/projeler", en: "/en/projects" },
  partoai: { tr: "/projeler/partoai", en: "/en/projects/partoai" },
  team: { tr: "/ekip", en: "/en/team" },
  about: { tr: "/hakkimizda", en: "/en/about" },
  contact: { tr: "/iletisim", en: "/en/contact" },
  privacy: { tr: "/kvkk", en: "/en/privacy" },
  cookies: { tr: "/cerez-politikasi", en: "/en/cookies" },
};

export const href = (lang, key) => routes[key][lang];

export function routeKeyFor(pathname) {
  const p = pathname.replace(/\/$/, "") || "/";
  for (const [key, r] of Object.entries(routes)) {
    if (r.tr === p || r.en === p) return key;
  }
  return null;
}

export function langFromPath(pathname) {
  return pathname === "/en" || pathname.startsWith("/en/") ? "en" : "tr";
}

// Sayfa metadata'sı: başlık, açıklama, canonical ve hreflang.
export function pageMeta(lang, key) {
  const t = getDict(lang);
  const m = t.meta[key];
  return {
    title: key === "home" ? { absolute: m.title } : m.title,
    description: m.description,
    alternates: {
      canonical: routes[key][lang],
      languages: { "tr-TR": routes[key].tr, en: routes[key].en, "x-default": routes[key].tr },
    },
    openGraph: { title: m.title, description: m.description, url: routes[key][lang], locale: lang === "en" ? "en_US" : "tr_TR" },
  };
}
