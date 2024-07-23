import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { montserrat } from "./font/font";
import Footer from "@/components/Footer";
import { SpeedInsights } from '@vercel/speed-insights/next';

export const metadata: Metadata = {
  title: "Portfolio Ariel Montes",
  description: "portfolio desarrollador front end",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <Navbar />
        {children}
        <SpeedInsights />
        <Footer />
      </body>
    </html>
  );
}
