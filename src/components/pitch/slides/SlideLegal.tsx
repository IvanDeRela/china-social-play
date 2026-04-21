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
        El <strong className="text-foreground font-medium">Artículo 303 del Código Penal de la RPC</strong>{" "}
        define el juego ilegal como "transferencia de valor monetario condicionada al azar". Nuestro
        modelo <strong className="text-foreground font-medium">no cumple ninguno de los tres criterios</strong>.
      </motion.p>

      {/* Three pillars */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-8">
        {[
          {
            num: "I",
            icon: "🚫",
            title: "Cero cash-out",
            body: "Los premios son cupones O2O canjeables con marcas patrocinadoras (Meituan, JD.com). Nunca dinero, nunca transferencia bancaria.",
          },
          {
            num: "II",
            icon: "📊",
            title: "Monetización SaaS",
            body: "Ingresos por suscripción Pro Data Analytics con IA predictiva. Vendemos conocimiento deportivo, no apuestas. Modelo Bloomberg.",
          },
          {
            num: "III",
            icon: "💬",
            title: "Ecosistema WeChat",
            body: "Mini-Programa nativo: heredamos automáticamente el KYC de Tencent, los límites de gasto para menores y las auditorías regulatorias.",
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
              La analogía más clara para el Consejo:{" "}
              <strong className="text-warn">
                "Es más parecido a un Trivial de fútbol con premio en vales de descuento que a un
                casino"
              </strong>
              . Y nadie cierra un Trivial.
            </p>
          </div>
        </div>
      </motion.div>
    </SlideShell>
  );
};
