import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "@/components/providers/Providers";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: {
    default: "Box Box | Quadros de F1 e Automobilismo",
    template: "%s | Box Box",
  },
  description:
    "Quadros exclusivos de Fórmula 1, Ayrton Senna e automobilismo. Arte para apaixonados por velocidade.",
  keywords: ["F1", "Fórmula 1", "Senna", "quadros", "arte", "automobilismo"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${inter.variable} antialiased`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
