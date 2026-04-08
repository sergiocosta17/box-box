"use client";

import Link from "next/link";

interface LogoProps {
  size?: "sm" | "md" | "lg";
  className?: string;
}

export function Logo({ size = "md", className = "" }: LogoProps) {
  // Escalonamento de tamanhos para a malha quadriculada
  const sizes = {
    sm: { 
      box: "w-9 h-9", 
      text: "text-lg", 
      sub: "text-[8px]",
      gap: "gap-3"
    },
    md: { 
      box: "w-12 h-12", 
      text: "text-2xl", 
      sub: "text-[9px]",
      gap: "gap-4"
    },
    lg: { 
      box: "w-16 h-16", 
      text: "text-4xl", 
      sub: "text-xs",
      gap: "gap-5"
    },
  };

  const s = sizes[size];

  // Classes para os quadrados do xadrez premium
  const yellowSquare = "relative bg-gradient-to-br from-[#FFCD00] via-[#FFD700] to-[#D4AA00] shadow-[inset_0_1px_1px_rgba(255,255,255,0.6)] overflow-hidden";
  const blackSquare = "relative bg-[#050505] shadow-[inset_0_2px_5px_rgba(0,0,0,0.9)]";

  return (
    <Link href="/" className={`flex items-center ${s.gap} group w-fit ${className}`}>
      
      {/* ===== EMBLEMA QUADRICULADO PREMIUM (RACING FLAG) ===== */}
      <div 
        className={`relative shrink-0 ${s.box} rounded-sm p-[1px] bg-white/10 shadow-[0_0_20px_rgba(255,205,0,0.15)] group-hover:shadow-[0_0_30px_rgba(255,205,0,0.3)] transition-all duration-500 overflow-hidden transform group-hover:-rotate-3 group-hover:scale-105`}
      >
        {/* Grid 3x3 - Bandeira Quadriculada */}
        <div className="w-full h-full grid grid-cols-3 grid-rows-3 gap-[1px] bg-black/50">
          
          {/* Linha 1 */}
          <div className={yellowSquare}>
            {/* Efeito de Reflexo de Luz no Hover */}
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/50 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out" />
          </div>
          <div className={blackSquare} />
          <div className={yellowSquare}>
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/50 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out delay-75" />
          </div>

          {/* Linha 2 */}
          <div className={blackSquare} />
          <div className={yellowSquare}>
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/50 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out delay-150" />
          </div>
          <div className={blackSquare} />

          {/* Linha 3 */}
          <div className={yellowSquare}>
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/50 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out delay-200" />
          </div>
          <div className={blackSquare} />
          <div className={yellowSquare}>
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/50 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out delay-300" />
          </div>

        </div>
      </div>

      {/* ===== TIPOGRAFIA BOX BOX ===== */}
      <div className="flex flex-col justify-center">
        <h2 className={`${s.text} font-black text-white tracking-tight uppercase leading-none group-hover:text-neutral-100 transition-colors`}>
          BOX<span className="text-box-yellow group-hover:text-white transition-colors">BOX</span>
        </h2>
        <p className={`${s.sub} text-neutral-500 tracking-[0.3em] uppercase mt-1 leading-none font-bold group-hover:text-neutral-300 transition-colors`}>
          Racing <span className="text-neutral-700 mx-0.5">•</span> Art
        </p>
      </div>
      
    </Link>
  );
}