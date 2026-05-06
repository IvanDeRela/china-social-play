import { motion } from "framer-motion";
import { SlideShell } from "../SlideShell";
import { Eyebrow } from "../Eyebrow";
import { Money } from "../Money";

/** Mejora 3 — un único público objetivo bien definido. */
export const SlideSolution = () => {
  return (
    <SlideShell chapter="04" chapterLabel="Cliente">
      <Eyebrow color="primary">Público objetivo · una sola persona</Eyebrow>

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.1 }}
        className="display-xl text-4xl md:text-5xl lg:text-6xl mt-6 mb-10 max-w-4xl"
      >
        Conoce a <span className="font-serif italic text-primary">Wei Liu</span>.
      </motion.h2>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Persona card */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="lg:col-span-5 rounded-3xl border border-border bg-card p-8 shadow-elevated"
        >
          <div className="flex items-center gap-5 mb-6">
            <div className="grid h-20 w-20 place-items-center rounded-full bg-gradient-to-br from-primary to-primary-glow text-primary-foreground font-serif text-3xl shadow-card">
              WL
            </div>
            <div>
              <div className="font-serif text-2xl text-foreground">Wei Liu · 刘伟</div>
              <div className="text-sm text-muted-foreground">28 años · Shanghái</div>
            </div>
          </div>

          <ul className="space-y-3 text-sm text-foreground/90">
            {[
              ["💼", <>Ingeniero de software · <span className="font-mono text-primary">USD 35.000/año</span></>],
              ["⚽", "Aficionado al Real Madrid desde 2014"],
              ["📺", "Ve 2-3 partidos LaLiga/semana en iQIYI Sports"],
              ["🎮", <>Honor of Kings 1h/día · gasta <span className="font-mono text-copper">USD 30/mes</span> en gemas</>],
              ["💬", "8 amigos en WeChat con los que quiere competir"],
            ].map(([icon, text], i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="text-base mt-0.5">{icon}</span>
                <span className="leading-relaxed">{text}</span>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Segment stats */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="lg:col-span-7 space-y-5"
        >
          <div className="rounded-2xl border border-primary/30 bg-primary/5 p-7">
            <div className="eyebrow text-primary mb-3">Tamaño del segmento</div>
            <Money value="25-40" unit="M" size="2xl" />
            <p className="mt-3 text-sm md:text-base text-foreground/80">
              Personas como Wei Liu en ciudades <strong className="text-foreground">tier 1 y tier 2</strong> de China:
              jóvenes profesionales urbanos, aficionados al fútbol europeo, gamers móviles activos.
            </p>
            <div className="mt-3 text-xs font-mono uppercase tracking-wider text-muted-foreground">
              Fuentes: CNNIC 2024 · iResearch Mobile Gaming Report
            </div>
          </div>

          <div className="grid grid-cols-3 gap-4">
            {[
              { val: "USD 30", label: "Gasto medio mensual en gaming móvil" },
              { val: "78%", label: "Sigue al menos una liga europea" },
              { val: "94%", label: "Usa WeChat varias horas al día" },
            ].map((s) => (
              <div key={s.label} className="rounded-xl border border-border bg-card p-5">
                <div className="font-mono text-2xl text-primary font-semibold">{s.val}</div>
                <div className="mt-2 text-xs leading-relaxed text-muted-foreground">{s.label}</div>
              </div>
            ))}
          </div>

          <div className="rounded-xl border-l-4 border-copper bg-copper/5 px-5 py-4">
            <p className="text-sm md:text-base text-foreground/90">
              <strong className="text-copper">Es nuestro Day-One user.</strong> Si convertimos a Wei,
              él trae a sus 8 amigos. <span className="font-mono text-copper">Coeficiente viral: 2,4×</span>.
            </p>
          </div>
        </motion.div>
      </div>
    </SlideShell>
  );
};
