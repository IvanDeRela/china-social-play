import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const slides = [
  { id: 0, num: "01", label: "Apertura" },
  { id: 1, num: "02", label: "Contexto" },
  { id: 2, num: "03", label: "Problema" },
  { id: 3, num: "04", label: "Solución" },
  { id: 4, num: "05", label: "Mercado" },
  { id: 5, num: "06", label: "Muro Legal" },
  { id: 6, num: "07", label: "Modelo" },
  { id: 7, num: "08", label: "Roadmap" },
  { id: 8, num: "09", label: "Demo" },
  { id: 9, num: "10", label: "Cierre" },
];

interface TopNavProps {
  current: number;
  onSelect: (idx: number) => void;
  onOpenDeepDive: () => void;
}

export const TopNav = ({ current, onSelect, onOpenDeepDive }: TopNavProps) => {
  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="border-b border-border/40 bg-background/80 backdrop-blur-xl">
        <div className="mx-auto flex h-16 w-full max-w-[1600px] items-center justify-between px-6">
          {/* Brand */}
          <button
            onClick={() => onSelect(0)}
            className="group flex items-center gap-3"
          >
            <div className="relative">
              <div className="h-2 w-2 rounded-full bg-primary shadow-[0_0_12px_hsl(var(--primary))]" />
              <div className="absolute inset-0 h-2 w-2 animate-ping rounded-full bg-primary opacity-40" />
            </div>
            <div className="flex items-baseline gap-2">
              <span className="font-serif text-base tracking-wide text-foreground">
                Fantasy<span className="text-primary">China</span>
              </span>
              <span className="hidden font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground/60 sm:inline">
                Business Pitch
              </span>
            </div>
          </button>

          {/* Slides nav */}
          <nav className="hidden items-center gap-1 lg:flex">
            {slides.map((s) => {
              const active = current === s.id;
              return (
                <button
                  key={s.id}
                  onClick={() => onSelect(s.id)}
                  className={cn(
                    "group relative rounded-md px-3 py-1.5 text-xs font-medium transition-colors",
                    active
                      ? "text-primary"
                      : "text-muted-foreground/70 hover:text-foreground",
                  )}
                >
                  <span className="font-mono text-[10px] opacity-60 mr-1">{s.num}</span>
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

          {/* Right side */}
          <div className="flex items-center gap-3">
            <button
              onClick={onOpenDeepDive}
              className="hidden md:inline-flex items-center gap-2 rounded-full border border-border bg-card/50 px-4 py-1.5 text-xs font-medium text-muted-foreground transition-colors hover:border-primary/40 hover:text-primary"
            >
              <span>Anexo · Deep Dive</span>
              <span className="text-[10px]">↓</span>
            </button>
            <span className="hidden font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground/50 md:inline">
              UMU · RRII 4º
            </span>
          </div>
        </div>

        {/* Progress bar */}
        <div className="h-px bg-border/40">
          <motion.div
            className="h-px bg-gradient-to-r from-primary via-primary-glow to-gold"
            style={{ boxShadow: "0 0 8px hsl(var(--primary))" }}
            animate={{ width: `${((current + 1) / slides.length) * 100}%` }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          />
        </div>
      </div>
    </header>
  );
};

export { slides };
