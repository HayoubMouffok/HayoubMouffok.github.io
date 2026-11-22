import type { Metadata, Viewport } from "next";
import { content, type Locale } from "./content";

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#090e1a" },
    { media: "(prefers-color-scheme: light)", color: "#f4f5f7" },
  ],
};

export function pageMeta(locale: Locale, opts: { title?: string; description?: string; path: string; alt: string }): Metadata {
  const c = content[locale];
  const base = `${c.profile.firstName} ${c.profile.lastName}`;
  const title = opts.title ? `${opts.title} — ${base}` : `${base} — ${c.profile.title}`;
  const description = opts.description ?? c.profile.description;
  return {
    metadataBase: new URL(c.profile.site),
    title,
    description,
    alternates: {
      canonical: opts.path,
      languages: locale === "fr" ? { fr: opts.path, en: opts.alt, "x-default": opts.path } : { en: opts.path, fr: opts.alt, "x-default": opts.alt },
    },
    openGraph: { title, description, url: opts.path, type: "website", locale: locale === "fr" ? "fr_FR" : "en_US", images: [{ url: "/og-v2.png", width: 1200, height: 630 }] },
    twitter: { card: "summary_large_image", title, description, images: ["/og-v2.png"] },
    icons: { icon: "/icon.svg" },
  };
}

export function personJsonLd(locale: Locale) {
  const p = content[locale].profile;
  return {
    "@context": "https://schema.org", "@type": "Person",
    name: `${p.firstName} ${p.lastName}`, jobTitle: p.title, url: p.site, email: `mailto:${p.email}`,
    address: { "@type": "PostalAddress", addressRegion: "Île-de-France", addressCountry: "FR" },
    sameAs: [p.linkedin, p.github], knowsLanguage: ["fr", "en"],
  };
}
