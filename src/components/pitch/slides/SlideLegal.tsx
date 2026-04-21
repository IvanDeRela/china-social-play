import { motion } from "framer-motion";
import { SlideShell } from "../SlideShell";
import { Eyebrow } from "../Eyebrow";

export const SlideLegal = () => {
  return (
    <SlideShell chapter="06" chapterLabel="Muro Legal">
      <Eyebrow color="warn">Compliance &amp; estructura jurídica</Eyebrow>

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.1 }}
        className="display-xl text-4xl md:text-5xl lg:text-6xl mt-6 mb-4 max-w-4xl"
      >
        Diseñado <span className="text-warn">desde el marco legal</span>
        <br />
        hacia afuera, no al revés.
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.3 }}
        className="max-w-3xl text-base md:text-lg leading-relaxed text-muted-foreground mb-12"
      >
        La ley china considera apuesta ilegal cuando hay{" "}
        <strong className="text-foreground font-medium">dinero de por medio y el resultado depende del azar</strong>.
        Nuestro modelo evita las dos cosas a propósito.
      </motion.p>

      {/* Three pillars */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-8">
        {[
          {
            num: "I",
            icon: "🚫",
            title: "Sin dinero como premio",
            body: "El usuario nunca recibe dinero. Los premios son cupones de marcas como Meituan o JD.com, canjeables por productos o descuentos.",
          },
          {
            num: "II",
            icon: "📊",
            title: "Vendemos datos, no apuestas",
            body: "Ingresamos por una suscripción con estadísticas avanzadas e IA. Es un modelo tipo Bloomberg aplicado al deporte.",
          },
          {
            num: "III",
            icon: "💬",
            title: "Bajo el paraguas de WeChat",
            body: "Al vivir dentro de WeChat (de Tencent), heredamos su control de identidad, sus límites para menores y sus auditorías oficiales.",
          },
        ].map((p, i) => (
          <motion.div
            key={p.num}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 + i * 0.15 }}
            className="relative overflow-hidden rounded-2xl border border-primary/25 bg-gradient-to-br from-primary/8 via-card/60 to-card/40 p-7 backdrop-blur-sm"
          >
            <div className="absolute -right-6 -top-6 font-serif text-8xl text-primary/10 leading-none select-none">
              {p.num}
            </div>
            <div className="relative">
              <div className="text-3xl mb-3">{p.icon}</div>
              <div className="eyebrow text-primary mb-3">Pilar {p.num}</div>
              <h3 className="font-serif text-2xl text-foreground mb-3">{p.title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">{p.body}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Verdict callout */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.9 }}
        className="relative overflow-hidden rounded-2xl border border-warn/25 bg-warn/5 p-6"
      >
        <div className="flex items-start gap-4">
          <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-warn/15 text-xl">
            ⚖️
          </div>
          <div>
            <div className="eyebrow text-warn mb-1">Dictamen jurídico</div>
            <p className="text-sm md:text-base leading-relaxed text-foreground/90">
              En una frase:{" "}
              <strong className="text-warn">
                "Se parece más a un Trivial de fútbol con vales de descuento que a un casino"
              </strong>
              . Y nadie prohíbe un Trivial.
            </p>
          </div>
        </div>
      </motion.div>
    </SlideShell>
  );
};
