import { HomePage } from "@/components/HomePage";
import { pageMeta } from "@/lib/meta";

export const metadata = pageMeta("en", { path: "/en/", alt: "/" });
export default function Page() { return <HomePage locale="en" />; }
