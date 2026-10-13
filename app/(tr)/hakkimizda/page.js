import About from "@/components/views/About";
import { pageMeta } from "@/lib/i18n";

export const metadata = pageMeta("tr", "about");

export default function Page() {
  return <About lang="tr" />;
}
