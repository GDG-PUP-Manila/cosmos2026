import type { Metadata } from "next";
import "./globals.css";
import CustomCursor from "@/components/ui/custom-cursor";
import SplashCursor from "@/components/ui/splash-cursor";

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
      <head>
        <style>
          {`@import url('https://fonts.googleapis.com/css2?family=Google+Sans:ital,opsz,wght@0,17..18,400..700;1,17..18,400..700&family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap');`}
        </style>
      </head>
      <body className="font-sans antialiased">
        <SplashCursor />
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}
