"use client";

import { LayoutGrid, List } from "lucide-react";
import type { SortOption, ViewMode } from "@/lib/types";

interface Props {
  count: number;
  sort: SortOption;
  view: ViewMode;
  onSort: (s: SortOption) => void;
  onView: (v: ViewMode) => void;
}

const SORT_OPTIONS: { value: SortOption; label: string }[] = [
  { value: "featured", label: "Featured First" },
  { value: "price-asc", label: "Price: Low → High" },
  { value: "price-desc", label: "Price: High → Low" },
  { value: "newest", label: "Newest First" },
];

export default function Toolbar({ count, sort, view, onSort, onView }: Props) {
  return (
    <div className="flex items-center justify-between flex-wrap gap-3 mb-6">
      <p className="text-sm text-[#8a8070]">
        <span className="font-semibold text-[#1a1714]">{count}</span> properties available
      </p>
      <div className="flex items-center gap-3">
        <select
          className="border border-[#ddd5c4] bg-white rounded-lg px-3 py-2 text-sm text-[#1a1714] outline-none cursor-pointer appearance-none pr-8"
          style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8' viewBox='0 0 12 8'%3E%3Cpath d='M1 1l5 5 5-5' stroke='%238a8070' stroke-width='1.5' fill='none' stroke-linecap='round'/%3E%3C/svg%3E\")", backgroundRepeat: "no-repeat", backgroundPosition: "right 10px center" }}
          value={sort}
          onChange={(e) => onSort(e.target.value as SortOption)}
        >
          {SORT_OPTIONS.map((o) => (
            <option key={o.value} value={o.value}>{o.label}</option>
          ))}
        </select>
        <div className="flex gap-1">
          <button
            onClick={() => onView("grid")}
            className="w-9 h-9 rounded-lg border flex items-center justify-center transition-all"
            style={view === "grid" ? { background: "#1a1714", color: "#fff", borderColor: "#1a1714" } : { background: "#fff", color: "#8a8070", borderColor: "#ddd5c4" }}
            title="Grid view"
          >
            <LayoutGrid size={15} />
          </button>
          <button
            onClick={() => onView("list")}
            className="w-9 h-9 rounded-lg border flex items-center justify-center transition-all"
            style={view === "list" ? { background: "#1a1714", color: "#fff", borderColor: "#1a1714" } : { background: "#fff", color: "#8a8070", borderColor: "#ddd5c4" }}
            title="List view"
          >
            <List size={15} />
          </button>
        </div>
      </div>
    </div>
  );
}
