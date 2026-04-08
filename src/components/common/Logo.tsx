"use client";

import Link from "next/link";

interface LogoProps {
  size?: "sm" | "md" | "lg";
  className?: string;
}

export function Logo({ size = "md", className = "" }: LogoProps) {
  const sizes = {
    sm: { box: "w-8 h-8", text: "text-lg", sub: "text-[8px]", gap: "gap-2.5" },
    md: { box: "w-10 h-10", text: "text-xl", sub: "text-[9px]", gap: "gap-3" },
    lg: { box: "w-14 h-14", text: "text-3xl", sub: "text-xs", gap: "gap-4" },
  };

  const s = sizes[size];

  return (
    <Link href="/" className={`flex items-center ${s.gap} group w-fit ${className}`}>
      {/* Símbolo */}
      <div 
        className={`relative flex items-center justify-center ${s.box} border border-[#FFCD00]/30 rounded-sm transform group-hover:rotate-45 transition-transform duration-500 bg-black overflow-hidden shrink-0 shadow-lg`}
      >
         <div className="absolute w-full h-[1px] bg-[#FFCD00]/50 -rotate-45" />
      </div>

      {/* Texto */}
      <div className="flex flex-col justify-center">
        <span className={`${s.text} font-black text-white tracking-widest uppercase leading-none`}>
          BOX<span className="text-[#FFCD00]">BOX</span>
        </span>
        <span className={`${s.sub} text-neutral-500 tracking-[0.3em] uppercase mt-1 leading-none`}>
          Racing Art
        </span>
      </div>
    </Link>
  );
}