import type { Metadata } from "next";

// Gives this client page its own tab title.
export const metadata: Metadata = {
  title: "Our Agents",
  description: "Meet the NestFind agents and send them a message.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
