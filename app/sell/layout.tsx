import type { Metadata } from "next";

// Gives this client page its own tab title.
export const metadata: Metadata = {
  title: "Sell Your Property",
  description: "List your home with NestFind and get a free price estimate.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
