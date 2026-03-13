"use client";

import PropertyCard from "./PropertyCard";
import type { Property, ViewMode } from "@/lib/types";

interface Props {
  properties: Property[];
  view: ViewMode;
  onSelect: (p: Property) => void;
  onReset: () => void;
}

export default function PropertyGrid({ properties, view, onSelect, onReset }: Props) {
  if (properties.length === 0) {
    return (
      <div className="text-center py-24 col-span-full">
        <div className="text-5xl mb-4">🔍</div>
        <h3 className="font-display text-2xl font-semibold mb-2 text-[#2f2b26]">No properties found</h3>
        <p className="text-[#8a8070] text-sm mb-6">Try adjusting your filters to see more results.</p>
        <button
          onClick={onReset}
          className="bg-[#1a1714] text-[#faf7f2] px-6 py-2.5 rounded-lg text-sm font-semibold hover:bg-[#2f2b26] transition-colors"
        >
          Clear all filters
        </button>
      </div>
    );
  }

  if (view === "list") {
    return (
      <div className="flex flex-col gap-5">
        {properties.map((p) => (
          <PropertyCard key={p.id} property={p} view="list" onClick={onSelect} />
        ))}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
      {properties.map((p) => (
        <PropertyCard key={p.id} property={p} view="grid" onClick={onSelect} />
      ))}
    </div>
  );
}
