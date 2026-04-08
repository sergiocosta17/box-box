"use client";

import { useCart } from "@/contexts/CartContext";
import { CartItem } from "./CartItem";
import { formatPriceWithCurrency } from "@/lib/utils";
import { generateWhatsAppLink } from "@/lib/whatsapp";
import { FREE_SHIPPING_THRESHOLD } from "@/lib/constants";
import { ShoppingBag, X, CheckCircle2, MessageCircle, Trash2 } from "lucide-react";

export function CartDrawer() {
  const { items, totalPrice, isOpen, closeCart, clearCart } = useCart();

  if (!isOpen) return null;

  const whatsappLink = generateWhatsAppLink(items, totalPrice);
  const freeShippingRemaining = FREE_SHIPPING_THRESHOLD - totalPrice;
  const progressPercentage = Math.min((totalPrice / FREE_SHIPPING_THRESHOLD) * 100, 100);

  return (
    <>
      {/* Overlay com Blur */}
      <div
        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 transition-opacity"
        onClick={closeCart}
      />

      {/* Drawer Premium */}
      <div className="fixed top-0 right-0 h-full w-full max-w-md bg-[#050505]/95 backdrop-blur-xl z-50 shadow-2xl flex flex-col border-l border-white/10 transition-transform">
        
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-white/5">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center">
              <ShoppingBag className="w-5 h-5 text-white" />
            </div>
            <div>
              <h2 className="text-lg font-black text-white uppercase tracking-widest">O Seu Grid</h2>
              <p className="text-neutral-500 text-xs font-bold uppercase tracking-widest mt-1">
                {items.length} {items.length === 1 ? 'Arte' : 'Artes'}
              </p>
            </div>
          </div>
          <button
            onClick={closeCart}
            className="w-10 h-10 flex items-center justify-center rounded-full bg-white/5 border border-white/5 text-neutral-400 hover:text-white hover:bg-white/10 transition-all"
            aria-label="Fechar carrinho"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Barra de Progresso de Frete Grátis */}
        {items.length > 0 && freeShippingRemaining > 0 && (
          <div className="px-6 py-5 bg-white/[0.02] border-b border-white/5">
            <div className="flex items-center justify-between text-xs font-bold uppercase tracking-widest mb-3">
              <span className="text-neutral-400">Frete Nacional</span>
              <span className="text-box-yellow">
                Faltam {formatPriceWithCurrency(freeShippingRemaining)}
              </span>
            </div>
            <div className="h-1.5 bg-neutral-800 rounded-full overflow-hidden">
              <div 
                className="h-full bg-box-yellow rounded-full transition-all duration-700 ease-out shadow-[0_0_10px_rgba(255,205,0,0.5)]"
                style={{ width: `${progressPercentage}%` }}
              />
            </div>
          </div>
        )}

        {items.length > 0 && freeShippingRemaining <= 0 && (
          <div className="px-6 py-4 bg-[#009739]/10 border-b border-[#009739]/20">
            <div className="flex items-center gap-3 text-[#009739]">
              <CheckCircle2 className="w-5 h-5" />
              <span className="text-xs font-bold uppercase tracking-widest">Frete Grátis Desbloqueado!</span>
            </div>
          </div>
        )}

        {/* Lista de Produtos (Content) */}
        <div className="flex-1 overflow-y-auto p-6 scrollbar-hide">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <div className="w-24 h-24 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mb-6">
                <ShoppingBag className="w-10 h-10 text-neutral-600" />
              </div>
              <h3 className="text-xl font-black text-white mb-2 uppercase tracking-wide">Carrinho Vazio</h3>
              <p className="text-neutral-500 text-sm mb-8 font-light max-w-[250px]">
                A sua parede ainda está em branco. Descubra a sua próxima obra de arte no nosso catálogo.
              </p>
              <button
                onClick={closeCart}
                className="btn-primary"
              >
                Explorar Acervo
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

        {/* Footer (Total e Checkout) */}
        {items.length > 0 && (
          <div className="p-6 border-t border-white/5 bg-black/50 backdrop-blur-md space-y-6">
            
            {/* Resumo Financeiro */}
            <div className="space-y-3">
              <div className="flex items-center justify-between text-xs font-bold uppercase tracking-widest">
                <span className="text-neutral-500">Subtotal</span>
                <span className="text-neutral-300">{formatPriceWithCurrency(totalPrice)}</span>
              </div>
              <div className="flex items-center justify-between text-xs font-bold uppercase tracking-widest">
                <span className="text-neutral-500">Frete</span>
                <span className={freeShippingRemaining <= 0 ? "text-[#009739]" : "text-white"}>
                  {freeShippingRemaining <= 0 ? "Grátis" : "A Calcular"}
                </span>
              </div>
              <div className="flex items-center justify-between pt-4 border-t border-white/10 mt-2">
                <span className="text-sm font-black text-white uppercase tracking-widest">Total</span>
                <span className="text-2xl font-black text-box-yellow">
                  {formatPriceWithCurrency(totalPrice)}
                </span>
              </div>
            </div>

            {/* Ações */}
            <div className="space-y-4">
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 w-full py-4 bg-[#128C7E] hover:bg-[#075E54] text-white text-sm font-bold uppercase tracking-widest rounded-full transition-all duration-300 shadow-lg shadow-[#128C7E]/20"
              >
                <MessageCircle className="w-5 h-5" />
                Finalizar Compra
              </a>

              <button
                onClick={clearCart}
                className="w-full py-2 text-neutral-500 hover:text-[#E10600] text-xs font-bold uppercase tracking-widest transition-colors flex items-center justify-center gap-2"
              >
                <Trash2 className="w-4 h-4" />
                Esvaziar Carrinho
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
}