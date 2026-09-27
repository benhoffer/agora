import { Cinzel, EB_Garamond } from "next/font/google";

export const cinzel = Cinzel({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const ebGaramond = EB_Garamond({
  variable: "--font-sans",
  subsets: ["latin"],
  style: ["normal", "italic"],
  weight: ["400", "500", "600"],
  display: "swap",
});
