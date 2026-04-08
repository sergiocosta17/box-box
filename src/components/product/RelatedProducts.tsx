import { ProductCard } from "@/components/product-card";
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
    <section className="mt-20">
      <h2 className="text-2xl font-bold text-white mb-8">
        Produtos{" "}
        <span className="bg-linear-to-r from-green-400 to-yellow-400 bg-clip-text text-transparent">
          Relacionados
        </span>
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {relatedProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}
