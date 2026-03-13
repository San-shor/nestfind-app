export default function Footer() {
  return (
    <>
      <footer className="bg-[#1a1714] text-[#888] px-8 md:px-12 pt-14 pb-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        <div>
          <span className="font-display text-[1.6rem] text-white block mb-3">
            Nest<span className="text-[#b8914a]">Find</span>
          </span>
          <p className="text-sm leading-relaxed max-w-[280px]">
            Dhaka's most trusted real estate platform. Connecting buyers,
            renters, and sellers with the finest properties since 2015.
          </p>
        </div>
        {[
          {
            title: "Company",
            links: ["About Us", "Our Agents", "Careers", "Press"],
          },
          {
            title: "Properties",
            links: ["For Sale", "For Rent", "New Developments", "Commercial"],
          },
          {
            title: "Contact",
            links: [
              "Gulshan-2, Dhaka",
              "+880 171-234-5678",
              "hello@nestfind.com",
            ],
          },
        ].map((col) => (
          <div key={col.title}>
            <h4 className="font-sans text-[0.72rem] font-bold tracking-[1.5px] uppercase text-[#ccc] mb-4">
              {col.title}
            </h4>
            {col.links.map((l) => (
              <a
                key={l}
                href="#"
                className="block text-sm text-[#777] hover:text-[#ccc] transition-colors mb-2"
              >
                {l}
              </a>
            ))}
          </div>
        ))}
      </footer>
      <div className="bg-[#2f2b26] px-8 md:px-12 py-4 flex flex-wrap justify-between items-center gap-3">
        <p className="text-[#555] text-xs">© 2026 NestFind. All rights reserved.</p>
        <p className="text-[#555] text-xs">Built with Next.js, Tailwind CSS & Leaflet Maps</p>
      </div>
    </>
  );
}
