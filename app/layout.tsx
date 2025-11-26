import "../styles/globals.css";
import type { Metadata } from "next";
import { clsx } from "clsx";

export const metadata: Metadata = {
  title: {
    default: "QIWO Global Logistic — Import & Export nga Kina",
    template: "%s | QIWO Global Logistic",
  },
  description: "Ne ofrojmë shërbime të plota biznesi për ju në Kinë. Import & transport mallrash, organizim vize, depo 1000m² dhe komunikim i vazhdueshëm. Çështjet profesionale ua lini profesionistëve.",
  keywords: ["QIWO", "Import Kina", "Eksport Kina", "Logjistikë", "Kosovë", "Depo", "Vizë Biznesi", "Transport Detar", "Transport Ajror", "Furnitorë Kina"],
  openGraph: {
    type: "website",
    title: "QIWO Global Logistic — Import & Export nga Kina",
    description:
      "Ne ofrojmë shërbime të plota biznesi për ju në Kinë. Çështjet profesionale ua lini profesionistëve.",
    url: "https://qiwo.com",
    siteName: "QIWO Global Logistic",
  },
  alternates: { canonical: "/" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="sq" className="dark">
      <body
        className={clsx(
          "min-h-screen bg-brand-dark text-white",
          "selection:bg-brand/30 selection:text-white",
          "antialiased"
        )}
      >
        {children}
      </body>
    </html>
  );
}
