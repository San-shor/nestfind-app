// Thin banner at the very top: tells visitors this is a WebNest Studio sample site.
export const STUDIO_PAGE = "https://www.facebook.com/profile.php?id=61594388112794";
export const MESSENGER_LINK =
  "https://m.me/61594388112794?text=" +
  encodeURIComponent("Hi, I saw the NestFind demo. I want a real estate website like this.");

export default function DemoBar() {
  return (
    <div className="h-9 px-3 flex items-center justify-center gap-2 md:gap-3 bg-[#1a1714] text-[#e8dfcf] text-[0.78rem] md:text-[0.85rem] whitespace-nowrap overflow-hidden">
      <span className="bg-[#b8914a] text-[#1a1714] font-extrabold text-[0.65rem] tracking-[0.06em] px-2 py-0.5 rounded-full">
        LIVE DEMO
      </span>
      <span>
        <span className="hidden sm:inline">Sample real estate site built </span>by{" "}
        <b className="text-white">WebNest Studio</b>
      </span>
      <a
        href={MESSENGER_LINK}
        target="_blank"
        rel="noopener"
        className="text-[#d9b876] font-bold hover:underline"
      >
        Get one<span className="hidden sm:inline"> for your business</span> →
      </a>
    </div>
  );
}
