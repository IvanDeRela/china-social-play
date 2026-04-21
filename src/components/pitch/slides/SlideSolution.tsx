import { motion } from "framer-motion";
import { SlideShell } from "../SlideShell";
import { Eyebrow } from "../Eyebrow";

export const SlideSolution = () => {
  return (
    <SlideShell chapter="04" chapterLabel="Solución">
      <Eyebrow color="primary">Nuestra propuesta</Eyebrow>

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.1 }}
        className="display-xl text-4xl md:text-5xl lg:text-6xl mt-6 mb-6 max-w-4xl"
      >
        No es un casino. Es una
        <br />
        <span className="text-primary">red social competitiva</span>{" "}
        <span className="text-muted-foreground/40">de deporte.</span>
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.3 }}
        className="max-w-3xl text-base md:text-lg leading-relaxed text-muted-foreground mb-12"
      >
        Una <strong className="text-foreground font-medium">Liga Fantasy gratuita</strong> dentro de
        WeChat. El usuario gestiona su equipo de fútbol o eSports, compite con amigos y gana puntos.
        <strong className="text-foreground font-medium"> Nunca dinero.</strong> Nosotros monetizamos
        mediante publicidad, marcas patrocinadoras y suscripciones VIP de datos avanzados.
      </motion.p>

      <div className="grid flex-1 grid-cols-1 lg:grid-cols-3 gap-5">
        {[
          {
            icon: "🎮",
            title: "Juego gratuito",
            sub: "Free-to-play",
            body: "El usuario nunca paga para jugar ni recibe dinero como premio. Toda la mecánica core es gratuita y social, integrada en sus comunidades de WeChat existentes.",
            tone: "primary",
          },
          {
            icon: "📡",
            title: "Mini-Programa WeChat",
            sub: "1.300M usuarios potenciales",
            body: "No descargamos otra app. Vivimos dentro de WeChat heredando su KYC, sus pagos y su distribución viral. Cero fricción de instalación.",
            tone: "info",
          },
          {
            icon: "👑",
            title: "VIP Data SaaS",
            sub: "Modelo Bloomberg para deporte",
            body: "Suscripción premium con estadísticas avanzadas e IA predictiva de jugadores. Vendemos conocimiento, no apuestas. ¥29/mes.",
            tone: "gold",
          },
        ].map((p, i) => (
          <motion.div
            key={p.title}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 + i * 0.15 }}
            className="group relative overflow-hidden rounded-2xl border border-border bg-card/40 p-7 backdrop-blur-sm transition-all hover:border-primary/40 hover:-translate-y-1"
          >
            <div
              className="absolute inset-x-0 top-0 h-px"
              style={{ background: `linear-gradient(90deg, transparent, hsl(var(--${p.tone})), transparent)` }}
            />
            <div
              className="grid h-14 w-14 place-items-center rounded-2xl text-3xl mb-5"
              style={{
                background: `hsl(var(--${p.tone}) / 0.12)`,
                border: `1px solid hsl(var(--${p.tone}) / 0.25)`,
              }}
            >
              {p.icon}
            </div>
            <div className="eyebrow mb-2" style={{ color: `hsl(var(--${p.tone}))` }}>
              {p.sub}
            </div>
            <h3 className="font-serif text-2xl text-foreground mb-3">{p.title}</h3>
            <p className="text-sm leading-relaxed text-muted-foreground">{p.body}</p>
          </motion.div>
        ))}
      </div>

      {/* Footer note */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7, delay: 1.1 }}
        className="mt-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-center text-xs text-muted-foreground"
      >
        <span className="font-mono uppercase tracking-[0.2em] text-primary/80">Resumen</span>
        <span>Plataforma social</span>
        <span className="text-border">·</span>
        <span>SaaS de datos</span>
        <span className="text-border">·</span>
        <span>Sin cash-out</span>
        <span className="text-border">·</span>
        <span>Distribución nativa WeChat</span>
      </motion.div>
    </SlideShell>
  );
};
