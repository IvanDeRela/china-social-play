import { useState } from "react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import { slides } from "./TopNav";

interface ExportPdfProps {
  current: number;
  goTo: (idx: number) => void;
}

const wait = (ms: number) => new Promise((r) => setTimeout(r, ms));

function getBgColor(): string {
  const bg = getComputedStyle(document.body).backgroundColor;
  return bg && bg !== "rgba(0, 0, 0, 0)" ? bg : "#fafaf7";
}

async function captureSlide(): Promise<HTMLCanvasElement> {
  const el =
    (document.querySelector("main > div section") as HTMLElement) ||
    (document.querySelector("main > div > div") as HTMLElement) ||
    (document.querySelector("main") as HTMLElement);
  if (!el) throw new Error("Slide no encontrada");
  return html2canvas(el, {
    backgroundColor: getBgColor(),
    scale: 2,
    useCORS: true,
    logging: false,
    windowWidth: document.documentElement.clientWidth,
    windowHeight: document.documentElement.clientHeight,
  });
}

function addCanvasToPdf(pdf: jsPDF, canvas: HTMLCanvasElement, first: boolean, bg: string) {
  const pageW = pdf.internal.pageSize.getWidth();
  const pageH = pdf.internal.pageSize.getHeight();
  const ratio = Math.min(pageW / canvas.width, pageH / canvas.height);
  const w = canvas.width * ratio;
  const h = canvas.height * ratio;
  const x = (pageW - w) / 2;
  const y = (pageH - h) / 2;
  if (!first) pdf.addPage();
  pdf.setFillColor(bg);
  pdf.rect(0, 0, pageW, pageH, "F");
  pdf.addImage(canvas.toDataURL("image/jpeg", 0.92), "JPEG", x, y, w, h);
}

export const ExportPdf = ({ current, goTo }: ExportPdfProps) => {
  const [open, setOpen] = useState(false);
  const [busy, setBusy] = useState<string | null>(null);

  const exportRisks = async () => {
    setBusy("Exportando Riesgos…");
    setOpen(false);
    const previous = current;
    try {
      goTo(12);
      await wait(900);
      const canvas = await captureSlide();
      const pdf = new jsPDF({
        orientation: "landscape",
        unit: "px",
        format: [canvas.width, canvas.height],
        compress: true,
      });
      addCanvasToPdf(pdf, canvas, true, getBgColor());
      pdf.save("FantasyChina-Riesgos.pdf");
    } catch (e) {
      console.error(e);
      alert("No se pudo exportar el PDF.");
    } finally {
      goTo(previous);
      setBusy(null);
    }
  };

  const exportAll = async () => {
    setOpen(false);
    const previous = current;
    const pdf = new jsPDF({
      orientation: "landscape",
      unit: "px",
      format: [1600, 900],
      compress: true,
    });
    try {
      for (let i = 0; i < slides.length; i++) {
        setBusy(`Exportando ${i + 1}/${slides.length}…`);
        goTo(i);
        await wait(750);
        const canvas = await captureSlide();
        addCanvasToPdf(pdf, canvas, i === 0, getBgColor());
      }
      pdf.save("FantasyChina-Pitch.pdf");
    } catch (e) {
      console.error(e);
      alert("No se pudo exportar el PDF completo.");
    } finally {
      goTo(previous);
      setBusy(null);
    }
  };

  return (
    <div className="fixed top-4 right-16 z-[60]">
      <button
        onClick={() => setOpen((v) => !v)}
        disabled={!!busy}
        aria-label="Exportar a PDF"
        title="Exportar a PDF"
        className="grid h-10 w-10 place-items-center rounded-full border border-border bg-card/90 backdrop-blur shadow-elevated text-foreground hover:text-primary hover:border-primary/40 transition-colors disabled:opacity-50"
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
          <path d="M14 2v6h6"/>
          <path d="M12 18v-6"/>
          <path d="m9 15 3 3 3-3"/>
        </svg>
      </button>

      {busy && (
        <div className="absolute right-0 mt-2 whitespace-nowrap rounded-md border border-border bg-card/95 backdrop-blur px-3 py-2 text-xs font-mono text-muted-foreground shadow-elevated">
          {busy}
        </div>
      )}

      {open && !busy && (
        <div className="absolute right-0 mt-2 w-56 rounded-lg border border-border bg-card/95 backdrop-blur shadow-elevated overflow-hidden">
          <button
            onClick={exportRisks}
            className="block w-full text-left px-4 py-2.5 text-sm hover:bg-muted/60 hover:text-primary transition-colors"
          >
            Solo diapositiva Riesgos
          </button>
          <button
            onClick={exportAll}
            className="block w-full text-left px-4 py-2.5 text-sm border-t border-border hover:bg-muted/60 hover:text-primary transition-colors"
          >
            Presentación completa
          </button>
        </div>
      )}
    </div>
  );
};
