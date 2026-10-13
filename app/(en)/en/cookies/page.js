import Cookies from "@/components/views/Cookies";
import { pageMeta } from "@/lib/i18n";

export const metadata = pageMeta("en", "cookies");

export default function Page() {
  return <Cookies lang="en" />;
}
