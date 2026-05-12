import { useEffect, useState } from "react";
import { Maximize2, Minimize2 } from "lucide-react";

/**
 * Atlas Digital — el HTML completo del atlas se monta a pantalla completa
 * dentro de la diapositiva, sin chrome ni card, para que se sienta nativo.
 * Se conserva como iframe para no romper sus scripts (Leaflet, Chart.js, fuentes).
 */
export const SlideAtlas = () => {
  const src = "/china-digital-atlas.html";
  const [expanded, setExpanded] = useState(false);

  // Permite "f" para expandir el atlas dentro del slide (sin romper el atajo global)
  useEffect(() => {
    if (!expanded) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setExpanded(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [expanded]);

  return (
    <section
      className={
        expanded
          ? "fixed inset-0 z-[70] bg-background"
          : "relative w-full h-screen overflow-hidden bg-background"
      }
    >
      <iframe
        src={src}
        title="China Digital Atlas"
        loading="eager"
        className="absolute inset-0 h-full w-full"
        style={{ border: "none", display: "block" }}
      />

      <button
        onClick={() => setExpanded((v) => !v)}
        title={expanded ? "Salir (Esc)" : "Maximizar atlas"}
        className="absolute top-20 right-4 z-10 grid h-9 w-9 place-items-center rounded-full border border-border bg-card/90 backdrop-blur shadow-elevated text-foreground hover:text-primary hover:border-primary/40 transition-colors"
      >
        {expanded ? <Minimize2 className="h-4 w-4" /> : <Maximize2 className="h-4 w-4" />}
      </button>
    </section>
  );
};
