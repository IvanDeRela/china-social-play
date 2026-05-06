import { useEffect, useState } from "react";
import { ZoomIn, RotateCcw } from "lucide-react";
import { cn } from "@/lib/utils";

const BASE = 22; // px, must match html font-size in index.css
const KEY = "pitch-zoom";

export const ZoomControl = () => {
  const [open, setOpen] = useState(false);
  const [zoom, setZoom] = useState<number>(() => {
    if (typeof window === "undefined") return 100;
    const saved = window.localStorage.getItem(KEY);
    return saved ? Number(saved) : 100;
  });

  useEffect(() => {
    document.documentElement.style.fontSize = `${(BASE * zoom) / 100}px`;
    window.localStorage.setItem(KEY, String(zoom));
  }, [zoom]);

  return (
    <div className="fixed bottom-24 right-6 z-[60] flex flex-col items-end gap-2">
      {open && (
        <div className="flex items-center gap-3 rounded-full border border-border bg-card/95 px-4 py-2.5 shadow-elevated backdrop-blur-xl">
          <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">Zoom</span>
          <input
            type="range"
            min={80}
            max={160}
            step={5}
            value={zoom}
            onChange={(e) => setZoom(Number(e.target.value))}
            className="h-1 w-40 cursor-pointer appearance-none rounded-full bg-border accent-primary"
          />
          <span className="w-12 font-mono text-xs font-semibold text-primary">{zoom}%</span>
          <button
            onClick={() => setZoom(100)}
            className="rounded-full p-1 text-muted-foreground hover:text-primary"
            aria-label="Reset zoom"
            title="Reset"
          >
            <RotateCcw className="h-3.5 w-3.5" />
          </button>
        </div>
      )}
      <button
        onClick={() => setOpen((v) => !v)}
        className={cn(
          "flex h-12 w-12 items-center justify-center rounded-full border border-border bg-card shadow-elevated backdrop-blur-xl transition-colors",
          open ? "border-primary/50 text-primary" : "text-muted-foreground hover:text-primary",
        )}
        aria-label="Ajustar tamaño"
        title="Ajustar tamaño"
      >
        <ZoomIn className="h-5 w-5" />
      </button>
    </div>
  );
};
