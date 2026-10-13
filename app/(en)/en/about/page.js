import About from "@/components/views/About";
import { pageMeta } from "@/lib/i18n";

export const metadata = pageMeta("en", "about");

export default function Page() {
  return <About lang="en" />;
}
