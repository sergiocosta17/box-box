"use client";

import { useState } from "react";
import { Product } from "@/types/product";
import { useCart } from "@/contexts/CartContext";
import { formatPriceWithCurrency, calculateInstallment } from "@/lib/utils";
import { CATEGORY_NAMES } from "@/lib/constants";
import { generateProductWhatsAppLink } from "@/lib/whatsapp";
import { Star, Truck, ShieldCheck, Palette, Package, ShoppingBag, MessageCircle } from "lucide-react";

interface ProductDetailsProps {
  product: Product;
}

export function ProductDetails({ product }: ProductDetailsProps) {
  const [selectedSize, setSelectedSize] = useState(product.sizes[0]);
  const { addItem } = useCart();

  const handleAddToCart = () => {
    addItem(product, selectedSize);
  };

  const whatsappLink = generateProductWhatsAppLink(
    product.name,
    selectedSize,
    product.price
  );

  return (
    <div className="flex flex-col">
      {/* Categoria e Referência */}
      <div className="flex items-center gap-3 mb-4">
        <span className="w-2 h-2 bg-box-yellow rounded-full animate-pulse" />
        <span className="text-box-yellow font-bold uppercase tracking-widest text-[10px]">
          {CATEGORY_NAMES[product.category]}
        </span>
        <span className="text-neutral-600 text-[10px] uppercase tracking-widest border-l border-neutral-700 pl-3">
          REF: BX-{product.id.slice(0, 4).toUpperCase()}
        </span>
      </div>

      {/* Título do Produto */}
      <h1 className="text-4xl md:text-5xl font-black text-white leading-tight tracking-tight">
        {product.name}
      </h1>

      {/* Avaliações */}
      <div className="flex items-center gap-3 mt-4">
        <div className="flex gap-1">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="w-4 h-4 fill-box-yellow text-box-yellow" />
          ))}
        </div>
        <span className="text-neutral-400 text-xs font-medium uppercase tracking-wider mt-0.5">
          (12 Avaliações Premium)
        </span>
      </div>

      {/* Bloco de Preço (Glassmorphism) */}
      <div className="mt-8 p-6 bg-white/2 rounded-2xl border border-white/5 backdrop-blur-sm relative overflow-hidden group">
        <div className="absolute inset-0 bg-gradient-to-r from-box-yellow/0 via-box-yellow/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
        
        <div className="relative z-10">
          <div className="flex items-baseline gap-4">
            <span className="text-4xl lg:text-5xl font-black text-white">
              {formatPriceWithCurrency(product.price)}
            </span>
            {product.originalPrice && (
              <span className="text-lg text-neutral-500 line-through decoration-neutral-600">
                {formatPriceWithCurrency(product.originalPrice)}
              </span>
            )}
          </div>
          <p className="text-box-yellow mt-2 text-sm font-bold tracking-wide">
            Em até {calculateInstallment(product.price)} sem juros
          </p>
        </div>
      </div>

      {/* Descrição */}
      <div className="mt-8">
        <h3 className="text-xs font-bold text-white uppercase tracking-widest mb-3">A História por trás da Arte</h3>
        <p className="text-neutral-400 leading-relaxed font-light text-sm md:text-base">
          {product.description}
        </p>
      </div>

      {/* Seletor de Tamanhos */}
      <div className="mt-10">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-xs font-bold text-white uppercase tracking-widest">Dimensões Disponíveis</h3>
          <span className="text-neutral-500 text-[10px] uppercase tracking-widest cursor-pointer hover:text-box-yellow transition-colors">
            Guia de Tamanhos
          </span>
        </div>
        <div className="flex flex-wrap gap-3">
          {product.sizes.map((size) => (
            <button
              key={size}
              onClick={() => setSelectedSize(size)}
              className={`px-6 py-3 rounded-md text-xs font-bold tracking-widest uppercase transition-all duration-300 border ${
                selectedSize === size
                  ? "bg-white text-box-black border-white shadow-lg shadow-white/10"
                  : "bg-transparent text-neutral-400 border-white/10 hover:border-white/40 hover:text-white"
              }`}
            >
              {size}
            </button>
          ))}
        </div>
      </div>

      {/* Status de Estoque */}
      <div className="mt-8">
        {product.inStock ? (
          <div className="inline-flex items-center gap-2">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#009739] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#009739]"></span>
            </span>
            <span className="text-neutral-300 text-xs font-bold uppercase tracking-widest">Pronto para Envio</span>
          </div>
        ) : (
          <div className="inline-flex items-center gap-2">
            <span className="w-2.5 h-2.5 bg-[#E10600] rounded-full" />
            <span className="text-[#E10600] text-xs font-bold uppercase tracking-widest">Fora de Pista (Esgotado)</span>
          </div>
        )}
      </div>

      {/* Ações de Compra */}
      <div className="flex flex-col gap-4 mt-10">
        <button
          onClick={handleAddToCart}
          disabled={!product.inStock}
          className="btn-primary w-full group py-5"
        >
          <ShoppingBag className="w-5 h-5 group-hover:-translate-y-1 transition-transform" />
          Adicionar ao Carrinho
        </button>

        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-3 w-full px-8 py-5 bg-[#128C7E] text-white text-sm font-bold uppercase tracking-wide rounded-full hover:bg-[#075E54] transition-all duration-300 shadow-lg shadow-[#128C7E]/20"
        >
          <MessageCircle className="w-5 h-5" />
          Atendimento Exclusivo
        </a>
      </div>

      {/* Informações Adicionais (Features) */}
      <div className="mt-12 pt-8 border-t border-white/5 grid grid-cols-1 sm:grid-cols-2 gap-6">
        {[
          { icon: <Truck className="w-5 h-5" />, title: "Frete Grátis", text: "Acima de R$ 299" },
          { icon: <ShieldCheck className="w-5 h-5" />, title: "Compra Segura", text: "Dados Criptografados" },
          { icon: <Palette className="w-5 h-5" />, title: "Fine Art", text: "Impressão Premium" },
          { icon: <Package className="w-5 h-5" />, title: "Embalagem", text: "Proteção Reforçada" },
        ].map((item, i) => (
          <div key={i} className="flex items-start gap-4 text-neutral-400 group cursor-default">
            <div className="p-2 rounded-lg bg-white/3 border border-white/5 group-hover:bg-box-yellow/10 group-hover:text-box-yellow transition-colors">
              {item.icon}
            </div>
            <div>
              <p className="text-xs font-bold text-white uppercase tracking-widest mb-1">{item.title}</p>
              <p className="text-xs text-neutral-500">{item.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}