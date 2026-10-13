import Projects from "@/components/views/Projects";
import { pageMeta } from "@/lib/i18n";

export const metadata = pageMeta("tr", "projects");

export default function Page() {
  return <Projects lang="tr" />;
}
