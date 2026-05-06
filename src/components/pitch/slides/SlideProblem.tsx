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

      {/* 4 módulos compactos */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-5">
        {[
          { n: "01", t: "Crea equipo" },
          { n: "02", t: "Liga privada" },
          { n: "03", t: "Live stats" },
          { n: "04", t: "Premium VIP" },
        ].map((m, i) => (
          <motion.div
            key={m.n}
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.5 + i * 0.08 }}
            className="rounded-xl border border-border bg-card px-4 py-3 shadow-card"
          >
            <div className="font-mono text-[10px] tracking-[0.25em] text-primary">{m.n}</div>
            <div className="font-serif text-base text-foreground mt-1">{m.t}</div>
          </motion.div>
        ))}
      </div>

      <motion.div
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
