import Services from "@/components/views/Services";
import { pageMeta } from "@/lib/i18n";

export const metadata = pageMeta("en", "services");

export default function Page() {
  return <Services lang="en" />;
}
