import { Inter, Manrope } from "next/font/google";
import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";

const inter = Inter({
  subsets: ["latin", "cyrillic"],
  variable: "--font-inter",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin", "cyrillic"],
  variable: "--font-space",
  display: "swap",
});

export const metadata: Metadata = {
  title: "AirDanon | FPV антени українського виробництва",
  description:
    "FPV антени AirDanon: індивідуальне моделювання, кастомні частоти та перевірка кожного виробу на аналізаторі кіл.",
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="uk">
      <body className={`${inter.variable} ${manrope.variable}`}>
        {children}
      </body>
    </html>
  );
}
