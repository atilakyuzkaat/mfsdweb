import Cookies from "@/components/views/Cookies";
import { pageMeta } from "@/lib/i18n";

export const metadata = pageMeta("tr", "cookies");

export default function Page() {
  return <Cookies lang="tr" />;
}
