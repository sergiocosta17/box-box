import Link from "next/link";
import { Logo } from "@/components/common/Logo";

export function Footer() {
  return (
    <footer className="bg-zinc-950 border-t border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <Logo size="md" />
            <p className="text-zinc-500 mt-4 max-w-sm text-sm">
              Transformamos a paixão pelo automobilismo em arte. Cada quadro conta
              uma história de velocidade e superação.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Navegação</h4>
            <ul className="space-y-2">
              {[
                { href: "/", label: "Início" },
                { href: "/catalogo", label: "Catálogo" },
                { href: "/sobre", label: "Sobre" },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-zinc-500 hover:text-white text-sm transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Coleções */}
          <div>
            <h4 className="text-white font-semibold mb-4">Coleções</h4>
            <ul className="space-y-2">
              {[
                { href: "/categorias/senna-collection", label: "Senna Collection" },
                { href: "/categorias/f1-legends", label: "F1 Legends" },
                { href: "/categorias/classic", label: "Clássicos" },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-zinc-500 hover:text-white text-sm transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-zinc-800 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-zinc-600 text-sm">
            © {new Date().getFullYear()} Box Box. Todos os direitos reservados.
          </p>
          <p className="text-zinc-600 text-sm">
            Feito com ❤️ no Brasil 🇧🇷
          </p>
        </div>
      </div>
    </footer>
  );
}
