import type { Metadata } from "next";
import { Outfit, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import SmoothScroll from "@/components/smooth-scroll";
import Chatbot from "@/components/chatbot";

import CustomCursor from "@/components/custom-cursor";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

export const metadata: Metadata = {
  title: "Aether | A Life Extraordinary",
  description: "Experience the ethereal beauty of the digital void.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${outfit.variable} ${playfair.variable}`}>
        <SmoothScroll>
          <CustomCursor />
          <Navbar />
          {children}
          <Chatbot />
        </SmoothScroll>
      </body>
    </html>
  );
}
