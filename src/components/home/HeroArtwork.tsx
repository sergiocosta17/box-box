"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export function HeroArtwork() {
  return (
    <div className="relative w-full aspect-square max-w-lg mx-auto flex items-center justify-center lg:justify-end">
      {/* LUZES DE FUNDO (AURA BRASIL/SENNA) */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Luz Amarela (Senna) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 2, ease: "easeOut" }}
          className="absolute top-0 right-10 w-64 h-64 md:w-96 md:h-96 rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(255,205,0,0.15) 0%, transparent 70%)",
            filter: "blur(40px)",
          }}
        />
        {/* Luz Verde (Brasil) */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2, delay: 0.5 }}
          className="absolute bottom-10 left-10 w-64 h-64 md:w-80 md:h-80 rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(0,151,57,0.15) 0%, transparent 70%)",
            filter: "blur(40px)",
          }}
        />
      </div>

      {/* QUADRO FLUTUANTE */}
      <motion.div
        initial={{ opacity: 0, y: 50, rotateX: 10, rotateY: -10 }}
        animate={{ opacity: 1, y: 0, rotateX: 0, rotateY: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="relative z-10 w-3/4 sm:w-2/3 perspective-1000"
      >
        <motion.div
          animate={{ y: [-10, 10, -10] }}
          transition={{
            repeat: Infinity,
            duration: 6,
            ease: "easeInOut",
          }}
          className="relative bg-[#111] p-3 rounded-sm shadow-2xl"
          style={{
            boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.7), 0 0 40px rgba(255, 205, 0, 0.1)",
            border: "1px solid rgba(255, 255, 255, 0.05)"
          }}
        >
          {/* Borda interna (Paspatur escuro) */}
          <div className="bg-[#0a0a0a] p-2 sm:p-4 border border-neutral-800">
            {/* A Arte em si - Substitua o src pela imagem real do quadro do Senna */}
            <div className="relative aspect-3/4 w-full overflow-hidden bg-neutral-900">
              <div className="absolute inset-0 bg-linear-to-tr from-box-yellow/20 via-transparent to-box-green/20 mix-blend-overlay z-10" />
              <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center z-20">
                <span className="text-box-yellow font-black text-6xl opacity-20 italic">S</span>
                <span className="text-white text-xs tracking-[0.3em] uppercase mt-4 opacity-50">Senna Collection</span>
              </div>
              {/* Se você tiver a imagem real, descomente o código abaixo e adicione a imagem no /public */}
              {/* <Image 
                src="/sua-imagem-do-senna.jpg" 
                alt="Quadro Ayrton Senna" 
                fill 
                className="object-cover opacity-80 mix-blend-luminosity hover:mix-blend-normal transition-all duration-700"
                priority
              /> 
              */}
            </div>
          </div>

          {/* Efeito de reflexo de vidro sobre o quadro */}
          <div className="absolute inset-0 bg-linear-to-tr from-white/5 to-transparent pointer-events-none rounded-sm" />
        </motion.div>
      </motion.div>
    </div>
  );
}