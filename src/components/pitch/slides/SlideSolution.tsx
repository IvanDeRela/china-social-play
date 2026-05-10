import { motion } from "framer-motion";
import { User, Quote } from "lucide-react";
import { SlideShell } from "../SlideShell";
import { Eyebrow } from "../Eyebrow";
import weiLiu from "@/assets/wei-liu.jpg";

/** Cliente — persona-card con foto + 3 KPIs gigantes. */
export const SlideSolution = () => {
  const kpis = [
    { v: "$30",  l: "gasto gaming/mes",  tone: "primary" },
    { v: "78%",  l: "sigue liga europea", tone: "copper" },
    { v: "94%",  l: "WeChat diario",     tone: "success" },
  ];
  const traits = [
    { k: "$35K", v: "Salario al año" },
    { k: "Madrid",  v: "Aficionado del Real Madrid" },
    { k: "Gamer",   v: "Juega a Honor of Kings" },
    { k: "8",    v: "Amigos en WeChat" },
  ];
  const toneText: Record<string, string> = {
    primary: "text-primary", copper: "text-copper", success: "text-success",
  };

  return (
    <SlideShell chapter="05" chapterLabel="Cliente" watermark="客">
      <div className="flex items-center gap-3 mb-2">
        <User className="h-6 w-6 text-primary" />
        <Eyebrow color="primary">Público objetivo</Eyebrow>
      </div>

      <motion.h2
        initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
        className="display-xl text-5xl md:text-6xl lg:text-7xl mt-6 mb-10 max-w-4xl"
      >
        Conoce a <span className="font-serif italic text-primary">Wei Liu</span>.
      </motion.h2>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        {/* Persona hero */}
        <motion.div
          initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7, delay: 0.15 }}
          className="lg:col-span-4 rounded-3xl border border-border bg-card overflow-hidden shadow-elevated flex flex-col"
        >
          <div className="relative aspect-square overflow-hidden">
            <img src={weiLiu} alt="Wei Liu" loading="lazy" width={512} height={512} className="w-full h-full object-cover object-top" />
            <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
            <div className="absolute bottom-3 left-4 right-4">
              <div className="font-serif text-2xl text-foreground drop-shadow">Wei Liu · 刘伟</div>
              <div className="text-xs text-muted-foreground">28 · Shanghái · Ingeniero</div>
            </div>
          </div>
          <div className="p-4 grid grid-cols-2 gap-2">
            {traits.map((t) => (
              <div key={t.k} className="rounded-lg bg-muted/40 px-2.5 py-2 flex items-baseline gap-2">
                <span className="font-mono font-bold text-sm text-primary">{t.k}</span>
                <span className="text-[11px] text-muted-foreground">{t.v}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Right: segment + 3 huge KPIs */}
        <motion.div
          initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7, delay: 0.3 }}
          className="lg:col-span-8 flex flex-col gap-5"
        >
          <div className="rounded-2xl border border-primary/30 bg-primary/5 p-7">
            <div className="eyebrow text-primary mb-2">Segmento Tier 1-2</div>
            <div className="font-mono font-bold text-8xl md:text-9xl text-primary leading-none">25-40<span className="text-5xl ml-2 opacity-70">M</span></div>
            <div className="mt-3 text-xs font-mono uppercase tracking-wider text-muted-foreground">CNNIC · iResearch 2024</div>
          </div>

          <div className="grid grid-cols-3 gap-3">
            {kpis.map((k) => (
              <div key={k.l} className="rounded-2xl border border-border bg-card p-5 shadow-card">
                <div className={`font-mono font-bold text-6xl md:text-7xl ${toneText[k.tone]}`}>{k.v}</div>
                <div className="mt-2 text-xs uppercase tracking-wider text-muted-foreground leading-snug">{k.l}</div>
              </div>
            ))}
          </div>

          <div className="rounded-xl border-l-4 border-copper bg-copper/5 px-5 py-4 flex items-center gap-4">
            <span className="font-mono font-bold text-6xl md:text-7xl text-copper">k=2,4×</span>
            <span className="text-sm text-foreground/85 uppercase tracking-wider">viralidad WeChat</span>
          </div>
        </motion.div>
      </div>

      {/* Quote testimonial */}
      <motion.blockquote
        initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.6 }}
        className="mt-8 relative rounded-2xl border-l-4 border-primary bg-primary/5 px-6 py-5 max-w-4xl self-center"
      >
        <Quote className="absolute -top-3 -left-3 h-8 w-8 text-primary bg-background rounded-full p-1.5 border border-primary/30" />
        <p className="font-serif italic text-xl md:text-2xl text-foreground leading-relaxed">
          "Llevo 10 años siguiendo al Madrid. <span className="text-primary not-italic font-semibold">No tengo dónde jugar fantasy</span> en China."
        </p>
        <footer className="mt-2 text-xs font-mono uppercase tracking-wider text-muted-foreground">
          — Wei Liu · entrevista cualitativa · Shanghái 2024
        </footer>
      </motion.blockquote>
    </SlideShell>
  );
};
