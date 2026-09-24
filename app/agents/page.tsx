"use client";

import { useState } from "react";
import { agents } from "@/data/agents";

const list = Object.values(agents);

export default function AgentsPage() {
  const [activeId, setActiveId] = useState<number | null>(null);
  const [sent, setSent] = useState(false);
  const [name, setName] = useState("");
  const active = list.find((a) => a.id === activeId);

  return (
    <main className="max-w-[1100px] mx-auto px-4 md:px-6 py-14">
      <div className="mb-8">
        <h1 className="font-display text-3xl md:text-4xl font-bold">
          Our <span className="text-[#b8914a]">agents</span>
        </h1>
        <p className="mt-2 text-sm text-[#8a8070] max-w-xl">
          Talk to the person who knows the neighbourhood. Messages on this page are a demo and are not delivered.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {list.map((agent) => (
          <article key={agent.id} className="bg-white border border-[#ddd5c4] rounded-2xl p-6 flex flex-col">
            <div
              className="w-14 h-14 rounded-full flex items-center justify-center text-white font-display text-lg font-bold mb-4"
              style={{ background: agent.color }}
            >
              {agent.initials}
            </div>
            <h2 className="font-display text-xl font-bold">{agent.name}</h2>
            <p className="text-xs text-[#8a8070] mt-1 mb-4">{agent.role}</p>
            <p className="text-sm text-[#4a4540] leading-relaxed flex-1">{agent.bio}</p>
            <div className="flex gap-4 text-xs text-[#8a8070] mt-5 mb-5">
              <span><strong className="text-[#1a1714]">{agent.listings}</strong> listings</span>
              <span><strong className="text-[#1a1714]">{agent.sold}</strong> sold</span>
              <span><strong className="text-[#1a1714]">{agent.rating}★</strong></span>
            </div>
            <button
              type="button"
              onClick={() => {
                setActiveId(agent.id);
                setSent(false);
              }}
              className="bg-[#1a1714] text-[#faf7f2] text-sm font-semibold py-2.5 rounded-lg hover:bg-[#2f2b26]"
            >
              Contact {agent.name.split(" ")[0]}
            </button>
          </article>
        ))}
      </div>

      {active && (
        <form
          className="mt-8 bg-white border border-[#ddd5c4] rounded-2xl p-6 max-w-lg"
          onSubmit={(e) => {
            e.preventDefault();
            setSent(true);
          }}
        >
          <h2 className="font-display text-2xl font-bold mb-1">Message {active.name}</h2>
          <p className="text-xs text-[#8a8070] mb-4">{active.phone} · {active.email}</p>
          {sent ? (
            <p className="bg-green-50 text-green-700 border border-green-200 rounded-lg px-4 py-3 text-sm">
              Demo sent. {active.name.split(" ")[0]} would reply to {name || "you"} shortly.
            </p>
          ) : (
            <>
              <input
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Your name"
                className="w-full border border-[#ddd5c4] bg-[#faf7f2] rounded-lg px-3 py-2.5 text-sm mb-3 outline-none focus:border-[#b8914a]"
              />
              <textarea
                required
                placeholder="How can they help?"
                className="w-full border border-[#ddd5c4] bg-[#faf7f2] rounded-lg px-3 py-2.5 text-sm mb-3 h-24 resize-none outline-none focus:border-[#b8914a]"
              />
              <button type="submit" className="bg-[#b8914a] hover:bg-[#d4b06a] text-[#1a1714] font-bold text-sm px-5 py-2.5 rounded-lg">
                Send message
              </button>
            </>
          )}
        </form>
      )}
    </main>
  );
}
