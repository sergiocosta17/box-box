"use client";

import Link from "next/link";
import { ArrowRight, Play } from "lucide-react";
import { motion } from "framer-motion";
import { HeroArtwork } from "./HeroArtwork";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-carbon pt-32 pb-24 px-6">
      
      {/* ===== SISTEMA DE ILUMINAÇÃO DE FUNDO (AURA BRASIL/SENNA REFORÇADA) ===== */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        
        {/* Luz Neutra Central (Neblina Branca para clarear a cena geral) */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 3, delay: 0.3 }}
          className="absolute inset-0"
          style={{
            background: "radial-gradient(circle at 50% 50%, rgba(255,255,255,0.06) 0%, transparent 60%)",
            filter: "blur(100px)",
          }}
        />

        {/* Luz Amarela (Senna Collection) - Mais forte e escalada */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9, x: 100 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 2.5, ease: "easeOut" }}
          className="absolute top-[-15%] right-[-10%] w-300 h-300 rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(255,205,0,0.18) 0%, transparent 70%)",
            filter: "blur(90px)",
          }}
        />

        {/* Luz Verde (Brasil Moderno) - Mais forte e escalada */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2.5, delay: 0.8 }}
          className="absolute bottom-[-25%] left-[-15%] w-250 h-250 rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(0,151,57,0.15) 0%, transparent 70%)",
            filter: "blur(90px)",
          }}
        />
        
        {/* Marca d'água "S" gigante no fundo */}
        <div className="absolute inset-0 flex items-center justify-center opacity-[0.02] pointer-events-none select-none">
          <span className="text-[50vw] font-black italic tracking-tighter text-white">S</span>
        </div>
      </div>

      <div className="container mx-auto relative z-10 pt-16 lg:pt-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* LADO ESQUERDO: TEXTO E CHAMADAS */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col justify-center max-w-2xl"
          >
            {/* Selo Premium (Clarear o fundo) */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-3 px-5 py-2.5 border border-white/10 rounded-full mb-8 w-fit bg-white/5 backdrop-blur-md"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-box-yellow opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-box-yellow"></span>
              </span>
              <span className="text-xs font-bold tracking-[0.2em] text-neutral-100 uppercase">
                Coleção Exclusiva '24
              </span>
            </motion.div>

            {/* Título Principal */}
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-white leading-[1.1] mb-6 tracking-tight">
              Arte que <br />
              <span className="italic font-light text-gradient-brasil">acelera</span><br />
              seu coração.
            </h1>

            {/* Subtítulo (Clarear o texto para text-neutral-200) */}
            <p className="text-lg text-neutral-200 mb-12 max-w-lg leading-relaxed font-light">
              Eternizando o legado de Ayrton Senna e a paixão brasileira pelo automobilismo em peças de alta performance para o seu ambiente.
            </p>

            {/* BOTÕES DE AÇÃO PREMIUM REFORÇADOS */}
            <div className="flex flex-col sm:flex-row items-center gap-5">
              
              {/* Botão Principal: Glow Yellow Pulsante */}
              <Link 
                href="/catalogo" 
                className="group relative flex items-center justify-center gap-3 w-full sm:w-auto px-10 py-5 bg-box-yellow text-box-black rounded-full overflow-hidden transition-all duration-500 hover:-translate-y-1 shadow-[0_0_50px_rgba(255,205,0,0.3)] hover:shadow-[0_0_70px_rgba(255,205,0,0.6)]"
              >
                {/* Fundo que preenche no hover */}
                <div className="absolute inset-0 bg-white/30 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out" />
                
                <span className="relative z-10 text-xs font-black uppercase tracking-widest flex items-center gap-2.5">
                  Ver Catálogo Completo
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </span>
              </Link>

              {/* Botão Secundário: Deep Glassmorphism (Clarear a borda) */}
              <Link
                href="/categorias/senna-collection"
                className="group relative flex items-center justify-center gap-3 w-full sm:w-auto px-10 py-5 bg-white/3 border border-neutral-700 rounded-full backdrop-blur-2xl transition-all duration-500 hover:-translate-y-1 hover:bg-white/8 hover:border-white/50"
              >
                <Play className="w-4 h-4 text-box-yellow group-hover:scale-110 transition-transform duration-300" fill="currentColor" />
                <span className="text-xs font-bold text-neutral-100 uppercase tracking-widest group-hover:text-white transition-colors">
                  Senna Collection
                </span>
              </Link>

            </div>
          </motion.div>

          {/* LADO DIREITO: COMPONENTE DE ARTE FLUTUANTE */}
          <div className="relative pt-10 lg:pt-0">
            <HeroArtwork />
          </div>

        </div>
      </div>
    </section>
  );
}