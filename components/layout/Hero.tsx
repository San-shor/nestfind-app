"use client";

import { useState } from "react";
import { Search } from "lucide-react";
import type { HeroSearch, PropertyStatus } from "@/lib/types";

const LOCATIONS = ["Gulshan", "Banani", "Baridhara", "Dhanmondi", "Uttara", "Mohakhali"];
const STATS = [
  { num: "2,400+", lbl: "Properties" },
  { num: "840+", lbl: "Sold This Year" },
  { num: "120+", lbl: "Expert Agents" },
  { num: "98%", lbl: "Client Satisfaction" },
];

interface HeroProps {
  onSearch: (s: HeroSearch) => void;
}

export default function Hero({ onSearch }: HeroProps) {
  const [q, setQ] = useState("");
  const [location, setLocation] = useState("");
  const [status, setStatus] = useState<PropertyStatus>("");

  const handleSearch = () => {
    const searchParams: HeroSearch = {
      q: q.trim(),
      location: location.trim(),
      status: status,
    };
    onSearch({ ...searchParams });
    setTimeout(() => {
      const listingsElement = document.getElementById("listings");
      if (listingsElement) {
        listingsElement.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }, 100);
  };

  return (
    <section className="relative overflow-hidden px-6 md:px-12 pt-24 pb-32"
      style={{ background: "linear-gradient(145deg,#181410 0%,#1f1c17 40%,#2a2318 80%,#1a1409 100%)" }}>
      <div className="absolute inset-0 opacity-[0.03]"
        style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")", backgroundSize: "200px" }} />
      <div className="absolute inset-0"
        style={{ backgroundImage: "linear-gradient(rgba(255,255,255,.025) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.025) 1px,transparent 1px)", backgroundSize: "60px 60px" }} />
      <div className="absolute -top-32 -right-20 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle,rgba(184,145,74,.12) 0%,transparent 70%)" }} />

      <div className="relative z-10 max-w-5xl mx-auto">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-8 text-[#d4b06a] text-xs font-semibold tracking-[2px] uppercase"
          style={{ background: "rgba(184,145,74,.12)", border: "1px solid rgba(184,145,74,.25)" }}>
          <span className="w-1.5 h-1.5 rounded-full bg-[#b8914a] animate-pulse" />
          Bangladesh's Premium Real Estate
        </div>

        <h1 className="text-white font-display font-bold mb-6 leading-[1.08]"
          style={{ fontSize: "clamp(2.8rem, 5.5vw, 4.8rem)", maxWidth: "680px" }}>
          Find Your <em className="text-[#d4b06a] italic">Perfect</em>
          <br />Home in Dhaka
        </h1>
        <p className="text-[#9a9388] text-lg font-light max-w-md mb-14 leading-relaxed">
          Thousands of verified luxury properties across Dhaka's most
          sought-after neighbourhoods.
        </p>

        <div className="flex flex-col sm:flex-row sm:flex-wrap gap-2 p-3 rounded-2xl max-w-3xl"
          style={{ background: "rgba(255,255,255,.05)", border: "1px solid rgba(255,255,255,.10)", backdropFilter: "blur(12px)" }}>
          <input
            className="flex-1 min-w-[180px] px-4 py-3 rounded-lg text-sm text-white placeholder-white/40 outline-none focus:border-[#b8914a]/50"
            style={{ background: "rgba(255,255,255,.07)", border: "1px solid rgba(255,255,255,.12)" }}
            placeholder="🔍  Search by name or area..."
            value={q}
            onChange={(e) => setQ(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSearch()}
          />
          <select
            className="flex-1 min-w-[150px] px-4 py-3 rounded-lg text-sm text-white outline-none"
            style={{ background: "rgba(255,255,255,.07)", border: "1px solid rgba(255,255,255,.12)" }}
            value={location}
            onChange={(e) => {
              setLocation(e.target.value);
            }}
          >
            <option value="" style={{ background: "#2a2318" }}>📍 All Locations</option>
            {LOCATIONS.map((l) => (
              <option key={l} value={l} style={{ background: "#2a2318" }}>{l}</option>
            ))}
          </select>
          <select
            className="flex-1 min-w-[140px] px-4 py-3 rounded-lg text-sm text-white outline-none"
            style={{ background: "rgba(255,255,255,.07)", border: "1px solid rgba(255,255,255,.12)" }}
            value={status}
            onChange={(e) => {
              setStatus(e.target.value as PropertyStatus);
            }}
          >
            <option value="" style={{ background: "#2a2318" }}>🏠 Buy or Rent</option>
            <option value="For Sale" style={{ background: "#2a2318" }}>For Sale</option>
            <option value="For Rent" style={{ background: "#2a2318" }}>For Rent</option>
          </select>
          <button
            onClick={handleSearch}
            className="flex w-full sm:w-auto items-center justify-center gap-2 px-8 py-3 rounded-lg text-sm font-bold text-[#1a1714] bg-[#b8914a] hover:bg-[#d4b06a] transition-all hover:-translate-y-0.5 whitespace-nowrap"
          >
            <Search size={16} />
            Search
          </button>
        </div>

        <div className="flex flex-wrap gap-12 mt-14">
          {STATS.map((s) => (
            <div key={s.lbl}>
              <div className="font-display text-[2.2rem] font-bold text-white">{s.num}</div>
              <div className="text-xs text-[#777] uppercase tracking-[1.5px] mt-0.5">{s.lbl}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
