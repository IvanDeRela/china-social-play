import { motion } from "framer-motion";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { PhoneMockup } from "./PhoneMockup";

interface DeepDiveProps {
  innerRef?: React.RefObject<HTMLDivElement>;
}

const sections = [
  { id: "thesis", label: "Tesis de inversión", icon: "◆" },
  { id: "market", label: "Mercado ampliado", icon: "▲" },
  { id: "legal", label: "Marco legal", icon: "§" },
  { id: "unit", label: "Unit economics", icon: "$" },
  { id: "risks", label: "Riesgos", icon: "!" },
  { id: "product", label: "Producto", icon: "□" },
];

export const DeepDive = ({ innerRef }: DeepDiveProps) => {
  const [active, setActive] = useState("thesis");

  return (
    <div ref={innerRef} className="relative bg-background border-t border-border">
      {/* Hero */}
      <div className="relative overflow-hidden border-b border-border">
        <div className="absolute inset-0 gradient-hero opacity-60" />
        <div className="relative mx-auto max-w-[1280px] px-6 md:px-16 py-20 md:py-28">
          <div className="font-mono text-[11px] uppercase tracking-[0.4em] text-primary mb-6">
            Anexo · Due diligence ampliada
          </div>
          <h2 className="display-xl text-4xl md:text-6xl mb-6 max-w-3xl text-foreground">
            Material de soporte para el{" "}
            <span className="text-primary">comité de inversión</span>.
          </h2>
          <p className="max-w-2xl text-base md:text-lg text-muted-foreground leading-relaxed">
            Documento complementario al pitch principal. Profundiza en la tesis, los supuestos
            financieros, el marco regulatorio y los riesgos clave para facilitar la decisión del
            comité.
          </p>
        </div>
      </div>

      {/* Sticky sub-nav */}
      <div className="sticky top-16 z-30 border-b border-border bg-background/90 backdrop-blur-xl">
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
                    ? "bg-primary/10 border border-primary/40 text-primary"
                    : "border border-transparent text-muted-foreground hover:text-foreground hover:bg-muted/60",
                )}
              >
                <span className="font-mono">{s.icon}</span>
                {s.label}
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-[1280px] px-6 md:px-16 py-20 md:py-28 space-y-28">
        {/* THESIS */}
        <DeepSection id="dd-thesis" eyebrow="01 · Tesis" title="Por qué ahora, por qué nosotros" color="primary">
          <DeepBlock
            tag="Timing de mercado"
            title="Una ventana regulatoria abierta hoy, no garantizada mañana"
            body={
              <>
                China tolera el fantasy gaming sin cash-out porque encaja en la categoría cultural
                de <em>juego social de habilidad</em>, milenariamente aceptada. Pero el ecosistema
                Mini-Program de WeChat tiene apenas 6 años de madurez comercial y los grandes
                actores occidentales (DraftKings, Sorare) están bloqueados estructuralmente. Existe
                una <strong className="text-primary">ventana de 24-36 meses</strong> antes de que un
                operador local con respaldo de Tencent o Alibaba ocupe el espacio.
              </>
            }
            color="primary"
          />
          <DeepBlock
            tag="Defensibilidad"
            title="Tres fosos competitivos acumulables"
            body={
              <>
                <strong>1. Datos propietarios:</strong> cada partido genera señales de comportamiento
                de fan que entrenan nuestro motor de recomendación.{" "}
                <strong>2. Acuerdos O2O exclusivos:</strong> los premios en cupones requieren
                contratos directos con marcas locales que tardan 6-12 meses en negociarse.{" "}
                <strong>3. Comunidades cerradas:</strong> los grupos de WeChat son virales pero
                difíciles de migrar; el switching cost crece con cada temporada.
              </>
            }
            color="copper"
          />
        </DeepSection>

        {/* MARKET */}
        <DeepSection id="dd-market" eyebrow="02 · Mercado" title="Segmentación y captura realista" color="info">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              {
                tier: "TAM",
                val: "$1.2B",
                desc: "200M fans de fútbol europeo + NBA en China continental × ARPU referencia $6/año (mercados maduros: DraftKings $42, Sorare $28).",
                color: "primary",
              },
              {
                tier: "SAM",
                val: "$340M",
                desc: "Subset urbano Tier 1-2, 18-39 años, con poder adquisitivo y hábito de pago digital recurrente vía WeChat Pay.",
                color: "info",
              },
              {
                tier: "SOM (Año 5)",
                val: "$48M",
                desc: "Captura realista del 14% del SAM tras 5 años, asumiendo entrada de 1-2 competidores locales en año 3.",
                color: "copper",
              },
            ].map((t) => (
              <div
                key={t.tier}
                className="rounded-2xl border bg-card p-6 shadow-card"
                style={{ borderColor: `hsl(var(--${t.color}) / 0.3)` }}
              >
                <div className="font-mono text-xs font-bold tracking-[0.2em] mb-2" style={{ color: `hsl(var(--${t.color}))` }}>
                  {t.tier}
                </div>
                <div className="font-serif text-3xl text-foreground mb-3">{t.val}</div>
                <div className="text-xs text-muted-foreground leading-relaxed">{t.desc}</div>
              </div>
            ))}
          </div>
          <DeepBlock
            tag="Validación cruzada"
            title="Comparables asiáticos confirman el potencial"
            body={
              <>
                Dream11 (India, fantasy cricket) alcanzó <strong>180M usuarios y $1.1B de
                ingresos</strong> en 7 años con un modelo análogo. Rakuten Sports (Japón) monetiza
                fantasy con ARPU de $14/año. Ajustando por penetración WeChat y por el gap entre
                cricket-India y fútbol-China, nuestras proyecciones representan{" "}
                <strong className="text-primary">el 8% del recorrido de Dream11</strong> en el mismo
                horizonte temporal.
              </>
            }
            color="info"
          />
        </DeepSection>

        {/* LEGAL */}
        <DeepSection id="dd-legal" eyebrow="03 · Legal" title="Test de los 3 criterios del Art. 303 CP" color="danger">
          <DeepBlock
            tag="La pregunta clave"
            title="«¿Esto no es básicamente apuestas con otro nombre?»"
            body={
              <>
                El <strong className="text-danger">Artículo 303 del Código Penal de la RPC</strong>{" "}
                define el juego ilegal como <em>"transferencia de valor monetario condicionada al
                azar"</em>. Nuestro modelo no cumple ninguno de los tres elementos constitutivos.
              </>
            }
            color="danger"
          />

          <div className="space-y-3">
            {[
              {
                q: "¿Hay transferencia de valor monetario?",
                v: "NO",
                d: "Premios = cupones O2O canjeables con marcas patrocinadoras. Sin cash-out, sin transferencia bancaria entre usuarios.",
              },
              {
                q: "¿El resultado depende del azar?",
                v: "NO",
                d: "Fantasy league = habilidad analítica (selección de jugadores, gestión de equipo). Jurisprudencia comparada en EE.UU. e India avala la categoría 'game of skill'.",
              },
              {
                q: "¿Opera fuera del ecosistema regulado?",
                v: "NO",
                d: "Mini-Program nativo de WeChat: heredamos KYC, límites de gasto a menores y auditorías periódicas de Tencent.",
              },
            ].map((c) => (
              <div key={c.q} className="rounded-2xl border border-success/30 bg-success/5 p-5 flex items-start gap-4">
                <span className="font-mono text-success text-lg shrink-0 mt-0.5">✓</span>
                <div className="flex-1">
                  <div className="flex items-center justify-between gap-3 mb-2 flex-wrap">
                    <span className="font-medium text-sm text-foreground">{c.q}</span>
                    <span className="rounded-full bg-success/15 px-3 py-1 font-mono text-[10px] font-bold tracking-[0.15em] text-success">
                      {c.v}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">{c.d}</p>
                </div>
              </div>
            ))}
          </div>

          <DeepBlock
            tag="Mitigación"
            title="Counsel local + opinión legal vinculante en mes 2"
            body={
              <>
                Parte del uso de fondos del Seed ($120K en legal &amp; compliance año 1) cubre la
                contratación de King &amp; Wood Mallesons o Fangda Partners para emitir una opinión
                legal formal antes del lanzamiento público, junto con el registro ICP/ICP-B
                obligatorio para operar contenido en RPC.
              </>
            }
            color="copper"
          />
        </DeepSection>

        {/* UNIT ECONOMICS */}
        <DeepSection id="dd-unit" eyebrow="04 · Unit economics" title="Supuestos detrás de las proyecciones" color="copper">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {[
              { k: "CAC blended", v: "$3.20", n: "Mix WeChat ads + KOL + viralidad" },
              { k: "ARPU año 1", v: "$8.40", n: "Suscripción + cosméticos" },
              { k: "ARPU año 5", v: "$18.60", n: "Up-sell VIP + torneos" },
              { k: "Gross margin", v: "78%", n: "Costes de hosting + revenue share Tencent 5%" },
              { k: "Payback CAC", v: "4.6 m", n: "Conservador; mejora a 2.1m año 3" },
              { k: "LTV / CAC", v: "5.8×", n: "Año 5 base case" },
              { k: "Churn mensual", v: "6.2%", n: "Estacionalidad ligas europeas" },
              { k: "Conversión free→paid", v: "11%", n: "Trial 7 días, benchmark sector 8-14%" },
            ].map((m) => (
              <div key={m.k} className="rounded-xl border border-border bg-card p-4 shadow-card">
                <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground mb-1">
                  {m.k}
                </div>
                <div className="font-serif text-2xl text-primary mb-1">{m.v}</div>
                <div className="text-[11px] text-muted-foreground leading-snug">{m.n}</div>
              </div>
            ))}
          </div>
          <DeepBlock
            tag="Sensibilidad"
            title="Variables críticas y rango de impacto sobre EBITDA Año 5"
            body={
              <>
                Hemos modelado 3 escenarios moviendo: <strong>(a)</strong> conversión free→paid
                (8-14%), <strong>(b)</strong> CAC blended ($2.50-$4.80) y <strong>(c)</strong>{" "}
                churn mensual (4-9%). El rango de EBITDA año 5 oscila entre <strong>$3.2M</strong>{" "}
                (downside) y <strong>$11.8M</strong> (upside), con caso base en{" "}
                <strong className="text-primary">$7.4M</strong>.
              </>
            }
            color="primary"
          />
        </DeepSection>

        {/* RISKS */}
        <DeepSection id="dd-risks" eyebrow="05 · Riesgos" title="Mapa honesto de riesgos y mitigaciones" color="danger">
          <div className="space-y-3">
            {[
              {
                r: "Cambio regulatorio",
                p: "Medio",
                i: "Alto",
                m: "Estructura corporativa VIE + counsel local + cumplimiento proactivo de licencias culturales y de contenido deportivo.",
              },
              {
                r: "Entrada de competidor con respaldo BAT",
                p: "Alto",
                i: "Medio",
                m: "Construir foso de comunidad y datos en años 1-2. Posicionarnos como target de adquisición creíble.",
              },
              {
                r: "Bloqueo de plataforma WeChat",
                p: "Bajo",
                i: "Crítico",
                m: "Diversificación a Douyin Mini-Program en año 3. Acuerdo marco con Tencent como prioridad post-Seed.",
              },
              {
                r: "Estacionalidad ligas",
                p: "Cierto",
                i: "Bajo",
                m: "Cobertura multi-liga (Premier, LaLiga, NBA, eSports) suaviza valles de verano.",
              },
            ].map((row) => (
              <div key={row.r} className="rounded-xl border border-border bg-card p-5 shadow-card">
                <div className="flex items-center justify-between gap-4 mb-2 flex-wrap">
                  <div className="font-serif text-lg text-foreground">{row.r}</div>
                  <div className="flex gap-2">
                    <span className="rounded-full bg-warn/10 px-3 py-0.5 font-mono text-[10px] font-bold tracking-[0.15em] text-warn">
                      Prob: {row.p}
                    </span>
                    <span className="rounded-full bg-danger/10 px-3 py-0.5 font-mono text-[10px] font-bold tracking-[0.15em] text-danger">
                      Impacto: {row.i}
                    </span>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  <strong className="text-foreground">Mitigación:</strong> {row.m}
                </p>
              </div>
            ))}
          </div>
        </DeepSection>

        {/* PRODUCT */}
        <DeepSection id="dd-product" eyebrow="06 · Producto" title="Mini-Program: la experiencia VIP" color="primary">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <DeepBlock
                tag="VIP Centre · 会员中心"
                title="El motor de monetización recurrente"
                body={
                  <>
                    El usuario llega desde el hub principal del fantasy. Trial de{" "}
                    <strong className="text-primary">7 días gratuitos</strong>, tres tiers
                    (mensual, trimestral más popular, anual con 50% de descuento) y funciones
                    premium con IA predictiva de rendimiento de jugadores.
                  </>
                }
                color="primary"
              />

              <div className="grid grid-cols-2 gap-3">
                {[
                  ["$4 / mes", "月度会员"],
                  ["$11 / trimestre", "季度会员 · más popular"],
                  ["$28 / año", "年度会员 · -50%"],
                  ["IA predictiva", "AI 球员表现预测"],
                ].map(([title, sub]) => (
                  <div key={title} className="rounded-xl border border-border bg-card p-4 shadow-card">
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
        <div className="border-t border-border pt-12 text-center text-xs text-muted-foreground">
          <div className="font-mono uppercase tracking-[0.3em] mb-2">Documento confidencial</div>
          <div>FantasyChina · Seed Round 2026 · Universidad de Murcia · Relaciones Internacionales 4º</div>
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
      <div className="font-mono text-[11px] uppercase tracking-[0.3em] mb-2" style={{ color: `hsl(var(--${color}))` }}>
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
    className="rounded-2xl border bg-card p-6 md:p-7 shadow-card"
    style={{
      borderLeftWidth: "3px",
      borderLeftColor: `hsl(var(--${color}))`,
      borderRightColor: "hsl(var(--border))",
      borderTopColor: "hsl(var(--border))",
      borderBottomColor: "hsl(var(--border))",
    }}
  >
    <div className="font-mono text-[10px] uppercase tracking-[0.25em] mb-3" style={{ color: `hsl(var(--${color}))` }}>
      {tag}
    </div>
    <h4 className="font-serif text-xl md:text-2xl text-foreground mb-3">{title}</h4>
    <p className="text-sm md:text-base text-muted-foreground leading-relaxed">{body}</p>
  </div>
);
