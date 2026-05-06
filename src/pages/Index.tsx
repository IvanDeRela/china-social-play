import { useEffect, useRef, useState, useCallback } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { TopNav, slides } from "@/components/pitch/TopNav";
import { BottomDock } from "@/components/pitch/BottomDock";
import { SlideOpening } from "@/components/pitch/slides/SlideOpening";
import { SlideContext } from "@/components/pitch/slides/SlideContext";
import { SlideProblem } from "@/components/pitch/slides/SlideProblem";
import { SlideSolution } from "@/components/pitch/slides/SlideSolution";
import { SlideMarket } from "@/components/pitch/slides/SlideMarket";
import { SlideLegal } from "@/components/pitch/slides/SlideLegal";
import { SlideMonetization } from "@/components/pitch/slides/SlideMonetization";
import { SlideRoadmap } from "@/components/pitch/slides/SlideRoadmap";
import { SlideDemo } from "@/components/pitch/slides/SlideDemo";
import { SlideClosing } from "@/components/pitch/slides/SlideClosing";
import { SlideRisks } from "@/components/pitch/slides/SlideRisks";
import { SlideDivider } from "@/components/pitch/slides/SlideDivider";
import { DeepDive } from "@/components/pitch/DeepDive";
import { ZoomControl } from "@/components/pitch/ZoomControl";

const Index = () => {
  const [current, setCurrent] = useState(0);
  const deepDiveRef = useRef<HTMLDivElement>(null);

  const goTo = useCallback(
    (idx: number) => {
      const clamped = Math.max(0, Math.min(slides.length - 1, idx));
      setCurrent(clamped);
      // scroll back to top of slide area
      window.scrollTo({ top: 0, behavior: "smooth" });
    },
    [],
  );

  const prev = useCallback(() => goTo(current - 1), [current, goTo]);
  const next = useCallback(() => goTo(current + 1), [current, goTo]);

  const openDeepDive = useCallback(() => {
    deepDiveRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  }, []);

  // Keyboard nav
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

      {/* Slide canvas */}
      <div className="relative">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            {renderSlide()}
          </motion.div>
        </AnimatePresence>
      </div>

      <BottomDock current={current} onSelect={goTo} onPrev={prev} onNext={next} />

      {/* Deep dive section */}
      <DeepDive innerRef={deepDiveRef} />
    </main>
  );
};

export default Index;
