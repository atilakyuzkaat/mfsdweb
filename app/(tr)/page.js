import Home from "@/components/views/Home";
import { pageMeta } from "@/lib/i18n";

export const metadata = pageMeta("tr", "home");

export default function Page() {
  return <Home lang="tr" />;
}
