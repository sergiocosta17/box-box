"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Product } from "@/types/product";
import { calculateDiscount, formatPriceWithCurrency } from "@/lib/utils";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const [imageError, setImageError] = useState(false);
  const discount = calculateDiscount(product.price, product.originalPrice);

  return (
    <Link href={`/produto/${product.slug}`} className="group">
      <div className="bg-zinc-900 rounded-2xl overflow-hidden border border-zinc-800 hover:border-zinc-700 transition-all duration-300">
        {/* Imagem */}
        <div className="relative aspect-square bg-zinc-800 overflow-hidden">
          {/* Badges */}
          {discount && (
            <div className="absolute top-3 left-3 z-10 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full">
              -{discount}%
            </div>
          )}
          {product.featured && (
            <div className="absolute top-3 right-3 z-10 bg-yellow-500 text-black text-xs font-bold px-2 py-1 rounded-full">
              ⭐ Destaque
            </div>
          )}

          {imageError ? (
            <div className="absolute inset-0 flex items-center justify-center bg-zinc-800">
              <div className="text-center p-4">
                <div className="text-4xl mb-2">🏎️</div>
                <span className="text-zinc-500 text-sm">{product.name}</span>
              </div>
            </div>
          ) : (
            <Image
              src={product.images[0]}
              alt={product.name}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
              onError={() => setImageError(true)}
            />
          )}
        </div>

        {/* Info */}
        <div className="p-4">
          <h3 className="text-white font-semibold group-hover:text-yellow-400 transition-colors line-clamp-2 min-h-12">
            {product.name}
          </h3>

          <div className="flex items-center gap-1 mt-2">
            {product.sizes.slice(0, 3).map((size) => (
              <span key={size} className="text-xs text-zinc-500 bg-zinc-800 px-2 py-0.5 rounded">
                {size}
              </span>
            ))}
          </div>

          <div className="mt-4 flex items-baseline gap-2">
            <span className="text-xl font-bold text-white">
              {formatPriceWithCurrency(product.price)}
            </span>
            {product.originalPrice && (
              <span className="text-sm text-zinc-500 line-through">
                {formatPriceWithCurrency(product.originalPrice)}
              </span>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
}
