import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin", "cyrillic"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space",
  display: "swap",
});

export const metadata = {
  title: "AirDanon | FPV антени українського виробництва",
  description:
    "FPV антени AirDanon: індивідуальне моделювання, кастомні частоти та перевірка кожного виробу на аналізаторі кіл.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="uk">
      <body className={`${inter.variable} ${spaceGrotesk.variable}`}>
        {children}
      </body>
    </html>
  );
}
