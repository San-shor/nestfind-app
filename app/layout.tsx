import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import DemoBar from "@/components/layout/DemoBar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://nestfind-app.vercel.app"),
  title: {
    default: "NestFind — Premium Real Estate Dhaka",
    template: "%s · NestFind",
  },
  description: "Find homes to buy or rent in Dhaka: Gulshan, Banani, Dhanmondi and more. A demo real estate website built by WebNest Studio.",
  openGraph: {
    type: "website",
    siteName: "NestFind",
    title: "NestFind — Premium Real Estate Dhaka (live demo)",
    description: "Search homes, filter by area and price, see them on a map. A sample real estate website built by WebNest Studio.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <DemoBar />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
