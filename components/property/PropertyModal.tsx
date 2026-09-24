"use client";

import { useEffect } from "react";
import dynamic from "next/dynamic";
import { X, MapPin } from "lucide-react";
import { formatPrice } from "@/lib/utils";
import { agents } from "@/data/agents";
import ImageGallery from "@/components/ui/ImageGallery";
import AgentCard from "@/components/ui/AgentCard";
import type { Property } from "@/lib/types";

const LeafletMap = dynamic(() => import("@/components/ui/LeafletMap"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full bg-[#e8e0d0] flex items-center justify-center text-sm text-[#8a8070]">
      Loading map…
    </div>
  ),
});

interface Props {
  property: Property;
  onClose: () => void;
}

const STAT_ICONS: Record<string, string> = {
  Bedrooms: "🛏",
  Bathrooms: "🚿",
  "Sq Feet": "📐",
  Garage: "🚗",
};

export default function PropertyModal({ property: p, onClose }: Props) {
  const agent = agents[p.agentId];

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = ""; };
  }, []);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onClose]);

  const stats = [
    { lbl: "Bedrooms", val: p.beds },
    { lbl: "Bathrooms", val: p.baths },
    { lbl: "Sq Feet", val: `${(p.sqft / 1000).toFixed(1)}k` },
    { lbl: "Garage", val: p.garage },
  ];

  return (
    <div
      className="fixed inset-0 z-[500] overflow-y-auto flex items-start justify-center px-4 py-8"
      style={{ background: "rgba(20,16,12,.75)" }}
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <div
        className="bg-[#faf7f2] rounded-2xl max-w-[980px] w-full shadow-xl overflow-hidden relative my-auto"
        style={{ animation: "slideUp .3s cubic-bezier(.22,.68,0,1.2)" }}
      >
        <style>{`@keyframes slideUp{from{opacity:0;transform:translateY(40px)}to{opacity:1;transform:translateY(0)}}`}</style>

        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-black/60 hover:bg-black text-white flex items-center justify-center transition-colors"
        >
          <X size={16} />
        </button>

        <ImageGallery images={p.images} title={p.title} />

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_300px]">
          <div className="p-7 md:p-9">
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="text-[0.68rem] font-bold tracking-[1px] uppercase px-3 py-1 rounded-md bg-[#e8dfcf] text-[#4a4540] border border-[#ddd5c4]">
                {p.type}
              </span>
              <span
                className="text-[0.68rem] font-bold tracking-[1px] uppercase px-3 py-1 rounded-md text-white"
                style={{ background: p.status === "For Rent" ? "#3d5c3d" : "#1a1714" }}
              >
                {p.status}
              </span>
              {p.featured && (
                <span className="text-[0.68rem] font-bold tracking-[1px] uppercase px-3 py-1 rounded-md bg-[#b8914a] text-[#1a1714]">
                  ★ Featured
                </span>
              )}
            </div>

            <h2 className="font-display text-2xl md:text-3xl font-bold mb-2">{p.title}</h2>
            <div className="flex items-center gap-2 text-sm text-[#8a8070] mb-6">
              <MapPin size={13} />
              {p.location} &nbsp;·&nbsp; Built {p.year}
            </div>

            <div className="flex items-baseline gap-2 pb-7 border-b border-[#ddd5c4] mb-7">
              <span className="font-display text-4xl font-bold">{formatPrice(p.price)}</span>
              {p.status === "For Rent" && (
                <span className="text-sm text-[#8a8070]">per month</span>
              )}
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-7">
              {stats.map((s) => (
                <div key={s.lbl} className="bg-[#f3ede3] rounded-xl p-3 text-center">
                  <div className="text-xl mb-1">{STAT_ICONS[s.lbl]}</div>
                  <div className="font-display text-xl font-bold">{s.val}</div>
                  <div className="text-[0.65rem] text-[#8a8070] uppercase tracking-wide mt-0.5">{s.lbl}</div>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-2 mb-7">
              {p.tags.map((t) => (
                <span
                  key={t}
                  className="text-xs font-semibold px-3 py-1.5 rounded-full"
                  style={{ background: "#f5ead4", color: "#b8914a", border: "1px solid rgba(184,145,74,.25)" }}
                >
                  {t}
                </span>
              ))}
            </div>

            <p className="text-[0.68rem] font-bold tracking-[1.5px] uppercase text-[#8a8070] mb-2">
              About this property
            </p>
            <p className="text-sm leading-relaxed text-[#4a4540] mb-8">{p.description}</p>

            <p className="text-[0.68rem] font-bold tracking-[1.5px] uppercase text-[#8a8070] mb-3">
              Location
            </p>
            <div className="h-[220px] rounded-xl overflow-hidden border border-[#ddd5c4]">
              <LeafletMap lat={p.lat} lng={p.lng} title={p.title} />
            </div>
          </div>

          <AgentCard agent={agent} property={p} />
        </div>
      </div>
    </div>
  );
}
