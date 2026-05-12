import { motion } from "framer-motion";
import { SlideShell } from "../SlideShell";
import { CountUp } from "../CountUp";
import phoneHero from "@/assets/phone-hero.png";

export const SlideOpening = () => {
  return (
    <SlideShell className="justify-center">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 left-1/2 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-primary/12 blur-[120px]" />
        <div className="absolute bottom-0 right-0 h-[400px] w-[400px] rounded-full bg-copper/8 blur-[100px]" />
      </div>

      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center flex-1">
        {/* Left: copy */}
        <div className="lg:col-span-7 flex flex-col">
          <motion.span
            initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}
            className="font-mono text-xs uppercase tracking-[0.4em] text-primary/80 mb-5"
          >
            Ronda inicial · 2026
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.15 }}
            className="display-xl text-6xl md:text-8xl lg:text-[120px] mb-5 leading-[0.95]"
          >
            Fantasy<span className="text-primary text-glow-primary">China</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, scaleX: 0 }} animate={{ opacity: 1, scaleX: 1 }} transition={{ duration: 1, delay: 0.5 }}
            className="mb-6 h-px w-32 bg-gradient-to-r from-transparent via-primary to-transparent"
          />

          <motion.p
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.7 }}
            className="text-2xl md:text-3xl font-light text-foreground mb-10"
          >
            Fantasy fútbol · <span className="text-primary">WeChat</span> · <span className="font-serif italic">100 % legal</span>
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 1 }}
            className="grid grid-cols-2 gap-4 max-w-md"
          >
            {[
              { to: 200, suf: "M", l: "fans" },
              { to: 0,   suf: "",  l: "competidores" },
            ].map((s) => (
              <div key={s.l} className="rounded-xl border border-border bg-card/60 backdrop-blur p-4 shadow-card">
                <CountUp to={s.to} suffix={s.suf} className="font-mono font-bold text-3xl md:text-4xl text-primary" />
                <div className="mt-1 text-xs uppercase tracking-wider text-muted-foreground">{s.l}</div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Right: phone hero */}
        <motion.div
          initial={{ opacity: 0, y: 30, rotate: -3 }} animate={{ opacity: 1, y: 0, rotate: 0 }} transition={{ duration: 1.2, delay: 0.4, ease: "easeOut" }}
          className="lg:col-span-5 flex justify-center"
        >
          <motion.img
            src={phoneHero}
            alt="FantasyChina app mockup en smartphone"
            width={1024}
            height={1536}
            decoding="async"
            {...({ fetchpriority: "high" } as Record<string, string>)}
            className="w-full max-w-[380px] drop-shadow-[0_30px_60px_hsl(var(--primary)/0.3)]"
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 1.4 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground/60"
      >
        <span className="font-mono text-[10px] uppercase tracking-[0.3em]">Comenzar</span>
        <span className="animate-bounce text-lg">↓</span>
      </motion.div>
    </SlideShell>
  );
};
