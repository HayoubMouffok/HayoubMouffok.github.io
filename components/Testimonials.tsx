import { Quote } from "lucide-react";
import type { Content } from "@/lib/content";
import { Reveal } from "./Reveal";

// Affichée seulement quand de vraies recommandations sont renseignées dans lib/content.ts.
export function Testimonials({ c }: { c: Content }) {
  if (!c.testimonials.length) return null;
  return (
    <section aria-labelledby="temoignages" className="border-t border-line">
      <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8">
        <Reveal><h2 id="temoignages" className="mb-12 text-3xl font-semibold tracking-tight sm:text-4xl">{c.ui.testimonials}</h2></Reveal>
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {c.testimonials.map((t, i) => (
            <Reveal key={t.name} delay={0.06 * i}>
              <figure className="h-full rounded-3xl border border-line bg-surface p-8">
                <Quote size={22} className="mb-5 text-accent" aria-hidden="true" />
                <blockquote className="text-lg leading-relaxed">{t.quote}</blockquote>
                <figcaption className="mt-6 text-sm"><span className="font-medium">{t.name}</span><span className="block text-muted">{t.role}</span></figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
