import Services from "@/components/views/Services";
import { pageMeta } from "@/lib/i18n";

export const metadata = pageMeta("tr", "services");

export default function Page() {
  return <Services lang="tr" />;
}
