import { motion } from "framer-motion";
import { SlideShell } from "../SlideShell";
import { Eyebrow } from "../Eyebrow";

/** Mejora 8 — equipo fundador con 4 roles. */
const team = [
  {
    initials: "IG",
    name: "Iván García del Toro",
    role: "CTO · Co-founder",
    area: "AI Engineering · Product",
    color: "primary",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5"><path d="M12 2v3m0 14v3M4.93 4.93l2.12 2.12m9.9 9.9l2.12 2.12M2 12h3m14 0h3M4.93 19.07l2.12-2.12m9.9-9.9l2.12-2.12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/><circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="2"/></svg>
    ),
    bullets: [
      "Ingeniero de IA y dev móvil con perfil técnico-internacional",
      "Stack: TypeScript, Python, TensorFlow, WeChat Mini-Program SDK, Tencent Cloud",
      "RR.II. · Erasmus Lille · prácticas Consulado España en Lyon · Master Lyon 3 (2026)",
      "4 idiomas: ES · FR · EN · DE",
    ],
    duty: "Arquitectura técnica, MVP, integración Tencent Cloud, motor IA del módulo Premium, dirección de producto.",
  },
  {
    initials: "AH",
    name: "Alberto Hernández",
    role: "CEO · Co-founder",
    area: "Strategy · International Relations",
    color: "copper",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5"><circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2"/><circle cx="12" cy="12" r="5" stroke="currentColor" strokeWidth="2"/><circle cx="12" cy="12" r="1.5" fill="currentColor"/></svg>
    ),
    bullets: [
      "Especialidad: estrategia, fundraising internacional, relaciones institucionales",
      "Foco: representación pública y negociación con inversores",
      "Apertura de mercado y partnerships institucionales (LaLiga, ICEX, Casa Asia)",
    ],
    duty: "Captación de capital, partnerships institucionales, dirección general y representación.",
  },
  {
    initials: "RI",
    name: "Rafael Imbernón",
    role: "CMO · Co-founder",
    area: "Marketing · Community Growth",
    color: "primary",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5"><path d="M3 20V10m6 10V4m6 16v-7m6 7V8" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>
    ),
    bullets: [
      "Especialista en marketing digital en mercados asiáticos",
      "KOL marketing, comunidad, content strategy, crecimiento orgánico",
      "Adquisición vía WeChat Moments + grupos privados",
    ],
    duty: "Estrategia de adquisición, partnerships con creadores chinos, branding y comunidad.",
  },
  {
    initials: "PP",
    name: "Pedro Plaza",
    role: "CFO · Co-founder",
    area: "Finance · Legal Compliance",
    color: "success",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5"><path d="M12 2v20M17 6H9.5a3 3 0 100 6h5a3 3 0 110 6H6" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>
    ),
    bullets: [
      "Experto financiero · modelo de negocio · cumplimiento regulatorio",
      "Unit economics, captación de capital, due diligence",
      "Compliance Cybersecurity Law + PIPL + ICP",
    ],
    duty: "Modelo financiero, ronda seed, gestión legal con Tencent y entidad en Hong Kong.",
  },
] as const;

const colorClasses: Record<string, string> = {
  primary: "from-primary to-primary-glow text-primary-foreground",
  copper: "from-copper to-warn text-white",
  success: "from-success to-primary text-white",
};

export const SlideDemo = () => {
  return (
    <SlideShell chapter="09" chapterLabel="Equipo">
      <Eyebrow color="primary">El equipo fundador</Eyebrow>

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.1 }}
        className="display-xl text-3xl md:text-4xl lg:text-5xl mt-6 mb-8 max-w-4xl"
      >
        Cuatro fundadores. <span className="font-serif italic text-primary">Cuatro disciplinas</span>.
        <br />Un solo objetivo.
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {team.map((p, i) => (
          <motion.div
            key={p.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 + i * 0.08 }}
            className="rounded-2xl border border-border bg-card p-5 shadow-card"
          >
            <div className="flex items-start gap-4 mb-3">
              <div className={`grid h-14 w-14 shrink-0 place-items-center rounded-full bg-gradient-to-br ${colorClasses[p.color]} font-serif text-xl shadow-card`}>
                {p.initials}
              </div>
              <div className="min-w-0 flex-1">
                <div className="font-serif text-lg text-foreground leading-tight">{p.name}</div>
                <div className={`text-xs font-mono uppercase tracking-wider mt-0.5 text-${p.color}`}>{p.role}</div>
                <div className="text-xs text-muted-foreground mt-0.5">{p.area}</div>
              </div>
              <div className={`text-${p.color} opacity-60`}>{p.icon}</div>
            </div>

            <ul className="space-y-1.5 text-xs text-muted-foreground mb-3 pl-1">
              {p.bullets.map((b) => (
                <li key={b} className="flex gap-2"><span className="text-primary">·</span><span>{b}</span></li>
              ))}
            </ul>

            <div className="rounded-lg bg-muted/40 px-3 py-2 text-xs text-foreground/85 leading-relaxed">
              <span className={`font-mono uppercase tracking-wider text-[10px] text-${p.color} mr-2`}>Rol</span>
              {p.duty}
            </div>
          </motion.div>
        ))}
      </div>
    </SlideShell>
  );
};
