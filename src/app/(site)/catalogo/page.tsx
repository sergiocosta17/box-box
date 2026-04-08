import { CatalogGrid } from "@/components/catalog/CatalogGrid";

export const metadata = {
  title: "Catálogo",
  description:
    "Explore nossa coleção exclusiva de quadros de F1 e automobilismo",
};

export default function CatalogoPage() {
  return (
    <main className="min-h-screen bg-black">
      {/* Header da página */}
      <section className="pt-32 pb-12 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-zinc-500 mb-6">
            <a href="/" className="hover:text-white transition-colors">
              Início
            </a>
            <span>/</span>
            <span className="text-white">Catálogo</span>
          </nav>

          {/* Título */}
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Nosso{" "}
              <span className="bg-linear-to-r from-green-400 to-yellow-400 bg-clip-text text-transparent">
                Catálogo
              </span>
            </h1>
            <p className="text-zinc-400 text-lg">
              Explore nossa coleção exclusiva de quadros que capturam a essência
              da velocidade e a paixão pelo automobilismo.
            </p>
          </div>
        </div>
      </section>

      {/* Grid de produtos */}
      <section className="pb-20 px-4">
        <div className="max-w-7xl mx-auto">
          <CatalogGrid />
        </div>
      </section>
    </main>
  );
}
