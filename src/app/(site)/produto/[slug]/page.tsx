import { notFound } from "next/navigation";
import Link from "next/link";
import { getProductBySlug, products } from "@/data/products";
import { ProductGallery } from "@/components/product/ProductGallery";
import { ProductDetails } from "@/components/product/ProductDetails";
import { RelatedProducts } from "@/components/product/RelatedProducts";
import { ChevronRight } from "lucide-react";

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
    return { title: "Produto não encontrado | Box Box" };
  }

  return {
    title: `${product.name} | Box Box`,
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
    <main className="min-h-screen bg-carbon pt-32 pb-24 px-6 relative overflow-hidden">
      
      {/* Luzes de Fundo (Aura) */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-box-yellow/5 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute top-[20%] left-[-10%] w-[500px] h-[500px] bg-box-blue/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Breadcrumb Premium */}
        <nav className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-neutral-500 mb-12">
          <Link href="/" className="hover:text-box-yellow transition-colors">
            Início
          </Link>
          <ChevronRight className="w-3 h-3 text-neutral-700" />
          <Link href="/catalogo" className="hover:text-box-yellow transition-colors">
            Acervo
          </Link>
          <ChevronRight className="w-3 h-3 text-neutral-700" />
          <span className="text-white line-clamp-1">{product.name}</span>
        </nav>

        {/* Container Principal do Produto */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Galeria ocupa 7 colunas em ecrãs grandes para dar destaque à arte */}
          <div className="lg:col-span-7 sticky top-32">
            <ProductGallery product={product} />
          </div>

          {/* Detalhes ocupam 5 colunas */}
          <div className="lg:col-span-5">
            <ProductDetails product={product} />
          </div>
        </div>

        {/* Produtos Relacionados */}
        <div className="mt-32 pt-16 border-t border-white/5">
          <RelatedProducts
            currentProductId={product.id}
            category={product.category}
          />
        </div>
      </div>
    </main>
  );
}