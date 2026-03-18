import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import CustomCursor from "@/components/ui/custom-cursor";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "COSMOS 2026",
  description: "GDG PUP's biggest tech event of the year",
  icons: {
    icon: [
      { url: "/favicon-for-app/icon0.svg", type: "image/svg+xml" },
      { url: "/favicon-for-app/icon1.png", sizes: "96x96", type: "image/png" },
    ],
    apple: [{ url: "/favicon-for-app/apple-icon.png", sizes: "180x180", type: "image/png" }],
    other: [
      { rel: "manifest", url: "/favicon-for-app/manifest.json" },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}
