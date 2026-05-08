import { motion } from "framer-motion";
import { Globe2, ExternalLink, Maximize2 } from "lucide-react";
import { SlideShell } from "../SlideShell";
import { Eyebrow } from "../Eyebrow";

/** Atlas Digital — embebido del proyecto Pacific Frontiers (infraestructuras digitales y energéticas de China). */
export const SlideAtlas = () => {
  const src = "/china-digital-atlas.html";

  return (
    <SlideShell chapter="06" chapterLabel="Atlas Digital" watermark="图">
      <div className="flex items-center gap-3 mb-2">
        <Globe2 className="h-6 w-6 text-primary" />
        <Eyebrow color="primary">Infraestructura · contexto geoestratégico</Eyebrow>
      </div>

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="display-xl text-4xl md:text-5xl lg:text-6xl mt-4 mb-3 max-w-4xl"
      >
        Atlas digital de <span className="text-primary">China</span>.
      </motion.h2>
      <p className="text-muted-foreground max-w-3xl mb-6 text-sm md:text-base">
        Mapa interactivo de infraestructuras digitales y energéticas: data centers,
        cables submarinos, hubs 5G y nodos cloud que sostienen el ecosistema gaming
        sobre el que opera FantasyChina.
      </p>

      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.15 }}
        className="relative flex-1 min-h-[420px] rounded-xl overflow-hidden border border-border bg-card shadow-elevated"
      >
        <iframe
          src={src}
          title="China Digital Atlas"
          loading="lazy"
          className="absolute inset-0 h-full w-full"
          style={{ border: "none" }}
        />
        <div className="absolute top-3 right-3 flex gap-2 z-10">
          <a
            href={src}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-md border border-border bg-background/90 backdrop-blur px-3 py-1.5 text-xs font-medium text-foreground hover:text-primary hover:border-primary/40 transition-colors"
            title="Abrir a pantalla completa"
          >
            <Maximize2 className="h-3.5 w-3.5" />
            Pantalla completa
            <ExternalLink className="h-3 w-3 opacity-60" />
          </a>
        </div>
      </motion.div>

      <p className="mt-3 text-xs text-muted-foreground/70 font-mono">
        Fuente: Pacific Frontiers · datos Natural Earth + investigación propia
      </p>
    </SlideShell>
  );
};
