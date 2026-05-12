import { useEffect, useRef, useState, useCallback, lazy, Suspense } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { TopNav, slides } from "@/components/pitch/TopNav";
import { BottomDock } from "@/components/pitch/BottomDock";
import { SlideOpening } from "@/components/pitch/slides/SlideOpening";
import { ZoomControl } from "@/components/pitch/ZoomControl";
import { ExportPdf } from "@/components/pitch/ExportPdf";

// Lazy-load non-initial slides + heavy DeepDive section to reduce initial JS work
const SlideContext = lazy(() => import("@/components/pitch/slides/SlideContext").then(m => ({ default: m.SlideContext })));
const SlideProblem = lazy(() => import("@/components/pitch/slides/SlideProblem").then(m => ({ default: m.SlideProblem })));
const SlideSolution = lazy(() => import("@/components/pitch/slides/SlideSolution").then(m => ({ default: m.SlideSolution })));
const SlideMarket = lazy(() => import("@/components/pitch/slides/SlideMarket").then(m => ({ default: m.SlideMarket })));
const SlideMonetization = lazy(() => import("@/components/pitch/slides/SlideMonetization").then(m => ({ default: m.SlideMonetization })));
const SlideRoadmap = lazy(() => import("@/components/pitch/slides/SlideRoadmap").then(m => ({ default: m.SlideRoadmap })));
const SlideClosing = lazy(() => import("@/components/pitch/slides/SlideClosing").then(m => ({ default: m.SlideClosing })));
const SlideRisks = lazy(() => import("@/components/pitch/slides/SlideRisks").then(m => ({ default: m.SlideRisks })));
const SlideDivider = lazy(() => import("@/components/pitch/slides/SlideDivider").then(m => ({ default: m.SlideDivider })));
const SlideAtlas = lazy(() => import("@/components/pitch/slides/SlideAtlas").then(m => ({ default: m.SlideAtlas })));
const SlideTeam = lazy(() => import("@/components/pitch/slides/SlideTeam").then(m => ({ default: m.SlideTeam })));
const SlideReferences = lazy(() => import("@/components/pitch/slides/SlideReferences").then(m => ({ default: m.SlideReferences })));
const DeepDive = lazy(() => import("@/components/pitch/DeepDive").then(m => ({ default: m.DeepDive })));

