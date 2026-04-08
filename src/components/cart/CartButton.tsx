"use client";

import { useCart } from "@/contexts/CartContext";

export function CartButton() {
  const { totalItems, openCart } = useCart();

  return (
    <button
      onClick={openCart}
      className="relative w-10 h-10 flex items-center justify-center rounded-xl bg-zinc-900/50 border border-zinc-800 text-zinc-400 hover:text-white hover:border-yellow-500/30 transition-all group"
      aria-label="Abrir carrinho"
    >
      <svg
        className="w-5 h-5 group-hover:scale-110 transition-transform"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
        />
      </svg>
      {totalItems > 0 && (
        <span className="absolute -top-1.5 -right-1.5 w-5 h-5 bg-linear-to-r from-yellow-500 to-yellow-400 text-black text-xs font-bold rounded-full flex items-center justify-center shadow-lg shadow-yellow-500/50">
          {totalItems > 9 ? "9+" : totalItems}
        </span>
      )}
    </button>
  );
}
