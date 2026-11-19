import Link from "next/link";
import { MESSENGER_LINK, STUDIO_PAGE } from "./DemoBar";

const COLUMNS = [
  {
    title: "Explore",
    links: [
      { label: "Homes for Sale", href: "/buy" },
      { label: "Homes for Rent", href: "/rent" },
      { label: "Sell your property", href: "/sell" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "Our Agents", href: "/agents" },
      { label: "Journal", href: "/blog" },
      { label: "Sign in", href: "/signin" },
    ],
  },
];

const linkCls = "block text-sm text-[#999] hover:text-white transition-colors mb-2";

export default function Footer() {
  return (
    <>
      <footer className="bg-[#1a1714] text-[#888] px-8 md:px-12 pt-14 pb-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        <div>
          <span className="font-display text-[1.6rem] text-white block mb-3">
            Nest<span className="text-[#b8914a]">Find</span>
          </span>
          <p className="text-sm leading-relaxed max-w-[280px]">
            Dhaka&apos;s most trusted real estate platform. Connecting buyers,
            renters, and sellers with the finest properties.
          </p>
        </div>

        {COLUMNS.map((col) => (
          <div key={col.title}>
            <h4 className="font-sans text-[0.72rem] font-bold tracking-[1.5px] uppercase text-[#ccc] mb-4">
              {col.title}
            </h4>
            {col.links.map((l) => (
              <Link key={l.href} href={l.href} className={linkCls}>
                {l.label}
              </Link>
            ))}
          </div>
        ))}

        <div>
          <h4 className="font-sans text-[0.72rem] font-bold tracking-[1.5px] uppercase text-[#ccc] mb-4">
            Want a site like this?
          </h4>
          <a href={MESSENGER_LINK} target="_blank" rel="noopener" className={linkCls}>
            💬 Message WebNest Studio
          </a>
          <a href={STUDIO_PAGE} target="_blank" rel="noopener" className={linkCls}>
            WebNest Studio on Facebook
          </a>
          <span className="block text-sm text-[#777]">📍 Dhaka, Bangladesh</span>
        </div>
      </footer>
      <div className="bg-[#2f2b26] px-8 md:px-12 py-4 flex flex-wrap justify-between items-center gap-3">
        <p className="text-[#8a8070] text-xs">
          NestFind is a demo website. Listings, agents and prices are samples.
        </p>
        <p className="text-[#8a8070] text-xs">
          Designed and built by{" "}
          <a href={STUDIO_PAGE} target="_blank" rel="noopener" className="text-[#b8914a] font-semibold hover:underline">
            WebNest Studio
          </a>
        </p>
      </div>
    </>
  );
}