const Index = () => {
  const [current, setCurrent] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [cleanView, setCleanView] = useState(false);
  const hideChrome = isFullscreen || cleanView;
  const deepDiveRef = useRef<HTMLDivElement>(null);

  const goTo = useCallback(
    (idx: number) => {
      const clamped = Math.max(0, Math.min(slides.length - 1, idx));
      setCurrent(clamped);
      window.scrollTo({ top: 0, behavior: "smooth" });
    },
    [],
  );

  const prev = useCallback(() => goTo(current - 1), [current, goTo]);
  const next = useCallback(() => goTo(current + 1), [current, goTo]);

  const openDeepDive = useCallback(() => {
    deepDiveRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  }, []);

  const toggleFullscreen = useCallback(async () => {
    try {
      if (!document.fullscreenElement) {
        await document.documentElement.requestFullscreen();
      } else {
        await document.exitFullscreen();
      }
    } catch (e) {
      console.warn("Fullscreen no disponible", e);
    }
  }, []);

  useEffect(() => {
    const onChange = () => setIsFullscreen(!!document.fullscreenElement);
    document.addEventListener("fullscreenchange", onChange);
    return () => document.removeEventListener("fullscreenchange", onChange);
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) return;
      if (e.key === "ArrowRight" || e.key === " " || e.key === "PageDown") {
        e.preventDefault();
        next();
      } else if (e.key === "ArrowLeft" || e.key === "PageUp") {
        e.preventDefault();
        prev();
      } else if (e.key === "Home") {
        goTo(0);
      } else if (e.key === "End") {
        goTo(slides.length - 1);
      } else if (e.key === "f" || e.key === "F") {
        e.preventDefault();
        toggleFullscreen();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [prev, next, goTo, toggleFullscreen]);

  const renderSlide = () => {
    switch (current) {
      case 0:  return <SlideOpening />;
      case 1:  return <SlideDivider num="I"  kicker="Capítulo 1" title="China."          hanzi="中" tone="copper" />;
      case 2:  return <SlideAtlas />;
      case 3:  return <SlideContext />;
      case 4:  return <SlideDivider num="II" kicker="Capítulo 2" title="La Oportunidad." hanzi="机" tone="primary" />;
      case 5:  return <SlideProblem />;
      case 6:  return <SlideSolution />;
      case 7:  return <SlideMarket />;
      case 8:  return <SlideMonetization />;
      case 9:  return <SlideRoadmap />;
      case 10: return <SlideRisks />;
      case 11: return <SlideClosing onOpenDeepDive={openDeepDive} />;
      case 12: return <SlideTeam />;
      case 13: return <SlideReferences />;
      default: return <SlideOpening />;
    }
  };

  return (
    <main className="min-h-screen bg-background text-foreground">
      {!hideChrome && <TopNav current={current} onSelect={goTo} onOpenDeepDive={openDeepDive} />}

      <div className="relative">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
          >
            <Suspense fallback={<div className="min-h-screen" />}>
              {renderSlide()}
            </Suspense>
          </motion.div>
        </AnimatePresence>
      </div>

      {!hideChrome && <BottomDock current={current} onSelect={goTo} onPrev={prev} onNext={next} />}

      {!hideChrome && (
        <Suspense fallback={null}>
          <DeepDive innerRef={deepDiveRef} />
        </Suspense>
      )}

      {!hideChrome && <ZoomControl />}
      {!hideChrome && <ExportPdf current={current} goTo={goTo} />}

      {/* Botón maximizar (oculta toda la interfaz) — mismo estilo que el del atlas */}
      <button
        onClick={() => setCleanView((v) => !v)}
        aria-label={cleanView ? "Salir de vista limpia" : "Maximizar presentación"}
        title={cleanView ? "Salir (Esc)" : "Maximizar presentación"}
        className="fixed top-20 right-4 z-[60] grid h-9 w-9 place-items-center rounded-full border border-border bg-card/90 backdrop-blur shadow-elevated text-foreground hover:text-primary hover:border-primary/40 transition-colors"
      >
        {cleanView ? (
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="4 14 10 14 10 20"/><polyline points="20 10 14 10 14 4"/><line x1="14" y1="10" x2="21" y2="3"/><line x1="3" y1="21" x2="10" y2="14"/></svg>
        ) : (
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 3 21 3 21 9"/><polyline points="9 21 3 21 3 15"/><line x1="21" y1="3" x2="14" y2="10"/><line x1="3" y1="21" x2="10" y2="14"/></svg>
        )}
      </button>

      {/* Botón pantalla completa */}
      <button
        onClick={toggleFullscreen}
        aria-label={isFullscreen ? "Salir de pantalla completa" : "Pantalla completa"}
        title={isFullscreen ? "Salir (Esc / F)" : "Pantalla completa (F)"}
        className="fixed top-4 right-4 z-[60] grid h-10 w-10 place-items-center rounded-full border border-border bg-card/90 backdrop-blur shadow-elevated text-foreground hover:text-primary hover:border-primary/40 transition-colors"
      >
        {isFullscreen ? (
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M8 3v3a2 2 0 0 1-2 2H3"/><path d="M21 8h-3a2 2 0 0 1-2-2V3"/><path d="M3 16h3a2 2 0 0 1 2 2v3"/><path d="M16 21v-3a2 2 0 0 1 2-2h3"/></svg>
        ) : (
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 7V3h4"/><path d="M21 7V3h-4"/><path d="M3 17v4h4"/><path d="M21 17v4h-4"/></svg>
        )}
      </button>

      {/* Controles mínimos cuando se oculta la interfaz (fullscreen o clean view) */}
      {hideChrome && (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[60] flex items-center gap-2 rounded-full border border-border bg-card/90 backdrop-blur px-3 py-2 shadow-elevated">
          <button
            onClick={prev}
            disabled={current === 0}
            aria-label="Anterior"
            className="grid h-10 w-10 place-items-center rounded-full text-foreground hover:bg-muted disabled:opacity-30"
          >‹</button>
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground px-2 min-w-[60px] text-center">
            <span className="text-primary font-bold">{String(current + 1).padStart(2, "0")}</span>
            <span> / {String(slides.length).padStart(2, "0")}</span>
          </span>
          <button
            onClick={next}
            disabled={current === slides.length - 1}
            aria-label="Siguiente"
            className="grid h-10 w-10 place-items-center rounded-full bg-primary/10 text-primary hover:bg-primary/20 disabled:opacity-30"
          >›</button>
        </div>
      )}
    </main>
  );
};

export default Index;
