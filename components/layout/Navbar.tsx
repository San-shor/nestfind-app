"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

const LINKS = [
  { label: "Buy", href: "/buy" },
  { label: "Rent", href: "/rent" },
  { label: "Sell", href: "/sell" },
  { label: "Agents", href: "/agents" },
  { label: "Blog", href: "/blog" },
];

function isActive(pathname: string, href: string) {
  return pathname === href || pathname.startsWith(`${href}/`);
}

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  return (
    <nav className="sticky top-0 z-50 h-[72px] px-6 md:px-12 flex items-center justify-between bg-[#faf7f2]/95 backdrop-blur-xl border-b border-[#ddd5c4]">
      <Link href="/" className="flex items-center gap-2.5" onClick={() => setMobileOpen(false)}>
        <div className="w-9 h-9 rounded-lg bg-[#1a1714] flex items-center justify-center text-lg">
          🏡
        </div>
        <span className="font-display text-[1.45rem] font-bold tracking-tight">
          Nest<span className="text-[#b8914a]">Find</span>
        </span>
      </Link>

      <div className="hidden md:flex gap-8">
        {LINKS.map((link) => {
          const active = isActive(pathname, link.href);
          return (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm font-medium transition-colors relative group py-1 ${
                active ? "text-[#1a1714]" : "text-[#8a8070] hover:text-[#1a1714]"
              }`}
            >
              {link.label}
              <span
                className={`absolute bottom-0 left-0 right-0 h-0.5 bg-[#b8914a] rounded-full transition-transform ${
                  active ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                }`}
              />
            </Link>
          );
        })}
      </div>

      <div className="hidden md:flex items-center gap-3">
        <Link
          href="/signin"
          className={`border text-sm font-medium px-5 py-2 rounded-lg transition-colors ${
            pathname === "/signin"
              ? "border-[#1a1714] text-[#1a1714]"
              : "border-[#c8bfaf] text-[#4a4540] hover:border-[#1a1714]"
          }`}
        >
          Sign In
        </Link>
        <Link
          href="/sell"
          className="bg-[#1a1714] text-[#faf7f2] text-sm font-semibold px-5 py-2.5 rounded-lg hover:bg-[#2f2b26] transition-colors"
        >
          List Property
        </Link>
      </div>

      <button
        className="md:hidden p-1 text-[#1a1714]"
        onClick={() => setMobileOpen((v) => !v)}
        aria-label={mobileOpen ? "Close menu" : "Open menu"}
      >
        {mobileOpen ? <X size={22} /> : <Menu size={22} />}
      </button>

      {mobileOpen && (
        <div className="absolute top-[72px] left-0 right-0 bg-[#faf7f2] border-b border-[#ddd5c4] px-6 py-4 flex flex-col gap-3 md:hidden shadow-md">
          {LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className={`text-sm font-medium py-2 border-b border-[#e8dfcf] last:border-0 ${
                isActive(pathname, link.href) ? "text-[#b8914a]" : "text-[#4a4540]"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/signin"
            onClick={() => setMobileOpen(false)}
            className="text-sm font-medium text-[#4a4540] py-2"
          >
            Sign In
          </Link>
          <Link
            href="/sell"
            onClick={() => setMobileOpen(false)}
            className="mt-1 bg-[#1a1714] text-[#faf7f2] text-sm font-semibold w-full py-3 rounded-lg text-center"
          >
            List Property
          </Link>
        </div>
      )}
    </nav>
  );
}
