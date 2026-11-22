"use client";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, Moon, Sun, X } from "lucide-react";
import { useTheme } from "next-themes";
import type { Content } from "@/lib/content";

function ThemeToggle({ c }: { c: Content }) {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  const dark = !mounted || resolvedTheme === "dark";
  return (
    <button
      type="button"
      onClick={() => setTheme(dark ? "light" : "dark")}
      aria-label={dark ? c.ui.themeToLight : c.ui.themeToDark}
      className="grid h-10 w-10 place-items-center rounded-full border border-line text-muted transition-colors hover:border-accent hover:text-accent"
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.span key={dark ? "moon" : "sun"} initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.25 }}>
          {dark ? <Moon size={17} /> : <Sun size={17} />}
        </motion.span>
      </AnimatePresence>
    </button>
  );
}

export function Nav({ c, home, alt }: { c: Content; home: string; alt: string }) {
  const nav = c.ui.nav.map(n => ({ href: `${home}#${n.id}`, id: n.id, label: n.label }));
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    const io = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) setActive("#" + e.target.id); }),
      { rootMargin: "-45% 0px -50% 0px" },
    );
    nav.forEach(n => { const el = document.getElementById(n.id); if (el) io.observe(el); });
    return () => { window.removeEventListener("scroll", onScroll); io.disconnect(); };
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${scrolled ? "border-b border-line bg-bg/75 backdrop-blur-xl" : "border-b border-transparent"}`}>
      <nav className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-5 sm:px-8" aria-label="Navigation">
        <a href={`${home || ""}#top`} className="group flex items-center gap-3" aria-label={c.ui.backTop}>
          <img src="/photo.jpg" alt="" width={36} height={36} className="h-9 w-9 rounded-full object-cover object-top ring-2 ring-line transition-transform group-hover:scale-105" />
          <span className="hidden whitespace-nowrap text-[15px] font-semibold tracking-tight sm:block">{c.profile.firstName} {c.profile.lastName}</span>
        </a>

        <ul className="hidden items-center gap-1 lg:flex">
          {nav.map(n => (
            <li key={n.href}>
              <a href={n.href} className={`relative rounded-full px-4 py-2 text-[15px] transition-colors ${active === "#" + n.id ? "text-ink" : "text-muted hover:text-ink"}`}>
                {active === "#" + n.id && <motion.span layoutId="nav-pill" className="absolute inset-0 -z-10 rounded-full bg-surface ring-1 ring-line" transition={{ type: "spring", stiffness: 380, damping: 32 }} />}
                {n.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <a href={alt} hrefLang={c.locale === "fr" ? "en" : "fr"} aria-label={`${c.locale === "fr" ? "EN" : "FR"} – ${c.ui.langSwitchLabel}`}
            className="grid h-10 min-w-10 place-items-center rounded-full border border-line px-3 font-mono text-xs uppercase text-muted transition-colors hover:border-accent hover:text-accent">
            {c.locale === "fr" ? "EN" : "FR"}
          </a>
          <ThemeToggle c={c} />
          <a href={`${home}#contact`} className="hidden rounded-full bg-ink px-5 py-2.5 text-[15px] font-medium whitespace-nowrap text-bg transition-transform hover:-translate-y-0.5 sm:block">{c.ui.contactCta}</a>
          <button type="button" onClick={() => setOpen(o => !o)} aria-expanded={open} aria-controls="menu-mobile" aria-label={open ? c.ui.closeMenu : c.ui.openMenu}
            className="grid h-10 w-10 place-items-center rounded-full border border-line lg:hidden">
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div id="menu-mobile" initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden border-t border-line bg-bg/95 backdrop-blur-xl lg:hidden">
            <ul className="px-5 py-4">
              {nav.map((n, i) => (
                <motion.li key={n.href} initial={{ opacity: 0, x: -12 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.04 * i }}>
                  <a href={n.href} onClick={() => setOpen(false)} className="block py-3 text-2xl font-medium tracking-tight">{n.label}</a>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
