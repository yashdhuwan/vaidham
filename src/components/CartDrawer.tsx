import React from 'react';
import { X, Trash2, ArrowRight, ShieldCheck, Plus, Minus } from 'lucide-react';
import { useCart } from '../context/CartContext';

export const CartDrawer: React.FC = () => {
  const {
    items,
    isCartOpen,
    setIsCartOpen,
    updateQuantity,
    removeItem,
    subtotal,
    shippingFee,
    totalAmount,
    freeShippingRemaining,
    setCurrentView,
  } = useCart();

  if (!isCartOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-[#242A26]/50 backdrop-blur-xs transition-opacity"
        onClick={() => setIsCartOpen(false)}
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-[#F7F4EC] shadow-2xl flex flex-col border-l border-[#242A26]/10">
          {/* Header */}
          <div className="p-6 border-b border-[#242A26]/10 flex items-center justify-between">
            <div>
              <h3 className="font-serif text-2xl font-semibold text-[#173D32]">
                Your Shopping Bag
              </h3>
              <p className="text-xs text-[#242A26]/60 mt-0.5">
                {items.length === 0 ? 'Your bag is empty' : `${items.reduce((a, b) => a + b.quantity, 0)} item(s) selected`}
              </p>
            </div>
            <button
              onClick={() => setIsCartOpen(false)}
              className="p-2 text-[#242A26]/60 hover:text-[#173D32] rounded-full hover:bg-[#EAE3D6] transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Free Shipping Progress Indicator */}
          <div className="bg-[#EAE3D6]/60 px-6 py-3 border-b border-[#242A26]/5">
            {freeShippingRemaining > 0 ? (
              <div>
                <p className="text-xs text-[#242A26] font-medium">
                  Add <span className="font-semibold text-[#173D32]">₹{freeShippingRemaining}</span> more for complimentary shipping!
                </p>
                <div className="w-full bg-[#D8CEBC] h-1.5 rounded-full mt-2 overflow-hidden">
                  <div
                    className="bg-[#173D32] h-full transition-all duration-300"
                    style={{ width: `${Math.min(100, (subtotal / 999) * 100)}%` }}
                  />
                </div>
              </div>
            ) : (
              <p className="text-xs text-[#173D32] font-semibold flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-[#B79A69]" />
                You have unlocked Complimentary Pan-India Delivery!
              </p>
            )}
          </div>

          {/* Cart Items List */}
          <div className="flex-1 overflow-y-auto p-6 space-y-4 divide-y divide-[#242A26]/5">
            {items.length === 0 ? (
              <div className="py-20 text-center">
                <p className="font-serif text-xl text-[#173D32]">Your bag is currently empty</p>
                <p className="text-xs text-[#242A26]/60 mt-2 max-w-xs mx-auto">
                  Explore our classical formulations grounded in purity and scientific transparency.
                </p>
                <button
                  onClick={() => {
                    setCurrentView('shop');
                    setIsCartOpen(false);
                  }}
                  className="mt-6 px-6 py-2.5 bg-[#173D32] text-[#F7F4EC] rounded-lg text-xs font-semibold uppercase tracking-wider hover:bg-[#0F2A22] transition-colors"
                >
                  Explore Collection
                </button>
              </div>
            ) : (
              items.map((item) => (
                <div key={item.product.id} className="pt-4 first:pt-0 flex gap-4">
                  <img
                    src={item.product.image}
                    alt={item.product.name}
                    className="w-20 h-20 object-cover rounded-lg bg-[#EAE3D6] shrink-0 border border-[#242A26]/5"
                  />
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between">
                      <div>
                        <h4 className="font-serif font-semibold text-[#173D32] text-lg leading-tight">
                          {item.product.name}
                        </h4>
                        <p className="text-xs text-[#242A26]/60">{item.product.packSize}</p>
                      </div>
                      <button
                        onClick={() => removeItem(item.product.id)}
                        className="text-[#242A26]/40 hover:text-red-700 transition-colors p-1"
                        aria-label="Remove item"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>

                    <div className="mt-3 flex items-center justify-between">
                      {/* Quantity Stepper */}
                      <div className="flex items-center border border-[#242A26]/20 rounded-md bg-white">
                        <button
                          onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                          className="p-1.5 text-[#242A26] hover:bg-[#EAE3D6] transition-colors rounded-l-md"
                          aria-label="Decrease quantity"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="px-3 text-xs font-medium tabular-nums">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                          className="p-1.5 text-[#242A26] hover:bg-[#EAE3D6] transition-colors rounded-r-md"
                          aria-label="Increase quantity"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>

                      {/* Price */}
                      <div className="text-right">
                        <span className="font-semibold text-sm text-[#173D32] tabular-nums">
                          ₹{item.product.price * item.quantity}
                        </span>
                        {item.product.originalPrice > item.product.price && (
                          <span className="block text-[11px] text-[#242A26]/40 line-through tabular-nums">
                            ₹{item.product.originalPrice * item.quantity}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Footer / Summary */}
          {items.length > 0 && (
            <div className="p-6 border-t border-[#242A26]/10 bg-white space-y-3">
              <div className="space-y-1.5 text-xs text-[#242A26]">
                <div className="flex justify-between">
                  <span className="text-[#242A26]/70">Subtotal</span>
                  <span className="font-medium tabular-nums">₹{subtotal}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#242A26]/70">Pan-India Delivery</span>
                  <span className="font-medium tabular-nums">
                    {shippingFee === 0 ? (
                      <span className="text-emerald-700 font-semibold">FREE</span>
                    ) : (
                      `₹${shippingFee}`
                    )}
                  </span>
                </div>
                <div className="flex justify-between pt-2 border-t border-[#242A26]/10 text-sm font-semibold text-[#173D32]">
                  <span>Total Amount</span>
                  <span className="tabular-nums">₹{totalAmount}</span>
                </div>
              </div>

              <div className="pt-2 space-y-2">
                <button
                  onClick={() => {
                    setIsCartOpen(false);
                    setCurrentView('checkout');
                  }}
                  className="w-full py-3 bg-[#173D32] hover:bg-[#0F2A22] text-[#F7F4EC] rounded-lg text-sm font-semibold flex items-center justify-center gap-2 transition-colors shadow-sm cursor-pointer"
                >
                  <span>Proceed to Checkout</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  onClick={() => {
                    setIsCartOpen(false);
                    setCurrentView('cart');
                  }}
                  className="w-full py-2 text-center text-xs text-[#242A26]/80 hover:text-[#173D32] font-medium transition-colors"
                >
                  View Full Cart & Estimated Delivery
                </button>
              </div>

              <div className="pt-2 text-center">
                <span className="text-[10px] text-[#242A26]/60 flex items-center justify-center gap-1">
                  <ShieldCheck className="w-3 h-3 text-[#B79A69]" />
                  Secure Checkout · 100% Genuine Ayurvedic Formulations
                </span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
