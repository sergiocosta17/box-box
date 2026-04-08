"use client";

import { useCart } from "@/contexts/CartContext";
import { CartItem } from "./CartItem";
import { formatPriceWithCurrency } from "@/lib/utils";
import { generateWhatsAppLink } from "@/lib/whatsapp";
import { FREE_SHIPPING_THRESHOLD } from "@/lib/constants";

export function CartDrawer() {
  const { items, totalPrice, isOpen, closeCart, clearCart } = useCart();

  if (!isOpen) return null;

  const whatsappLink = generateWhatsAppLink(items, totalPrice);
  const freeShippingRemaining = FREE_SHIPPING_THRESHOLD - totalPrice;

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
        onClick={closeCart}
      />

      {/* Drawer */}
      <div className="fixed top-0 right-0 h-full w-full max-w-md bg-zinc-900 z-50 shadow-2xl flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-5 border-b border-zinc-800">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-linear-to-br from-green-500/20 to-yellow-500/20 flex items-center justify-center">
              <svg
                className="w-5 h-5 text-green-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                />
              </svg>
            </div>
            <div>
              <h2 className="text-lg font-bold text-white">Seu Carrinho</h2>
              <p className="text-zinc-500 text-sm">{items.length} {items.length === 1 ? 'item' : 'itens'}</p>
            </div>
          </div>
          <button
            onClick={closeCart}
            className="w-10 h-10 flex items-center justify-center rounded-xl bg-zinc-800 text-zinc-400 hover:text-white hover:bg-zinc-700 transition-all"
            aria-label="Fechar carrinho"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        {/* Frete grátis progress */}
        {items.length > 0 && freeShippingRemaining > 0 && (
          <div className="px-5 py-4 bg-zinc-800/50 border-b border-zinc-800">
            <div className="flex items-center justify-between text-sm mb-2">
              <span className="text-zinc-400">Frete grátis</span>
              <span className="text-green-500 font-medium">
                Faltam {formatPriceWithCurrency(freeShippingRemaining)}
              </span>
            </div>
            <div className="h-2 bg-zinc-700 rounded-full overflow-hidden">
              <div 
                className="h-full bg-linear-to-r from-green-500 to-green-400 rounded-full transition-all duration-500"
                style={{ width: `${Math.min((totalPrice / FREE_SHIPPING_THRESHOLD) * 100, 100)}%` }}
              />
            </div>
          </div>
        )}

        {items.length > 0 && freeShippingRemaining <= 0 && (
          <div className="px-5 py-3 bg-green-500/10 border-b border-green-500/20">
            <div className="flex items-center gap-2 text-green-500">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-sm font-medium">Você ganhou frete grátis! 🎉</span>
            </div>
          </div>
        )}

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-5">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <div className="w-20 h-20 rounded-full bg-zinc-800 flex items-center justify-center mb-4">
                <svg
                  className="w-10 h-10 text-zinc-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                  />
                </svg>
              </div>
              <h3 className="text-white font-semibold mb-2">Carrinho vazio</h3>
              <p className="text-zinc-500 text-sm mb-6">
                Adicione produtos incríveis ao seu carrinho!
              </p>
              <button
                onClick={closeCart}
                className="px-6 py-3 bg-zinc-800 text-white rounded-xl hover:bg-zinc-700 transition-colors"
              >
                Continuar comprando
              </button>
            </div>
          ) : (
            <div className="space-y-4">
              {items.map((item) => (
                <CartItem
                  key={`${item.product.id}-${item.size}`}
                  item={item}
                />
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="p-5 border-t border-zinc-800 bg-zinc-900/50 space-y-4">
            {/* Resumo */}
            <div className="space-y-2">
              <div className="flex items-center justify-between text-sm">
                <span className="text-zinc-400">Subtotal</span>
                <span className="text-white">{formatPriceWithCurrency(totalPrice)}</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-zinc-400">Frete</span>
                <span className={freeShippingRemaining <= 0 ? "text-green-500" : "text-white"}>
                  {freeShippingRemaining <= 0 ? "Grátis" : "A calcular"}
                </span>
              </div>
              <div className="flex items-center justify-between text-lg pt-2 border-t border-zinc-800">
                <span className="text-white font-semibold">Total</span>
                <span className="text-white font-bold text-xl">
                  {formatPriceWithCurrency(totalPrice)}
                </span>
              </div>
            </div>

            {/* Botão WhatsApp */}
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 w-full py-4 bg-[#25D366] hover:bg-[#20BD5A] text-white font-semibold rounded-2xl transition-all duration-300 shadow-lg shadow-green-500/20 hover:shadow-green-500/30 hover:scale-[1.02]"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Finalizar pelo WhatsApp
            </a>

            {/* Limpar carrinho */}
            <button
              onClick={clearCart}
              className="w-full py-2 text-zinc-500 hover:text-red-400 text-sm transition-colors flex items-center justify-center gap-2"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
              </svg>
              Limpar carrinho
            </button>
          </div>
        )}
      </div>
    </>
  );
}
