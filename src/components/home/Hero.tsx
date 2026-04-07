import Link from "next/link";
import { ArrowRight, Play, MessageCircle } from "lucide-react";

const WHATSAPP_NUMBER =
  process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "5581999999999";

export function Hero() {
  const whatsappLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    "Olá! Vim pelo site BOX BOX e gostaria de ver o catálogo completo."
  )}`;

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-box-black">
      {/* BACKGROUND */}
      <div className="absolute inset-0">
        {/* Gradiente base */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom right, #0D0D0D, #1A1A1A, #0D0D0D)",
          }}
        />

        {/* Linhas decorativas */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-1/4 left-0 right-0 h-px bg-white" />
          <div className="absolute top-2/4 left-0 right-0 h-px bg-white" />
          <div className="absolute top-3/4 left-0 right-0 h-px bg-white" />
        </div>

        {/* Efeitos de luz */}
        <div
          className="absolute top-0 right-0 w-1/2 h-1/2 rounded-full"
          style={{
            background: "rgba(255, 205, 0, 0.05)",
            filter: "blur(150px)",
          }}
        />
        <div
          className="absolute bottom-0 left-0 w-1/3 h-1/3 rounded-full"
          style={{
            background: "rgba(0, 151, 57, 0.05)",
            filter: "blur(100px)",
          }}
        />

        {/* Grid decorativo */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
                             linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)`,
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      {/* CONTEÚDO */}
      <div className="container mx-auto px-4 pt-24 pb-16 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-box-yellow/10 border border-box-yellow/30 rounded-full mb-6">
            <span className="w-2 h-2 bg-box-yellow rounded-full animate-pulse" />
            <span className="text-box-yellow text-sm font-medium">
              Nova Coleção Senna 2024
            </span>
          </div>

          {/* Título */}
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black text-white leading-tight mb-6">
            Arte que acelera
            <span className="block text-gradient">seu coração</span>
          </h1>

          {/* Subtítulo */}
          <p className="text-lg sm:text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
            Quadros exclusivos que capturam a essência da velocidade, a paixão
            pela F1 e o legado eterno de Ayrton Senna.
          </p>

          {/* Botões */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/catalogo" className="btn-primary text-lg">
              Ver Catálogo
              <ArrowRight className="w-5 h-5" />
            </Link>

            <Link
              href="/categorias/senna-collection"
              className="btn-secondary text-lg"
            >
              <Play className="w-5 h-5" />
              Coleção Senna
            </Link>
          </div>

          {/* Botão WhatsApp */}
          <div className="mt-6">
            <Link
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-gray-400 hover:text-green-400 transition-colors text-sm"
            >
              <MessageCircle className="w-4 h-4" />
              Ou fale conosco pelo WhatsApp
            </Link>
          </div>

          {/* Estatísticas */}
          <div className="grid grid-cols-3 gap-8 mt-16 pt-8 border-t border-gray-800 max-w-lg mx-auto">
            <div className="text-center">
              <div className="text-3xl font-black text-box-yellow">150+</div>
              <div className="text-sm text-gray-500">Artes Exclusivas</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-black text-box-yellow">5★</div>
              <div className="text-sm text-gray-500">Avaliação</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-black text-box-yellow">24h</div>
              <div className="text-sm text-gray-500">Atendimento</div>
            </div>
          </div>
        </div>
      </div>

      {/* CITAÇÃO - Rodapé do Hero */}
      <div
        className="absolute bottom-0 left-0 right-0 py-6 border-t border-gray-800"
        style={{
          background:
            "linear-gradient(to right, rgba(255, 205, 0, 0.1), transparent, rgba(0, 151, 57, 0.1))",
        }}
      >
        <div className="container mx-auto px-4">
          <blockquote className="text-center">
            <p className="text-gray-400 italic text-sm sm:text-base">
              &ldquo;Se você não faz mais o que ama, você não está mais
              vivendo.&rdquo;
            </p>
            <cite className="text-box-yellow font-semibold text-sm mt-2 block">
              — Ayrton Senna
            </cite>
          </blockquote>
        </div>
      </div>
    </section>
  );
}
