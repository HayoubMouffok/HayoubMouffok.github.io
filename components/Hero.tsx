"use client";
import { ArrowDownRight, ArrowUpRight } from "lucide-react";
import type { Content } from "@/lib/content";
import { NetworkField } from "./NetworkField";

const ease = [0.22, 1, 0.36, 1] as const;

function Word({ text, delay }: { text: string; delay: number }) {
  // Animation en CSS : le nom apparaît sans attendre le JavaScript (meilleur LCP).
  return (
    <span className="block overflow-hidden pb-[0.08em]">
      <span className="rise block" style={{ animationDelay: `${delay}s` }}>{text}</span>
    </span>
  );
}

export function Hero({ c }: { c: Content }) {
  const profile = c.profile;
  return (
    <section id="top" className="relative isolate overflow-hidden pt-[72px]">
      <div className="grid-bg pointer-events-none absolute inset-0 -z-10" />
      <div className="pointer-events-none absolute -right-40 top-10 -z-10 h-[520px] w-[520px] rounded-full blur-3xl" style={{ background: "var(--glow)" }} />

      <div className="mx-auto grid min-h-[calc(100svh-72px)] max-w-7xl items-center gap-10 px-5 py-16 sm:px-8 lg:grid-cols-[1.15fr_1fr] lg:py-10">
        <div>
          <p data-fade style={{ animationDelay: "0.1s" }} className="mb-8 inline-flex items-center gap-2.5 rounded-full border border-line bg-surface/70 px-3.5 py-1.5 text-sm text-muted backdrop-blur">
            <span className="relative flex h-2 w-2"><span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" /><span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" /></span>
            {profile.available} · {profile.location}
          </p>

          <h1 className="text-[clamp(3.4rem,9vw,7.6rem)] font-semibold leading-[0.9] tracking-[-0.055em]">
            <Word text={profile.firstName} delay={0.15} />
            <Word text={profile.lastName} delay={0.28} />
          </h1>

          <p data-fade style={{ animationDelay: "0.55s" }} className="mt-8 max-w-xl text-2xl font-medium leading-snug tracking-tight sm:text-[1.7rem]">
            {profile.titleHtml[0]}<span className="text-accent">{profile.titleHtml[1]}</span>{profile.titleHtml[2]}
          </p>
          <p data-fade style={{ animationDelay: "0.68s" }} className="mt-4 max-w-lg text-lg leading-relaxed text-muted">
            {profile.tagline}
          </p>

          <div data-fade style={{ animationDelay: "0.82s" }} className="mt-10 flex flex-wrap gap-3">
            <a href="#projets" className="group inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3.5 text-[15px] font-medium text-bg transition-transform hover:-translate-y-0.5">
              {c.ui.discover} <ArrowDownRight size={18} className="transition-transform group-hover:translate-x-0.5 group-hover:translate-y-0.5" />
            </a>
            <a href="#contact" className="group inline-flex items-center gap-2 rounded-full border border-line px-6 py-3.5 text-[15px] font-medium transition-colors hover:border-ink">
              {c.ui.contactCta} <ArrowUpRight size={18} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
          </div>
        </div>

        <div data-fade style={{ animationDelay: "0.3s" }} className="relative h-[380px] sm:h-[460px] lg:h-[560px]">
          <div className="absolute inset-0 rounded-[2rem] border border-line bg-surface/40 backdrop-blur-[2px]" />
          <div className="absolute inset-0 overflow-hidden rounded-[2rem]"><NetworkField c={c} /></div>
          <p className="path absolute bottom-5 left-6 hidden sm:block">{c.ui.hoverHint}</p>
          <p className="path absolute bottom-5 right-6"><b>AS 65000</b> · {c.ui.domains}</p>
        </div>
      </div>
    </section>
  );
}
