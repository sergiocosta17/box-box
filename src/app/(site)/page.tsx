import { Hero } from "@/components/home/Hero";
import Link from "next/link";
import { ProductCard } from "@/components/product/ProductCard"; // <-- CAMINHO ATUALIZADO
import { getFeaturedProducts, categories } from "@/data/products";
import { ArrowRight, Truck, ShieldCheck, Headset, Crown } from "lucide-react";

export default function HomePage() {
  const featuredProducts = getFeaturedProducts();

  return (
    <main className="min-h-screen bg-carbon overflow-hidden">
      {/* Hero Section */}
      <Hero />

      {/* SEÇÃO: COLEÇÕES (Bento Grid Style) */}
      <section className="relative py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div className="max-w-2xl">
              <h2 className="text-sm font-black text-box-yellow uppercase tracking-[0.3em] mb-3">
                Acervo Exclusivo
              </h2>
              <h3 className="text-4xl md:text-5xl font-black text-white tracking-tight">
                Nossas <span className="text-neutral-500 italic font-light">Coleções</span>
              </h3>
            </div>
            <p className="text-neutral-400 text-sm md:text-base max-w-sm">
              De lendas imortais a novos campeões. Encontre a arte que conta a sua história nas pistas.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {categories.map((category, index) => {
              // Definindo cores premium baseadas no index (Remetendo a F1: Brasil, Ferrari, RedBull/Williams, Clássicos)
              const gradients = [
                "from-[#009739]/20 to-[#FFCD00]/10 border-box-yellow/30 hover:border-box-yellow", // Senna / Brasil
                "from-[#E10600]/20 to-neutral-900/40 border-[#E10600]/30 hover:border-[#E10600]", // Lendas (Vermelho)
                "from-[#00205B]/20 to-neutral-900/40 border-[#00205B]/30 hover:border-[#00205B]", // Moderno (Azul)
                "from-neutral-600/20 to-neutral-900/40 border-neutral-500/30 hover:border-white", // Clássicos
              ];

              return (
                <Link
                  key={category.id}
                  href={`/categorias/${category.slug}`}
                  className={`group relative aspect-[4/5] rounded-2xl overflow-hidden bg-white/[0.02] border backdrop-blur-sm transition-all duration-500 ${gradients[index % gradients.length]} lg:first:col-span-2 lg:first:aspect-auto`}
                >
                  {/* Ícone de fundo (Marca d'água) */}
                  <div className="absolute -bottom-10 -right-10 text-white/5 group-hover:text-white/10 transition-colors duration-500 group-hover:scale-110">
                    <Crown className="w-64 h-64" strokeWidth={0.5} />
                  </div>

                  {/* Conteúdo */}
                  <div className="absolute inset-0 p-8 flex flex-col justify-between z-10">
                    <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center border border-white/10 group-hover:scale-110 transition-transform duration-500">
                      <ArrowRight className="w-5 h-5 text-white" />
                    </div>
                    
                    <div>
                      <h3 className="text-2xl font-black text-white mb-2 uppercase tracking-wide group-hover:translate-x-2 transition-transform duration-500">
                        {category.name}
                      </h3>
                      <p className="text-neutral-400 text-sm font-medium line-clamp-2">
                        {category.description}
                      </p>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* SEÇÃO: PRODUTOS EM DESTAQUE */}
      <section className="py-24 px-6 relative">
        {/* Luz de fundo sutil */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
        
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <h2 className="text-sm font-black text-box-yellow uppercase tracking-[0.3em] mb-3">
                Pole Position
              </h2>
              <h3 className="text-4xl md:text-5xl font-black text-white tracking-tight">
                Em <span className="text-neutral-500 italic font-light">Destaque</span>
              </h3>
            </div>
            <Link
              href="/catalogo"
              className="group inline-flex items-center gap-3 text-xs font-bold uppercase tracking-widest text-white hover:text-box-yellow transition-colors pb-2 border-b border-white/10 hover:border-box-yellow"
            >
              Ver grid completo
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* SEÇÃO: FEATURES (Diferenciais Premium) */}
      <section className="py-24 px-6 relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: <Truck className="w-8 h-8" />,
                title: "Frete Nacional",
                description: "Envio gratuito em compras acima de R$ 299 para todo o Brasil com rastreio seguro.",
              },
              {
                icon: <ShieldCheck className="w-8 h-8" />,
                title: "Qualidade Fine Art",
                description: "Impressão em papel fotográfico de alta gramatura com molduras premium montadas à mão.",
              },
              {
                icon: <Headset className="w-8 h-8" />,
                title: "Pit Stop Support",
                description: "Atendimento especializado via WhatsApp para ajudar na escolha da sua arte perfeita.",
              },
            ].map((feature, index) => (
              <div 
                key={index} 
                className="group relative bg-white/[0.02] border border-white/5 rounded-3xl p-10 hover:bg-white/[0.04] transition-colors duration-500"
              >
                <div className="w-16 h-16 rounded-2xl bg-box-yellow/10 border border-box-yellow/20 flex items-center justify-center text-box-yellow mb-8 group-hover:scale-110 group-hover:bg-box-yellow group-hover:text-box-black transition-all duration-500">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3 tracking-wide">{feature.title}</h3>
                <p className="text-neutral-400 text-sm leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SEÇÃO: CALL TO ACTION */}
      <section className="py-32 px-6 relative overflow-hidden flex items-center justify-center">
        {/* Efeito de luz do CTA */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#009739]/5" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-1/2 bg-box-yellow/10 blur-[120px] rounded-full pointer-events-none" />

        <div className="max-w-3xl mx-auto text-center relative z-10 border border-white/10 bg-black/40 backdrop-blur-xl p-12 md:p-20 rounded-[3rem]">
          <h2 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tight leading-tight">
            Pronto para decorar <br/>
            <span className="italic font-light text-gradient-brasil">seu espaço?</span>
          </h2>
          <p className="text-neutral-400 mb-10 text-lg max-w-xl mx-auto">
            Não é apenas decoração, é o legado da velocidade na sua parede. Explore nosso catálogo e encontre sua próxima obra de arte.
          </p>
          <Link
            href="/catalogo"
            className="btn-primary inline-flex scale-110"
          >
            Largar na Frente
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </section>
    </main>
  );
}