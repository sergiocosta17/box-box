import { Hero } from "@/components/home/Hero";

export const metadata = {
  title: "Início",
};

export default function HomePage() {
  return (
    <>
      <Hero />

      {/* Seção temporária - Em construção */}
      <section className="py-20 bg-box-gray">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            🏎️ Site em Construção
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            Estamos preparando algo incrível! Em breve você terá acesso ao
            catálogo completo com mais de 150 artes exclusivas de F1 e
            automobilismo.
          </p>

          <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto">
            <div className="bg-box-black p-4 rounded-xl border border-neutral-800">
              <div className="text-2xl font-bold text-box-yellow">150+</div>
              <div className="text-sm text-gray-500">Artes</div>
            </div>
            <div className="bg-box-black p-4 rounded-xl border border-neutral-800">
              <div className="text-2xl font-bold text-box-yellow">8</div>
              <div className="text-sm text-gray-500">Categorias</div>
            </div>
            <div className="bg-box-black p-4 rounded-xl border border-neutral-800">
              <div className="text-2xl font-bold text-box-yellow">5</div>
              <div className="text-sm text-gray-500">Tamanhos</div>
            </div>
            <div className="bg-box-black p-4 rounded-xl border border-neutral-800">
              <div className="text-2xl font-bold text-box-yellow">24h</div>
              <div className="text-sm text-gray-500">Atendimento</div>
            </div>
          </div>
        </div>
      </section>

      {/* Seção de prévia de categorias */}
      <section className="py-20 bg-box-black">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Categorias em Destaque
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {/* Senna Collection */}
            <div className="group relative h-64 rounded-2xl overflow-hidden border border-neutral-800 hover:border-box-yellow/50 transition-all duration-300">
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(to bottom right, rgba(255, 205, 0, 0.2), rgba(0, 151, 57, 0.2))",
                }}
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
                <span className="text-4xl mb-3">🏆</span>
                <h3 className="text-xl font-bold text-white mb-2">
                  Senna Collection
                </h3>
                <p className="text-sm text-gray-400">
                  Homenagens ao maior piloto brasileiro
                </p>
              </div>
            </div>

            {/* F1 Legends */}
            <div className="group relative h-64 rounded-2xl overflow-hidden border border-neutral-800 hover:border-box-yellow/50 transition-all duration-300">
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(to bottom right, rgba(225, 6, 0, 0.2), rgba(0, 32, 91, 0.2))",
                }}
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
                <span className="text-4xl mb-3">🏎️</span>
                <h3 className="text-xl font-bold text-white mb-2">F1 Legends</h3>
                <p className="text-sm text-gray-400">
                  Os maiores nomes da história da F1
                </p>
              </div>
            </div>

            {/* Carros Clássicos */}
            <div className="group relative h-64 rounded-2xl overflow-hidden border border-neutral-800 hover:border-box-yellow/50 transition-all duration-300">
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(to bottom right, rgba(64, 64, 64, 0.2), rgba(23, 23, 23, 0.2))",
                }}
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
                <span className="text-4xl mb-3">🚗</span>
                <h3 className="text-xl font-bold text-white mb-2">
                  Carros Clássicos
                </h3>
                <p className="text-sm text-gray-400">
                  Máquinas que marcaram época
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
