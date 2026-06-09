import type { Metadata } from "next";
import { Geist, Geist_Mono, Instrument_Serif } from "next/font/google";
import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";
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
  metadataBase: new URL("https://strohmpartners.com"),
  title: {
    default: "Strohm Partners | Your dedicated AI partner",
    template: "%s · Strohm Partners",
  },
  description:
    "I partner with small and medium-sized businesses to find where AI saves time, cuts costs, and drives growth, then I help make it happen. Personal attention, dedicated support, real results.",
  openGraph: {
    title: "Strohm Partners | AI strategy that fits your business",
    description:
      "I partner with small and medium-sized businesses to find where AI saves time, cuts costs, and drives growth, then I help make it happen.",
    type: "website",
    url: "https://strohmpartners.com",
  },
  twitter: { card: "summary_large_image" },
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
      </body>
    </html>
  );
}
