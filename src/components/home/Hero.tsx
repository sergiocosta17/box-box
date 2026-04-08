"use client";

import Link from "next/link";
import { ArrowRight, Play } from "lucide-react";
import { motion } from "framer-motion";
import { HeroArtwork } from "./HeroArtwork";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-carbon pt-24 pb-16">
      
      {/* Marca d'água "S" gigante e sutil no fundo */}
      <div className="absolute inset-0 flex items-center justify-center opacity-[0.015] pointer-events-none select-none overflow-hidden">
        <span className="text-[60vw] font-black italic tracking-tighter text-white">S</span>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center min-h-[70vh]">
          
          {/* LADO ESQUERDO: TEXTO E CHAMADAS */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col justify-center max-w-2xl pt-10 lg:pt-0"
          >
            {/* Selo Premium */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-3 px-4 py-2 border border-neutral-800 rounded-full mb-8 w-fit bg-white/5 backdrop-blur-sm"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-box-yellow opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-box-yellow"></span>
              </span>
              <span className="text-xs font-bold tracking-widest text-neutral-300 uppercase">
                Coleção Exclusiva '24
              </span>
            </motion.div>

            {/* Título Principal */}
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-white leading-[1.1] mb-6 tracking-tight">
              Arte que <br />
              <span className="italic font-light text-gradient-brasil">acelera</span><br />
              seu coração.
            </h1>

            {/* Subtítulo */}
            <p className="text-lg text-neutral-400 mb-10 max-w-lg leading-relaxed font-light">
              Eternizando o legado de Ayrton Senna e a paixão brasileira pelo automobilismo em peças de alta performance para o seu ambiente.
            </p>

            {/* Botões de Ação */}
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <Link href="/catalogo" className="btn-primary w-full sm:w-auto">
                Ver Catálogo
                <ArrowRight className="w-5 h-5" />
              </Link>

              <Link
                href="/categorias/senna-collection"
                className="btn-secondary w-full sm:w-auto group"
              >
                <Play className="w-4 h-4 text-box-yellow group-hover:text-box-black transition-colors" />
                Senna Collection
              </Link>
            </div>

            {/* Estatísticas / Prova Social */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 1 }}
              className="grid grid-cols-3 gap-6 mt-16 pt-8 border-t border-neutral-800/50 max-w-lg"
            >
              <div>
                <div className="text-2xl font-black text-white">150+</div>
                <div className="text-xs text-neutral-500 uppercase tracking-wider mt-1">Artes Únicas</div>
              </div>
              <div>
                <div className="text-2xl font-black text-box-yellow">5.0</div>
                <div className="text-xs text-neutral-500 uppercase tracking-wider mt-1">Avaliações</div>
              </div>
              <div>
                <div className="text-2xl font-black text-white">BR</div>
                <div className="text-xs text-neutral-500 uppercase tracking-wider mt-1">Envio Nacional</div>
              </div>
            </motion.div>
          </motion.div>

          {/* LADO DIREITO: COMPONENTE DE ARTE FLUTUANTE */}
          <HeroArtwork />

        </div>
      </div>
    </section>
  );
}