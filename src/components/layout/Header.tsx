"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X, MessageCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { CartButton } from "@/components/cart/CartButton";
import { Logo } from "@/components/common/Logo";

const NAVIGATION_ITEMS = [
  { name: "Início", href: "/" },
  { name: "Acervo", href: "/catalogo" },
  { name: "Senna Collection", href: "/categorias/senna-collection" },
  { name: "Lendas", href: "/categorias/f1-legends" },
  { name: "História", href: "/sobre" },
];

const WHATSAPP_NUMBER = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "5581999999999";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const whatsappLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    "Olá! Vim pelo site BOX BOX e gostaria de falar com a equipa."
  )}`;

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled 
          ? "bg-[#050505]/98 backdrop-blur-2xl border-b border-white/10 shadow-[0_10px_30px_rgba(0,0,0,0.8)] py-2" 
          : "bg-black/80 backdrop-blur-xl border-b border-white/5 py-4"
      }`}
    >
      {/* Linha fina premium no topo com as cores do Brasil/Senna */}
      <div 
        className="absolute top-0 left-0 right-0 h-[2px] opacity-100"
        style={{ background: "linear-gradient(90deg, #FFCD00 0%, #009739 50%, #00205B 100%)" }}
      />

      <nav className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16 lg:h-20">
          
          {/* LOGO IMPORTADO */}
          <Logo size="md" />

          {/* MENU DESKTOP */}
          <div className="hidden lg:flex items-center gap-10">
            {NAVIGATION_ITEMS.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-xs font-bold uppercase tracking-widest text-neutral-400 hover:text-white transition-colors relative group py-2"
              >
                {item.name}
                <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-box-yellow transition-all duration-500 group-hover:w-full" />
              </Link>
            ))}
          </div>

          {/* ÁREA DE AÇÕES */}
          <div className="flex items-center gap-4 sm:gap-6">
            <Link
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-white hover:text-[#009739] transition-colors"
            >
              <MessageCircle className="w-4 h-4" />
              <span>VIP</span>
            </Link>

            <CartButton />

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-neutral-400 hover:text-white transition-colors ml-2"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* MENU MOBILE */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="lg:hidden absolute top-full left-0 right-0 bg-[#050505]/98 backdrop-blur-2xl border-b border-white/10 py-6 px-6 shadow-2xl"
          >
            <div className="flex flex-col gap-6">
              {NAVIGATION_ITEMS.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-lg font-black uppercase tracking-widest text-neutral-300 hover:text-box-yellow"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}