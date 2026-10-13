// Tüm kurumsal bilgiler tek yerde. Değişiklikler buradan yapılır.
// TTK m.1524 gereği internet sitesinde unvan, MERSIS no, ticaret sicil bilgisi ve adres yer almalıdır.

export const company = {
  shortName: "MFSD",
  legalName: "Maternal Fetal Sağlık ve Danışmanlık Hizmetleri Ticaret Limited Şirketi",
  mersis: "0613093528800001",
  tradeRegistry: "İstanbul Ticaret Sicil Müdürlüğü, Sicil No: 85617-5",
  address: {
    line1: "Kaptanpaşa Mah. Halit Ziya Türkkan Sk.",
    line2: "Middilest D Blok Apt. No: 14/12",
    district: "Şişli",
    city: "İstanbul",
  },
  email: "info@mfsd.com.tr",
  phone: "", // ör. "+90 212 000 00 00" — boş bırakılırsa sitede gösterilmez
  kep: "", // KEP adresi varsa
  taxOffice: "", // ör. "Şişli V.D. 000 000 0000"
  linkedin: "", // ör. "https://www.linkedin.com/company/mfsd"
};

export const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.mfsd.com.tr";

export const nav = [
  { href: "/hizmetler", label: "Hizmetler" },
  { href: "/projeler", label: "Projeler" },
  { href: "/ekip", label: "Ekip" },
  { href: "/hakkimizda", label: "Hakkımızda" },
  { href: "/iletisim", label: "İletişim" },
];

export const fullAddress = (a = company.address) =>
  `${a.line1} ${a.line2}, ${a.district} / ${a.city}`;

export const mapsUrl =
  "https://www.google.com/maps/search/?api=1&query=" +
  encodeURIComponent("Halit Ziya Türkkan Sokak Kaptanpaşa Şişli İstanbul");
