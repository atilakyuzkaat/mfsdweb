import Shell from "@/components/Shell";
import { siteUrl } from "@/lib/site";
import { getDict } from "@/lib/i18n";

const t = getDict("en");

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: t.meta.home.title, template: "%s | MFSD" },
  description: t.meta.home.description,
  openGraph: { type: "website", siteName: "MFSD", locale: "en_US" },
};

export const viewport = { width: "device-width", initialScale: 1, themeColor: "#2e1640" };

export default function Layout({ children }) {
  return <Shell lang="en">{children}</Shell>;
}
