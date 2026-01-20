import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import SmoothScroll from "@/components/SmoothScroll";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "LouLuxe Collective | From Chaos to Calm",
  description: "Helping small business owners stay sane. Admin | Social Media | Executive Assistance.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${playfair.variable} antialiased bg-primary-bg text-text-main font-sans selection:bg-accent selection:text-white`}
      >
        <SmoothScroll />
        {children}
      </body>
    </html>
  );
}
