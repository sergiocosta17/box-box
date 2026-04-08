import { CatalogGrid } from "@/components/catalog/CatalogGrid";

export const metadata = {
  title: "Catálogo | Box Box",
  description: "Explore nossa coleção exclusiva de quadros de F1 e automobilismo",
};

export default function CatalogoPage() {
  return (
    <main className="min-h-screen bg-carbon overflow-hidden relative">
      
      {/* Luzes de fundo sutis para manter a imersão */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-200 h-125 bg-box-yellow/5 blur-[120px] rounded-full pointer-events-none" />

      {/* Header da página de Catálogo */}
      <section className="pt-40 pb-16 px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Breadcrumb Premium */}
          <nav className="flex items-center gap-3 text-xs font-bold uppercase tracking-widest text-neutral-500 mb-8">
            <a href="/" className="hover:text-box-yellow transition-colors">
              Início
            </a>
            <span className="w-1 h-1 rounded-full bg-neutral-700" />
            <span className="text-white">Acervo</span>
          </nav>

          {/* Título Editorial */}
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-7xl font-black text-white mb-6 tracking-tight leading-[1.1]">
              Nosso <br />
              <span className="italic font-light text-gradient-brasil">Acervo Exclusivo</span>
            </h1>
            <p className="text-neutral-400 text-lg md:text-xl font-light leading-relaxed max-w-2xl">
              Explore peças únicas que capturam a essência da velocidade, o asfalto e a glória do automobilismo mundial.
            </p>
          </div>
        </div>
      </section>

      {/* Grid de produtos e Filtros */}
      <section className="pb-32 px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Linha separadora elegante */}
          <div className="w-full h-px bg-linear-to-r from-white/10 via-white/5 to-transparent mb-12" />
          
          <CatalogGrid />
        </div>
      </section>
    </main>
  );
}