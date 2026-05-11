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
      { n: "04", cite: <>Standing Committee of the National People's Congress (SCNPC). (2017, junio). <em>Cybersecurity Law of the People's Republic of China</em>. <a className="text-primary hover:underline" href="http://www.npc.gov.cn/npc/c30834/201611/270b43e8b35e4f7ea98502b6f0e26f8a.shtml" target="_blank" rel="noopener noreferrer">npc.gov.cn</a></> },
      { n: "05", cite: <>SCNPC. (2021, agosto). <em>Personal Information Protection Law (PIPL)</em>. <a className="text-primary hover:underline" href="http://www.npc.gov.cn/npc/c30834/202108/a8c4e3672c74491a80b53a172bb753fe.shtml" target="_blank" rel="noopener noreferrer">npc.gov.cn</a></> },
      { n: "06", cite: <>Cyberspace Administration of China (CAC). (2024). <em>Annual Cybersecurity Report</em>. <a className="text-primary hover:underline" href="http://www.cac.gov.cn/" target="_blank" rel="noopener noreferrer">cac.gov.cn</a></> },
    ],
  },
  {
    title: "Energía y red eléctrica",
    items: [
      { n: "07", cite: <>International Energy Agency (IEA). (2024). <em>Electricity 2024: Analysis and forecast to 2026</em>. IEA. <a className="text-primary hover:underline" href="https://www.iea.org/reports/electricity-2024" target="_blank" rel="noopener noreferrer">iea.org</a></> },
      { n: "08", cite: <>National Energy Administration of China (NEA). (2025, enero). <em>2024 National Power Industry Statistics</em>. <a className="text-primary hover:underline" href="http://www.nea.gov.cn/" target="_blank" rel="noopener noreferrer">nea.gov.cn</a></> },
      { n: "09", cite: <>China Electricity Council (CEC). (2024). <em>Annual Development Report on the Power Industry</em>. <a className="text-primary hover:underline" href="https://english.cec.org.cn/" target="_blank" rel="noopener noreferrer">cec.org.cn</a></> },
    ],
  },
  {
    title: "Centros de datos · Línea Hu",
    items: [
      { n: "10", cite: <>National Development and Reform Commission (NDRC). (2022, febrero). <em>Notice on the implementation of the National Integrated Big Data Center Collaborative Innovation System</em>. <a className="text-primary hover:underline" href="https://en.ndrc.gov.cn/" target="_blank" rel="noopener noreferrer">ndrc.gov.cn</a></> },
      { n: "11", cite: <>Synergy Research Group. (2024). <em>Hyperscale Data Center Capacity Worldwide</em>. <a className="text-primary hover:underline" href="https://www.srgresearch.com/articles" target="_blank" rel="noopener noreferrer">srgresearch.com</a></> },
      { n: "12", cite: <>Hu, H. (1935). The distribution of China's population, with statistical tables and density maps. <em>Acta Geographica Sinica</em>, 2(2), 33—74. <a className="text-primary hover:underline" href="https://en.wikipedia.org/wiki/Hu_Line" target="_blank" rel="noopener noreferrer">en.wikipedia.org/wiki/Hu_Line</a></> },
    ],
  },
  {
    title: "Belt & Road · Digital Silk Road",
    items: [
      { n: "13", cite: <>State Council Information Office of the People's Republic of China (SCIO). (2023, octubre). <em>The Belt and Road Initiative: A Key Pillar of the Global Community of Shared Future</em>. <a className="text-primary hover:underline" href="http://english.scio.gov.cn/" target="_blank" rel="noopener noreferrer">scio.gov.cn</a></> },
      { n: "14", cite: <>BeiDou Navigation Satellite System Office (BDSC). (2024). <em>BeiDou Open Service Performance Standard</em>. <a className="text-primary hover:underline" href="http://en.beidou.gov.cn/" target="_blank" rel="noopener noreferrer">en.beidou.gov.cn</a></> },
      { n: "15", cite: <>PEACE Cable International. (2022). <em>PEACE Submarine Cable System</em>. <a className="text-primary hover:underline" href="https://www.peacecable.net/" target="_blank" rel="noopener noreferrer">peacecable.net</a></> },
    ],
  },
  {
    title: "España—China · LaLiga · mercado",
    items: [
      { n: "16", cite: <>LaLiga. (2024). <em>LaLiga Business in China — Annual Overview</em>. <a className="text-primary hover:underline" href="https://www.laliga.com/en-GB/news" target="_blank" rel="noopener noreferrer">laliga.com</a></> },
      { n: "17", cite: <>Casa Asia. (2025). <em>50 aniversario de las relaciones diplomáticas España—China</em>. <a className="text-primary hover:underline" href="https://www.casaasia.es/" target="_blank" rel="noopener noreferrer">casaasia.es</a></> },
      { n: "18", cite: <>ICEX España Exportación e Inversiones. (2024). <em>Informe económico y comercial: China</em>. <a className="text-primary hover:underline" href="https://www.icex.es/es/quienes-somos/donde-estamos/red-exterior-de-comercio/CN" target="_blank" rel="noopener noreferrer">icex.es</a></> },
      { n: "19", cite: <>iResearch. (2024). <em>China Mobile Sports & Gaming Market Report</em>. <a className="text-primary hover:underline" href="https://www.iresearchchina.com/" target="_blank" rel="noopener noreferrer">iresearchchina.com</a></> },
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

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-h-[62vh] overflow-y-auto pr-2">
        {refGroups.map((g) => (
          <div
            key={g.title}
            className="rounded-2xl border border-border bg-card p-4"
          >
            <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-primary mb-2">
              {g.title}
            </div>
            <ul className="space-y-2">
              {g.items.map((it) => (
                <li key={it.n} className="flex gap-2.5 text-[12px] leading-relaxed text-foreground/90">
                  <span className="font-mono text-[11px] font-bold text-primary shrink-0 mt-0.5">{it.n}</span>
                  <span>{it.cite}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </SlideShell>
  );
};
