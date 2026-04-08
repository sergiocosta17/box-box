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
    <Link href={`/produto/${product.slug}`} className="group block h-full">
      <div className="relative h-full flex flex-col bg-white/[0.02] rounded-2xl overflow-hidden border border-white/5 backdrop-blur-sm transition-all duration-500 hover:border-box-yellow/30 hover:bg-white/[0.04] hover:-translate-y-1 hover:shadow-2xl hover:shadow-box-yellow/10">
        
        {/* Container da Imagem */}
        <div className="relative aspect-[4/5] bg-[#0a0a0a] overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-t from-box-black via-transparent to-transparent opacity-80 z-10" />

          {/* Badges Premium */}
          <div className="absolute top-4 left-4 z-20 flex flex-col gap-2">
            {discount && (
              <span className="bg-[#E10600] text-white text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-sm shadow-lg">
                -{discount}% OFF
              </span>
            )}
            {product.featured && (
              <span className="bg-box-yellow text-box-black text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-sm shadow-lg">
                Destaque
              </span>
            )}
          </div>

          {/* Imagem em Qualidade Máxima (4K Ready) */}
          {imageError ? (
            <div className="absolute inset-0 flex items-center justify-center bg-neutral-900 z-0">
              <div className="flex flex-col items-center opacity-30">
                <span className="text-4xl italic font-black text-white">S</span>
                <span className="text-[10px] uppercase tracking-widest mt-2">Sem Imagem</span>
              </div>
            </div>
          ) : (
            <Image
              src={product.images[0]}
              alt={product.name}
              fill
              quality={100} // <-- FORÇA A QUALIDADE MÁXIMA SEM COMPRESSÃO
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" // <-- OTIMIZA PARA MONITORES GRANDES
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-110 group-hover:opacity-80 z-0"
              onError={() => setImageError(true)}
            />
          )}
        </div>

        {/* Informações do Produto */}
        <div className="p-6 flex flex-col flex-grow justify-between relative z-20 -mt-8">
          <div>
            <div className="flex flex-wrap items-center gap-1.5 mb-3">
              {product.sizes.slice(0, 3).map((size) => (
                <span key={size} className="text-[9px] font-bold uppercase tracking-wider text-neutral-400 bg-white/5 border border-white/10 px-2 py-1 rounded-sm">
                  {size}
                </span>
              ))}
              {product.sizes.length > 3 && (
                <span className="text-[9px] font-bold text-neutral-500">+{product.sizes.length - 3}</span>
              )}
            </div>

            <h3 className="text-lg font-bold text-white group-hover:text-box-yellow transition-colors line-clamp-2 leading-tight">
              {product.name}
            </h3>
          </div>

          <div className="mt-6 flex items-baseline gap-3">
            <span className="text-2xl font-black text-white group-hover:text-box-yellow transition-colors">
              {formatPriceWithCurrency(product.price)}
            </span>
            {product.originalPrice && (
              <span className="text-xs font-medium text-neutral-500 line-through decoration-neutral-600">
                {formatPriceWithCurrency(product.originalPrice)}
              </span>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
}