import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import { content, paths, type Locale, type Project } from "@/lib/content";
import { GithubIcon } from "./BrandIcons";
import { CountUp } from "./CountUp";
import { Footer } from "./Footer";
import { Nav } from "./Nav";
import { FabricPreview, GitopsPreview } from "./Previews";
import { Reveal } from "./Reveal";

function Visual({ p, en }: { p: Project; en: boolean }) {
  if (p.preview === "k8s")
    return (
      <video className="h-full w-full bg-[#181a1f] object-contain" src="/projects/k8s-demo.mp4" poster="/projects/k8s-demo.png" controls muted loop playsInline preload="metadata">
        {en ? "Demo" : "Démo"}
      </video>
    );
  return <div className="mx-auto h-full max-w-3xl p-6 sm:p-10">{p.preview === "fabric" ? <FabricPreview /> : <GitopsPreview en={en} />}</div>;
}

function Section({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <section className="grid gap-6 border-t border-line py-16 md:grid-cols-[14rem_1fr] md:gap-12">
      <Reveal><h2 className="path pt-1 text-sm"><b>{label}</b></h2></Reveal>
      <div>{children}</div>
    </section>
  );
}

export function CaseStudy({ locale, slug }: { locale: Locale; slug: string }) {
  const c = content[locale];
  const other: Locale = locale === "fr" ? "en" : "fr";
  const i = c.projects.findIndex(p => p.slug === slug);
  const p = c.projects[i];
  const next = c.projects[(i + 1) % c.projects.length];
  const s = p.study;
  const home = paths.home(locale);

  return (
    <>
      <Nav c={c} home={home} alt={paths.project(other, slug)} />
      <main className="pt-[72px]">
        <header className="relative isolate overflow-hidden">
          <div className="grid-bg pointer-events-none absolute inset-0 -z-10" />
          <div className="mx-auto max-w-5xl px-5 pb-14 pt-16 sm:px-8 md:pt-24">
            <Reveal>
              <a href={`${home}#projets`} className="mb-10 inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-ink"><ArrowLeft size={16} /> {c.ui.back}</a>
              <p className="path mb-5">{c.ui.caseStudy} · {p.kicker}</p>
              <h1 className="text-[clamp(2.5rem,6vw,4.8rem)] font-semibold leading-[0.98] tracking-[-0.045em]">{p.name}</h1>
              <p className="mt-6 max-w-3xl text-xl leading-relaxed text-muted">{p.description}</p>
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <a href={p.repo} target="_blank" rel="noopener" className="inline-flex items-center gap-2 rounded-full bg-ink px-5 py-3 text-sm font-medium text-bg transition-transform hover:-translate-y-0.5">
                  <GithubIcon /> {c.ui.sourceCode} <ArrowUpRight size={15} />
                </a>
                <ul className="flex flex-wrap gap-2">
                  {p.stack.map(t => <li key={t} className="rounded-full border border-line px-3 py-1 font-mono text-xs text-muted">{t}</li>)}
                </ul>
              </div>
            </Reveal>
          </div>
        </header>

        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <Reveal>
            <div className="aspect-[16/9] overflow-hidden rounded-[1.75rem] border border-line bg-bg-2">
              <Visual p={p} en={locale === "en"} />
            </div>
          </Reveal>
        </div>

        <article className="mx-auto max-w-5xl px-5 pt-10 sm:px-8">
          <Section label={c.ui.sections.context}>
            <Reveal><p className="max-w-[65ch] text-xl leading-relaxed">{s.context}</p></Reveal>
            <Reveal delay={0.05}><p className="mt-6 max-w-[65ch] border-l-2 border-accent pl-5 text-lg leading-relaxed text-muted">{s.goal}</p></Reveal>
          </Section>

          <Section label={c.ui.sections.how}>
            <ol className="space-y-6">
              {s.how.map((step, k) => (
                <Reveal key={k} delay={0.04 * k}>
                  <li className="grid grid-cols-[2.5rem_1fr] gap-4">
                    <span className="grid h-9 w-9 place-items-center rounded-full border border-line font-mono text-sm text-accent">{k + 1}</span>
                    <p className="max-w-[65ch] pt-1 leading-relaxed text-muted">{step}</p>
                  </li>
                </Reveal>
              ))}
            </ol>
          </Section>

          <Section label={c.ui.sections.decisions}>
            <div className="grid gap-4 sm:grid-cols-2">
              {s.decisions.map((d, k) => (
                <Reveal key={d.title} delay={0.05 * k} className={s.decisions.length % 2 && k === s.decisions.length - 1 ? "sm:col-span-2" : ""}>
                  <div className="h-full rounded-2xl border border-line bg-surface p-6">
                    <h3 className="text-lg font-semibold tracking-tight">{d.title}</h3>
                    <p className="mt-2 leading-relaxed text-muted">{d.text}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </Section>

          <Section label={c.ui.sections.challenges}>
            <div className="space-y-8">
              {s.challenges.map(d => (
                <Reveal key={d.title}>
                  <h3 className="text-xl font-semibold tracking-tight">{d.title}</h3>
                  <p className="mt-2 max-w-[65ch] leading-relaxed text-muted">{d.text}</p>
                </Reveal>
              ))}
            </div>
          </Section>

          <Section label={c.ui.sections.results}>
            <Reveal>
              <dl className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-line bg-line lg:grid-cols-4">
                {s.results.map(r => (
                  <div key={r.label} className="bg-bg p-6">
                    <dt className="sr-only">{r.label}</dt>
                    <dd className="text-3xl font-semibold tracking-tight text-accent sm:text-4xl"><CountUp value={r.value} /></dd>
                    <dd className="mt-2 text-sm leading-snug text-muted">{r.label}</dd>
                  </div>
                ))}
              </dl>
            </Reveal>
          </Section>

          <Section label={c.ui.sections.next}>
            <ul className="space-y-3">
              {s.next.map(n => <Reveal key={n}><li className="flex gap-3 leading-relaxed text-muted"><ArrowRight size={18} className="mt-1 shrink-0 text-accent" />{n}</li></Reveal>)}
            </ul>
          </Section>
        </article>

        <div className="mx-auto max-w-5xl px-5 pb-28 sm:px-8">
          <a href={paths.project(locale, next.slug)} className="group flex items-center justify-between gap-6 rounded-[1.75rem] border border-line bg-surface p-8 transition-colors hover:border-accent sm:p-10">
            <div>
              <p className="path mb-3">{c.ui.nextProject}</p>
              <p className="text-2xl font-semibold tracking-tight sm:text-3xl">{next.name}</p>
            </div>
            <ArrowRight size={28} className="shrink-0 text-accent transition-transform group-hover:translate-x-1" />
          </a>
        </div>
      </main>
      <Footer c={c} home={home} />
    </>
  );
}
