const ITEMS = [
  { icon: "✅", title: "Verified Listings", sub: "Every property authenticated" },
  { icon: "🔒", title: "Secure Transactions", sub: "End-to-end protection" },
  { icon: "🏆", title: "Award-Winning Agents", sub: "Top 1% in Bangladesh" },
  { icon: "📞", title: "24 / 7 Support", sub: "Always here to help" },
];

export default function TrustBar() {
  return (
    <div className="bg-[#2f2b26] flex flex-wrap justify-center">
      {ITEMS.map((item, i) => (
        <div
          key={item.title}
          className="flex items-center gap-3 px-8 py-5 flex-1 min-w-[200px] justify-center"
          style={{ borderRight: i < ITEMS.length - 1 ? "1px solid rgba(255,255,255,.07)" : "none" }}
        >
          <span className="text-xl opacity-70">{item.icon}</span>
          <div>
            <div className="text-white text-sm font-medium">{item.title}</div>
            <div className="text-[#666] text-xs mt-0.5">{item.sub}</div>
          </div>
        </div>
      ))}
    </div>
  );
}
