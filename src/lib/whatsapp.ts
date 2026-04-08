import { CartItem } from "@/types/cart";
import { WHATSAPP_NUMBER, WHATSAPP_MESSAGE_TEMPLATE } from "./constants";
import { formatPriceWithCurrency } from "./utils";

export function generateWhatsAppLink(items: CartItem[], totalPrice: number): string {
  // Formatar itens do carrinho
  const itemsText = items
    .map(
      (item) =>
        `• ${item.product.name}\n  Tamanho: ${item.size}\n  Qtd: ${item.quantity}\n  Valor: ${formatPriceWithCurrency(item.product.price * item.quantity)}`
    )
    .join("\n\n");

  // Formatar total
  const totalText = formatPriceWithCurrency(totalPrice);

  // Gerar mensagem
  const message = WHATSAPP_MESSAGE_TEMPLATE(itemsText, totalText);

  // Encode para URL
  const encodedMessage = encodeURIComponent(message);

  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;
}

export function generateProductWhatsAppLink(
  productName: string,
  size: string,
  price: number
): string {
  const message = `Olá! 🏎️ Tenho interesse no quadro:\n\n• ${productName}\n• Tamanho: ${size}\n• Valor: ${formatPriceWithCurrency(price)}\n\nPodemos conversar?`;

  const encodedMessage = encodeURIComponent(message);

  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;
}
