import Projects from "@/components/views/Projects";
import { pageMeta } from "@/lib/i18n";

export const metadata = pageMeta("en", "projects");

export default function Page() {
  return <Projects lang="en" />;
}
