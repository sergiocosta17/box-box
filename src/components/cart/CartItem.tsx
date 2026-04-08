"use client";

import Image from "next/image";
import { useCart } from "@/contexts/CartContext";
import { CartItem as CartItemType } from "@/types/cart";
import { formatPriceWithCurrency } from "@/lib/utils";

interface CartItemProps {
  item: CartItemType;
}

export function CartItem({ item }: CartItemProps) {
  const { updateQuantity, removeItem } = useCart();
  const { product, quantity, size } = item;

  return (
    <div className="flex gap-4 p-4 bg-zinc-800 rounded-xl">
      {/* Imagem */}
      <div className="relative w-20 h-20 rounded-lg overflow-hidden shrink-0">
        <Image
          src={product.images[0]}
          alt={product.name}
          fill
          className="object-cover"
        />
      </div>

      {/* Info */}
      <div className="flex-1 min-w-0">
        <h3 className="text-white font-medium truncate">{product.name}</h3>
        <p className="text-zinc-500 text-sm">Tamanho: {size}</p>
        <p className="text-green-500 font-semibold mt-1">
          {formatPriceWithCurrency(product.price)}
        </p>
      </div>

      {/* Ações */}
      <div className="flex flex-col items-end justify-between">
        {/* Remover */}
        <button
          onClick={() => removeItem(product.id, size)}
          className="p-1 text-zinc-500 hover:text-red-500 transition-colors"
          aria-label="Remover item"
        >
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        {/* Quantidade */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => updateQuantity(product.id, size, quantity - 1)}
            className="w-6 h-6 flex items-center justify-center bg-zinc-700 rounded text-zinc-300 hover:bg-zinc-600 transition-colors"
          >
            -
          </button>
          <span className="text-white text-sm w-6 text-center">{quantity}</span>
          <button
            onClick={() => updateQuantity(product.id, size, quantity + 1)}
            className="w-6 h-6 flex items-center justify-center bg-zinc-700 rounded text-zinc-300 hover:bg-zinc-600 transition-colors"
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
}
