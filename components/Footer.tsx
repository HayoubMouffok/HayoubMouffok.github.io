import { Mail, Terminal } from "lucide-react";
import type { Content } from "@/lib/content";
import { GithubIcon, LinkedinIcon } from "./BrandIcons";

export function Footer({ c, home }: { c: Content; home: string }) {
  const profile = c.profile;
  const nav = c.ui.nav.map(n => ({ href: `${home}#${n.id}`, label: n.label }));
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 px-5 py-12 sm:px-8 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-lg font-semibold tracking-tight">{profile.firstName} {profile.lastName}</p>
          <p className="mt-1 text-sm text-muted">© {new Date().getFullYear()} · {c.ui.footer}</p>
        </div>
        <nav aria-label="Footer">
          <ul className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted">
            {nav.map(n => <li key={n.href}><a href={n.href} className="transition-colors hover:text-ink">{n.label}</a></li>)}
            <li><a href="/terminal/" className="inline-flex items-center gap-1.5 transition-colors hover:text-ink"><Terminal size={14} /> {c.ui.terminal}</a></li>
          </ul>
        </nav>
        <div className="flex gap-2">
          {[{ href: profile.linkedin, label: "LinkedIn", icon: <LinkedinIcon /> }, { href: profile.github, label: "GitHub", icon: <GithubIcon /> }, { href: `mailto:${profile.email}`, label: "E-mail", icon: <Mail size={16} /> }].map(s => (
            <a key={s.label} href={s.href} aria-label={s.label} target={s.href.startsWith("http") ? "_blank" : undefined} rel="noopener"
              className="grid h-10 w-10 place-items-center rounded-full border border-line text-muted transition-colors hover:border-ink hover:text-ink">{s.icon}</a>
          ))}
        </div>
      </div>
    </footer>
  );
}
