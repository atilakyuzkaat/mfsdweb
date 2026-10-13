import Partoai from "@/components/views/Partoai";
import { pageMeta } from "@/lib/i18n";

export const metadata = pageMeta("en", "partoai");

export default function Page() {
  return <Partoai lang="en" />;
}
