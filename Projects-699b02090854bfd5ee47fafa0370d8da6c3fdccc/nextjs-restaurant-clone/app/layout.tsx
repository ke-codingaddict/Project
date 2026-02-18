import { Cormorant_Upright, Open_Sans } from "next/font/google";
import Navbar from "@/components/Navbar";
import "./globals.css";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Metadata } from "next";

const cormorantUpright = Cormorant_Upright({ 
  subsets: ["latin"],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-cormorant-upright',
});

const openSans = Open_Sans({ 
  subsets: ["latin"],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-open-sans',
});

export const metadata: Metadata = {
  title: "Bravo Restaurant",
  description: "The key to fine dining",
  icons: {
    icon: '/logo.jpg',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${cormorantUpright.variable} ${openSans.variable} bg-black text-white`}>
        <Navbar />
        {children}
        <WhatsAppButton />
      </body>
    </html>
  );
}
