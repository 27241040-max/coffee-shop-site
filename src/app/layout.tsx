import type { Metadata } from "next";
import { Karla, Playfair_Display_SC } from "next/font/google";
import "./globals.css";

const karla = Karla({
  variable: "--font-karla",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display_SC({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Arbor Coffee — Specialty Coffee & Slow Bar",
  description:
    "Arbor Coffee is a neighborhood coffee shop serving single-origin espresso, slow bar pour-overs, and seasonal pastries in a warm, minimalist space.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh" className={`${karla.variable} ${playfair.variable}`}>
      <body className="antialiased">
        <div className="min-h-screen bg-[#FEF3C7] text-[#451A03]">
          {children}
        </div>
      </body>
    </html>
  );
}
