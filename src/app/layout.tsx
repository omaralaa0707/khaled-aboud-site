import type { Metadata } from "next";
import { Syne, Bodoni_Moda, Inter_Tight, Readex_Pro } from "next/font/google";
import "./globals.css";
import { LocaleProvider } from "@/i18n/locale-provider";
import { ar } from "@/content/ar";
import { en } from "@/content/en";

const syne = Syne({ subsets: ["latin"], weight: ["600", "700", "800"], variable: "--font-syne" });
// Their wordmark sets "LUXURY & EXOTICS" in a widely letterspaced serif; this
// is the face that treatment is rebuilt with.
const bodoni = Bodoni_Moda({ subsets: ["latin"], weight: ["400", "500"], variable: "--font-bodoni" });
const interTight = Inter_Tight({ subsets: ["latin"], weight: ["400", "500", "600"], variable: "--font-inter-tight" });
const readex = Readex_Pro({ subsets: ["arabic"], weight: ["300", "400", "500", "600"], variable: "--font-readex" });

export const metadata: Metadata = {
  title: "Khaled Aboud Automotive — Luxury & Exotics, New Cairo",
  description:
    "Where luxury meets the road. A catalogued collection of luxury and exotic cars at the Auto Hub & Museum, New Cairo — BMW, Mercedes-Benz, Range Rover, Hummer, Jeep and Exeed.",
  metadataBase: new URL("https://khaled-aboud-site.vercel.app"),
  icons: { icon: "/mark.svg" },
  openGraph: {
    title: "Khaled Aboud Automotive",
    description: "Luxury & Exotics — Auto Hub & Museum, New Cairo.",
    images: ["/media/m5-ext-03.jpg"],
    locale: "ar_EG",
    type: "website",
  },
  other: { "theme-color": "#0b0b0d" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    // translate="no": the site ships its own AR/EN copy, so browser
    // auto-translation would only garble hand-written bilingual text.
    <html
      lang="ar"
      dir="rtl"
      translate="no"
      className={`notranslate ${syne.variable} ${bodoni.variable} ${interTight.variable} ${readex.variable}`}
    >
      <body className="bg-void text-chalk antialiased">
        <LocaleProvider dictionaries={{ ar, en }} defaultLocale="ar">
          {children}
        </LocaleProvider>
      </body>
    </html>
  );
}
