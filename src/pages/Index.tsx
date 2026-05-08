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
const DeepDive = lazy(() => import("@/components/pitch/DeepDive").then(m => ({ default: m.DeepDive })));

const Index = () => {
  const [current, setCurrent] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
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
      case 1:  return <SlideDivider num="I"   kicker="Capítulo 1" title="El Problema."  hanzi="问" tone="copper" />;
      case 2:  return <SlideContext />;
      case 3:  return <SlideProblem />;
      case 4:  return <SlideDivider num="II"  kicker="Capítulo 2" title="La Solución."  hanzi="解" tone="primary" />;
      case 5:  return <SlideSolution />;
      case 6:  return <SlideMarket />;
      case 7:  return <SlideAtlas />;
      case 8:  return <SlideDivider num="III" kicker="Capítulo 3" title="El Negocio."   hanzi="业" tone="success" />;
      case 9:  return <SlideMonetization />;
      case 10: return <SlideRoadmap />;
      case 11: return <SlideLegal />;
      case 12: return <SlideRisks />;
      case 13: return <SlideDivider num="IV"  kicker="Capítulo 4" title="El Cierre."    hanzi="终" tone="primary" />;
      case 14: return <SlideClosing onOpenDeepDive={openDeepDive} />;
      case 15: return <SlideDemo />;
      default: return <SlideOpening />;
    }
  };

  return (
    <main className="min-h-screen bg-background text-foreground">
      {!isFullscreen && <TopNav current={current} onSelect={goTo} onOpenDeepDive={openDeepDive} />}

      <div className="relative">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            <Suspense fallback={<div className="min-h-screen" />}>
              {renderSlide()}
            </Suspense>
          </motion.div>
        </AnimatePresence>
      </div>

      {!isFullscreen && <BottomDock current={current} onSelect={goTo} onPrev={prev} onNext={next} />}

      {!isFullscreen && (
        <Suspense fallback={null}>
          <DeepDive innerRef={deepDiveRef} />
        </Suspense>
      )}

      {!isFullscreen && <ZoomControl />}
      {!isFullscreen && <ExportPdf current={current} goTo={goTo} />}

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

      {/* Controles mínimos en pantalla completa */}
      {isFullscreen && (
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
