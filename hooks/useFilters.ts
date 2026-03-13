"use client";

import { useState, useMemo } from "react";
import { properties } from "@/data/properties";
import type {
  Filters,
  HeroSearch,
  PropertyType,
  SortOption,
  ViewMode,
} from "@/lib/types";

const DEFAULT_FILTERS: Filters = {
  status: "",
  location: "",
  maxPrice: 800000,
  minBeds: "",
  type: "All",
};

const DEFAULT_SEARCH: HeroSearch = { q: "", location: "", status: "" };

export function useFilters() {
  const [filters, setFilters] = useState<Filters>(DEFAULT_FILTERS);
  const [search, setSearch] = useState<HeroSearch>(DEFAULT_SEARCH);
  const [sort, setSort] = useState<SortOption>("featured");
  const [view, setView] = useState<ViewMode>("grid");

  const filtered = useMemo(() => {
    let list = [...properties];

    if (search.q)
      list = list.filter(
        (p) =>
          p.title.toLowerCase().includes(search.q.toLowerCase()) ||
          p.location.toLowerCase().includes(search.q.toLowerCase())
      );
    if (search.location)
      list = list.filter((p) =>
        p.location.toLowerCase().includes(search.location.toLowerCase())
      );
    if (search.status) list = list.filter((p) => p.status === search.status);

    if (filters.status) list = list.filter((p) => p.status === filters.status);
    if (filters.location)
      list = list.filter((p) =>
        p.location.toLowerCase().includes(filters.location.toLowerCase())
      );
    if (filters.minBeds)
      list = list.filter((p) => p.beds >= parseInt(filters.minBeds));
    if (filters.type !== "All")
      list = list.filter((p) => p.type === filters.type);
    list = list.filter((p) => p.price <= filters.maxPrice);

    if (sort === "price-asc") list.sort((a, b) => a.price - b.price);
    else if (sort === "price-desc") list.sort((a, b) => b.price - a.price);
    else if (sort === "featured")
      list.sort((a, b) => Number(b.featured) - Number(a.featured));
    else if (sort === "newest") list.sort((a, b) => b.year - a.year);

    return list;
  }, [filters, search, sort]);

  const applySearch = (s: HeroSearch) => setSearch(s);

  const updateFilter = <K extends keyof Filters>(key: K, value: Filters[K]) =>
    setFilters((f) => ({ ...f, [key]: value }));

  const reset = () => {
    setFilters(DEFAULT_FILTERS);
    setSearch(DEFAULT_SEARCH);
  };

  return {
    filters,
    search,
    sort,
    view,
    filtered,
    setSort,
    setView,
    applySearch,
    updateFilter,
    reset,
  };
}
