import Navbar from "@/components/Navbar";
import "./globals.css";

import { Metadata } from "next";

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
      <body
        className="bg-black text-white"
        style={{ fontFamily: "'Proxima Nova', sans-serif" }}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
