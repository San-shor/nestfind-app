"use client";

import { formatPrice } from "@/lib/utils";
import type { Filters, PropertyStatus } from "@/lib/types";

const LOCATIONS = ["Gulshan", "Banani", "Baridhara", "Dhanmondi", "Uttara", "Mohakhali"];
const BEDS = ["", "1", "2", "3", "4", "5"];

interface Props {
  filters: Filters;
  onChange: <K extends keyof Filters>(key: K, value: Filters[K]) => void;
  onReset: () => void;
}

export default function FilterSidebar({ filters, onChange, onReset }: Props) {
  return (
    <aside className="lg:sticky lg:top-[88px] self-start">
      <div className="bg-white border border-[#ddd5c4] rounded-2xl overflow-hidden shadow-sm">
        <div className="flex items-center justify-between px-6 py-5 border-b border-[#ddd5c4]">
          <h3 className="font-sans text-[0.95rem] font-semibold tracking-wide">Filters</h3>
          <button
            onClick={onReset}
            className="text-xs font-semibold text-[#b8914a] hover:opacity-70 transition-opacity"
          >
            Clear all
          </button>
        </div>

        <div className="p-6 space-y-6">
          <div>
            <label className="block text-[0.72rem] font-semibold tracking-[1.2px] uppercase text-[#8a8070] mb-2.5">
              Status
            </label>
            <div className="grid grid-cols-3 gap-1.5">
              {[
                { label: "All", value: "" },
                { label: "Buy", value: "For Sale" },
                { label: "Rent", value: "For Rent" },
              ].map((opt) => (
                <button
                  key={opt.label}
                  onClick={() => onChange("status", opt.value as PropertyStatus)}
                  className="py-2 rounded-lg text-xs font-semibold border transition-all"
                  style={
                    filters.status === opt.value
                      ? opt.value === "For Rent"
                        ? { background: "#3d5c3d", color: "#fff", borderColor: "#3d5c3d" }
                        : { background: "#1a1714", color: "#faf7f2", borderColor: "#1a1714" }
                      : { background: "#f3ede3", color: "#8a8070", borderColor: "#ddd5c4" }
                  }
                >
                  {opt.label}
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-[0.72rem] font-semibold tracking-[1.2px] uppercase text-[#8a8070] mb-2.5">
              Location
            </label>
            <select
              className="w-full border border-[#ddd5c4] bg-[#faf7f2] rounded-lg px-3 py-2.5 text-sm outline-none focus:border-[#b8914a] transition-colors appearance-none"
              value={filters.location}
              onChange={(e) => onChange("location", e.target.value)}
            >
              <option value="">All Areas</option>
              {LOCATIONS.map((l) => <option key={l} value={l}>{l}</option>)}
            </select>
          </div>

          <div>
            <label className="block text-[0.72rem] font-semibold tracking-[1.2px] uppercase text-[#8a8070] mb-2.5">
              Max Price
            </label>
            <input
              type="range"
              min={50000}
              max={800000}
              step={10000}
              value={filters.maxPrice}
              onChange={(e) => onChange("maxPrice", Number(e.target.value))}
              className="w-full"
            />
            <div className="flex justify-between mt-1.5">
              <span className="text-xs text-[#8a8070]">৳50K</span>
              <strong className="text-sm font-semibold text-[#b8914a]">{formatPrice(filters.maxPrice)}</strong>
              <span className="text-xs text-[#8a8070]">৳800K</span>
            </div>
          </div>

          <div>
            <label className="block text-[0.72rem] font-semibold tracking-[1.2px] uppercase text-[#8a8070] mb-2.5">
              Bedrooms (min)
            </label>
            <div className="flex gap-1.5">
              {BEDS.map((b) => (
                <button
                  key={b}
                  onClick={() => onChange("minBeds", b)}
                  className="flex-1 py-2 rounded-lg text-xs font-medium border transition-all"
                  style={
                    filters.minBeds === b
                      ? { background: "#1a1714", color: "#fff", borderColor: "#1a1714" }
                      : { background: "#f3ede3", color: "#8a8070", borderColor: "#ddd5c4" }
                  }
                >
                  {b === "" ? "Any" : `${b}+`}
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-[0.72rem] font-semibold tracking-[1.2px] uppercase text-[#8a8070] mb-2.5">
              Property Type
            </label>
            <select
              className="w-full border border-[#ddd5c4] bg-[#faf7f2] rounded-lg px-3 py-2.5 text-sm outline-none focus:border-[#b8914a] transition-colors appearance-none"
              value={filters.type === "All" ? "" : filters.type}
              onChange={(e) => onChange("type", (e.target.value || "All") as Filters["type"])}
            >
              <option value="">All Types</option>
              {["House", "Apartment", "Villa", "Penthouse", "Studio"].map((t) => (
                <option key={t} value={t}>{t}</option>
              ))}
            </select>
          </div>
        </div>
      </div>
    </aside>
  );
}
