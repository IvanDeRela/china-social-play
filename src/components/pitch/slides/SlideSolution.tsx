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
        El usuario crea su <strong className="text-foreground font-medium">equipo virtual</strong> de
        fútbol o eSports y compite con amigos dentro de WeChat. Juega gratis y
        <strong className="text-foreground font-medium"> nunca gana ni pierde dinero</strong>.
        Nosotros ingresamos por publicidad, marcas patrocinadoras y una suscripción premium con
        estadísticas avanzadas.
      </motion.p>

      <div className="grid flex-1 grid-cols-1 lg:grid-cols-3 gap-5">
        {[
          {
            icon: "🎮",
            title: "Gratis para el usuario",
            sub: "Sin pagar, sin apostar",
            body: "Jugar no cuesta nada y no se gana dinero. Solo puntos y prestigio entre amigos, como un Trivial deportivo.",
            tone: "primary",
          },
          {
            icon: "📡",
            title: "Dentro de WeChat",
            sub: "1.300 millones de usuarios",
            body: "No hay que descargar nada. La app vive dentro de WeChat, la red social que casi todos los chinos usan a diario.",
            tone: "info",
          },
          {
            icon: "👑",
            title: "Suscripción VIP",
            sub: "Estadísticas avanzadas",
            body: "Quien quiera más datos y predicciones de jugadores con IA paga ¥29 al mes. Vendemos información deportiva, no apuestas.",
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
