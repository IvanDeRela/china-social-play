import { motion } from "framer-motion";
import { SlideShell } from "../SlideShell";

export const SlideOpening = () => {
  return (
    <SlideShell className="justify-center">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 left-1/2 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-primary/12 blur-[120px]" />
        <div className="absolute bottom-0 right-0 h-[400px] w-[400px] rounded-full bg-copper/8 blur-[100px]" />
      </div>

      <div className="relative z-10 flex flex-1 flex-col items-center justify-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8 flex items-center gap-3"
        >
          <span className="font-mono text-[11px] uppercase tracking-[0.4em] text-primary/80">
            Seed Round · 2026
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="display-xl text-5xl md:text-7xl lg:text-[110px] mb-6"
        >
          Fantasy<span className="text-primary text-glow-primary">China</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="mx-auto mb-8 h-px w-32 bg-gradient-to-r from-transparent via-primary to-transparent"
        />

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="max-w-2xl text-lg md:text-xl font-light leading-relaxed text-muted-foreground"
        >
          La <span className="text-foreground font-normal">app de juego fantasy</span> para los aficionados chinos al fútbol europeo y eSports.
          <br />Distribuida como Mini-Programa de WeChat.
          <br /><span className="font-serif italic text-foreground">SaaS gamificado · 100 % legal.</span>
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="mt-16 flex flex-wrap items-center justify-center gap-x-10 gap-y-3 text-xs text-muted-foreground"
        >
          <div className="flex items-center gap-2">
            <span className="h-1 w-1 rounded-full bg-primary" />
            <span>Universidad de Murcia</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="h-1 w-1 rounded-full bg-primary" />
            <span>Regiones de Asia · RR.II. 4º</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="h-1 w-1 rounded-full bg-primary" />
            <span>Pitch para inversores</span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.6 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground/60"
        >
          <span className="font-mono text-[10px] uppercase tracking-[0.3em]">Comenzar</span>
          <span className="animate-bounce text-lg">↓</span>
        </motion.div>
      </div>
    </SlideShell>
  );
};
