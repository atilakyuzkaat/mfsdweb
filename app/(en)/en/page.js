import Home from "@/components/views/Home";
import { pageMeta } from "@/lib/i18n";

export const metadata = pageMeta("en", "home");

export default function Page() {
  return <Home lang="en" />;
}
