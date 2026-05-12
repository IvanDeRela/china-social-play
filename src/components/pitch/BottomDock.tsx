import { memo } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { slides } from "./TopNav";

interface BottomDockProps {
  current: number;
  onSelect: (idx: number) => void;
  onPrev: () => void;
  onNext: () => void;
}

const BottomDockBase = ({ current, onSelect, onPrev, onNext }: BottomDockProps) => {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 pointer-events-none">
      <div className="mx-auto max-w-[1600px] px-6 pb-5">
        <div className="pointer-events-auto flex items-center justify-between gap-4 rounded-full border border-border/60 bg-card/80 px-4 py-2 backdrop-blur-xl shadow-elevated">
          <div className="flex items-center gap-1 font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground/70">
            <span className="text-foreground">{String(current + 1).padStart(2, "0")}</span>
            <span>/</span>
            <span>{String(slides.length).padStart(2, "0")}</span>
          </div>

          <div className="flex items-center gap-1.5">
            {slides.map((s, i) => {
              const active = i === current;
              return (
                <button
                  key={s.id}
                  onClick={() => onSelect(i)}
                  aria-label={`Ir a slide ${s.label}`}
                  className={cn(
                    "h-1.5 rounded-full transition-all duration-300",
                    active ? "w-8 bg-primary shadow-[0_0_8px_hsl(var(--primary))]" : "w-1.5 bg-border hover:bg-muted-foreground/40",
                  )}
                />
              );
            })}
          </div>

          <div className="flex items-center gap-1">
            <button
              onClick={onPrev}
              disabled={current === 0}
              aria-label="Slide anterior"
              className="grid h-7 w-7 place-items-center rounded-full text-muted-foreground transition-colors hover:bg-muted hover:text-foreground disabled:opacity-30 disabled:hover:bg-transparent"
            >
              ‹
            </button>
            <button
              onClick={onNext}
              disabled={current === slides.length - 1}
              aria-label="Slide siguiente"
              className="grid h-7 w-7 place-items-center rounded-full bg-primary/10 text-primary transition-colors hover:bg-primary/20 disabled:opacity-30"
            >
              ›
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
