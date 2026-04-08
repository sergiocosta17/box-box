import { ProductCard } from "@/components/product/ProductCard"; // <-- CAMINHO ATUALIZADO
import { getProductsByCategory } from "@/data/products";

interface RelatedProductsProps {
  currentProductId: string;
  category: string;
}

export function RelatedProducts({
  currentProductId,
  category,
}: RelatedProductsProps) {
  const relatedProducts = getProductsByCategory(category)
    .filter((p) => p.id !== currentProductId)
    .slice(0, 4);

  if (relatedProducts.length === 0) return null;

  return (
    <section className="relative w-full">
      <div className="flex flex-col mb-10">
        <h2 className="text-xs font-bold text-box-yellow uppercase tracking-[0.3em] mb-2">
          Complete a sua coleção
        </h2>
        <h3 className="text-3xl md:text-4xl font-black text-white tracking-tight">
          Artes <span className="text-neutral-500 italic font-light">Relacionadas</span>
        </h3>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {relatedProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}