import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const slides = [
  { id: 0,  num: "01", label: "Apertura",     section: "Intro" },
  { id: 1,  num: "—",  label: "Problema",     section: "div", divider: true },
  { id: 2,  num: "02", label: "El Nicho",     section: "Problema" },
  { id: 3,  num: "03", label: "Producto",     section: "Problema" },
  { id: 4,  num: "—",  label: "Solución",     section: "div", divider: true },
  { id: 5,  num: "04", label: "Cliente",      section: "Solución" },
  { id: 6,  num: "05", label: "Mercado",      section: "Solución" },
  { id: 7,  num: "—",  label: "Negocio",      section: "div", divider: true },
  { id: 8,  num: "06", label: "Proyecciones", section: "Negocio" },
  { id: 9,  num: "07", label: "Escala",       section: "Negocio" },
  { id: 10, num: "08", label: "Comparables",  section: "Negocio" },
  { id: 11, num: "09", label: "Riesgos",      section: "Negocio" },
  { id: 12, num: "—",  label: "Cierre",       section: "div", divider: true },
  { id: 13, num: "10", label: "Inversión",   section: "Cierre" },
  { id: 14, num: "11", label: "Equipo",       section: "Cierre" },
];

interface TopNavProps {
  current: number;
  onSelect: (idx: number) => void;
  onOpenDeepDive: () => void;
}

export const TopNav = ({ current, onSelect, onOpenDeepDive }: TopNavProps) => {
  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="border-b border-border/60 bg-background/85 backdrop-blur-xl">
        <div className="mx-auto flex h-16 w-full max-w-[1600px] items-center justify-between px-6">
          <button onClick={() => onSelect(0)} className="group flex items-center gap-3">
            <div className="relative">
              <div className="h-2 w-2 rounded-full bg-primary shadow-[0_0_12px_hsl(var(--primary))]" />
              <div className="absolute inset-0 h-2 w-2 animate-ping rounded-full bg-primary opacity-40" />
            </div>
            <div className="flex items-baseline gap-2">
              <span className="font-serif text-base tracking-tight text-foreground">
                Fantasy<span className="text-primary">China</span>
              </span>
            </div>
          </button>

          <nav className="hidden lg:flex flex-1 mx-4 min-w-0 items-center gap-0.5 overflow-x-auto scrollbar-thin">
            {slides.filter(s => !s.divider).map((s) => {
              const active = current === s.id;
              return (
                <button
                  key={s.id}
                  onClick={() => onSelect(s.id)}
                  className={cn(
                    "group relative shrink-0 rounded-md px-3 py-2 text-sm font-medium whitespace-nowrap transition-colors",
                    active ? "text-primary" : "text-muted-foreground hover:text-foreground",
                  )}
                >
                  <span className="font-mono text-[11px] opacity-60 mr-1">{s.num}</span>
                  {s.label}
                  {active && (
                    <motion.div
                      layoutId="nav-active"
                      className="absolute inset-0 -z-10 rounded-md border border-primary/30 bg-primary/5"
                      transition={{ type: "spring", duration: 0.5 }}
                    />
                  )}
                </button>
              );
            })}
          </nav>

          <div className="flex items-center gap-3">
            <span className="hidden font-mono text-sm uppercase tracking-[0.2em] text-foreground md:inline">
              <span className="text-primary font-bold">{String(current + 1).padStart(2, "0")}</span>
              <span className="text-muted-foreground/60"> / {String(slides.length).padStart(2, "0")}</span>
            </span>
            <button
              onClick={onOpenDeepDive}
              className="hidden md:inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:border-primary/40 hover:text-primary"
            >
              <span>Anexo</span>
              <span className="text-xs">↓</span>
            </button>
          </div>
        </div>

        <div className="relative h-1.5 bg-border/40">
          <motion.div
            className="absolute inset-y-0 left-0 bg-gradient-to-r from-primary via-primary-glow to-copper"
            style={{ boxShadow: "0 0 10px hsl(var(--primary))" }}
            animate={{ width: `${((current + 1) / slides.length) * 100}%` }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          />
          <span className="pointer-events-none absolute right-2 top-1/2 -translate-y-1/2 font-mono text-[9px] uppercase tracking-[0.2em] text-foreground/70">
            {Math.round(((current + 1) / slides.length) * 100)}%
          </span>
        </div>
      </div>
    </header>
  );
};

export { slides };
