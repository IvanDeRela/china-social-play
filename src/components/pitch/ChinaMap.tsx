import { useEffect } from "react";
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

interface ChinaMapProps {
  className?: string;
}

const ChinaBoundary = () => {
  // Lightweight: fetch boundary from public CDN at runtime
  // Use a simple country highlight via Natural Earth simplified china
  return null;
};

export const ChinaMap = ({ className }: ChinaMapProps) => {
  useEffect(() => {
    // Fix default icon path issue (not strictly needed since we use CircleMarker)
    delete (L.Icon.Default.prototype as any)._getIconUrl;
  }, []);

  return (
    <div className={className} style={{ position: "relative" }}>
      <MapContainer
        center={[34, 104]}
        zoom={4}
        scrollWheelZoom={false}
        zoomControl={false}
        attributionControl={false}
        style={{ width: "100%", height: "100%", borderRadius: "0.75rem", background: "hsl(var(--card))" }}
      >
        <TileLayer
          url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
        />
        {cities.map((c) => {
          const color = c.tier === 1 ? "hsl(180, 70%, 40%)" : "hsl(20, 70%, 50%)";
          return (
            <CircleMarker
              key={c.name}
              center={[c.lat, c.lng]}
              radius={c.tier === 1 ? 12 : 8}
              pathOptions={{
                color,
                weight: 3,
                fillColor: color,
                fillOpacity: 0.35,
              }}
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
      <div className="absolute bottom-2 right-2 z-[400] text-[9px] font-mono text-muted-foreground/70 bg-card/80 px-2 py-1 rounded">
        © OpenStreetMap · CARTO
      </div>
    </div>
  );
};
