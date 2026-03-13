"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 h-[72px] px-6 md:px-12 flex items-center justify-between bg-[#faf7f2]/95 backdrop-blur-xl border-b border-[#ddd5c4]">
      <div className="flex items-center gap-2.5">
        <div className="w-9 h-9 rounded-lg bg-[#1a1714] flex items-center justify-center text-lg">
          🏡
        </div>
        <span className="font-display text-[1.45rem] font-bold tracking-tight">
          Nest<span className="text-[#b8914a]">Find</span>
        </span>
      </div>

      <div className="hidden md:flex gap-8">
        {["Buy", "Rent", "Sell", "Agents", "Blog"].map((link) => (
          <a
            key={link}
            href="#listings"
            className="text-sm font-medium text-[#8a8070] hover:text-[#1a1714] transition-colors relative group py-1"
          >
            {link}
            <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#b8914a] rounded-full scale-x-0 group-hover:scale-x-100 transition-transform" />
          </a>
        ))}
      </div>

      <div className="hidden md:flex items-center gap-3">
        <button className="border border-[#c8bfaf] text-[#4a4540] text-sm font-medium px-5 py-2 rounded-lg hover:border-[#1a1714] transition-colors">
          Sign In
        </button>
        <button className="bg-[#1a1714] text-[#faf7f2] text-sm font-semibold px-5 py-2.5 rounded-lg hover:bg-[#2f2b26] transition-colors">
          List Property
        </button>
      </div>

      <button
        className="md:hidden p-1 text-[#1a1714]"
        onClick={() => setMobileOpen((v) => !v)}
      >
        {mobileOpen ? <X size={22} /> : <Menu size={22} />}
      </button>

      {mobileOpen && (
        <div className="absolute top-[72px] left-0 right-0 bg-[#faf7f2] border-b border-[#ddd5c4] px-6 py-4 flex flex-col gap-3 md:hidden shadow-md">
          {["Buy", "Rent", "Sell", "Agents", "Blog"].map((link) => (
            <a
              key={link}
              href="#listings"
              onClick={() => setMobileOpen(false)}
              className="text-sm font-medium text-[#4a4540] py-2 border-b border-[#e8dfcf] last:border-0"
            >
              {link}
            </a>
          ))}
          <button className="mt-2 bg-[#1a1714] text-[#faf7f2] text-sm font-semibold w-full py-3 rounded-lg">
            List Property
          </button>
        </div>
      )}
    </nav>
  );
}
