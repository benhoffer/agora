import type { Metadata } from "next";
import { Cinzel, EB_Garamond } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const cinzel = Cinzel({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const ebGaramond = EB_Garamond({
  variable: "--font-sans",
  subsets: ["latin"],
  style: ["normal", "italic"],
  weight: ["400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "AGORA — Gold Standard Direct Democracy Infrastructure",
  description:
    "We build efficient, secure, and collaborative governance infrastructure for any institution—from city councils and corporate boards to neighborhood unions.",
  openGraph: {
    title: "AGORA",
    description: "Gold Standard Direct Democracy Infrastructure.",
    type: "website",
  },
  icons: {
    icon: "/icon.png",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${cinzel.variable} ${ebGaramond.variable} antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
