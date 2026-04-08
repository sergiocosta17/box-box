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
              className="inline-flex items-center gap-3 px-4 py-2 border border-white/5 rounded-full mb-8 w-fit bg-white/[0.03] backdrop-blur-md"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-box-yellow opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-box-yellow"></span>
              </span>
              <span className="text-[10px] font-bold tracking-[0.2em] text-neutral-300 uppercase">
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
            <p className="text-lg text-neutral-400 mb-12 max-w-lg leading-relaxed font-light">
              Eternizando o legado de Ayrton Senna e a paixão brasileira pelo automobilismo em peças de alta performance para o seu ambiente.
            </p>

            {/* BOTÕES DE AÇÃO PREMIUM */}
            <div className="flex flex-col sm:flex-row items-center gap-5">
              
              {/* Botão Principal: Glow Yellow */}
              <Link 
                href="/catalogo" 
                className="group relative flex items-center justify-center gap-3 w-full sm:w-auto px-8 py-4 bg-box-yellow text-box-black rounded-full overflow-hidden transition-all duration-500 hover:-translate-y-1 shadow-[0_0_40px_rgba(255,205,0,0.2)] hover:shadow-[0_0_60px_rgba(255,205,0,0.4)]"
              >
                {/* Fundo que preenche no hover */}
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out" />
                
                <span className="relative z-10 text-xs font-black uppercase tracking-widest flex items-center gap-2">
                  Ver Catálogo
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                </span>
              </Link>

              {/* Botão Secundário: Deep Glassmorphism */}
              <Link
                href="/categorias/senna-collection"
                className="group relative flex items-center justify-center gap-3 w-full sm:w-auto px-8 py-4 bg-white/[0.02] border border-white/10 rounded-full backdrop-blur-xl transition-all duration-500 hover:-translate-y-1 hover:bg-white/[0.06] hover:border-white/30"
              >
                <Play className="w-3 h-3 text-box-yellow group-hover:scale-110 transition-transform duration-300" fill="currentColor" />
                <span className="text-xs font-bold text-white uppercase tracking-widest">
                  Senna Collection
                </span>
              </Link>

            </div>
          </motion.div>

          {/* LADO DIREITO: COMPONENTE DE ARTE FLUTUANTE */}
          <HeroArtwork />

        </div>
      </div>
    </section>
  );
}