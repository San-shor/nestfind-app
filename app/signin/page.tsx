"use client";

import { FormEvent, useState } from "react";
import Link from "next/link";

export default function SignInPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [user, setUser] = useState("");

  const submit = (e: FormEvent) => {
    e.preventDefault();
    if (password.length < 4) {
      setError("Use at least 4 characters. This is a demo and does not check a real account.");
      setUser("");
      return;
    }
    setError("");
    setUser(email.split("@")[0] || "there");
  };

  return (
    <main className="max-w-[440px] mx-auto px-4 py-16">
      <h1 className="font-display text-3xl md:text-4xl font-bold mb-2">
        Sign <span className="text-[#b8914a]">in</span>
      </h1>
      <p className="text-sm text-[#8a8070] mb-8">
        Demo sign-in only. Any email works if the password is 4 characters or more.
      </p>

      {user ? (
        <div className="bg-white border border-[#ddd5c4] rounded-2xl p-6">
          <p className="font-display text-2xl font-bold mb-2">Welcome, {user}</p>
          <p className="text-sm text-[#8a8070] mb-5">You are signed in for this demo session on the page.</p>
          <div className="flex gap-3">
            <Link href="/buy" className="bg-[#1a1714] text-[#faf7f2] text-sm font-semibold px-5 py-2.5 rounded-lg">
              Browse homes
            </Link>
            <button type="button" onClick={() => setUser("")} className="text-sm font-medium text-[#4a4540] px-3">
              Sign out
            </button>
          </div>
        </div>
      ) : (
        <form onSubmit={submit} className="bg-white border border-[#ddd5c4] rounded-2xl p-6 flex flex-col gap-4">
          <label className="block">
            <span className="block text-[0.72rem] font-semibold tracking-[1.2px] uppercase text-[#8a8070] mb-2">Email</span>
            <input
              required
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border border-[#ddd5c4] bg-[#faf7f2] rounded-lg px-3 py-2.5 text-sm outline-none focus:border-[#b8914a]"
              placeholder="you@email.com"
            />
          </label>
          <label className="block">
            <span className="block text-[0.72rem] font-semibold tracking-[1.2px] uppercase text-[#8a8070] mb-2">Password</span>
            <input
              required
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full border border-[#ddd5c4] bg-[#faf7f2] rounded-lg px-3 py-2.5 text-sm outline-none focus:border-[#b8914a]"
              placeholder="••••"
            />
          </label>
          {error && <p className="text-sm text-[#9c4a2a]">{error}</p>}
          <button type="submit" className="bg-[#1a1714] text-[#faf7f2] text-sm font-semibold py-3 rounded-lg hover:bg-[#2f2b26]">
            Sign in
          </button>
        </form>
      )}
    </main>
  );
}
