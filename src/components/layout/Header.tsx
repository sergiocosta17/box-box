"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, MessageCircle } from "lucide-react";

const NAVIGATION_ITEMS = [
  { name: "Início", href: "/" },
  { name: "Catálogo", href: "/catalogo" },
  { name: "Senna Collection", href: "/categorias/senna-collection" },
  { name: "F1 Legends", href: "/categorias/f1-legends" },
  { name: "Sobre", href: "/sobre" },
];

const WHATSAPP_NUMBER =
  process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "5581999999999";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const whatsappLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    "Olá! Vim pelo site BOX BOX e gostaria de saber mais sobre os quadros."
  )}`;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-box-black/95 backdrop-blur-md border-b border-box-yellow/20">
      {/* Barra superior com gradiente - CORRIGIDO */}
      <div
        className="h-1 w-full"
        style={{
          background: "linear-gradient(to right, #FFCD00, #009739, #00205B)",
        }}
      />

      <nav className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* LOGO */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 grid grid-cols-2 grid-rows-2 rounded-lg overflow-hidden transform group-hover:scale-105 transition-transform">
              <div className="bg-box-yellow" />
              <div className="bg-box-black border border-box-yellow/30" />
              <div className="bg-box-black border border-box-yellow/30" />
              <div className="bg-box-yellow" />
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-black text-box-yellow tracking-tighter">
                BOX BOX
              </span>
              <span className="text-[10px] text-gray-400 tracking-[0.2em] uppercase -mt-1">
                Racing Art Gallery
              </span>
            </div>
          </Link>

          {/* MENU DESKTOP */}
          <div className="hidden lg:flex items-center gap-8">
            {NAVIGATION_ITEMS.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm font-medium text-gray-300 hover:text-box-yellow transition-colors relative group"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-box-yellow transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
          </div>

          {/* BOTÕES */}
          <div className="flex items-center gap-4">
            <Link
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:flex btn-whatsapp text-sm"
            >
              <MessageCircle className="w-4 h-4" />
              Fale Conosco
            </Link>

            {/* Botão Menu Mobile */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-gray-400 hover:text-box-yellow transition-colors"
              aria-label={mobileMenuOpen ? "Fechar menu" : "Abrir menu"}
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* MENU MOBILE */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-gray-800">
            <div className="flex flex-col gap-2">
              {NAVIGATION_ITEMS.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-4 py-3 text-gray-300 hover:text-box-yellow hover:bg-box-yellow/10 rounded-lg transition-colors"
                >
                  {item.name}
                </Link>
              ))}

              <Link
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp mt-4 mx-4"
                onClick={() => setMobileMenuOpen(false)}
              >
                <MessageCircle className="w-4 h-4" />
                Fale Conosco
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
