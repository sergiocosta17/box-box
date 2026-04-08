"use client";

import Image from "next/image";
import { useCart } from "@/contexts/CartContext";
import { CartItem as CartItemType } from "@/types/cart";
import { formatPriceWithCurrency } from "@/lib/utils";
import { Trash2, Plus, Minus } from "lucide-react";

interface CartItemProps {
  item: CartItemType;
}

export function CartItem({ item }: CartItemProps) {
  const { updateQuantity, removeItem } = useCart();
  const { product, quantity, size } = item;

  return (
    <div className="flex gap-4 p-4 bg-white/[0.02] border border-white/5 rounded-2xl group transition-colors hover:bg-white/[0.04]">
      {/* Imagem */}
      <div className="relative w-20 h-24 rounded-lg overflow-hidden shrink-0 border border-white/10 bg-[#0a0a0a]">
        <Image
          src={product.images[0]}
          alt={product.name}
          fill
          className="object-cover opacity-90 group-hover:opacity-100 transition-opacity"
        />
      </div>

      {/* Info do Produto */}
      <div className="flex-1 min-w-0 flex flex-col justify-center">
        <h3 className="text-white font-bold truncate text-sm mb-1">{product.name}</h3>
        <p className="text-neutral-500 text-[10px] font-bold uppercase tracking-widest mb-2">
          Tamanho: <span className="text-neutral-300">{size}</span>
        </p>
        <p className="text-box-yellow font-black text-sm">
          {formatPriceWithCurrency(product.price)}
        </p>
      </div>

      {/* Controlos e Ações */}
      <div className="flex flex-col items-end justify-between py-1">
        {/* Botão Remover */}
        <button
          onClick={() => removeItem(product.id, size)}
          className="p-1.5 text-neutral-500 hover:text-[#E10600] bg-white/0 hover:bg-[#E10600]/10 rounded-md transition-all"
          aria-label="Remover item"
        >
          <Trash2 className="w-4 h-4" />
        </button>

        {/* Controlo de Quantidade Premium */}
        <div className="flex items-center gap-1 bg-black/40 border border-white/10 rounded-lg p-0.5">
          <button
            onClick={() => updateQuantity(product.id, size, Math.max(1, quantity - 1))}
            className="w-6 h-6 flex items-center justify-center rounded text-neutral-400 hover:text-white hover:bg-white/10 transition-colors"
          >
            <Minus className="w-3 h-3" />
          </button>
          <span className="text-white text-xs font-bold w-6 text-center select-none">
            {quantity}
          </span>
          <button
            onClick={() => updateQuantity(product.id, size, quantity + 1)}
            className="w-6 h-6 flex items-center justify-center rounded text-neutral-400 hover:text-white hover:bg-white/10 transition-colors"
          >
            <Plus className="w-3 h-3" />
          </button>
        </div>
      </div>
    </div>
  );
}