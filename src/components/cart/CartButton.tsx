"use client";

import { useCart } from "@/contexts/CartContext";
import { ShoppingBag } from "lucide-react";

export function CartButton() {
  const { totalItems, openCart } = useCart();

  return (
    <button
      onClick={openCart}
      className="relative w-10 h-10 flex items-center justify-center rounded-full bg-white/[0.02] border border-white/5 text-neutral-400 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all duration-300 group"
      aria-label="Abrir carrinho"
    >
      <ShoppingBag className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
      
      {totalItems > 0 && (
        <span className="absolute -top-1 -right-1 w-4 h-4 bg-box-yellow text-box-black text-[9px] font-black rounded-full flex items-center justify-center shadow-[0_0_10px_rgba(255,205,0,0.4)] animate-fade-in">
          {totalItems > 9 ? "9+" : totalItems}
        </span>
      )}
    </button>
  );
}