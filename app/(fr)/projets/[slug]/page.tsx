import { notFound } from "next/navigation";
import { CaseStudy } from "@/components/CaseStudy";
import { content, paths } from "@/lib/content";
import { pageMeta } from "@/lib/meta";

export const dynamicParams = false;
export function generateStaticParams() { return content.fr.projects.map(p => ({ slug: p.slug })); }

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const p = content.fr.projects.find(x => x.slug === slug);
  return pageMeta("fr", { title: p?.name, description: p?.description, path: paths.project("fr", slug), alt: paths.project("en", slug) });
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  if (!content.fr.projects.some(p => p.slug === slug)) notFound();
  return <CaseStudy locale="fr" slug={slug} />;
}
