import { notFound } from "next/navigation";
import Link from "next/link";
import { getProductBySlug, products } from "@/data/products";
import { ProductGallery } from "@/components/product/ProductGallery";
import { ProductDetails } from "@/components/product/ProductDetails";
import { RelatedProducts } from "@/components/product/RelatedProducts";

interface ProductPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return products.map((product) => ({
    slug: product.slug,
  }));
}

export async function generateMetadata({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    return { title: "Produto não encontrado" };
  }

  return {
    title: product.name,
    description: product.description,
  };
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-black pt-24 pb-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm text-zinc-500 mb-8">
          <Link href="/" className="hover:text-white transition-colors">
            Início
          </Link>
          <span>/</span>
          <Link href="/catalogo" className="hover:text-white transition-colors">
            Catálogo
          </Link>
          <span>/</span>
          <span className="text-white">{product.name}</span>
        </nav>

        {/* Produto */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <ProductGallery product={product} />
          <ProductDetails product={product} />
        </div>

        {/* Produtos Relacionados */}
        <RelatedProducts
          currentProductId={product.id}
          category={product.category}
        />
      </div>
    </main>
  );
}
