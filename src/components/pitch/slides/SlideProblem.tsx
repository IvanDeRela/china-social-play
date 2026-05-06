import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Smartphone, X, Check, Users, Trophy, Activity, Crown } from "lucide-react";
import { SlideShell } from "../SlideShell";
import { Eyebrow } from "../Eyebrow";
import mockupTeam from "@/assets/mockup-team.jpg";
import mockupLeague from "@/assets/mockup-league.jpg";
import mockupStats from "@/assets/mockup-stats.jpg";
import mockupPremium from "@/assets/mockup-premium.jpg";

const modules = [
  { n: "01", t: "Crea equipo",  Icon: Users,    img: mockupTeam,    desc: "Plantilla estilo La Liga: arrastra jugadores y elige formación 4-3-3." },
  { n: "02", t: "Liga privada", Icon: Trophy,   img: mockupLeague,  desc: "Invita amigos por WeChat, ranking semanal y premios virtuales." },
  { n: "03", t: "Live stats",   Icon: Activity, img: mockupStats,   desc: "Datos en directo del partido: xG, asistencias y goles al instante." },
  { n: "04", t: "Premium VIP",  Icon: Crown,    img: mockupPremium, desc: "AI predicciones, sin ads, insignia VIP y soporte 24/7." },
];

export const SlideProblem = () => {
  const [activeMod, setActiveMod] = useState(0);
  const active = modules[activeMod];
  const them = [
    "Apuestas con dinero real",
    "NFTs caros · pay-to-win",
    "Producto occidental",
    "Sin integración WeChat",
  ];
  const us = [
    "100 % skill · legal PRC",
    "Freemium accesible",
    "Nativo chino · 微信",
    "Mini-Program WeChat",
  ];

  return (
    <SlideShell chapter="03" chapterLabel="Producto" watermark="赢">
      <div className="flex items-center gap-3 mb-2">
        <Smartphone className="h-6 w-6 text-primary" />
        <Eyebrow color="primary">El producto</Eyebrow>
      </div>

      <motion.h2
        initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
        className="display-xl text-4xl md:text-5xl lg:text-6xl mt-4 mb-8 max-w-4xl"
      >
        Fantasy fútbol <span className="font-serif italic text-primary">dentro de WeChat</span>.
      </motion.h2>

      {/* Split screen ANTES vs DESPUÉS */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-0 rounded-3xl overflow-hidden border border-border shadow-elevated mb-6">
        {/* ANTES */}
        <motion.div
          initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7, delay: 0.2 }}
          className="bg-muted/40 p-7 relative"
        >
          <div className="absolute top-4 right-4 grid h-10 w-10 place-items-center rounded-full bg-danger/15 text-danger">
            <X className="h-5 w-5" />
          </div>
          <div className="font-mono text-[11px] uppercase tracking-[0.3em] text-muted-foreground mb-2">Competidores</div>
          <div className="font-serif text-3xl text-muted-foreground/70 line-through mb-5">DraftKings · Sorare · Comunio</div>
          <ul className="space-y-2.5">
            {them.map((t) => (
              <li key={t} className="flex items-start gap-3 text-base text-muted-foreground line-through">
                <X className="h-4 w-4 text-danger shrink-0 mt-1 no-underline" />
                <span>{t}</span>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* DESPUÉS */}
        <motion.div
          initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7, delay: 0.35 }}
          className="bg-gradient-to-br from-primary/10 to-copper/5 p-7 relative border-l border-border"
        >
          <div className="absolute top-4 right-4 grid h-10 w-10 place-items-center rounded-full bg-success/15 text-success">
            <Check className="h-5 w-5" />
          </div>
          <div className="font-mono text-[11px] uppercase tracking-[0.3em] text-primary mb-2">FantasyChina</div>
          <div className="font-serif italic text-3xl text-primary mb-5">Fantasy nativo · WeChat</div>
          <ul className="space-y-2.5">
            {us.map((t) => (
              <li key={t} className="flex items-start gap-3 text-base text-foreground font-medium">
                <Check className="h-4 w-4 text-success shrink-0 mt-1" />
                <span>{t}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>

      {/* 4 módulos interactivos con preview */}
      <div className="rounded-2xl border border-border bg-card shadow-card overflow-hidden mb-5">
        <div className="grid grid-cols-4 border-b border-border bg-muted/20">
          {modules.map((m, i) => {
            const isActive = i === activeMod;
            return (
              <button
                key={m.n}
                onClick={() => setActiveMod(i)}
                className={`flex flex-col items-center gap-1 px-3 py-3 text-center transition-all border-b-2 ${
                  isActive ? "border-primary bg-primary/5" : "border-transparent hover:bg-muted/40"
                }`}
              >
                <m.Icon className={`h-4 w-4 ${isActive ? "text-primary" : "text-muted-foreground"}`} />
                <div className={`font-mono text-[9px] tracking-[0.2em] ${isActive ? "text-primary" : "text-muted-foreground"}`}>{m.n}</div>
                <div className={`font-serif text-sm leading-tight ${isActive ? "text-foreground font-semibold" : "text-muted-foreground"}`}>{m.t}</div>
              </button>
            );
          })}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 p-4">
          <AnimatePresence mode="wait">
            <motion.div
              key={active.n}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.35 }}
              className="md:col-span-2 flex justify-center"
            >
              <div className="relative">
                <div className="absolute inset-0 rounded-[28px] bg-primary/15 blur-2xl opacity-60" />
                <img
                  src={active.img}
                  alt={`Mockup ${active.t}`}
                  loading="lazy"
                  width={512}
                  height={1024}
                  className="relative h-[280px] w-auto rounded-[24px] border border-border shadow-elevated object-cover"
                />
              </div>
            </motion.div>
            <motion.div
              key={`text-${active.n}`}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.35, delay: 0.05 }}
              className="md:col-span-3 flex flex-col justify-center"
            >
              <div className="eyebrow text-primary mb-2">Módulo {active.n}</div>
              <h3 className="font-serif text-2xl text-foreground mb-2">{active.t}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">{active.desc}</p>
              <div className="flex gap-2 flex-wrap">
                {modules.map((m, i) => (
                  <button
                    key={m.n}
                    onClick={() => setActiveMod(i)}
                    aria-label={`Ver ${m.t}`}
                    className={`h-2 rounded-full transition-all ${
                      i === activeMod ? "w-8 bg-primary" : "w-2 bg-border hover:bg-muted-foreground/40"
                    }`}
                  />
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6, delay: 0.9 }}
        className="inline-flex self-start rounded-full border-2 border-danger bg-danger/5 px-5 py-2"
      >
        <p className="text-base font-bold text-danger tracking-wide">
          NO apuestas · 100 % habilidad
        </p>
      </motion.div>
    </SlideShell>
  );
};
