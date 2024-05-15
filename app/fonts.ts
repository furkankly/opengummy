import { Inter, Space_Mono } from "next/font/google";

export const spaceMono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-space-mono",
});
export const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
