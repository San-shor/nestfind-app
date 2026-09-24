"use client";

import { useState, useEffect } from "react";
import { SlidersHorizontal, X } from "lucide-react";
import FilterSidebar from "@/components/property/FilterSidebar";
import TypeTabs from "@/components/property/TypeTabs";
import Toolbar from "@/components/property/Toolbar";
import PropertyGrid from "@/components/property/PropertyGrid";
import PropertyModal from "@/components/property/PropertyModal";
import { useFilters } from "@/hooks/useFilters";
import type { Property, HeroSearch, PropertyType } from "@/lib/types";

interface Props {
  initialSearch?: HeroSearch;
  heading?: string;
  headingAccent?: string;
  subtitle?: string;
}

export default function ListingsSection({
  initialSearch,
  heading = "Premium",
  headingAccent = "Listings",
  subtitle,
}: Props) {
  const { filters, sort, view, filtered, setSort, setView, applySearch, updateFilter, reset } =
    useFilters();

  const [selected, setSelected] = useState<Property | null>(null);
  const [filtersOpen, setFiltersOpen] = useState(false);

  useEffect(() => {
    if (!initialSearch) return;
    applySearch(initialSearch);
    if (initialSearch.status) updateFilter("status", initialSearch.status);
  }, [initialSearch?.q, initialSearch?.location, initialSearch?.status]);

  const handleReset = () => {
    reset();
    if (!initialSearch) return;
    applySearch(initialSearch);
    if (initialSearch.status) updateFilter("status", initialSearch.status);
  };

  return (
    <section id="listings" className="max-w-[1300px] mx-auto px-4 md:px-6 py-14">
      <div className="mb-8">
        <h2 className="font-display text-3xl md:text-4xl font-bold">
          {heading} <span className="text-[#b8914a]">{headingAccent}</span>
        </h2>
        {subtitle && <p className="mt-2 text-sm text-[#8a8070] max-w-xl">{subtitle}</p>}
      </div>

      <TypeTabs
        active={filters.type}
        onChange={(t: PropertyType) => updateFilter("type", t)}
      />

      <button
        type="button"
        onClick={() => setFiltersOpen(true)}
        className="lg:hidden mb-5 inline-flex items-center gap-2 border border-[#ddd5c4] bg-white text-sm font-semibold px-4 py-2.5 rounded-lg"
      >
        <SlidersHorizontal size={16} />
        Filters
      </button>

      {filtersOpen && (
        <div className="lg:hidden fixed inset-0 z-[80] bg-black/50" onClick={() => setFiltersOpen(false)}>
          <div
            className="absolute inset-x-0 bottom-0 max-h-[88vh] overflow-y-auto rounded-t-2xl bg-[#faf7f2] p-4 pb-8"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-end mb-2">
              <button type="button" onClick={() => setFiltersOpen(false)} className="p-1" aria-label="Close filters">
                <X size={18} />
              </button>
            </div>
            <FilterSidebar filters={filters} onChange={updateFilter} onReset={handleReset} />
            <button
              type="button"
              onClick={() => setFiltersOpen(false)}
              className="mt-4 w-full bg-[#1a1714] text-[#faf7f2] text-sm font-semibold py-3 rounded-lg"
            >
              Show {filtered.length} properties
            </button>
          </div>
        </div>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-8 items-start">
        <div className="hidden lg:block">
          <FilterSidebar
            filters={filters}
            onChange={updateFilter}
            onReset={handleReset}
          />
        </div>

        <div>
          <Toolbar
            count={filtered.length}
            sort={sort}
            view={view}
            onSort={setSort}
            onView={setView}
          />
          <PropertyGrid
            properties={filtered}
            view={view}
            onSelect={setSelected}
            onReset={handleReset}
          />
        </div>
      </div>

      {selected && (
        <PropertyModal property={selected} onClose={() => setSelected(null)} />
      )}
    </section>
  );
}
