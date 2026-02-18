import { Montserrat } from "next/font/google";
import Navbar from "@/components/Navbar";
import "./globals.css";

import { Metadata } from "next";

// Proxima Nova alternative — Montserrat (closest free Google Font match)
// Weights: 400 = Regular, 700 = Bold, 900 = Black
const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "700", "900"],
  variable: "--font-proxima-nova",
});

export const metadata: Metadata = {
  title: "Bravo Restaurant",
  description: "The key to fine dining",
  icons: {
    icon: "/logo.jpg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${montserrat.variable} bg-black text-white`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
