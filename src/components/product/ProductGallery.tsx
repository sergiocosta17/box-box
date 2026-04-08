"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
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
    <div className="flex flex-col gap-6">
      {/* Container Principal de Imagem */}
      <div className="relative w-full aspect-[4/5] sm:aspect-square md:aspect-[4/5] bg-[#0a0a0a] rounded-2xl overflow-hidden border border-white/5 shadow-2xl">
        
        {/* Badges Flutuantes */}
        <div className="absolute top-6 left-6 z-20 flex flex-col gap-2">
          {discount && (
            <span className="bg-[#E10600] text-white text-[11px] font-black uppercase tracking-widest px-3 py-1.5 rounded-sm shadow-lg">
              -{discount}% OFF
            </span>
          )}
          {product.featured && (
            <span className="bg-box-yellow text-box-black text-[11px] font-black uppercase tracking-widest px-3 py-1.5 rounded-sm shadow-lg">
              Destaque
            </span>
          )}
        </div>

        {/* Imagem Principal 4K */}
        {imageError ? (
          <div className="absolute inset-0 flex items-center justify-center bg-neutral-900 z-0">
            <div className="flex flex-col items-center opacity-30">
              <span className="text-6xl italic font-black text-white">S</span>
              <span className="text-xs uppercase tracking-widest mt-4">Arte Indisponível</span>
            </div>
          </div>
        ) : (
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedImage}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="absolute inset-0 z-0"
            >
              <Image
                src={product.images[selectedImage]}
                alt={`${product.name} - Visão ${selectedImage + 1}`}
                fill
                quality={100} // <-- QUALIDADE MÁXIMA (Sem compressão WebP agressiva)
                priority // <-- CARREGA PRIMEIRO PARA NÃO PISCAR
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
                onError={() => setImageError(true)}
              />
            </motion.div>
          </AnimatePresence>
        )}
      </div>

      {/* Miniaturas (Thumbnails) HD */}
      {product.images.length > 1 && !imageError && (
        <div className="flex flex-wrap gap-4">
          {product.images.map((image, index) => (
            <button
              key={index}
              onClick={() => setSelectedImage(index)}
              className={`relative w-20 h-20 md:w-24 md:h-24 rounded-xl overflow-hidden transition-all duration-300 ${
                selectedImage === index
                  ? "border-2 border-box-yellow shadow-lg shadow-box-yellow/20 scale-105"
                  : "border border-white/10 opacity-60 hover:opacity-100 hover:border-white/30"
              }`}
            >
              <Image
                src={image}
                alt={`Miniatura ${index + 1}`}
                fill
                quality={100} // <-- THUMBNAILS TAMBÉM EM ALTA QUALIDADE
                sizes="100px"
                className="object-cover"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}