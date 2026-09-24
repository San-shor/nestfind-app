"use client";

import { useState } from "react";
import Image from "next/image";
import { MapPin, Bed, Bath, Square, Car } from "lucide-react";
import { formatPrice } from "@/lib/utils";
import type { Property } from "@/lib/types";

interface Props {
  property: Property;
  view: "grid" | "list";
  onClick: (p: Property) => void;
}

function StatusBadge({ status, featured }: { status: string; featured: boolean }) {
  if (featured)
    return <span className="absolute top-3 left-3 text-[0.65rem] font-bold tracking-[1.2px] uppercase px-2.5 py-1 rounded-md bg-[#b8914a] text-[#1a1714]">★ Featured</span>;
  if (status === "For Rent")
    return <span className="absolute top-3 left-3 text-[0.65rem] font-bold tracking-[1.2px] uppercase px-2.5 py-1 rounded-md bg-[#3d5c3d] text-white">For Rent</span>;
  return <span className="absolute top-3 left-3 text-[0.65rem] font-bold tracking-[1.2px] uppercase px-2.5 py-1 rounded-md bg-[#1a1714] text-[#faf7f2]">For Sale</span>;
}

export default function PropertyCard({ property: p, view, onClick }: Props) {
  const [fav, setFav] = useState(false);

  const feats = [
    { icon: <Bed size={13} />, val: p.beds, lbl: "Beds" },
    { icon: <Bath size={13} />, val: p.baths, lbl: "Baths" },
    { icon: <Square size={13} />, val: `${(p.sqft / 1000).toFixed(1)}k`, lbl: "sqft" },
    { icon: <Car size={13} />, val: p.garage, lbl: "Garage" },
  ];

  if (view === "list") {
    return (
      <div
        className="property-card bg-white border border-[#ddd5c4] rounded-2xl overflow-hidden shadow-sm flex flex-col sm:flex-row cursor-pointer hover:-translate-y-1 hover:shadow-md transition-all duration-200"
        onClick={() => onClick(p)}
      >
        <div className="relative w-full max-sm:h-52 sm:w-[280px] flex-shrink-0 self-stretch overflow-hidden bg-[#e8e0d0]">
          <Image src={p.images[0]} alt={p.title} fill className="property-img object-cover" sizes="280px"/>
          <StatusBadge status={p.status} featured={p.featured} />
        </div>
        <div className="flex-1 p-6 flex flex-col justify-between min-w-0">
          <div>
            <div className="font-display text-3xl font-bold flex items-baseline gap-1.5 mb-1">
              {formatPrice(p.price)}
              {p.status === "For Rent" && <span className="font-sans text-sm font-normal text-[#8a8070]">/month</span>}
            </div>
            <div className="text-sm font-medium text-[#2f2b26] mb-1.5">{p.title}</div>
            <div className="flex items-center gap-1.5 text-xs text-[#8a8070] mb-3">
              <MapPin size={11} />{p.location}
            </div>
            <div className="flex flex-wrap gap-1.5">
              {p.tags.map((t) => (
                <span key={t} className="text-[0.7rem] font-medium bg-[#f3ede3] text-[#4a4540] border border-[#ddd5c4] px-2.5 py-0.5 rounded-full">{t}</span>
              ))}
            </div>
          </div>
          <div className="flex justify-between items-end flex-wrap gap-3 mt-4">
            <div className="flex gap-5">
              {feats.map((f) => (
                <div key={f.lbl} className="flex items-center gap-1.5 text-xs text-[#8a8070]">
                  {f.icon}<strong className="text-[#1a1714] font-semibold">{f.val}</strong> {f.lbl}
                </div>
              ))}
            </div>
            <span className="text-xs font-semibold text-[#b8914a]">View details →</span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      className="property-card bg-white border border-[#ddd5c4] rounded-2xl overflow-hidden shadow-sm cursor-pointer hover:-translate-y-1.5 hover:shadow-lg transition-all duration-300"
      onClick={() => onClick(p)}
    >
      <div className="relative h-[228px] overflow-hidden bg-[#e8e0d0]">
        <Image src={p.images[0]} alt={p.title} fill className="property-img object-cover" sizes="400px"/>
        <StatusBadge status={p.status} featured={p.featured} />
        <button
          className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/90 flex items-center justify-center text-sm shadow-md hover:scale-110 transition-transform"
          onClick={(e) => { e.stopPropagation(); setFav((v) => !v); }}
        >
          {fav ? "❤️" : "🤍"}
        </button>
      </div>
      <div className="p-5">
        <div className="font-display text-[1.65rem] font-bold flex items-baseline gap-1.5 mb-1.5">
          {formatPrice(p.price)}
          {p.status === "For Rent" && <span className="font-sans text-sm font-normal text-[#8a8070]">/month</span>}
        </div>
        <div className="text-sm font-medium text-[#2f2b26] mb-2 leading-snug">{p.title}</div>
        <div className="flex items-center gap-1.5 text-xs text-[#8a8070] mb-4">
          <MapPin size={11} />{p.location}
        </div>
        <div className="flex border-t border-[#ddd5c4] pt-3.5">
          {feats.map((f, i) => (
            <div key={f.lbl} className={`flex-1 flex flex-col items-center gap-0.5 text-xs text-[#8a8070] ${i < feats.length - 1 ? "border-r border-[#ddd5c4]" : ""}`}>
              <span className="text-base mb-0.5">{f.icon}</span>
              <strong className="text-sm font-semibold text-[#1a1714]">{f.val}</strong>
              <span>{f.lbl}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
