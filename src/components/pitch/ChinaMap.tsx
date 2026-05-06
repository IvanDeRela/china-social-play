import { useEffect, useState } from "react";
import { MapContainer, TileLayer, CircleMarker, Tooltip, GeoJSON } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

/** Ciudades clave (Tier 1 / 2) con coordenadas reales. */
const cities = [
  { name: "Pekín",     lat: 39.9042, lng: 116.4074, tier: 1 },
  { name: "Shanghái",  lat: 31.2304, lng: 121.4737, tier: 1 },
  { name: "Shenzhen",  lat: 22.5431, lng: 114.0579, tier: 1 },
  { name: "Guangzhou", lat: 23.1291, lng: 113.2644, tier: 1 },
  { name: "Hong Kong", lat: 22.3193, lng: 114.1694, tier: 1 },
  { name: "Chengdu",   lat: 30.5728, lng: 104.0668, tier: 2 },
  { name: "Wuhan",     lat: 30.5928, lng: 114.3055, tier: 2 },
  { name: "Xi'an",     lat: 34.3416, lng: 108.9398, tier: 2 },
  { name: "Hangzhou",  lat: 30.2741, lng: 120.1551, tier: 2 },
];

const tier1Cities = cities.filter((c) => c.tier === 1).map((c) => c.name);
const tier2Cities = cities.filter((c) => c.tier === 2).map((c) => c.name);

interface ChinaMapProps {
  className?: string;
}

export const ChinaMap = ({ className }: ChinaMapProps) => {
  const [chinaGeo, setChinaGeo] = useState<any>(null);

  useEffect(() => {
    delete (L.Icon.Default.prototype as any)._getIconUrl;
    // Boundary GeoJSON (country outlines)
    fetch("https://raw.githubusercontent.com/datasets/geo-countries/master/data/countries.geojson")
      .then((r) => r.json())
      .then((data) => {
        const china = data.features.find(
          (f: any) => f.properties?.ISO_A3 === "CHN" || f.properties?.ADMIN === "China"
        );
        if (china) setChinaGeo(china);
      })
      .catch(() => {});
  }, []);

  return (
    <div className={className} style={{ position: "relative" }}>
      <MapContainer
        center={[34, 104]}
        zoom={4}
        minZoom={3}
        maxZoom={8}
        scrollWheelZoom={true}
        zoomControl={true}
        attributionControl={false}
        style={{ width: "100%", height: "100%", borderRadius: "0.75rem", background: "hsl(var(--card))" }}
      >
        <TileLayer url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png" />

        {chinaGeo && (
          <GeoJSON
            data={chinaGeo}
            style={{
              color: "hsl(180, 70%, 40%)",
              weight: 2,
              fillColor: "hsl(180, 70%, 40%)",
              fillOpacity: 0.06,
              dashArray: "4 4",
            }}
          />
        )}

        {cities.map((c) => {
          const color = c.tier === 1 ? "hsl(180, 70%, 40%)" : "hsl(20, 70%, 50%)";
          return (
            <CircleMarker
              key={c.name}
              center={[c.lat, c.lng]}
              radius={c.tier === 1 ? 12 : 8}
              pathOptions={{ color, weight: 3, fillColor: color, fillOpacity: 0.35 }}
            >
              <Tooltip
                permanent
                direction="right"
                offset={[8, 0]}
                className="!bg-transparent !border-0 !shadow-none !text-xs !font-mono !font-bold !text-foreground"
              >
                {c.name}
              </Tooltip>
            </CircleMarker>
          );
        })}
      </MapContainer>

      {/* Leyenda */}
      <div className="absolute bottom-3 left-3 z-[400] bg-card/95 backdrop-blur border border-border rounded-lg p-3 shadow-card max-w-[260px]">
        <div className="font-mono text-[9px] uppercase tracking-[0.25em] text-muted-foreground mb-2">
          Leyenda
        </div>
        <div className="flex items-start gap-2 mb-2">
          <span className="mt-1 h-2.5 w-2.5 rounded-full bg-primary shrink-0" style={{ background: "hsl(180, 70%, 40%)" }} />
          <div className="text-[10px] leading-tight">
            <div className="font-bold text-foreground font-mono">Tier 1</div>
            <div className="text-muted-foreground">{tier1Cities.join(", ")}</div>
          </div>
        </div>
        <div className="flex items-start gap-2">
          <span className="mt-1 h-2.5 w-2.5 rounded-full shrink-0" style={{ background: "hsl(20, 70%, 50%)" }} />
          <div className="text-[10px] leading-tight">
            <div className="font-bold text-foreground font-mono">Tier 2</div>
            <div className="text-muted-foreground">{tier2Cities.join(", ")}</div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-2 right-2 z-[400] text-[9px] font-mono text-muted-foreground/70 bg-card/80 px-2 py-1 rounded">
        © OpenStreetMap · CARTO
      </div>
    </div>
  );
};
