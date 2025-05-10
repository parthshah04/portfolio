import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { AudioPlayer } from "@/components/AudioPlayer";
import { Toaster } from "@/components/ui/toaster";
import { AudioProvider } from "@/components/AudioContext"
import { BackgroundBlobs } from "@/components/BackgroundBlobs"

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000"),
  title: {
    default: "Parth Shah - Portfolio",
    template: "%s | Parth Shah",
  },
  description: "Full-stack developer specializing in modern web technologies",
  keywords: ["web development", "full-stack", "react", "next.js", "typescript"],
  authors: [{ name: "Parth Shah" }],
  creator: "Parth Shah",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    title: "Parth Shah - Portfolio",
    description: "Full-stack developer specializing in modern web technologies",
    siteName: "Parth Shah - Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Parth Shah - Portfolio",
    description: "Full-stack developer specializing in modern web technologies",
    creator: "@yourusername",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <AudioProvider>
            <BackgroundBlobs />
            <div className="relative min-h-screen flex flex-col">
              <Navbar />
              <main className="flex-1">{children}</main>
              <Footer />
              <AudioPlayer />
              <Toaster />
            </div>
          </AudioProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
