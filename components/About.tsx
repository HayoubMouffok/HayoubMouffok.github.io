import { about } from "@/lib/data";
import { Reveal, SectionHead } from "./Reveal";

export function About() {
  return (
    <section id="a-propos" className="mx-auto max-w-7xl px-5 py-28 sm:px-8 md:py-36">
      <SectionHead path="a-propos" title="Le réseau, le serveur, le pipeline. Et ce qui les protège." />
      <div className="grid gap-14 lg:grid-cols-[1.4fr_1fr] lg:gap-20">
        <div>
          {about.paragraphs.map((p, i) => (
            <Reveal key={i} delay={0.08 * i}><p className="mb-6 max-w-[64ch] text-lg leading-[1.75] text-muted first:text-xl first:text-ink">{p}</p></Reveal>
          ))}
        </div>
        <div className="lg:pt-2">
          <Reveal delay={0.2}>
            <dl className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-line bg-line">
              {about.facts.map(f => (
                <div key={f.label} className="bg-bg p-6">
                  <dt className="sr-only">{f.label}</dt>
                  <dd className="text-3xl font-semibold tracking-tight sm:text-4xl">{f.value}</dd>
                  <dd className="mt-2 text-sm leading-snug text-muted">{f.label}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
