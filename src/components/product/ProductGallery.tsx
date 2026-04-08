"use client";

import { useState } from "react";
import Image from "next/image";
import { Product } from "@/types/product";
import { calculateDiscount } from "@/lib/utils";

interface ProductGalleryProps {
  product: Product;
}

export function ProductGallery({ product }: ProductGalleryProps) {
  const [selectedImage, setSelectedImage] = useState(0);
  const [imageError, setImageError] = useState(false);
  const discount = calculateDiscount(product.price, product.originalPrice);

  return (
    <div className="space-y-4">
      {/* Imagem Principal */}
      <div className="relative aspect-square bg-zinc-900 rounded-2xl overflow-hidden">
        {discount && (
          <div className="absolute top-4 left-4 z-10 bg-red-500 text-white text-sm font-bold px-3 py-1 rounded-full">
            -{discount}%
          </div>
        )}
        {product.featured && (
          <div className="absolute top-4 right-4 z-10 bg-yellow-500 text-black text-sm font-bold px-3 py-1 rounded-full">
            ⭐ Destaque
          </div>
        )}
        
        {imageError ? (
          <div className="absolute inset-0 flex items-center justify-center bg-linear-to-br from-zinc-800 to-zinc-900">
            <div className="text-center p-8">
              <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-green-500/20 flex items-center justify-center">
                <span className="text-5xl">🏎️</span>
              </div>
              <span className="text-zinc-400 text-lg">{product.name}</span>
            </div>
          </div>
        ) : (
          <Image
            src={product.images[selectedImage]}
            alt={product.name}
            fill
            className="object-cover"
            priority
            onError={() => setImageError(true)}
          />
        )}
      </div>

      {/* Thumbnails (se houver mais de uma imagem) */}
      {product.images.length > 1 && !imageError && (
        <div className="flex gap-2">
          {product.images.map((image, index) => (
            <button
              key={index}
              onClick={() => setSelectedImage(index)}
              className={`relative w-20 h-20 rounded-lg overflow-hidden border-2 transition-colors ${
                selectedImage === index
                  ? "border-green-500"
                  : "border-zinc-700 hover:border-zinc-500"
              }`}
            >
              <Image
                src={image}
                alt={`${product.name} - ${index + 1}`}
                fill
                className="object-cover"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
