import Link from "next/link";

export const metadata = {
  title: "Sobre",
  description: "Conheça a história da Box Box",
};

export default function SobrePage() {
  return (
    <main className="min-h-screen bg-black">
      {/* Header */}
      <section className="pt-32 pb-12 px-4">
        <div className="max-w-4xl mx-auto">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-zinc-500 mb-6">
            <Link href="/" className="hover:text-white transition-colors">
              Início
            </Link>
            <span>/</span>
            <span className="text-white">Sobre</span>
          </nav>

          {/* Título */}
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Sobre a{" "}
            <span className="bg-linear-to-r from-green-400 to-yellow-400 bg-clip-text text-transparent">
              Box Box
            </span>
          </h1>
        </div>
      </section>

      {/* Conteúdo */}
      <section className="pb-20 px-4">
        <div className="max-w-4xl mx-auto prose prose-invert prose-lg">
          <p className="text-zinc-300 text-xl leading-relaxed">
            A Box Box nasceu da paixão pelo automobilismo e pela arte. Nosso
            objetivo é transformar momentos icônicos das pistas em peças únicas
            que decoram e inspiram.
          </p>

          <h2 className="text-2xl font-bold text-white mt-12 mb-4">
            Nossa Missão
          </h2>
          <p className="text-zinc-400">
            Levar a emoção da Fórmula 1 e do automobilismo para dentro das casas
            dos fãs, através de quadros exclusivos e de alta qualidade que
            celebram os maiores momentos e ídolos do esporte.
          </p>

          <h2 className="text-2xl font-bold text-white mt-12 mb-4">
            Qualidade Premium
          </h2>
          <p className="text-zinc-400">
            Todos os nossos quadros são impressos em alta resolução, com tintas
            de qualidade fotográfica e materiais duráveis. Cada peça é
            cuidadosamente embalada para chegar perfeita até você.
          </p>

          <h2 className="text-2xl font-bold text-white mt-12 mb-4">
            Por que "Box Box"?
          </h2>
          <p className="text-zinc-400">
            "Box Box" é o termo usado nas comunicações de rádio da F1 para
            chamar o piloto aos boxes. Escolhemos esse nome porque representa a
            essência do nosso trabalho: trazer você para mais perto da ação,
            como se estivesse dentro da equipe.
          </p>

          <div className="mt-12 p-6 bg-zinc-900 rounded-2xl border border-zinc-800">
            <h3 className="text-xl font-bold text-white mb-4">
              Ficou com dúvidas?
            </h3>
            <p className="text-zinc-400 mb-4">
              Entre em contato conosco! Estamos sempre prontos para ajudar.
            </p>
            <a
              href="mailto:contato@boxbox.com.br"
              className="text-green-400 hover:text-green-300 font-medium"
            >
              contato@boxbox.com.br
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
