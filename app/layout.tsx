import type { Metadata } from "next";
import "./globals.css";
import RootLayout from "@/components/layouts/RootLayout";
import CustomCursor from "@/components/ui/custom-cursor";
import SplashCursor from "@/components/ui/splash-cursor";
import SmoothScrollProvider from "@/components/providers/smooth-scroll-provider";
// 1. Clean the base URL to ensure no trailing slash causes double-slash bugs
const rawBaseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://cosmos.gdgpup.org";
const cleanBaseUrl = rawBaseUrl.replace(/\/$/, "");

export const metadata: Metadata = {
  // 2. Set metadataBase. This tells Next.js how to resolve relative paths.
  metadataBase: new URL(cleanBaseUrl), 
  
  title: "COSMOS 2026",
  description: "GDG PUP's biggest tech event of the year",
  
  icons: {
    icon: [
      { url: "/favicon-for-app/icon0.svg", type: "image/svg+xml" },
      { url: "/favicon-for-app/icon1.png", sizes: "96x96", type: "image/png" },
    ],
    apple: [
      {
        url: "/favicon-for-app/apple-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
    other: [{ rel: "manifest", url: "/favicon-for-app/manifest.json" }],
  },
  
  openGraph: {
    title: "COSMOS 2026",
    description: "GDG PUP's biggest tech event of the year",
    type: "website",
    images: [
      {
        // 3. Now you CAN safely use relative paths here!
        url: "/assets/infinity.png", 
        width: 1200,
        height: 630,
        alt: "COSMOS 2026 Logo",
        type: "image/png",
      },
    ],
  },
  
  twitter: {
    card: "summary_large_image",
    title: "COSMOS 2026",
    description: "GDG PUP's biggest tech event of the year",
    // 4. Relative path works here too.
    images: ["/assets/infinity.png"], 
  },
};

export default function RootLayoutt({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) { 
  return (
    <html lang="en" style={{ backgroundColor: "#000" }}>
      <head>
        <style>
          {`@import url('https://fonts.googleapis.com/css2?family=Google+Sans:ital,opsz,wght@0,17..18,400..700;1,17..18,400..700&family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap');`}
        </style>
      </head>
      <body
        className="font-sans antialiased bg-black"
        style={{ backgroundColor: "#000" }}
      >
        <SmoothScrollProvider>
          <SplashCursor />
          <CustomCursor />
          <RootLayout>{children}</RootLayout>
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
