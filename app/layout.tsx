import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";

import Providers from "@/components/providers";
import TopBar from "@/components/top-bar";
import { inter } from "./fonts";

let title = "OpenGummy";
let description =
  "Deconstructing the Gummy Paradigm: A Fruity Existential Quest";
let ogimage = "https://opengummy.vercel.app/og-image.png";
let url = "https://opengummy.vercel.app";
let sitename = "opengummy.vercel.app";
export const metadata: Metadata = {
  metadataBase: new URL(url),
  title,
  description,
  applicationName: "OpenGummy",
  referrer: "origin-when-cross-origin",
  keywords: ["Open", "Gummy", "Gelatin", "AI"],
  authors: [{ name: "Furkan Kalaycioglu", url: "https://www.furkankly.dev" }],
  creator: "Furkan Kalaycioglu",
  publisher: "Furkan Kalaycioglu",
  openGraph: {
    images: [ogimage],
    title,
    description,
    url: url,
    siteName: sitename,
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    images: [ogimage],
    title,
    description,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`flex h-[100svh] flex-col bg-neutral-200 dark:bg-black dark:text-neutral-200 ${inter.className}`}
      >
        <Analytics />
        <Providers
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <TopBar />
          <main className="flex-1">{children}</main>
        </Providers>
      </body>
    </html>
  );
}
