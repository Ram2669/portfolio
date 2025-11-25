import type { Metadata } from "next";
import { Rajdhani, Inter, Geist_Mono } from "next/font/google";
import "./globals.css";

const heading = Rajdhani({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["600", "700"],
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
  title: "Pampana Siva Surya Ram Gopal — Software Engineer | AI & Automation | Full-Stack Development",
  description:
    "Python Full-Stack Developer skilled in Django, React, and Azure OpenAI. Builds scalable, AI-driven web applications, backend APIs, and robust data layers. CCNA-certified; completed automation testing training.",
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
