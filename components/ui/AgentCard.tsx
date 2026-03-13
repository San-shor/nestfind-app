"use client";

import { useState } from "react";
import { Phone } from "lucide-react";
import type { Agent, Property } from "@/lib/types";

interface Props {
  agent: Agent;
  property: Property;
}

export default function AgentCard({ agent, property }: Props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState(
    `Hi ${agent.name}, I'm interested in "${property.title}". Could we arrange a viewing?`
  );
  const [sent, setSent] = useState(false);

  const inputCls =
    "w-full border border-[#ddd5c4] bg-[#faf7f2] rounded-lg px-3 py-2.5 text-sm text-[#1a1714] outline-none focus:border-[#b8914a] transition-colors mb-2.5 placeholder-[#8a8070]";

  return (
    <div className="border-l border-[#ddd5c4] bg-white p-6 flex flex-col gap-0">
      <p className="text-[0.68rem] font-bold tracking-[1.2px] uppercase text-[#8a8070] mb-4">
        Your Agent
      </p>
      <div className="flex items-center gap-3 mb-4">
        <div
          className="w-14 h-14 rounded-full flex items-center justify-center text-white font-display text-lg font-bold flex-shrink-0"
          style={{ background: agent.color }}
        >
          {agent.initials}
        </div>
        <div>
          <div className="font-display text-lg font-bold leading-tight">{agent.name}</div>
          <div className="text-xs text-[#8a8070] mt-0.5">{agent.role}</div>
        </div>
      </div>

      <div className="flex border border-[#ddd5c4] rounded-xl overflow-hidden mb-4">
        {[
          { n: agent.listings, l: "Listings" },
          { n: agent.sold, l: "Sold" },
          { n: `${agent.rating}★`, l: "Rating" },
        ].map((s, i) => (
          <div
            key={s.l}
            className="flex-1 text-center py-2.5"
            style={{ borderRight: i < 2 ? "1px solid #ddd5c4" : "none" }}
          >
            <div className="font-semibold text-sm">{s.n}</div>
            <div className="text-[0.65rem] text-[#8a8070] uppercase tracking-wide">{s.l}</div>
          </div>
        ))}
      </div>

      <p className="text-xs text-[#8a8070] leading-relaxed mb-5 pb-5 border-b border-[#ddd5c4]">
        {agent.bio}
      </p>

      {sent ? (
        <div className="bg-green-50 text-green-700 border border-green-200 rounded-lg px-4 py-3 text-sm font-medium text-center mb-2">
          ✓ Message sent! {agent.name.split(" ")[0]} will contact you shortly.
        </div>
      ) : (
        <>
          <label className="text-[0.68rem] font-bold tracking-[1px] uppercase text-[#8a8070] mb-1.5 block">Your Name</label>
          <input className={inputCls} placeholder="Full name" value={name} onChange={(e) => setName(e.target.value)} />
          <label className="text-[0.68rem] font-bold tracking-[1px] uppercase text-[#8a8070] mb-1.5 block">Email</label>
          <input className={inputCls} type="email" placeholder="your@email.com" value={email} onChange={(e) => setEmail(e.target.value)} />
          <label className="text-[0.68rem] font-bold tracking-[1px] uppercase text-[#8a8070] mb-1.5 block">Message</label>
          <textarea
            className={`${inputCls} h-20 resize-none`}
            value={msg}
            onChange={(e) => setMsg(e.target.value)}
          />
          <button
            onClick={() => setSent(true)}
            className="w-full bg-[#b8914a] hover:bg-[#d4b06a] text-[#1a1714] font-bold text-sm py-3 rounded-xl transition-colors mb-2"
          >
            Send Message
          </button>
        </>
      )}
      <button className="w-full border border-[#ddd5c4] hover:border-[#1a1714] text-[#4a4540] text-sm py-2.5 rounded-xl transition-colors flex items-center justify-center gap-2">
        <Phone size={14} /> {agent.phone}
      </button>
    </div>
  );
}
