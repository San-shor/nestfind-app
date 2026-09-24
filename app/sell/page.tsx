"use client";

import { FormEvent, useState } from "react";
import { formatPrice } from "@/lib/utils";

const TYPES = ["House", "Apartment", "Villa", "Penthouse", "Studio"];
const inputCls =
  "w-full border border-[#ddd5c4] bg-white rounded-lg px-3 py-2.5 text-sm text-[#1a1714] outline-none focus:border-[#b8914a] transition-colors";

export default function SellPage() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({
    title: "",
    type: "Apartment",
    status: "For Sale",
    price: "",
    location: "Gulshan",
    beds: "3",
    name: "",
    phone: "",
  });

  const set = (key: string, value: string) => setForm((f) => ({ ...f, [key]: value }));

  const submit = (e: FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <main className="max-w-[1100px] mx-auto px-4 md:px-6 py-14">
      <div className="mb-8">
        <h1 className="font-display text-3xl md:text-4xl font-bold">
          List your <span className="text-[#b8914a]">property</span>
        </h1>
        <p className="mt-2 text-sm text-[#8a8070] max-w-xl">
          Tell us about the home. This demo saves nothing to a server — you will see a preview of the listing request.
        </p>
      </div>

      {sent ? (
        <div className="bg-white border border-[#ddd5c4] rounded-2xl p-8 max-w-xl">
          <p className="text-[0.68rem] font-bold tracking-[1.2px] uppercase text-[#b8914a] mb-2">Request received</p>
          <h2 className="font-display text-2xl font-bold mb-2">{form.title}</h2>
          <p className="text-sm text-[#4a4540] mb-4">
            {form.status} · {form.type} · {form.beds} beds · {form.location}
          </p>
          <p className="font-display text-3xl font-bold mb-4">
            {formatPrice(Number(form.price) || 0)}
            {form.status === "For Rent" && <span className="font-sans text-sm font-normal text-[#8a8070]"> /month</span>}
          </p>
          <p className="text-sm text-[#8a8070] mb-6">
            Thanks {form.name.split(" ")[0] || "there"}. A NestFind agent will call {form.phone} to confirm the listing. This is a demo, so no message was actually sent.
          </p>
          <button
            type="button"
            onClick={() => setSent(false)}
            className="border border-[#c8bfaf] text-sm font-medium px-5 py-2.5 rounded-lg hover:border-[#1a1714]"
          >
            Edit details
          </button>
        </div>
      ) : (
        <form onSubmit={submit} className="bg-white border border-[#ddd5c4] rounded-2xl p-6 md:p-8 grid grid-cols-1 md:grid-cols-2 gap-5">
          <label className="md:col-span-2 block">
            <span className="block text-[0.72rem] font-semibold tracking-[1.2px] uppercase text-[#8a8070] mb-2">Property title</span>
            <input required className={inputCls} value={form.title} onChange={(e) => set("title", e.target.value)} placeholder="e.g. Lakeview apartment in Banani" />
          </label>
          <label className="block">
            <span className="block text-[0.72rem] font-semibold tracking-[1.2px] uppercase text-[#8a8070] mb-2">Type</span>
            <select className={inputCls} value={form.type} onChange={(e) => set("type", e.target.value)}>
              {TYPES.map((t) => <option key={t}>{t}</option>)}
            </select>
          </label>
          <label className="block">
            <span className="block text-[0.72rem] font-semibold tracking-[1.2px] uppercase text-[#8a8070] mb-2">Listing</span>
            <select className={inputCls} value={form.status} onChange={(e) => set("status", e.target.value)}>
              <option>For Sale</option>
              <option>For Rent</option>
            </select>
          </label>
          <label className="block">
            <span className="block text-[0.72rem] font-semibold tracking-[1.2px] uppercase text-[#8a8070] mb-2">Price (BDT)</span>
            <input required type="number" min={1} className={inputCls} value={form.price} onChange={(e) => set("price", e.target.value)} placeholder={form.status === "For Rent" ? "Monthly rent" : "Asking price"} />
          </label>
          <label className="block">
            <span className="block text-[0.72rem] font-semibold tracking-[1.2px] uppercase text-[#8a8070] mb-2">Area</span>
            <select className={inputCls} value={form.location} onChange={(e) => set("location", e.target.value)}>
              {["Gulshan", "Banani", "Baridhara", "Dhanmondi", "Uttara", "Mohakhali"].map((l) => <option key={l}>{l}</option>)}
            </select>
          </label>
          <label className="block">
            <span className="block text-[0.72rem] font-semibold tracking-[1.2px] uppercase text-[#8a8070] mb-2">Bedrooms</span>
            <select className={inputCls} value={form.beds} onChange={(e) => set("beds", e.target.value)}>
              {["1", "2", "3", "4", "5", "6"].map((n) => <option key={n}>{n}</option>)}
            </select>
          </label>
          <label className="block">
            <span className="block text-[0.72rem] font-semibold tracking-[1.2px] uppercase text-[#8a8070] mb-2">Your name</span>
            <input required className={inputCls} value={form.name} onChange={(e) => set("name", e.target.value)} placeholder="Full name" />
          </label>
          <label className="block">
            <span className="block text-[0.72rem] font-semibold tracking-[1.2px] uppercase text-[#8a8070] mb-2">Phone</span>
            <input required className={inputCls} value={form.phone} onChange={(e) => set("phone", e.target.value)} placeholder="+880 1…" />
          </label>
          <div className="md:col-span-2">
            <button type="submit" className="bg-[#1a1714] text-[#faf7f2] text-sm font-semibold px-6 py-3 rounded-lg hover:bg-[#2f2b26] transition-colors">
              Submit listing
            </button>
          </div>
        </form>
      )}
    </main>
  );
}
