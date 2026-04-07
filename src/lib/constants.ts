// src/lib/constants.ts
// Valores fixos usados em todo o projeto

export const APP_NAME = "BOX BOX";

export const APP_DESCRIPTION =
  "Quadros exclusivos de F1 e automobilismo. Arte que acelera seu coração.";

// Número do WhatsApp (vem do .env)
export const WHATSAPP_NUMBER = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "";

// Tamanhos disponíveis para os quadros
export const PRODUCT_SIZES = [
  { name: "30x40cm", value: "30x40" },
  { name: "40x50cm", value: "40x50" },
  { name: "50x70cm", value: "50x70" },
  { name: "60x80cm", value: "60x80" },
  { name: "70x100cm", value: "70x100" },
] as const;

// Menu de navegação
export const NAVIGATION_ITEMS = [
  { name: "Início", href: "/" },
  { name: "Catálogo", href: "/catalogo" },
  { name: "Senna Collection", href: "/categorias/senna-collection" },
  { name: "F1 Legends", href: "/categorias/f1-legends" },
  { name: "Sobre", href: "/sobre" },
] as const;

// Frases do Senna para usar no site
export const SENNA_QUOTES = [
  "Se você não faz mais o que ama, você não está mais vivendo.",
  "Ser o segundo é ser o primeiro dos que perdem.",
  "No que diz respeito ao empenho, ao compromisso, ao esforço, não existe meio termo.",
  "Você não pode ultrapassar 15 carros com tempo bom, mas pode quando está chovendo.",
] as const;
