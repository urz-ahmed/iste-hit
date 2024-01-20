import { ReactNode } from "react";
import Navbar from "@/ui/header/navbar";
import Footer from "@/ui/footer/footer";
import { APP_ENV, SITE_URL } from "@/config";
import "@/app/globals.css";

export const metadata = {
  viewport: {
    width: "device-width",
    initialScale: 1,
  },
  title: {
    template: "%s | ISTE HIT",
    default: "ISTE HIT",
  },
  description: "ISTE HIT Student Chapter Website",
  keywords: ["ISTE HIT", "ISTE", "Student Chapterr", "iste-hit"],
  themeColor: "white",
  formatDetection: {
    telephone: false,
  },
  metadataBase: new URL(SITE_URL),
  openGraph: {
    title: "ISTE HIT",
    description: "ISTE HIT Student Chapter Website",
    url: SITE_URL,
    siteName: "ISTE HIT",
    images: [
      {
        url: "/images/og.png",
        width: 2800,
        height: 1600,
        alt: "ISTE HIT",
      },
    ],
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ISTE HIT",
    description: "ISTE HIT Student Chapter Website",
    site: "@istehit",
    images: ["/images/og.png"],
  },
  robots: {
    index: APP_ENV === "production",
    follow: APP_ENV === "production",
    "max-image-preview": "large",
    "max-video-preview": -1,
    "max-snippet": -1,
    googleBot: {
      index: APP_ENV === "production",
      follow: APP_ENV === "production",
      "max-image-preview": "large",
      "max-video-preview": -1,
      "max-snippet": -1,
    },
  },
};

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body>
      <div className="overflow-x-hidden overflow-y-hidden">
        <Navbar />
        <div className=" relative z-0 overflow-x-hidden overflow-y-hidden h-full pattern text-white">
          {children}
        </div>
        <Footer />
      </div>
    </body>
    </html>
  );
}
