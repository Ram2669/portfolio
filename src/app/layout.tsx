import type { Metadata } from "next";
import { Orbitron, Inter, Geist_Mono } from "next/font/google";
import "./globals.css";

const heading = Orbitron({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

const body = Inter({
  variable: "--font-body",
  subsets: ["latin"],
});

const mono = Geist_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ram Gopal Pampana — Python Developer & AI/LLM Engineer",
  description:
    "Python Developer & AI/LLM Engineer at Cisco. Building intelligent systems, multi-agent architectures, and production-grade automation.",
  metadataBase: new URL("https://ramgopal-portfolio.vercel.app"),
  alternates: { canonical: "/" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${heading.variable} ${body.variable} ${mono.variable} antialiased bg-[var(--mission-bg)] text-[var(--mission-text)]`}
      >
        {children}
      </body>
    </html>
  );
}
