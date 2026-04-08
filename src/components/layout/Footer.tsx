import Link from "next/link";
import { Logo } from "@/components/common/Logo";

export function Footer() {
  return (
    <footer className="relative bg-[#050505] overflow-hidden pt-20">
      {/* Linha de borda superior gradiente */}
      <div 
        className="absolute top-0 left-0 right-0 h-px opacity-30"
        style={{ background: "linear-gradient(90deg, transparent, #FFCD00, #009739, #00205B, transparent)" }}
      />

      <div className="max-w-7xl mx-auto px-6 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-8 border-b border-white/5 pb-16">
          
          {/* Brand Info */}
          <div className="md:col-span-5 lg:col-span-6">
            {/* LOGO IMPORTADO AQUI COM MARGEM INFERIOR */}
            <Logo size="md" className="mb-6" />
            
            <p className="text-neutral-500 max-w-sm text-sm leading-relaxed font-light">
              Transformamos a paixão pelo automobilismo em arte de alta performance. Cada quadro eterniza o legado das pistas e a emoção da velocidade.
            </p>
          </div>

          {/* Links Navegação */}
          <div className="md:col-span-3 lg:col-span-3">
            <h4 className="text-white text-xs font-bold uppercase tracking-widest mb-6">Navegação</h4>
            <ul className="space-y-4">
              {[
                { href: "/", label: "Início" },
                { href: "/catalogo", label: "Catálogo Completo" },
                { href: "/sobre", label: "A Nossa História" },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-neutral-400 hover:text-box-yellow text-sm transition-colors duration-300">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Links Coleções */}
          <div className="md:col-span-4 lg:col-span-3">
            <h4 className="text-white text-xs font-bold uppercase tracking-widest mb-6">Coleções</h4>
            <ul className="space-y-4">
              {[
                { href: "/categorias/senna-collection", label: "Senna Collection" },
                { href: "/categorias/f1-legends", label: "F1 Legends" },
                { href: "/categorias/classic", label: "Clássicos" },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-neutral-400 hover:text-white text-sm transition-colors duration-300 flex items-center gap-2 group">
                    <span className="w-1 h-1 rounded-full bg-neutral-800 group-hover:bg-box-yellow transition-colors" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-neutral-600 text-xs font-medium tracking-wide">
            © {new Date().getFullYear()} BOX BOX RACING ART. TODOS OS DIREITOS RESERVADOS.
          </p>
          <p className="text-neutral-600 text-xs tracking-widest uppercase flex items-center gap-2">
            Design for Speed <span className="w-2 h-2 rounded-full bg-box-yellow/50 block" />
          </p>
        </div>
      </div>
    </footer>
  );
}