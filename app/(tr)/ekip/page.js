import Team from "@/components/views/Team";
import { pageMeta } from "@/lib/i18n";

export const metadata = pageMeta("tr", "team");

export default function Page() {
  return <Team lang="tr" />;
}
