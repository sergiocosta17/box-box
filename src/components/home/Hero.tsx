import Link from "next/link";
import { WHATSAPP_NUMBER } from "@/lib/constants";

export function Hero() {
  const whatsappLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    "Olá! Vim pelo site e gostaria de saber mais sobre os quadros."
  )}`;

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-4 pt-24 pb-16 overflow-hidden">
      {/* Background escuro base */}
      <div className="absolute inset-0 bg-zinc-950" />

      {/* Quadriculado com tons de verde e amarelo */}
      <div className="absolute inset-0">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern
              id="checkerboard"
              x="0"
              y="0"
              width="80"
              height="80"
              patternUnits="userSpaceOnUse"
            >
              {/* Quadrado verde escuro */}
              <rect x="0" y="0" width="40" height="40" fill="rgba(34, 197, 94, 0.08)" />
              {/* Quadrado amarelo escuro */}
              <rect x="40" y="0" width="40" height="40" fill="rgba(250, 204, 21, 0.05)" />
              {/* Quadrado amarelo escuro */}
              <rect x="0" y="40" width="40" height="40" fill="rgba(250, 204, 21, 0.05)" />
              {/* Quadrado verde escuro */}
              <rect x="40" y="40" width="40" height="40" fill="rgba(34, 197, 94, 0.08)" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#checkerboard)" />
        </svg>
      </div>

      {/* Gradientes para suavizar */}
      <div className="absolute inset-0 bg-linear-to-b from-zinc-950 via-transparent to-zinc-950 opacity-60" />
      <div className="absolute inset-0 bg-linear-to-r from-zinc-950 via-transparent to-zinc-950 opacity-40" />
      
      {/* Brilho central sutil */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(34,197,94,0.1)_0%,transparent_50%)]" />

      {/* Conteúdo */}
      <div className="relative z-10 text-center max-w-4xl mx-auto">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-zinc-900/80 backdrop-blur-sm border border-zinc-800 rounded-full mb-10">
          <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
          <span className="text-zinc-300 text-sm">Nova Coleção Senna 2024</span>
        </div>

        {/* Título */}
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white mb-4 leading-[1.1] tracking-tight">
          Arte que acelera
        </h1>
        <h2 className="text-5xl md:text-6xl lg:text-7xl font-black mb-8 leading-[1.1] tracking-tight">
          <span className="text-transparent bg-clip-text bg-linear-to-r from-green-400 to-emerald-500">
            seu coração
          </span>
        </h2>

        {/* Subtítulo */}
        <p className="text-lg md:text-xl text-zinc-400 mb-10 max-w-2xl mx-auto leading-relaxed">
          Quadros exclusivos que capturam a essência da velocidade, a paixão pela F1
          e o legado eterno de Ayrton Senna.
        </p>

        {/* Botões */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          <Link
            href="/catalogo"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-green-600 hover:bg-green-500 text-white font-semibold rounded-full transition-all duration-300 text-base"
          >
            Ver Catálogo
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
          <Link
            href="/categorias/senna-collection"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-black font-semibold rounded-full transition-all duration-300 text-base"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z"/>
            </svg>
            Coleção Senna
          </Link>
        </div>

        {/* Link WhatsApp */}
        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-zinc-500 hover:text-zinc-300 transition-colors text-sm"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
          </svg>
          Ou fale conosco pelo WhatsApp
        </a>
      </div>

      {/* Stats */}
      <div className="relative z-10 mt-16 grid grid-cols-3 gap-8 md:gap-16 max-w-2xl mx-auto">
        <div className="text-center">
          <div className="text-3xl md:text-4xl font-black text-yellow-500">150+</div>
          <div className="text-zinc-500 text-sm mt-1">Artes Exclusivas</div>
        </div>
        <div className="text-center">
          <div className="text-3xl md:text-4xl font-black text-yellow-500 flex items-center justify-center gap-1">
            5
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          </div>
          <div className="text-zinc-500 text-sm mt-1">Avaliação</div>
        </div>
        <div className="text-center">
          <div className="text-3xl md:text-4xl font-black text-yellow-500">24h</div>
          <div className="text-zinc-500 text-sm mt-1">Atendimento</div>
        </div>
      </div>

      {/* Citação Senna */}
      <div className="relative z-10 mt-12 text-center">
        <p className="text-zinc-500 italic text-sm md:text-base max-w-xl mx-auto">
          "Se você não faz mais o que ama, você não está mais vivendo."
        </p>
        <p className="text-yellow-500 font-semibold text-sm mt-2">— Ayrton Senna</p>
      </div>
    </section>
  );
}
