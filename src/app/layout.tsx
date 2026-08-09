import type { Metadata } from "next";
import { Geist, Geist_Mono, Instrument_Serif } from "next/font/google";
import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";
import ChatWidget from "@/components/ChatWidget";
import { siteUrl } from "@/lib/seo";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Strohm Partners | Put AI to work on the busywork",
    template: "%s · Strohm Partners",
  },
  description:
    "A 45-minute AI Tools Assessment that finds the work slowing you down and recommends 3–7 tools to try.",
  openGraph: {
    title: "Strohm Partners | Put AI to work on the busywork",
    description:
      "A 45-minute conversation about the work slowing you down, with 3–7 tools matched to your business.",
    type: "website",
    url: siteUrl,
  },
  twitter: { card: "summary_large_image" },
  icons: {
    icon: "/strohm-partners-favicon.jpg",
    shortcut: "/strohm-partners-favicon.jpg",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${instrumentSerif.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-ink-900 text-ink-100 font-sans selection:bg-accent-500 selection:text-ink-950">
        <Nav />
        <main className="flex-1">{children}</main>
        <Footer />
        <ChatWidget />
      </body>
    </html>
  );
}
