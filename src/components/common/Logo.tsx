import Link from "next/link";

interface LogoProps {
  size?: "sm" | "md" | "lg";
}

export function Logo({ size = "md" }: LogoProps) {
  const sizes = {
    sm: { box: "w-8 h-8", text: "text-base", sub: "text-[8px]" },
    md: { box: "w-10 h-10", text: "text-xl", sub: "text-[10px]" },
    lg: { box: "w-12 h-12", text: "text-2xl", sub: "text-xs" },
  };

  const s = sizes[size];

  return (
    <Link href="/" className="flex items-center gap-3 group">
      {/* Ícone quadriculado */}
      <div className={`${s.box} relative rounded-lg overflow-hidden`}>
        <svg viewBox="0 0 20 20" className="w-full h-full">
          {/* Quadrados - padrão xadrez preto e amarelo */}
          <rect x="0" y="0" width="10" height="10" fill="#FACC15" />
          <rect x="10" y="0" width="10" height="10" fill="#18181B" />
          <rect x="0" y="10" width="10" height="10" fill="#18181B" />
          <rect x="10" y="10" width="10" height="10" fill="#FACC15" />
        </svg>
      </div>

      {/* Texto */}
      <div className="flex flex-col">
        <span className={`${s.text} font-black tracking-tight leading-none text-white`}>
          BOX BOX
        </span>
        <span className={`${s.sub} text-zinc-500 tracking-[0.15em] uppercase font-medium`}>
          Racing Art Gallery
        </span>
      </div>
    </Link>
  );
}
