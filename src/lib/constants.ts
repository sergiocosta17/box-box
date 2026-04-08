export const SITE_NAME = "Box Box";
export const SITE_DESCRIPTION =
  "Quadros exclusivos de Fórmula 1, Ayrton Senna e automobilismo. Arte para apaixonados por velocidade.";

export const CATEGORY_NAMES: Record<string, string> = {
  senna: "Senna Collection",
  "f1-legends": "F1 Legends",
  classic: "Clássicos",
  modern: "F1 Moderna",
};

export const FREE_SHIPPING_THRESHOLD = 299;
export const INSTALLMENT_COUNT = 3;

// WhatsApp
export const WHATSAPP_NUMBER = "5583999889785"; // Substitua pelo número real
export const WHATSAPP_MESSAGE_TEMPLATE = (items: string, total: string) =>
  `Olá! 🏎️ Gostaria de finalizar meu pedido:\n\n${items}\n\n💰 Total: ${total}\n\nPodemos prosseguir?`;
