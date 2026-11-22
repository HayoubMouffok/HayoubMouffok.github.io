import { notFound } from "next/navigation";
import { CaseStudy } from "@/components/CaseStudy";
import { content, paths } from "@/lib/content";
import { pageMeta } from "@/lib/meta";

export const dynamicParams = false;
export function generateStaticParams() { return content.en.projects.map(p => ({ slug: p.slug })); }

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const p = content.en.projects.find(x => x.slug === slug);
  return pageMeta("en", { title: p?.name, description: p?.description, path: paths.project("en", slug), alt: paths.project("fr", slug) });
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  if (!content.en.projects.some(p => p.slug === slug)) notFound();
  return <CaseStudy locale="en" slug={slug} />;
}
