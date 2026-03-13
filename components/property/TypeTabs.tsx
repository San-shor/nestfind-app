"use client";

import type { PropertyType } from "@/lib/types";

const TYPES: PropertyType[] = ["All", "House", "Apartment", "Villa", "Penthouse", "Studio"];

interface Props {
  active: PropertyType;
  onChange: (t: PropertyType) => void;
}

export default function TypeTabs({ active, onChange }: Props) {
  return (
    <div className="flex flex-wrap gap-2 mb-8">
      {TYPES.map((t) => (
        <button
          key={t}
          onClick={() => onChange(t)}
          className="px-5 py-2 rounded-full text-sm font-medium border transition-all duration-200"
          style={
            active === t
              ? { background: "#1a1714", color: "#faf7f2", borderColor: "#1a1714" }
              : { background: "#fff", color: "#8a8070", borderColor: "#ddd5c4" }
          }
        >
          {t}
        </button>
      ))}
    </div>
  );
}
