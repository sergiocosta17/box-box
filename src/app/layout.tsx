import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "@/components/providers/Providers";

// Otimização de fonte do Google
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

// SEO Premium
export const metadata: Metadata = {
  title: "BOX BOX | Racing Art Gallery",
  description: "Arte de alta performance e quadros exclusivos para apaixonados por Fórmula 1 e automobilismo.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      {/* O bg-carbon garante o fundo escuro desde o milissegundo 0 */}
      <body className={`${inter.variable} font-sans bg-carbon text-white antialiased`}>
        {/* Providers envolve o CartContext para o site todo */}
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}