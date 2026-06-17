import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://trackprocleaners.com"),
  title: "Track Pro Cleaners | Professional Cleaning Services",
  description: "Premium residential, move-in/out, and post-construction cleaning services. Get a free quote today and experience the joy of a pristine space.",
  keywords: ["cleaning services", "residential cleaning", "move-in cleaning", "post-construction cleaning", "Cityville cleaners"],
  openGraph: {
    title: "Track Pro Cleaners | Professional Cleaning Services",
    description: "Premium residential, move-in/out, and post-construction cleaning services.",
    url: "https://trackprocleaners.com",
    siteName: "Track Pro Cleaners",
    locale: "en_US",
    type: "website",
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
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
