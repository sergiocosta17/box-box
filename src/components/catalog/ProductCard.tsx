import Link from "next/link";
import { Product } from "@/types/product";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const discount = product.originalPrice
    ? Math.round(
        ((product.originalPrice - product.price) / product.originalPrice) * 100
      )
    : null;

  return (
    <Link href={`/produto/${product.slug}`} className="group">
      <div className="relative bg-zinc-900 rounded-2xl overflow-hidden border border-zinc-800 transition-all duration-300 hover:border-green-500/50 hover:shadow-lg hover:shadow-green-500/10">
        {/* Badge de desconto */}
        {discount && (
          <div className="absolute top-3 left-3 z-10 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full">
            -{discount}%
          </div>
        )}

        {/* Badge destaque */}
        {product.featured && (
          <div className="absolute top-3 right-3 z-10 bg-yellow-500 text-black text-xs font-bold px-2 py-1 rounded-full">
            ⭐ Destaque
          </div>
        )}

        {/* Imagem */}
        <div className="relative aspect-square bg-zinc-800 overflow-hidden">
          <div className="absolute inset-0 bg-linear-to-br from-green-500/20 to-yellow-500/20 opacity-50" />

          {/* Placeholder - substitua pela imagem real */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center p-4">
              <div className="w-16 h-16 mx-auto mb-2 rounded-full bg-linear-to-br from-green-500 to-yellow-500 flex items-center justify-center">
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <p className="text-zinc-500 text-sm">{product.name}</p>
            </div>
          </div>

          {/* Overlay no hover */}
          <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <span className="bg-white text-black font-semibold px-4 py-2 rounded-full text-sm transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
              Ver Detalhes
            </span>
          </div>
        </div>

        {/* Info */}
        <div className="p-4">
          {/* Categoria */}
          <span className="text-xs text-green-500 font-medium uppercase tracking-wider">
            {product.category === "senna" && "Senna Collection"}
            {product.category === "f1-legends" && "F1 Legends"}
            {product.category === "classic" && "Clássicos"}
            {product.category === "modern" && "F1 Moderna"}
          </span>

          {/* Nome */}
          <h3 className="text-white font-semibold mt-1 group-hover:text-green-400 transition-colors line-clamp-2">
            {product.name}
          </h3>

          {/* Tamanhos */}
          <p className="text-zinc-500 text-sm mt-1">
            {product.sizes.length} tamanhos disponíveis
          </p>

          {/* Preço */}
          <div className="mt-3 flex items-center gap-2">
            <span className="text-xl font-bold text-white">
              R$ {product.price.toFixed(2).replace(".", ",")}
            </span>
            {product.originalPrice && (
              <span className="text-sm text-zinc-500 line-through">
                R$ {product.originalPrice.toFixed(2).replace(".", ",")}
              </span>
            )}
          </div>

          {/* Estoque */}
          {!product.inStock && (
            <span className="inline-block mt-2 text-xs text-red-400 font-medium">
              Fora de estoque
            </span>
          )}
        </div>
      </div>
    </Link>
  );
}
