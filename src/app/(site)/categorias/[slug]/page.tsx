import { notFound } from "next/navigation";
import Link from "next/link";
import { ProductCard } from "@/components/product-card";
import {
  categories,
  getProductsByCategory,
  getCategoryBySlug,
} from "@/data/products";

interface CategoryPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return categories.map((category) => ({
    slug: category.slug,
  }));
}

export async function generateMetadata({ params }: CategoryPageProps) {
  const { slug } = await params;
  const category = getCategoryBySlug(slug);

  if (!category) {
    return { title: "Categoria não encontrada" };
  }

  return {
    title: category.name,
    description: category.description,
  };
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { slug } = await params;
  const category = getCategoryBySlug(slug);

  if (!category) {
    notFound();
  }

  const products = getProductsByCategory(slug);

  return (
    <main className="min-h-screen bg-black">
      {/* Header */}
      <section className="pt-32 pb-12 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-zinc-500 mb-6">
            <Link href="/" className="hover:text-white transition-colors">
              Início
            </Link>
            <span>/</span>
            <Link
              href="/catalogo"
              className="hover:text-white transition-colors"
            >
              Catálogo
            </Link>
            <span>/</span>
            <span className="text-white">{category.name}</span>
          </nav>

          {/* Título */}
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              <span className="bg-linear-to-r from-green-400 to-yellow-400 bg-clip-text text-transparent">
                {category.name}
              </span>
            </h1>
            <p className="text-zinc-400 text-lg">{category.description}</p>
          </div>
        </div>
      </section>

      {/* Produtos */}
      <section className="pb-20 px-4">
        <div className="max-w-7xl mx-auto">
          <p className="text-zinc-400 mb-6">
            {products.length} produto(s) encontrado(s)
          </p>

          {products.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-zinc-400">
                Nenhum produto encontrado nesta categoria.
              </p>
              <Link
                href="/catalogo"
                className="inline-block mt-4 text-green-400 hover:text-green-300"
              >
                Ver todos os produtos
              </Link>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
