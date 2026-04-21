import { motion } from "framer-motion";
import { SlideShell } from "../SlideShell";
import { Eyebrow } from "../Eyebrow";

export const SlideProblem = () => {
  return (
    <SlideShell chapter="03" chapterLabel="Problema">
      <Eyebrow color="primary">Diagnóstico de mercado</Eyebrow>

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.1 }}
        className="display-xl text-4xl md:text-5xl lg:text-6xl mt-6 mb-6 max-w-4xl"
      >
        Cientos de millones de fans,
        <br />
        <span className="text-primary">cero canales legales</span> para competir.
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.3 }}
        className="max-w-3xl text-base md:text-lg leading-relaxed text-muted-foreground mb-12"
      >
        Cientos de millones de chinos siguen LaLiga, la Champions o la NBA con la misma pasión que
        en Europa. Pero <strong className="text-foreground font-medium">no tienen ninguna app legal</strong>{" "}
        donde competir entre ellos como aficionados.{" "}
        <strong className="text-foreground font-medium">El espacio está vacío.</strong>
      </motion.p>

      {/* Big stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          { val: "700M+", label: "Aficionados al fútbol", sub: "Demanda enorme", tone: "primary" },
          { val: "500M+", label: "Jugadores de eSports", sub: "Crece +15 % al año", tone: "primary" },
          { val: "100%", label: "Apuestas prohibidas", sub: "Sin alternativa legal", tone: "danger" },
          { val: "0", label: "Apps legales como ésta", sub: "No tenemos competencia", tone: "gold" },
        ].map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 + i * 0.1 }}
            className="group relative overflow-hidden rounded-2xl border border-border bg-card/40 p-6 backdrop-blur-sm transition-all hover:border-primary/40 hover:-translate-y-1"
          >
            <div
              className="absolute inset-x-0 top-0 h-px opacity-50"
              style={{ background: `linear-gradient(90deg, transparent, hsl(var(--${s.tone})), transparent)` }}
            />
            <div
              className="font-serif text-5xl md:text-6xl mb-3 leading-none"
              style={{ color: `hsl(var(--${s.tone}))` }}
            >
              {s.val}
            </div>
            <div className="text-foreground font-medium text-sm mb-1">{s.label}</div>
            <div className="text-xs text-muted-foreground/70">{s.sub}</div>
          </motion.div>
        ))}
      </div>

      {/* Opportunity callout */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 1 }}
        className="mt-10 relative overflow-hidden rounded-2xl border border-primary/30 bg-gradient-to-r from-primary/10 via-primary/5 to-transparent p-6 md:p-8"
      >
        <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-primary/10 blur-3xl" />
        <div className="relative flex items-start gap-5">
          <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-primary/20 text-2xl">
            ⚡
          </div>
          <div>
            <div className="eyebrow text-primary mb-2">La oportunidad</div>
            <p className="text-base md:text-lg leading-relaxed text-foreground/90">
              Hay una <strong className="text-primary">demanda enorme y ningún competidor legal</strong>.
              <strong className="text-foreground"> Quien llegue primero, marca las reglas del juego.</strong>
            </p>
          </div>
        </div>
      </motion.div>
    </SlideShell>
  );
};
