import { content, paths, type Locale } from "@/lib/content";
import { Nav } from "./Nav";
import { Hero } from "./Hero";
import { About } from "./About";
import { Skills } from "./Skills";
import { Projects } from "./Projects";
import { Timeline } from "./Timeline";
import { Testimonials } from "./Testimonials";
import { Contact } from "./Contact";
import { Footer } from "./Footer";

export function HomePage({ locale }: { locale: Locale }) {
  const c = content[locale];
  const other = locale === "fr" ? "en" : "fr";
  return (
    <>
      <a href="#a-propos" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-ink focus:px-4 focus:py-2 focus:text-bg">{c.ui.skip}</a>
      <Nav c={c} home="" alt={paths.home(other)} />
      <main>
        <Hero c={c} />
        <About c={c} />
        <Skills c={c} />
        <Projects c={c} />
        <Timeline c={c} />
        <Testimonials c={c} />
        <Contact c={c} />
      </main>
      <Footer c={c} home="" />
    </>
  );
}
