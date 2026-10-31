import "../../globals.css";
import { Analytics } from "@vercel/analytics/next";
import { cinzel, ebGaramond } from "@/lib/fonts";
import { siteMetadata } from "@/lib/site";
import { fr } from "@/lib/i18n/fr";

export const metadata = siteMetadata(fr);

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr">
      <body className={`${cinzel.variable} ${ebGaramond.variable} antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
