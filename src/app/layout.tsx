import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Toaster } from "sonner";

import "./globals.css";

import TopBar from "@/components/topbar/Topbar";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import CartProvider from "@/context/CartContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://mapparel.com"),

  title: {
    default: "M APPAREL | Premium Men's Fashion",
    template: "%s | M APPAREL",
  },

  description:
    "Discover premium men's fashion at M APPAREL. Shop stylish polos, t-shirts, trousers, and everyday essentials with modern designs, premium quality, and affordable prices.",

  keywords: [
    "M APPAREL",
    "Men's Clothing",
    "Men's Fashion",
    "Fashion Store",
    "Polos",
    "Polo Shirts",
    "T-Shirts",
    "Men's T-Shirts",
    "Trousers",
    "Casual Wear",
    "Premium Clothing",
    "Streetwear",
    "Online Shopping",
    "Pakistan Fashion",
    "Men's Apparel",
    "Affordable Fashion",
    "Trending Fashion",
    "Cotton T-Shirts",
    "Slim Fit",
    "Modern Clothing",
  ],

  authors: [
    {
      name: "M APPAREL",
    },
  ],

  creator: "M APPAREL",

  publisher: "M APPAREL",

  alternates: {
    canonical: "/",
  },

  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  openGraph: {
    type: "website",
    locale: "en_PK",
    url: "https://mapparel.com",
    siteName: "M APPAREL",
    title: "M APPAREL | Premium Men's Fashion",
    description:
      "Explore premium men's clothing including polos, t-shirts, trousers and more. Quality fashion designed for everyday style.",
  },

  twitter: {
    card: "summary_large_image",
    title: "M APPAREL | Premium Men's Fashion",
    description:
      "Shop premium men's fashion with stylish polos, t-shirts, trousers and more.",
  },

  category: "Fashion",

  applicationName: "M APPAREL",

  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable}`}
      suppressHydrationWarning
    >
      <body>
        <CartProvider>
          <TopBar />
          <Navbar />

          {children}

          <Footer />

          <Toaster
            position="top-right"
            richColors
            closeButton
            duration={3000}
          />
        </CartProvider>
      </body>
    </html>
  );
}
