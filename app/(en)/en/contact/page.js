import Contact from "@/components/views/Contact";
import { pageMeta } from "@/lib/i18n";

export const metadata = pageMeta("en", "contact");

export default function Page({ searchParams }) {
  return <Contact lang="en" searchParams={searchParams} />;
}
