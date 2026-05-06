import { useEffect, useRef, useState, useCallback, lazy, Suspense } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { TopNav, slides } from "@/components/pitch/TopNav";
import { BottomDock } from "@/components/pitch/BottomDock";
import { SlideOpening } from "@/components/pitch/slides/SlideOpening";
import { ZoomControl } from "@/components/pitch/ZoomControl";

// Lazy-load non-initial slides + heavy DeepDive section to reduce initial JS work
const SlideContext = lazy(() => import("@/components/pitch/slides/SlideContext").then(m => ({ default: m.SlideContext })));
const SlideProblem = lazy(() => import("@/components/pitch/slides/SlideProblem").then(m => ({ default: m.SlideProblem })));
const SlideSolution = lazy(() => import("@/components/pitch/slides/SlideSolution").then(m => ({ default: m.SlideSolution })));
const SlideMarket = lazy(() => import("@/components/pitch/slides/SlideMarket").then(m => ({ default: m.SlideMarket })));
const SlideLegal = lazy(() => import("@/components/pitch/slides/SlideLegal").then(m => ({ default: m.SlideLegal })));
const SlideMonetization = lazy(() => import("@/components/pitch/slides/SlideMonetization").then(m => ({ default: m.SlideMonetization })));
const SlideRoadmap = lazy(() => import("@/components/pitch/slides/SlideRoadmap").then(m => ({ default: m.SlideRoadmap })));
const SlideDemo = lazy(() => import("@/components/pitch/slides/SlideDemo").then(m => ({ default: m.SlideDemo })));
const SlideClosing = lazy(() => import("@/components/pitch/slides/SlideClosing").then(m => ({ default: m.SlideClosing })));
const SlideRisks = lazy(() => import("@/components/pitch/slides/SlideRisks").then(m => ({ default: m.SlideRisks })));
const SlideDivider = lazy(() => import("@/components/pitch/slides/SlideDivider").then(m => ({ default: m.SlideDivider })));
const DeepDive = lazy(() => import("@/components/pitch/DeepDive").then(m => ({ default: m.DeepDive })));

const Index = () => {
  const [current, setCurrent] = useState(0);
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
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [prev, next, goTo]);

  const renderSlide = () => {
    switch (current) {
      case 0:  return <SlideOpening />;
      case 1:  return <SlideDivider num="I"   kicker="Capítulo 1" title="El Problema."  hanzi="问" tone="copper" />;
      case 2:  return <SlideContext />;
      case 3:  return <SlideProblem />;
      case 4:  return <SlideDivider num="II"  kicker="Capítulo 2" title="La Solución."  hanzi="解" tone="primary" />;
      case 5:  return <SlideSolution />;
      case 6:  return <SlideMarket />;
      case 7:  return <SlideDivider num="III" kicker="Capítulo 3" title="El Negocio."   hanzi="业" tone="success" />;
      case 8:  return <SlideMonetization />;
      case 9:  return <SlideRoadmap />;
      case 10: return <SlideRisks />;
      case 11: return <SlideLegal />;
      case 12: return <SlideDivider num="IV"  kicker="Capítulo 4" title="El Cierre."    hanzi="终" tone="primary" />;
      case 13: return <SlideDemo />;
      case 14: return <SlideClosing onOpenDeepDive={openDeepDive} />;
      default: return <SlideOpening />;
    }
  };

  return (
    <main className="min-h-screen bg-background text-foreground">
      <TopNav current={current} onSelect={goTo} onOpenDeepDive={openDeepDive} />

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

      <BottomDock current={current} onSelect={goTo} onPrev={prev} onNext={next} />

      <Suspense fallback={null}>
        <DeepDive innerRef={deepDiveRef} />
      </Suspense>

      <ZoomControl />
    </main>
  );
};

export default Index;
