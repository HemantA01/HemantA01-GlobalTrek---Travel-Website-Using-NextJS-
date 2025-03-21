import type { Metadata } from "next";
import {
  Geist,
  Geist_Mono,
  Montserrat,
  Dancing_Script,
  Playfair_Display,
} from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";
import { AnimatePresence } from "motion/react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
})

const dancingScript = Dancing_Script({
  variable: "--font-dancing-script",
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "GlobeTrek",
  description: "This is a travelling website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.variable} ${dancingScript.variable} ${playfair.variable} antialiased`}
      >
        <AnimatePresence mode="wait">
          <Toaster position="top-center" />
          {children}
        </AnimatePresence>
      </body>
    </html>
  );
}
