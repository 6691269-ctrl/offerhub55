import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "OfferHub — финансовые предложения",
  description:
    "Финансовые предложения в одном месте: банковские карты, РКО, регистрация бизнеса и займы.",
  robots: { index: true, follow: true },
  icons: { icon: "/icons/favicon.svg" },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ru">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
