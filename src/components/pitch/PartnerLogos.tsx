/** Target / trusted-by partner logos as monochrome SVG wordmarks. */
const partners = [
  { name: "WeChat",     w: "WeChat" },
  { name: "Tencent",    w: "Tencent" },
  { name: "LaLiga",     w: "LaLiga" },
  { name: "Premier",    w: "Premier League" },
  { name: "ICEX",       w: "ICEX" },
  { name: "Casa Asia",  w: "Casa Asia" },
];

export const PartnerLogos = ({ label = "Target partners" }: { label?: string }) => {
  return (
    <div className="rounded-2xl border border-border bg-card/50 px-6 py-4 backdrop-blur shadow-card">
      <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground mb-3 text-center">
        {label}
      </div>
      <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
        {partners.map((p) => (
          <span
            key={p.name}
            className="font-serif text-lg md:text-xl text-foreground/55 tracking-tight hover:text-primary transition-colors"
          >
            {p.w}
          </span>
        ))}
      </div>
    </div>
  );
};
