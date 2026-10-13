import Shell from "@/components/Shell";
import { siteUrl } from "@/lib/site";
import { getDict } from "@/lib/i18n";

const t = getDict("tr");

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: t.meta.home.title, template: "%s | MFSD" },
  description: t.meta.home.description,
  openGraph: { type: "website", siteName: "MFSD", locale: "tr_TR" },
};

export const viewport = { width: "device-width", initialScale: 1, themeColor: "#2e1640" };

export default function Layout({ children }) {
  return <Shell lang="tr">{children}</Shell>;
}
