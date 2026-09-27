import "../globals.css";
import { Analytics } from "@vercel/analytics/next";
import { cinzel, ebGaramond } from "@/lib/fonts";
import { siteMetadata } from "@/lib/site";
import { en } from "@/lib/i18n/en";

export const metadata = siteMetadata(en);

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${cinzel.variable} ${ebGaramond.variable} antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
