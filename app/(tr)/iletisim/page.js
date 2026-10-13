import Contact from "@/components/views/Contact";
import { pageMeta } from "@/lib/i18n";

export const metadata = pageMeta("tr", "contact");

export default function Page({ searchParams }) {
  return <Contact lang="tr" searchParams={searchParams} />;
}
