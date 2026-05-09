import { motion } from "framer-motion";
import { BookOpen } from "lucide-react";
import { SlideShell } from "../SlideShell";
import { Eyebrow } from "../Eyebrow";

/** Slide final · bibliografía completa en formato APA 7. */
const refGroups: { title: string; items: { n: string; cite: React.ReactNode }[] }[] = [
  {
    title: "Internet, usuarios y conectividad",
    items: [
      { n: "01", cite: <>China Internet Network Information Center (CNNIC). (2024, agosto). <em>54th Statistical Report on Internet Development in China</em>. CNNIC. <a className="text-primary hover:underline" href="https://www.cnnic.com.cn/IDR/ReportDownloads/" target="_blank" rel="noopener noreferrer">cnnic.com.cn</a></> },
      { n: "02", cite: <>Ministry of Industry and Information Technology of the People's Republic of China (MIIT). (2024, diciembre). <em>Communications Industry Statistical Report 2024</em>. <a className="text-primary hover:underline" href="https://www.miit.gov.cn/jgsj/yxj/" target="_blank" rel="noopener noreferrer">miit.gov.cn</a></> },
      { n: "03", cite: <>Tencent Holdings Limited. (2024, noviembre). <em>2024 Q3 Results Announcement</em>. <a className="text-primary hover:underline" href="https://www.tencent.com/en-us/investors/financial-news.html" target="_blank" rel="noopener noreferrer">tencent.com</a></> },
    ],
  },
  {
    title: "Marco legal y Gran Firewall",
    items: [
      { n: "04", cite: <>Standing Committee of the National People's Congress (SCNPC). (2017, junio). <em>Cybersecurity Law of the People's Republic of China</em>.</> },
      { n: "05", cite: <>SCNPC. (2021, agosto). <em>Personal Information Protection Law (PIPL)</em>.</> },
      { n: "06", cite: <>Cyberspace Administration of China (CAC). (2024). <em>Annual Cybersecurity Report</em>.</> },
    ],
  },
  {
    title: "Energía y red eléctrica",
    items: [
      { n: "07", cite: <>International Energy Agency (IEA). (2024). <em>Electricity 2024: Analysis and forecast to 2026</em>. IEA.</> },
      { n: "08", cite: <>National Energy Administration of China (NEA). (2025, enero). <em>2024 National Power Industry Statistics</em>.</> },
      { n: "09", cite: <>China Electricity Council (CEC). (2024). <em>Annual Development Report on the Power Industry</em>.</> },
    ],
  },
  {
    title: "Centros de datos · Línea Hu",
    items: [
      { n: "10", cite: <>National Development and Reform Commission (NDRC). (2022, febrero). <em>Notice on the implementation of the National Integrated Big Data Center Collaborative Innovation System</em>.</> },
      { n: "11", cite: <>Synergy Research Group. (2024). <em>Hyperscale Data Center Capacity Worldwide</em>.</> },
      { n: "12", cite: <>Hu, H. (1935). The distribution of China's population, with statistical tables and density maps. <em>Acta Geographica Sinica</em>, 2(2), 33—74.</> },
    ],
  },
  {
    title: "Belt & Road · Digital Silk Road",
    items: [
      { n: "13", cite: <>State Council Information Office of the People's Republic of China (SCIO). (2023, octubre). <em>The Belt and Road Initiative: A Key Pillar of the Global Community of Shared Future</em>.</> },
      { n: "14", cite: <>BeiDou Navigation Satellite System Office (BDSC). (2024). <em>BeiDou Open Service Performance Standard</em>.</> },
      { n: "15", cite: <>PEACE Cable International. (2022). <em>PEACE Submarine Cable System</em>.</> },
    ],
  },
  {
    title: "España—China · LaLiga · mercado",
    items: [
      { n: "16", cite: <>LaLiga. (2024). <em>LaLiga Business in China — Annual Overview</em>.</> },
      { n: "17", cite: <>Casa Asia. (2025). <em>50 aniversario de las relaciones diplomáticas España—China</em>.</> },
      { n: "18", cite: <>ICEX España Exportación e Inversiones. (2024). <em>Informe económico y comercial: China</em>.</> },
      { n: "19", cite: <>iResearch. (2024). <em>China Mobile Sports & Gaming Market Report</em>.</> },
    ],
  },
];

export const SlideReferences = () => {
  return (
    <SlideShell chapter="12" chapterLabel="Referencias" watermark="源">
      <div className="flex items-center gap-3 mb-2">
        <BookOpen className="h-6 w-6 text-primary" />
        <Eyebrow color="primary">Bibliografía · APA 7</Eyebrow>
      </div>

      <motion.h2
        initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
        className="display-xl text-4xl md:text-5xl lg:text-6xl mt-4 mb-6 max-w-4xl"
      >
        De dónde sale <span className="font-serif italic text-primary">cada dato</span>.
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-h-[60vh] overflow-y-auto pr-2">
        {refGroups.map((g, gi) => (
          <motion.div
            key={g.title}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 + gi * 0.05 }}
            className="rounded-2xl border border-border bg-card p-5 shadow-card"
          >
            <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-primary mb-3">
              {g.title}
            </div>
            <ul className="space-y-2.5">
              {g.items.map((it) => (
                <li key={it.n} className="flex gap-3 text-[12.5px] leading-relaxed text-foreground/90">
                  <span className="font-mono text-[11px] font-bold text-primary shrink-0 mt-0.5">{it.n}</span>
                  <span>{it.cite}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </SlideShell>
  );
};
