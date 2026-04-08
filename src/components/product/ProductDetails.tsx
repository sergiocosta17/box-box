"use client";

import { useState } from "react";
import { Product } from "@/types/product";
import { useCart } from "@/contexts/CartContext";
import { formatPriceWithCurrency, calculateInstallment } from "@/lib/utils";
import { CATEGORY_NAMES } from "@/lib/constants";
import { generateProductWhatsAppLink } from "@/lib/whatsapp";

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
      {/* Categoria */}
      <div className="flex items-center gap-2">
        <span className="w-2 h-2 bg-green-500 rounded-full" />
        <span className="text-green-500 font-medium uppercase tracking-wider text-sm">
          {CATEGORY_NAMES[product.category]}
        </span>
      </div>

      {/* Nome */}
      <h1 className="text-3xl md:text-4xl font-bold text-white mt-3">
        {product.name}
      </h1>

      {/* Avaliações fake */}
      <div className="flex items-center gap-2 mt-3">
        <div className="flex">
          {[...Array(5)].map((_, i) => (
            <svg key={i} className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          ))}
        </div>
        <span className="text-zinc-400 text-sm">(12 avaliações)</span>
      </div>

      {/* Preço */}
      <div className="mt-6 p-4 bg-zinc-900/50 rounded-2xl border border-zinc-800">
        <div className="flex items-baseline gap-3">
          <span className="text-4xl font-bold text-white">
            {formatPriceWithCurrency(product.price)}
          </span>
          {product.originalPrice && (
            <span className="text-xl text-zinc-500 line-through">
              {formatPriceWithCurrency(product.originalPrice)}
            </span>
          )}
        </div>
        <p className="text-green-500 mt-2 flex items-center gap-2">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
          </svg>
          {calculateInstallment(product.price)}
        </p>
      </div>

      {/* Descrição */}
      <p className="text-zinc-400 mt-6 leading-relaxed">{product.description}</p>

      {/* Tamanhos */}
      <div className="mt-8">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-white font-semibold">Tamanho</h3>
          <span className="text-zinc-500 text-sm">Selecione uma opção</span>
        </div>
        <div className="flex flex-wrap gap-3">
          {product.sizes.map((size) => (
            <button
              key={size}
              onClick={() => setSelectedSize(size)}
              className={`px-5 py-3 rounded-xl text-sm font-medium transition-all duration-300 ${
                selectedSize === size
                  ? "bg-green-500 text-white shadow-lg shadow-green-500/25"
                  : "border border-zinc-700 text-zinc-300 hover:border-green-500/50 hover:text-white"
              }`}
            >
              {size}
            </button>
          ))}
        </div>
      </div>

      {/* Estoque */}
      <div className="mt-6">
        {product.inStock ? (
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-green-500/10 rounded-full">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            <span className="text-green-500 text-sm font-medium">Em estoque</span>
          </div>
        ) : (
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-red-500/10 rounded-full">
            <span className="w-2 h-2 bg-red-500 rounded-full" />
            <span className="text-red-500 text-sm font-medium">Fora de estoque</span>
          </div>
        )}
      </div>

      {/* Botões */}
      <div className="flex flex-col gap-3 mt-8">
        {/* Adicionar ao carrinho */}
        <button
          onClick={handleAddToCart}
          disabled={!product.inStock}
          className="flex items-center justify-center gap-2 w-full px-8 py-4 bg-white text-black font-semibold rounded-2xl hover:bg-zinc-200 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
          </svg>
          Adicionar ao Carrinho
        </button>

        {/* Comprar pelo WhatsApp */}
        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 w-full px-8 py-4 bg-[#25D366] text-white font-semibold rounded-2xl hover:bg-[#20BD5A] transition-all duration-300 shadow-lg shadow-green-500/20"
        >
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
          </svg>
          Comprar pelo WhatsApp
        </a>
      </div>

      {/* Info adicional */}
      <div className="mt-8 pt-8 border-t border-zinc-800 grid grid-cols-1 sm:grid-cols-2 gap-4">
        {[
          { icon: "🚚", text: "Frete grátis acima de R$ 299" },
          { icon: "🔒", text: "Pagamento 100% seguro" },
          { icon: "🎨", text: "Impressão em alta qualidade" },
          { icon: "📦", text: "Embalagem premium" },
        ].map((item, i) => (
          <div key={i} className="flex items-center gap-3 text-zinc-400">
            <span className="text-lg">{item.icon}</span>
            <span className="text-sm">{item.text}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
