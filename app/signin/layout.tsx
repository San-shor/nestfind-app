import type { Metadata } from "next";

// Gives this client page its own tab title.
export const metadata: Metadata = {
  title: "Sign In",
  description: "Sign in to your NestFind account.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
