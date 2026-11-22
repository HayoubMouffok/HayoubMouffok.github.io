"use client";
import { useEffect, useRef, useState } from "react";
import { animate, useInView } from "framer-motion";

// Anime la partie numérique d'une valeur (« 30 ms », « 80 », « 100 % ») à son apparition.
export function CountUp({ value }: { value: string }) {
  const m = value.match(/^(\d+)(.*)$/);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [n, setN] = useState(m ? 0 : null);
  useEffect(() => {
    if (!m || !inView) return;
    const target = Number(m[1]);
    if (matchMedia("(prefers-reduced-motion: reduce)").matches) { setN(target); return; }
    const ctrl = animate(0, target, { duration: 1.4, ease: [0.22, 1, 0.36, 1], onUpdate: v => setN(Math.round(v)) });
    return () => ctrl.stop();
  }, [inView]); // eslint-disable-line react-hooks/exhaustive-deps
  if (!m) return <span>{value}</span>;
  return <span ref={ref}><span className="sr-only">{value}</span><span aria-hidden="true">{n}{m[2]}</span></span>;
}
