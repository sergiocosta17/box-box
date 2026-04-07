import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: {
    default: "BOX BOX | Racing Art Gallery",
    template: "%s | BOX BOX",
  },
  description:
    "Quadros exclusivos de F1 e automobilismo. Arte que acelera seu coração. Homenagens a Senna, pilotos lendários e momentos históricos do automobilismo.",
  keywords: [
    "quadros F1",
    "arte automobilismo",
    "Ayrton Senna",
    "decoração racing",
    "quadros carros",
    "F1 art",
    "presente para fã de F1",
  ],
  authors: [{ name: "BOX BOX" }],
  openGraph: {
    type: "website",
    locale: "pt_BR",
    siteName: "BOX BOX",
    title: "BOX BOX | Racing Art Gallery",
    description: "Quadros exclusivos de F1 e automobilismo.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="dark">
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
