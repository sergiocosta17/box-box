"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export function HeroArtwork() {
  return (
    <div className="relative w-full aspect-square max-w-2xl mx-auto flex items-center justify-center lg:justify-end">
      
      {/* LUZES DE FUNDO HD (Sem banding de cor) */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 2, ease: "easeOut" }}
          className="absolute top-0 right-10 w-64 h-64 md:w-125 md:h-125 rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(255,205,0,0.12) 0%, transparent 70%)",
            filter: "blur(50px)",
            transform: "translateZ(0)", /* Força a aceleração de hardware GPU */
          }}
        />
      </div>

      {/* QUADRO FLUTUANTE ULTRA-REALISTA */}
      <motion.div
        initial={{ opacity: 0, y: 50, rotateX: 10, rotateY: -10 }}
        animate={{ opacity: 1, y: 0, rotateX: 0, rotateY: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="relative z-10 w-3/4 sm:w-2/3 perspective-1000"
      >
        <motion.div
          animate={{ y: [-8, 8, -8] }}
          transition={{ repeat: Infinity, duration: 7, ease: "easeInOut" }}
          className="relative bg-[#0A0A0A] p-2 sm:p-3 rounded-sm"
          style={{
            /* Sombras 4K em cascata para profundidade real */
            boxShadow: `
              0 30px 60px -15px rgba(0, 0, 0, 0.9), 
              0 0 50px rgba(255, 205, 0, 0.15),
              inset 0 1px 1px rgba(255, 255, 255, 0.1)
            `,
            border: "1px solid rgba(255, 255, 255, 0.08)"
          }}
        >
          {/* Borda interna (Paspatur escuro) */}
          <div className="bg-[#050505] p-3 sm:p-5 border border-neutral-900 shadow-inner">
            
            {/* A ARTE */}
            <div className="relative aspect-3/4 w-full overflow-hidden bg-neutral-950 border border-white/5">
              
              {/* ONDE VOCÊ VAI COLOCAR SUA FOTO REAL - Já configurado para 4K */}
              {/* <Image 
                src="/sua-foto-real.jpg" 
                alt="Quadro Ayrton Senna" 
                fill 
                quality={100} 
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              /> 
              */}

              {/* Arte de Placeholder atual (enquanto não tem foto) */}
              <div className="absolute inset-0 bg-linear-to-tr from-box-yellow/20 via-transparent to-box-green/20 mix-blend-overlay z-10" />
              <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center z-20">
                <span className="text-box-yellow font-black text-7xl opacity-20 italic">S</span>
                <span className="text-white text-[10px] tracking-[0.4em] uppercase mt-4 opacity-40 font-bold">Senna Collection</span>
              </div>
            </div>
          </div>

          {/* EFEITO DE REFLEXO DE VIDRO (Glare HD) */}
          <div 
            className="absolute inset-0 pointer-events-none rounded-sm overflow-hidden z-30"
            style={{
              background: "linear-gradient(105deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0) 40%, rgba(255,255,255,0) 100%)",
            }}
          />
        </motion.div>
      </motion.div>
    </div>
  );
}