import { notFound } from "next/navigation";
import Link from "next/link";
import { ProductCard } from "@/components/product/ProductCard"; // <-- CAMINHO ATUALIZADO
import { ChevronRight, ShoppingBag } from "lucide-react";
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
    return { title: "Categoria não encontrada | Box Box" };
  }

  return {
    title: `${category.name} | Box Box`,
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
    <main className="min-h-screen bg-carbon pt-32 pb-24 relative overflow-hidden">
      
      {/* Luzes de Fundo (Aura) */}
      <div className="absolute top-0 right-0 w-125 h-125 bg-box-yellow/5 blur-[120px] rounded-full pointer-events-none" />

      {/* Header Premium */}
      <section className="px-6 relative z-10 mb-16">
        <div className="max-w-7xl mx-auto">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-neutral-500 mb-8">
            <Link href="/" className="hover:text-box-yellow transition-colors">
              Início
            </Link>
            <ChevronRight className="w-3 h-3 text-neutral-700" />
            <Link
              href="/catalogo"
              className="hover:text-box-yellow transition-colors"
            >
              Acervo
            </Link>
            <ChevronRight className="w-3 h-3 text-neutral-700" />
            <span className="text-white">{category.name}</span>
          </nav>

          {/* Título */}
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-black text-white mb-4 tracking-tight leading-[1.1]">
              <span className="italic font-light text-gradient-brasil">
                {category.name}
              </span>
            </h1>
            <p className="text-neutral-400 text-lg font-light leading-relaxed">
              {category.description}
            </p>
          </div>
        </div>
      </section>

      {/* Grid de Produtos */}
      <section className="px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Linha separadora elegante */}
          <div className="w-full h-px bg-linear-to-r from-white/10 via-white/5 to-transparent mb-8" />

          <p className="text-xs font-bold uppercase tracking-widest text-neutral-500 mb-8">
            A mostrar <span className="text-white">{products.length}</span> {products.length === 1 ? 'arte exclusiva' : 'artes exclusivas'}
          </p>

          {products.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
              {products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center py-32 border border-white/5 bg-white/2 rounded-3xl backdrop-blur-sm mt-8 text-center px-4">
              <div className="w-20 h-20 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mb-6">
                <ShoppingBag className="w-8 h-8 text-neutral-600" />
              </div>
              <p className="text-neutral-400 text-lg mb-6">
                O grid de partida desta categoria ainda está a ser preparado.
              </p>
              <Link
                href="/catalogo"
                className="btn-primary"
              >
                Voltar ao Acervo Completo
              </Link>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}