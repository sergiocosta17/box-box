import { INSTALLMENT_COUNT } from "./constants";

export function formatPrice(price: number): string {
  return price.toFixed(2).replace(".", ",");
}

export function formatPriceWithCurrency(price: number): string {
  return `R$ ${formatPrice(price)}`;
}

export function calculateDiscount(
  price: number,
  originalPrice?: number
): number | null {
  if (!originalPrice) return null;
  return Math.round(((originalPrice - price) / originalPrice) * 100);
}

export function calculateInstallment(price: number): string {
  const installmentValue = price / INSTALLMENT_COUNT;
  return `${INSTALLMENT_COUNT}x de R$ ${formatPrice(installmentValue)} sem juros`;
}

export function cn(...classes: (string | boolean | undefined)[]): string {
  return classes.filter(Boolean).join(" ");
}
