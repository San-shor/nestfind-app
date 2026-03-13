"use client";

import { useEffect, useRef } from "react";

interface Props {
  lat: number;
  lng: number;
  title: string;
}

export default function LeafletMap({ lat, lng, title }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const mapRef = useRef<any>(null);

  useEffect(() => {
    if (!ref.current || mapRef.current) return;

    
    import("leaflet").then((L) => {
      
      delete (L.Icon.Default.prototype as any)._getIconUrl;
      L.Icon.Default.mergeOptions({
        iconRetinaUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
        iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
        shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
      });

      mapRef.current = L.map(ref.current!, {
        zoomControl: true,
        scrollWheelZoom: false,
      }).setView([lat, lng], 15);

      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution: '© <a href="https://www.openstreetmap.org">OpenStreetMap</a>',
      }).addTo(mapRef.current);

      const icon = L.divIcon({
        html: `<div style="width:36px;height:36px;background:#b8914a;border-radius:50% 50% 50% 0;transform:rotate(-45deg);border:3px solid #1a1714;box-shadow:0 3px 12px rgba(0,0,0,.35)"></div>`,
        iconSize: [36, 36],
        iconAnchor: [18, 36],
        className: "",
      });

      L.marker([lat, lng], { icon })
        .addTo(mapRef.current)
        .bindPopup(
          `<strong style="font-family:Georgia,serif;font-size:13px">${title}</strong>`,
          { offset: [0, -32] }
        )
        .openPopup();
    });

    return () => {
      if (mapRef.current) {
        mapRef.current.remove();
        mapRef.current = null;
      }
    };
  }, [lat, lng, title]);

  return <div ref={ref} style={{ width: "100%", height: "100%" }} />;
}
