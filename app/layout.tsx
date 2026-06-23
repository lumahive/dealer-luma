import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Premium Motors | Kendaraan Mewah di Indonesia",
  description: "Rasakan keanggunan dan performa. Pilihan kendaraan mewah terbaik di Indonesia.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className={`${outfit.variable}`}>
      <body>{children}</body>
    </html>
  );
}
