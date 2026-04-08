import Link from "next/link";
import { ChevronRight, Flag, Award, Radio, Mail } from "lucide-react";

export const metadata = {
  title: "A Nossa História | Box Box",
  description: "Conheça a história da Box Box - Arte de alta performance.",
};

export default function SobrePage() {
  return (
    <main className="min-h-screen bg-carbon overflow-hidden relative">
      {/* Luzes de Fundo */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-200 h-125 bg-box-yellow/5 blur-[120px] rounded-full pointer-events-none" />

      {/* Header */}
      <section className="pt-40 pb-16 px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-neutral-500 mb-8">
            <Link href="/" className="hover:text-box-yellow transition-colors">
              Início
            </Link>
            <ChevronRight className="w-3 h-3 text-neutral-700" />
            <span className="text-white">A Nossa História</span>
          </nav>

          {/* Título */}
          <h1 className="text-5xl md:text-7xl font-black text-white mb-6 tracking-tight leading-[1.1]">
            Sobre a <br />
            <span className="italic font-light text-gradient-brasil">Box Box</span>
          </h1>
          <p className="text-neutral-400 text-lg md:text-xl font-light leading-relaxed max-w-2xl">
            Nascemos da paixão pelo asfalto. O nosso objetivo é transformar momentos icónicos das pistas em peças únicas que decoram, inspiram e aceleram o coração.
          </p>
        </div>
      </section>

      {/* Conteúdo em Grid (Bento Style) */}
      <section className="pb-32 px-6 relative z-10">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* Missão */}
          <div className="p-10 bg-white/2rder-white/5 rounded-3xl backdrop-blur-sm hover:bg-white/4 transition-colors md:col-span-2">
            <Flag className="w-8 h-8 text-box-yellow mb-6" />
            <h2 className="text-2xl font-black text-white mb-4 uppercase tracking-wide">
              A Nossa Missão
            </h2>
            <p className="text-neutral-400 leading-relaxed font-light text-lg">
              Levar a emoção da Fórmula 1 e do automobilismo mundial para dentro das casas dos fãs. Criamos quadros exclusivos e de altíssima qualidade que celebram os maiores momentos, as lendas intemporais e os ídolos que definiram o desporto motorizado.
            </p>
          </div>

          {/* Qualidade */}
          <div className="p-10 bg-white/2rder-white/5 rounded-3xl backdrop-blur-sm hover:bg-white/4 transition-colors">
            <Award className="w-8 h-8 text-box-yellow mb-6" />
            <h2 className="text-xl font-black text-white mb-4 uppercase tracking-wide">
              Qualidade Fine Art
            </h2>
            <p className="text-neutral-400 leading-relaxed font-light">
              Todos os nossos quadros são impressos em alta resolução, utilizando tintas de qualidade museológica e papéis de alta gramagem. Cada peça é montada à mão e rigorosamente inspecionada antes de chegar à sua parede.
            </p>
          </div>

          {/* O Nome */}
          <div className="p-10 bg-white/2rder-white/5 rounded-3xl backdrop-blur-sm hover:bg-white/4 transition-colors">
            <Radio className="w-8 h-8 text-box-yellow mb-6" />
            <h2 className="text-xl font-black text-white mb-4 uppercase tracking-wide">
              Porquê "Box Box"?
            </h2>
            <p className="text-neutral-400 leading-relaxed font-light">
              "Box, Box!" é a icónica chamada de rádio para trazer o piloto às boxes. Escolhemos este nome porque representa o que fazemos: trazemos o fã diretamente para dentro da ação, cuidando de cada detalhe como uma verdadeira equipa de mecânicos.
            </p>
          </div>

          {/* Contacto */}
          <div className="p-10 bg-linear-to-br from-box-yellow/10 to-transparent border border-box-yellow/20 rounded-3xl md:col-span-2 text-center flex flex-col items-center justify-center mt-6">
            <Mail className="w-8 h-8 text-box-yellow mb-4" />
            <h3 className="text-2xl font-black text-white mb-3">
              Pronto para a sua próxima paragem nas boxes?
            </h3>
            <p className="text-neutral-400 mb-8 max-w-lg font-light">
              Seja para uma encomenda personalizada, dúvidas sobre entregas ou apenas para falar sobre F1, a nossa equipa está na pit lane à sua espera.
            </p>
            <a
              href="mailto:contato@boxbox.com.br"
              className="btn-primary"
            >
              Fale com a Equipa
            </a>
          </div>

        </div>
      </section>
    </main>
  );
}