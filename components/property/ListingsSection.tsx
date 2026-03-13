"use client";

import { useState, useEffect } from "react";
import FilterSidebar from "@/components/property/FilterSidebar";
import TypeTabs from "@/components/property/TypeTabs";
import Toolbar from "@/components/property/Toolbar";
import PropertyGrid from "@/components/property/PropertyGrid";
import PropertyModal from "@/components/property/PropertyModal";
import { useFilters } from "@/hooks/useFilters";
import type { Property, HeroSearch, PropertyType } from "@/lib/types";

interface Props {
  initialSearch?: HeroSearch;
}

export default function ListingsSection({ initialSearch }: Props) {
  const { filters, sort, view, filtered, setSort, setView, applySearch, updateFilter, reset } =
    useFilters();

  const [selected, setSelected] = useState<Property | null>(null);

  useEffect(() => {
    if (initialSearch) applySearch(initialSearch);
  }, [initialSearch?.q, initialSearch?.location, initialSearch?.status]);

  return (
    <section id="listings" className="max-w-[1300px] mx-auto px-4 md:px-6 py-14">
      <div className="mb-8">
        <h2 className="font-display text-3xl md:text-4xl font-bold">
          Premium <span className="text-[#b8914a]">Listings</span>
        </h2>
      </div>

      <TypeTabs
        active={filters.type}
        onChange={(t: PropertyType) => updateFilter("type", t)}
      />

      <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-8 items-start">
        <FilterSidebar
          filters={filters}
          onChange={updateFilter}
          onReset={reset}
        />

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
            onReset={reset}
          />
        </div>
      </div>

      {selected && (
        <PropertyModal property={selected} onClose={() => setSelected(null)} />
      )}
    </section>
  );
}
