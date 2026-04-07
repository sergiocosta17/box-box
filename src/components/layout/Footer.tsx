import Link from "next/link";
import { MessageCircle, Mail } from "lucide-react";

const WHATSAPP_NUMBER =
  process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "5581999999999";

const SENNA_QUOTES = [
  "Se você não faz mais o que ama, você não está mais vivendo, está apenas existindo.",
  "Ser o segundo é ser o primeiro dos que perdem.",
  "No que diz respeito ao empenho, ao compromisso, ao esforço, não existe meio termo.",
  "Eu sou parte de uma equipe. Então, quando venço, não sou eu apenas quem vence.",
];

export function Footer() {
  const today = new Date().getDate();
  const quoteIndex = today % SENNA_QUOTES.length;
  const selectedQuote = SENNA_QUOTES[quoteIndex];

  const whatsappLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    "Olá! Vim pelo site BOX BOX."
  )}`;

  return (
    <footer className="bg-box-gray border-t border-neutral-800">
      {/* Citação do Senna */}
      <div className="border-b border-neutral-800 py-8">
        <div className="container mx-auto px-4 text-center">
          <blockquote className="text-gray-400 italic max-w-2xl mx-auto text-sm sm:text-base">
            &ldquo;{selectedQuote}&rdquo;
          </blockquote>
          <cite className="text-box-yellow font-semibold text-sm mt-2 block">
            — Ayrton Senna
          </cite>
        </div>
      </div>

      {/* Conteúdo principal */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Coluna 1 - Logo e descrição */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 grid grid-cols-2 grid-rows-2 rounded overflow-hidden">
                <div className="bg-box-yellow" />
                <div className="bg-box-black border border-box-yellow/30" />
                <div className="bg-box-black border border-box-yellow/30" />
                <div className="bg-box-yellow" />
              </div>
              <span className="text-xl font-black text-box-yellow">
                BOX BOX
              </span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Arte exclusiva para apaixonados por automobilismo. Cada quadro é
              uma homenagem à velocidade, à paixão e ao legado dos maiores
              pilotos.
            </p>
          </div>

          {/* Coluna 2 - Navegação */}
          <div>
            <h3 className="text-white font-bold mb-4">Navegação</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-gray-400 hover:text-box-yellow transition-colors text-sm"
                >
                  Início
                </Link>
              </li>
              <li>
                <Link
                  href="/catalogo"
                  className="text-gray-400 hover:text-box-yellow transition-colors text-sm"
                >
                  Catálogo
                </Link>
              </li>
              <li>
                <Link
                  href="/sobre"
                  className="text-gray-400 hover:text-box-yellow transition-colors text-sm"
                >
                  Sobre Nós
                </Link>
              </li>
            </ul>
          </div>

          {/* Coluna 3 - Categorias */}
          <div>
            <h3 className="text-white font-bold mb-4">Categorias</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/categorias/senna-collection"
                  className="text-gray-400 hover:text-box-yellow transition-colors text-sm"
                >
                  Senna Collection
                </Link>
              </li>
              <li>
                <Link
                  href="/categorias/f1-legends"
                  className="text-gray-400 hover:text-box-yellow transition-colors text-sm"
                >
                  F1 Legends
                </Link>
              </li>
              <li>
                <Link
                  href="/categorias/carros-classicos"
                  className="text-gray-400 hover:text-box-yellow transition-colors text-sm"
                >
                  Carros Clássicos
                </Link>
              </li>
              <li>
                <Link
                  href="/categorias/circuitos"
                  className="text-gray-400 hover:text-box-yellow transition-colors text-sm"
                >
                  Circuitos
                </Link>
              </li>
            </ul>
          </div>

          {/* Coluna 4 - Contato */}
          <div>
            <h3 className="text-white font-bold mb-4">Contato</h3>
            <div className="flex gap-3 mb-4">
              <Link
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 bg-neutral-800 rounded-full text-gray-400 hover:text-box-yellow hover:bg-neutral-700 transition-colors"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-5 h-5" />
              </Link>
              <a
                href="https://instagram.com/boxboxgallery"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 bg-neutral-800 rounded-full text-gray-400 hover:text-box-yellow hover:bg-neutral-700 transition-colors"
                aria-label="Instagram"
              >
                {/* Ícone Instagram em SVG */}
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
              <a
                href="mailto:contato@boxbox.art"
                className="p-2.5 bg-neutral-800 rounded-full text-gray-400 hover:text-box-yellow hover:bg-neutral-700 transition-colors"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
            <p className="text-gray-500 text-sm">
              Atendimento via WhatsApp
              <br />
              <span className="text-gray-400">Seg a Sex: 9h às 18h</span>
            </p>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-neutral-800 py-6">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} BOX BOX Racing Art Gallery. Todos os
            direitos reservados.
          </p>
          <p className="text-gray-600 text-xs mt-2">
            Feito com 💛 para apaixonados por velocidade
          </p>
        </div>
      </div>
    </footer>
  );
}
