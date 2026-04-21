import { motion } from "framer-motion";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { PhoneMockup } from "./PhoneMockup";

interface DeepDiveProps {
  innerRef?: React.RefObject<HTMLDivElement>;
}

const sections = [
  { id: "history", label: "Historia", icon: "🏯" },
  { id: "geography", label: "Geografía", icon: "🗺️" },
  { id: "demography", label: "Demografía", icon: "👥" },
  { id: "legal", label: "Marco Legal", icon: "⚖️" },
  { id: "product", label: "Producto", icon: "📱" },
];

export const DeepDive = ({ innerRef }: DeepDiveProps) => {
  const [active, setActive] = useState("history");

  return (
    <div ref={innerRef} className="relative bg-background border-t border-border/50">
      {/* Hero */}
      <div className="relative overflow-hidden border-b border-border/50">
        <div className="absolute inset-0 gradient-hero opacity-50" />
        <div className="absolute inset-0 bg-grid opacity-[0.03]" />
        <div className="relative mx-auto max-w-[1280px] px-6 md:px-16 py-24 md:py-32">
          <div className="font-mono text-[11px] uppercase tracking-[0.4em] text-violet/80 mb-6">
            Anexo · Análisis ampliado
          </div>
          <h2 className="display-xl text-4xl md:text-6xl mb-6 max-w-3xl">
            China, el juego y nuestro negocio:{" "}
            <span className="text-violet">contexto para no-expertos</span>.
          </h2>
          <p className="max-w-2xl text-base md:text-lg text-muted-foreground leading-relaxed">
            Documento complementario al pitch. Pensado para que cualquier miembro del Consejo,
            independientemente de su familiaridad con China, pueda formar criterio sobre la
            viabilidad legal, cultural y de mercado del proyecto.
          </p>
        </div>
      </div>

      {/* Sticky sub-nav */}
      <div className="sticky top-16 z-30 border-b border-border/50 bg-background/85 backdrop-blur-xl">
        <div className="mx-auto max-w-[1280px] px-6 md:px-16">
          <div className="flex gap-1 overflow-x-auto py-3 no-scrollbar">
            {sections.map((s) => (
              <a
                key={s.id}
                href={`#dd-${s.id}`}
                onClick={() => setActive(s.id)}
                className={cn(
                  "flex shrink-0 items-center gap-2 rounded-full px-4 py-2 text-xs font-medium transition-all whitespace-nowrap",
                  active === s.id
                    ? "bg-violet/15 border border-violet/40 text-violet"
                    : "border border-transparent text-muted-foreground hover:text-foreground hover:bg-muted/40",
                )}
              >
                <span>{s.icon}</span>
                {s.label}
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-[1280px] px-6 md:px-16 py-20 md:py-28 space-y-28">
        {/* HISTORY */}
        <DeepSection id="dd-history" eyebrow="01 · Historia" title="2.000 años de prohibición" color="violet">
          <DeepBlock
            tag="Raíz histórica"
            title="No es una norma comunista, es una tradición milenaria"
            body={
              <>
                Mucha gente asume que la prohibición del juego en China es una imposición reciente
                del Partido Comunista. La realidad es mucho más antigua: ya el Emperador{" "}
                <strong>Qin Shi Huang</strong> (siglo III a.C.) prohibió el juego como vicio social.
                A lo largo de todas las dinastías, la ley ha oscilado entre tolerar el juego lúdico
                de bajo riesgo y perseguir duramente la apuesta con fines lucrativos. Esta
                distinción —<strong className="text-violet">juego social vs. apuesta económica</strong>—
                es fundamental y está codificada en la cultura china desde hace milenios.
              </>
            }
            color="violet"
          />
          <DeepBlock
            tag="1949 — Hoy"
            title="El PCCh prohíbe todo, con dos excepciones controladas"
            body={
              <>
                Cuando el PCCh toma el poder en 1949, prohíbe absolutamente cualquier forma de juego
                en el territorio continental. Desde entonces, esa política no ha cambiado en lo
                esencial. Las únicas excepciones son dos loterías estatales: la{" "}
                <strong className="text-danger">Lotería de Bienestar Social (1987)</strong> y la{" "}
                <strong className="text-danger">Lotería Deportiva (1994)</strong>, cuyos ingresos
                van a fondos de utilidad pública.
              </>
            }
            color="danger"
          />
          <DeepBlock
            tag="La paradoja"
            title="Macau y Hong Kong: lo que China rechaza en casa, lo explota en la frontera"
            body={
              <>
                China continental prohíbe el juego, pero Macau —territorio bajo soberanía china desde
                1999— es el mayor hub de casinos del mundo, superando a Las Vegas en ingresos.
                Millones de turistas chinos viajan cada año a Macau para jugar de forma legal. Esta
                paradoja revela que la prohibición no es solo moral: es también una herramienta de
                control social y concentración de ingresos en manos del Estado.
              </>
            }
            color="warn"
          />
        </DeepSection>

        {/* GEOGRAPHY */}
        <DeepSection id="dd-geography" eyebrow="02 · Geografía" title="China no es un mercado: son muchos" color="info">
          <DeepBlock
            tag="Por qué importa"
            title="Pensar en 'China' como bloque homogéneo es el error más caro"
            body={
              <>
                Con 1.416 millones de habitantes y un territorio del tamaño de toda Europa, hablar
                de China como mercado único es un error frecuente. El sistema oficial de{" "}
                <strong className="text-info">ciudades Tier</strong> es la herramienta clave para
                ubicar a nuestro usuario.
              </>
            }
            color="info"
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              {
                tier: "Tier 1",
                badge: "🎯 Foco principal",
                cities: "Pekín · Shanghái · Shenzhen · Guangzhou",
                desc: "Máxima renta disponible, mayor penetración digital, comunidades de fans organizadas. Mayor coste de adquisición, pero mayor disposición a pagar por VIP.",
                color: "primary",
              },
              {
                tier: "Tier 2",
                badge: "Expansión fase 2",
                cities: "Chengdu · Hangzhou · Wuhan · Nanjing",
                desc: "5–15M habitantes, perfil similar al Tier 1 pero con costes operativos más bajos. Ideal para escalar el MVP tras validar.",
                color: "info",
              },
              {
                tier: "Tier 3–4",
                badge: "Largo plazo",
                cities: "Resto del país",
                desc: "Alta penetración WeChat pero menor poder adquisitivo. Potencial de crecimiento a largo plazo.",
                color: "muted",
              },
            ].map((t) => (
              <div
                key={t.tier}
                className="rounded-2xl border bg-card/40 p-6 backdrop-blur-sm"
                style={{ borderColor: `hsl(var(--${t.color === "muted" ? "border" : t.color}) / 0.3)` }}
              >
                <div className="flex items-center justify-between mb-3">
                  <span
                    className="font-mono text-xs font-bold tracking-[0.2em]"
                    style={{ color: t.color === "muted" ? "hsl(var(--muted-foreground))" : `hsl(var(--${t.color}))` }}
                  >
                    {t.tier}
                  </span>
                  <span className="text-[10px] text-muted-foreground/70">{t.badge}</span>
                </div>
                <div className="text-sm font-semibold text-foreground mb-2">{t.cities}</div>
                <div className="text-xs text-muted-foreground leading-relaxed">{t.desc}</div>
              </div>
            ))}
          </div>
          <DeepBlock
            tag="El factor WeChat"
            title="WeChat no es una app: es la infraestructura digital del país"
            body={
              <>
                En China, WeChat es simultáneamente el WhatsApp, el Instagram, el banco, la tienda y
                el sistema de identificación de cientos de millones de personas. Operar como
                Mini-Program dentro de WeChat no es "estar en una app popular" — es{" "}
                <strong className="text-primary">integrarse en el tejido digital cotidiano</strong>.
                Nuestros usuarios objetivo en Tier 1 y 2 ya pasan más de 82 minutos al día en WeChat
                y realizan transacciones económicas habituales dentro de la plataforma.
              </>
            }
            color="primary"
          />
        </DeepSection>

        {/* DEMOGRAPHY */}
        <DeepSection id="dd-demography" eyebrow="03 · Demografía" title="Quién es nuestro usuario" color="warn">
          <DeepBlock
            tag="Generación digital nativa"
            title="Millennials y Gen Z urbanos, hiper-conectados"
            body={
              <>
                La demanda de deporte global en China —fútbol europeo, NBA, eSports— se concentra en
                los <strong className="text-warn">millennials y la Generación Z urbanos</strong>.
                Jóvenes que consumen deporte casi exclusivamente a través del móvil y las redes
                sociales, que siguen a jugadores europeos con la misma intensidad que en España, y
                que ya están organizados en comunidades digitales activas dentro de WeChat.
              </>
            }
            color="warn"
          />

          <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
            {[
              { val: "1.300M", lbl: "Usuarios activos WeChat", color: "primary" },
              { val: "35%", lbl: "Edad 18-29 años", color: "violet" },
              { val: "27%", lbl: "Edad 30-39 años", color: "info" },
              { val: "82 min", lbl: "Tiempo diario WeChat", color: "gold" },
              { val: "764M", lbl: "DAU Mini-Programs", color: "primary" },
            ].map((s) => (
              <div
                key={s.lbl}
                className="rounded-xl border bg-card/40 p-5 text-center backdrop-blur-sm"
                style={{ borderColor: `hsl(var(--${s.color}) / 0.25)` }}
              >
                <div className="font-serif text-2xl md:text-3xl mb-1.5" style={{ color: `hsl(var(--${s.color}))` }}>
                  {s.val}
                </div>
                <div className="text-[10px] text-muted-foreground leading-snug">{s.lbl}</div>
              </div>
            ))}
          </div>

          <DeepBlock
            tag="La pasión deportiva"
            title="Fans sin canal de expresión competitiva"
            body={
              <>
                El mercado deportivo chino vale casi <strong>1 billón de dólares</strong> proyectado
                para 2030. LaLiga abrió oficina en Pekín. El fútbol y los eSports dominan entre el
                público joven.{" "}
                <strong className="text-primary">
                  Toda esa energía de fan no tiene ningún canal legal donde expresarse de forma
                  competitiva con otros aficionados.
                </strong>{" "}
                Ese es exactamente el vacío que ocupamos.
              </>
            }
            color="primary"
          />
        </DeepSection>

        {/* LEGAL */}
        <DeepSection id="dd-legal" eyebrow="04 · Marco Legal" title="El test de los 3 criterios" color="danger">
          <DeepBlock
            tag="La pregunta clave"
            title="«¿Esto no es básicamente apuestas con otro nombre?»"
            body={
              <>
                Es la pregunta más importante del pitch. El{" "}
                <strong className="text-danger">Artículo 303 del Código Penal de la RPC</strong>{" "}
                define el juego ilegal como{" "}
                <em>"transferencia de valor monetario condicionada al azar"</em>. Nuestro modelo{" "}
                <strong className="text-foreground">no cumple ninguno de los tres elementos</strong>.
              </>
            }
            color="danger"
          />

          <div className="space-y-3">
            {[
              {
                q: "¿Hay transferencia de valor monetario?",
                v: "NO APLICA",
                d: "Los premios son cupones O2O canjeables con marcas patrocinadoras. Nunca dinero en efectivo, nunca transferencia bancaria. Sin cash-out, no hay valor monetario transferido.",
              },
              {
                q: "¿El resultado está condicionado al azar?",
                v: "NO APLICA",
                d: "En una fantasy league el resultado depende del conocimiento deportivo del usuario: qué jugadores eliges, cómo gestionas tu equipo. Es habilidad analítica, no azar.",
              },
              {
                q: "¿Opera fuera del ecosistema regulado?",
                v: "NO APLICA",
                d: "Al ser Mini-Program nativo de WeChat, heredamos toda la infraestructura de compliance de Tencent: KYC, límites de gasto para menores, auditorías periódicas.",
              },
            ].map((c) => (
              <div
                key={c.q}
                className="rounded-2xl border border-primary/25 bg-primary/5 p-5 flex items-start gap-4"
              >
                <span className="text-xl shrink-0 mt-0.5">✅</span>
                <div className="flex-1">
                  <div className="flex items-center justify-between gap-3 mb-2 flex-wrap">
                    <span className="font-medium text-sm text-foreground">{c.q}</span>
                    <span className="rounded-full bg-primary/15 px-3 py-1 font-mono text-[10px] font-bold tracking-[0.15em] text-primary">
                      {c.v} ✓
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">{c.d}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="rounded-2xl border border-primary/30 bg-gradient-to-r from-primary/10 to-transparent p-6 flex gap-4">
            <span className="text-2xl">💡</span>
            <div>
              <div className="font-serif text-lg text-foreground mb-2">
                La analogía que lo resume en una frase
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Nuestro modelo es más parecido a un{" "}
                <strong className="text-foreground">
                  Trivial de fútbol con premio en vales de descuento
                </strong>{" "}
                que a un casino. La cultura china lleva dos milenios tolerando ese tipo de
                entretenimiento competitivo. <strong>Y nadie cierra un Trivial.</strong>
              </p>
            </div>
          </div>
        </DeepSection>

        {/* PRODUCT */}
        <DeepSection id="dd-product" eyebrow="05 · Producto" title="El Mini-Program en acción" color="primary">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <DeepBlock
                tag="VIP Centre · 会员中心"
                title="Pantalla premium en chino simplificado"
                body={
                  <>
                    El usuario llega aquí desde el hub principal del fantasy. La página presenta el
                    plan <strong className="text-primary">7天免费试用 (trial 7 días)</strong>, los
                    tres tiers de suscripción (mensual, trimestral con badge "más popular", y anual
                    con descuento 50%) y el listado de funciones premium.
                  </>
                }
                color="primary"
              />

              <div className="grid grid-cols-2 gap-3">
                {[
                  ["¥29/mes", "月度会员"],
                  ["¥79/trimestre", "季度会员 · más popular"],
                  ["¥199/año", "年度会员 · -50%"],
                  ["IA predictiva", "AI 球员表现预测"],
                ].map(([title, sub]) => (
                  <div key={title} className="rounded-xl border border-border bg-card/40 p-4">
                    <div className="font-serif text-lg text-foreground mb-1">{title}</div>
                    <div className="text-xs text-muted-foreground">{sub}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:col-span-5 flex justify-center">
              <PhoneMockup scale={1} />
            </div>
          </div>
        </DeepSection>

        {/* Footer */}
        <div className="border-t border-border/50 pt-12 text-center text-xs text-muted-foreground/60">
          <div className="font-mono uppercase tracking-[0.3em] mb-2">Documento confidencial</div>
          <div>Universidad de Murcia · Relaciones Internacionales · 4º curso · 2025</div>
        </div>
      </div>
    </div>
  );
};

/* ─── Helpers ────────────────────────────────────────────── */

const DeepSection = ({
  id,
  eyebrow,
  title,
  color,
  children,
}: {
  id: string;
  eyebrow: string;
  title: string;
  color: string;
  children: React.ReactNode;
}) => (
  <motion.section
    id={id}
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
    className="scroll-mt-32 space-y-6"
  >
    <div className="border-l-2 pl-5" style={{ borderColor: `hsl(var(--${color}))` }}>
      <div
        className="font-mono text-[11px] uppercase tracking-[0.3em] mb-2"
        style={{ color: `hsl(var(--${color}))` }}
      >
        {eyebrow}
      </div>
      <h3 className="display-xl text-3xl md:text-4xl text-foreground">{title}</h3>
    </div>
    <div className="space-y-5">{children}</div>
  </motion.section>
);

const DeepBlock = ({
  tag,
  title,
  body,
  color,
}: {
  tag: string;
  title: string;
  body: React.ReactNode;
  color: string;
}) => (
  <div
    className="rounded-2xl border bg-card/40 p-6 md:p-7 backdrop-blur-sm"
    style={{ borderLeftWidth: "3px", borderLeftColor: `hsl(var(--${color}))`, borderRightColor: "hsl(var(--border))", borderTopColor: "hsl(var(--border))", borderBottomColor: "hsl(var(--border))" }}
  >
    <div
      className="font-mono text-[10px] uppercase tracking-[0.25em] mb-3"
      style={{ color: `hsl(var(--${color}))` }}
    >
      {tag}
    </div>
    <h4 className="font-serif text-xl md:text-2xl text-foreground mb-3">{title}</h4>
    <p className="text-sm md:text-base text-muted-foreground leading-relaxed">{body}</p>
  </div>
);
