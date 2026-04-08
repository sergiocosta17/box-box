import { Hero } from "@/components/home/Hero";
import Link from "next/link";
import { ProductCard } from "@/components/product-card";
import { getFeaturedProducts, categories } from "@/data/products";

export default function HomePage() {
  const featuredProducts = getFeaturedProducts();

  return (
    <main className="min-h-screen bg-zinc-950">
      {/* Hero Section */}
      <Hero />

      {/* Coleções */}
      <section className="py-20 px-4 bg-zinc-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Nossas Coleções
            </h2>
            <p className="text-zinc-400 max-w-2xl mx-auto">
              De lendas imortais a novos campeões. Encontre a arte perfeita para você.
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {categories.map((category, index) => (
              <Link
                key={category.id}
                href={`/categorias/${category.slug}`}
                className="group relative aspect-4/3 rounded-2xl overflow-hidden bg-zinc-800"
              >
                {/* Background */}
                <div
                  className={`absolute inset-0 bg-linear-to-br ${
                    index === 0
                      ? "from-green-600/20 to-green-900/40"
                      : index === 1
                        ? "from-red-600/20 to-red-900/40"
                        : index === 2
                          ? "from-yellow-600/20 to-yellow-900/40"
                          : "from-blue-600/20 to-blue-900/40"
                  } group-hover:opacity-80 transition-opacity`}
                />

                {/* Emoji Icon */}
                <div className="absolute top-4 left-4 text-3xl">
                  {index === 0 ? "🏆" : index === 1 ? "👑" : index === 2 ? "🏎️" : "⚡"}
                </div>

                {/* Content */}
                <div className="absolute inset-0 p-4 flex flex-col justify-end">
                  <h3 className="text-lg md:text-xl font-bold text-white group-hover:text-yellow-400 transition-colors">
                    {category.name}
                  </h3>
                  <p className="text-zinc-400 text-sm mt-1 hidden md:block">
                    {category.description}
                  </p>
                </div>

                {/* Hover overlay */}
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-yellow-500/50 rounded-2xl transition-colors" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Produtos em Destaque */}
      <section className="py-20 px-4 bg-zinc-950">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-12 gap-4">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
                Em Destaque
              </h2>
              <p className="text-zinc-400">
                Os favoritos dos nossos clientes
              </p>
            </div>
            <Link
              href="/catalogo"
              className="inline-flex items-center gap-2 text-yellow-500 hover:text-yellow-400 font-medium transition-colors"
            >
              Ver todos
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 px-4 bg-zinc-900 border-t border-zinc-800">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: "🚚",
                title: "Frete Grátis",
                description: "Em compras acima de R$ 299 para todo Brasil",
              },
              {
                icon: "🎨",
                title: "Qualidade Premium",
                description: "Impressão fine art em papel de alta gramatura",
              },
              {
                icon: "💬",
                title: "Atendimento 24h",
                description: "Suporte via WhatsApp sempre disponível",
              },
            ].map((feature, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-lg font-bold text-white mb-2">{feature.title}</h3>
                <p className="text-zinc-400 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 bg-zinc-950">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Pronto para decorar seu espaço?
          </h2>
          <p className="text-zinc-400 mb-8">
            Escolha a arte que representa sua paixão pela velocidade
          </p>
          <Link
            href="/catalogo"
            className="inline-flex items-center gap-2 px-8 py-4 bg-green-600 hover:bg-green-500 text-white font-semibold rounded-full transition-all"
          >
            Explorar Catálogo
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </section>
    </main>
  );
}
