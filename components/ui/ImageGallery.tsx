"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface Props {
  images: string[];
  title: string;
}

export default function ImageGallery({ images, title }: Props) {
  const [idx, setIdx] = useState(0);
  const prev = () => setIdx((i) => (i - 1 + images.length) % images.length);
  const next = () => setIdx((i) => (i + 1) % images.length);

  return (
    <div className="relative h-[380px] md:h-[420px] bg-[#1a1714] overflow-hidden">
      <Image
        key={idx}
        src={images[idx]}
        alt={`${title} — image ${idx + 1}`}
        fill
        className="object-cover"
        sizes="100vw"
        priority
      />
      {images.length > 1 && (
        <>
          <button
            onClick={prev}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/85 hover:bg-white flex items-center justify-center shadow-md transition-all hover:scale-105"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={next}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/85 hover:bg-white flex items-center justify-center shadow-md transition-all hover:scale-105"
          >
            <ChevronRight size={20} />
          </button>
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5">
            {images.map((_, i) => (
              <button
                key={i}
                onClick={() => setIdx(i)}
                className="h-2 rounded-full transition-all duration-200"
                style={{
                  width: i === idx ? "20px" : "8px",
                  background: i === idx ? "#fff" : "rgba(255,255,255,.45)",
                }}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
