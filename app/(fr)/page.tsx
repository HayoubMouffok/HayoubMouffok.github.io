import { HomePage } from "@/components/HomePage";
import { pageMeta } from "@/lib/meta";

export const metadata = pageMeta("fr", { path: "/", alt: "/en/" });
export default function Page() { return <HomePage locale="fr" />; }
