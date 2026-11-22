"use client";
import { useEffect, useRef, useState } from "react";
import type { Content } from "@/lib/content";

// Élément visuel du hero : un réseau vivant. Quatre domaines reliés à un cœur,
// des nœuds secondaires, des paquets qui circulent, et le curseur qui devient un nœud du réseau.
type Node = { x: number; y: number; vx: number; vy: number; r: number; hub?: number };

const HUBS = [
  { id: "reseau", ax: 0.18, ay: 0.3 },
  { id: "devops", ax: 0.82, ay: 0.24 },
  { id: "systemes", ax: 0.22, ay: 0.8 },
  { id: "securite", ax: 0.8, ay: 0.76 },
];
const LABELS = { fr: ["réseau", "cloud", "systèmes", "sécurité"], en: ["network", "cloud", "systems", "security"] };

export function NetworkField({ c }: { c: Content }) {
  const [hover, setHover] = useState(-1);
  const hoverRef = useRef(-1);
  hoverRef.current = hover;
  const wrap = useRef<HTMLDivElement>(null);
  const canvas = useRef<HTMLCanvasElement>(null);
  const labels = useRef<(HTMLSpanElement | null)[]>([]);

  useEffect(() => {
    const el = canvas.current!, box = wrap.current!;
    const ctx = el.getContext("2d")!;
    const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
    let w = 0, h = 0, raf = 0, nodes: Node[] = [], packets: { a: number; b: number; t: number }[] = [];
    const pointer = { x: -999, y: -999, on: false };
    let seed = 11;
    const rnd = () => ((seed = (seed * 16807) % 2147483647) - 1) / 2147483646;

    function build() {
      const r = box.getBoundingClientRect();
      w = r.width; h = r.height;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      el.width = w * dpr; el.height = h * dpr; ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      seed = 11;
      nodes = [{ x: w / 2, y: h / 2, vx: 0, vy: 0, r: 7, hub: -1 }];
      HUBS.forEach((hb, i) => nodes.push({ x: hb.ax * w, y: hb.ay * h, vx: 0, vy: 0, r: 5.5, hub: i }));
      const n = Math.round((w * h) / 9000);
      for (let i = 0; i < n; i++) nodes.push({ x: rnd() * w, y: rnd() * h, vx: (rnd() - 0.5) * 0.18, vy: (rnd() - 0.5) * 0.18, r: 1.6 + rnd() * 1.2 });
      placeLabels();
    }
    function placeLabels() {
      HUBS.forEach((_, i) => {
        const n = nodes[i + 1], l = labels.current[i];
        if (l) l.style.transform = `translate(${n.x + 12}px, ${n.y - 9}px)`;
      });
    }
    const css = () => {
      const s = getComputedStyle(document.documentElement);
      return { a: s.getPropertyValue("--accent").trim(), b: s.getPropertyValue("--accent-2").trim(), m: s.getPropertyValue("--muted").trim(), t: s.getPropertyValue("--text").trim() };
    };
    const edgesOf = (i: number) => {
      const a = nodes[i];
      return nodes.map((b, j) => [j, Math.hypot(a.x - b.x, a.y - b.y)] as const).filter(([j, d]) => j !== i && d < 130);
    };

    function frame() {
      const c = css();
      ctx.clearRect(0, 0, w, h);
      // dérive lente des nœuds secondaires
      for (const n of nodes) {
        if (n.hub !== undefined) continue;
        n.x += n.vx; n.y += n.vy;
        if (n.x < 0 || n.x > w) n.vx *= -1;
        if (n.y < 0 || n.y > h) n.vy *= -1;
        if (pointer.on) {
          const dx = pointer.x - n.x, dy = pointer.y - n.y, d = Math.hypot(dx, dy);
          if (d < 160 && d > 1) { n.x += (dx / d) * 0.25; n.y += (dy / d) * 0.25; }
        }
      }
      // liens de proximité
      ctx.lineWidth = 1;
      for (let i = 0; i < nodes.length; i++) for (let j = i + 1; j < nodes.length; j++) {
        const a = nodes[i], b = nodes[j], d = Math.hypot(a.x - b.x, a.y - b.y);
        if (d < 120) { ctx.globalAlpha = (1 - d / 120) * 0.35; ctx.strokeStyle = c.m; ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(b.x, b.y); ctx.stroke(); }
      }
      // dorsale : le cœur relié aux quatre domaines
      ctx.globalAlpha = 0.6; ctx.strokeStyle = c.a; ctx.setLineDash([4, 6]);
      for (let i = 1; i <= 4; i++) { ctx.beginPath(); ctx.moveTo(nodes[0].x, nodes[0].y); ctx.lineTo(nodes[i].x, nodes[i].y); ctx.stroke(); }
      ctx.setLineDash([]);
      // le curseur, nœud temporaire du réseau
      if (pointer.on) {
        for (const n of nodes) {
          const d = Math.hypot(pointer.x - n.x, pointer.y - n.y);
          if (d < 150) { ctx.globalAlpha = (1 - d / 150) * 0.9; ctx.strokeStyle = c.b; ctx.beginPath(); ctx.moveTo(pointer.x, pointer.y); ctx.lineTo(n.x, n.y); ctx.stroke(); }
        }
        ctx.globalAlpha = 1; ctx.fillStyle = c.b; ctx.beginPath(); ctx.arc(pointer.x, pointer.y, 3, 0, 7); ctx.fill();
      }
      // paquets
      for (const p of packets) {
        const a = nodes[p.a], b = nodes[p.b];
        const x = a.x + (b.x - a.x) * p.t, y = a.y + (b.y - a.y) * p.t;
        ctx.globalAlpha = 1; ctx.fillStyle = c.a; ctx.shadowColor = c.a; ctx.shadowBlur = 12;
        ctx.beginPath(); ctx.arc(x, y, 2.6, 0, 7); ctx.fill(); ctx.shadowBlur = 0;
        p.t += 0.012;
      }
      packets = packets.filter(p => p.t < 1);
      // nœuds
      nodes.forEach((n, i) => {
        ctx.globalAlpha = n.hub !== undefined ? 1 : 0.55;
        ctx.fillStyle = i === 0 ? c.a : n.hub !== undefined ? c.t : c.m;
        ctx.beginPath(); ctx.arc(n.x, n.y, n.r, 0, 7); ctx.fill();
        if (n.hub !== undefined) {
          const on = n.hub === hoverRef.current;
          ctx.globalAlpha = on ? 0.9 : 0.25; ctx.strokeStyle = i === 0 || on ? c.a : c.t; ctx.lineWidth = on ? 2 : 1;
          ctx.beginPath(); ctx.arc(n.x, n.y, n.r + (on ? 10 : 6), 0, 7); ctx.stroke(); ctx.lineWidth = 1;
        }
      });
      ctx.globalAlpha = 1;
      if (!reduce) raf = requestAnimationFrame(frame);
    }

    let spawn = 0;
    const tick = window.setInterval(() => {
      if (document.hidden || reduce) return;
      // un paquet part du cœur vers un domaine, ou d'un domaine vers un voisin
      if (hoverRef.current >= 0) { packets.push({ a: 0, b: hoverRef.current + 1, t: 0 }); return; }
      const from = spawn++ % 2 === 0 ? 0 : 1 + Math.floor(Math.random() * 4);
      const options = from === 0 ? [1, 2, 3, 4] : edgesOf(from).map(([j]) => j).concat(0);
      packets.push({ a: from, b: options[Math.floor(Math.random() * options.length)], t: 0 });
    }, 500);

    const move = (e: PointerEvent) => { const r = box.getBoundingClientRect(); pointer.x = e.clientX - r.left; pointer.y = e.clientY - r.top; pointer.on = true; };
    const leave = () => { pointer.on = false; };
    box.addEventListener("pointermove", move);
    box.addEventListener("pointerleave", leave);
    const ro = new ResizeObserver(() => { build(); if (reduce) frame(); });
    ro.observe(box);
    build();
    const start = window.setTimeout(frame, 400);
    return () => { clearTimeout(start); cancelAnimationFrame(raf); clearInterval(tick); ro.disconnect(); box.removeEventListener("pointermove", move); box.removeEventListener("pointerleave", leave); };
  }, []);

  const labels4 = LABELS[c.locale];
  return (
    <div ref={wrap} className="relative h-full w-full touch-none select-none">
      <canvas ref={canvas} className="absolute inset-0 h-full w-full" aria-hidden="true" />
      {HUBS.map((hb, i) => {
        const group = c.skills.find(g => g.id === hb.id)!;
        const right = hb.ax > 0.5, below = hb.ay < 0.5;
        return (
          <div key={hb.id} ref={el => { labels.current[i] = el as unknown as HTMLSpanElement; }} className="absolute left-0 top-0">
            <a href={`#skill-${hb.id}`} onMouseEnter={() => setHover(i)} onMouseLeave={() => setHover(-1)} onFocus={() => setHover(i)} onBlur={() => setHover(-1)}
              aria-label={`${labels4[i]} : ${group.tools.slice(0, 4).join(", ")}`}
              className={`block rounded-full border px-2.5 py-0.5 font-mono text-[11px] backdrop-blur transition-colors ${hover === i ? "border-accent bg-accent text-bg" : "border-line bg-surface/80 text-ink"}`}>
              {labels4[i]}
            </a>
            <div aria-hidden="true" className={`pointer-events-none absolute z-10 w-52 ${below ? "top-7" : "bottom-7"} rounded-xl border border-line bg-surface/95 p-3 shadow-xl backdrop-blur transition-all duration-200 ${right ? "right-0" : "left-0"} ${hover === i ? "translate-y-0 opacity-100" : "-translate-y-1 opacity-0"}`}>
              <p className="mb-2 text-sm font-medium text-ink">{group.name}</p>
              <p className="text-xs leading-relaxed text-muted">{group.tools.slice(0, 6).join(" · ")}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
