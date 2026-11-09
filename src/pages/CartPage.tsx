import React from 'react';
import { useCart } from '../context/CartContext';
import { Trash2, Plus, Minus, ArrowRight, ShieldCheck, ArrowLeft, Truck } from 'lucide-react';
import { PincodeChecker } from '../components/PincodeChecker';

export const CartPage: React.FC = () => {
  const {
    items,
    updateQuantity,
    removeItem,
    clearCart,
    subtotal,
    shippingFee,
    totalAmount,
    freeShippingRemaining,
    setCurrentView,
    navigateToProduct,
  } = useCart();

  if (items.length === 0) {
    return (
      <div className="max-w-4xl mx-auto px-6 py-20 text-center space-y-6">
        <h1 className="font-serif text-4xl text-[#173D32]">Your Shopping Bag is Empty</h1>
        <p className="text-sm text-[#242A26]/70 max-w-md mx-auto font-light leading-relaxed">
          Explore our range of classical, standardized Ayurvedic formulations backed by NABL laboratory documentation.
        </p>
        <button
          onClick={() => setCurrentView('shop')}
          className="px-8 py-3.5 bg-[#173D32] text-[#F7F4EC] rounded-lg text-xs font-semibold uppercase tracking-wider hover:bg-[#0F2A22] transition-colors cursor-pointer"
        >
          Explore Formulations
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-6 sm:px-8 py-12 space-y-12">
      {/* Header */}
      <div className="border-b border-[#242A26]/10 pb-6 flex items-center justify-between">
        <div>
          <span className="text-xs font-semibold uppercase tracking-widest text-[#B79A69]">
            Order Review
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl text-[#173D32]">
            Shopping Bag ({items.reduce((a, b) => a + b.quantity, 0)} Items)
          </h1>
        </div>
        <button
          onClick={() => setCurrentView('shop')}
          className="text-xs font-semibold text-[#173D32] hover:text-[#B79A69] transition-colors flex items-center gap-1 cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Continue Shopping</span>
        </button>
      </div>

      {/* Free Shipping Alert */}
      <div className="bg-[#EAE3D6] p-4 rounded-2xl border border-[#242A26]/10">
        {freeShippingRemaining > 0 ? (
          <div>
            <p className="text-xs text-[#242A26]">
              Add <strong className="text-[#173D32]">₹{freeShippingRemaining}</strong> more of verified formulations to qualify for <strong>Complimentary Pan-India Delivery</strong>.
            </p>
            <div className="w-full bg-[#D8CEBC] h-2 rounded-full mt-2 overflow-hidden">
              <div
                className="bg-[#173D32] h-full transition-all duration-300"
                style={{ width: `${Math.min(100, (subtotal / 999) * 100)}%` }}
              />
            </div>
          </div>
        ) : (
          <div className="flex items-center gap-2 text-xs text-[#173D32] font-semibold">
            <ShieldCheck className="w-4 h-4 text-[#B79A69]" />
            <span>Complimentary Pan-India Delivery Unlocked!</span>
          </div>
        )}
      </div>

      {/* Cart Grid Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Items List */}
        <div className="lg:col-span-8 bg-white rounded-3xl p-6 sm:p-8 border border-[#242A26]/10 space-y-6">
          <div className="divide-y divide-[#242A26]/10">
            {items.map((item) => (
              <div key={item.product.id} className="py-6 first:pt-0 last:pb-0 flex flex-col sm:flex-row gap-6 items-start sm:items-center justify-between">
                <div className="flex gap-4 items-center">
                  <img
                    src={item.product.image}
                    alt={item.product.name}
                    className="w-20 h-20 sm:w-24 sm:h-24 object-cover rounded-xl bg-[#EAE3D6] shrink-0 border border-[#242A26]/5"
                  />
                  <div className="space-y-1">
                    <span className="text-[10px] uppercase font-mono tracking-wider text-[#B79A69]">
                      {item.product.category}
                    </span>
                    <h3
                      onClick={() => navigateToProduct(item.product.id)}
                      className="font-serif text-xl font-semibold text-[#173D32] hover:text-[#B79A69] transition-colors cursor-pointer"
                    >
                      {item.product.name}
                    </h3>
                    <p className="text-xs text-[#242A26]/60">
                      {item.product.packSize} · Batch: {item.product.activeBatch}
                    </p>
                    <span className="text-sm font-semibold text-[#173D32] tabular-nums block sm:hidden">
                      ₹{item.product.price}
                    </span>
                  </div>
                </div>

                <div className="flex items-center justify-between sm:justify-end gap-6 w-full sm:w-auto">
                  {/* Quantity Stepper */}
                  <div className="flex items-center border border-[#242A26]/20 rounded-lg bg-white">
                    <button
                      onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                      className="p-2 text-[#242A26] hover:bg-[#EAE3D6] rounded-l-lg transition-colors cursor-pointer"
                      aria-label="Decrease quantity"
                    >
                      <Minus className="w-3.5 h-3.5" />
                    </button>
                    <span className="px-4 text-xs font-semibold tabular-nums text-[#173D32]">
                      {item.quantity}
                    </span>
                    <button
                      onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                      className="p-2 text-[#242A26] hover:bg-[#EAE3D6] rounded-r-lg transition-colors cursor-pointer"
                      aria-label="Increase quantity"
                    >
                      <Plus className="w-3.5 h-3.5" />
                    </button>
                  </div>

                  {/* Subtotal for Item */}
                  <div className="text-right min-w-[80px]">
                    <span className="font-semibold text-base text-[#173D32] tabular-nums">
                      ₹{item.product.price * item.quantity}
                    </span>
                  </div>

                  {/* Delete */}
                  <button
                    onClick={() => removeItem(item.product.id)}
                    className="p-2 text-[#242A26]/40 hover:text-red-700 transition-colors"
                    aria-label="Remove item"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="pt-4 border-t border-[#242A26]/10 flex justify-between items-center text-xs text-[#242A26]/60">
            <button
              onClick={clearCart}
              className="text-red-800/80 hover:text-red-800 underline transition-colors cursor-pointer"
            >
              Clear Shopping Bag
            </button>
            <span>All prices inclusive of applicable GST</span>
          </div>
        </div>

        {/* Order Summary & Pincode Checker */}
        <div className="lg:col-span-4 space-y-6">
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#242A26]/10 shadow-xs space-y-4">
            <h3 className="font-serif text-xl font-semibold text-[#173D32] border-b border-[#242A26]/10 pb-4">
              Order Summary
            </h3>

            <div className="space-y-2 text-xs text-[#242A26]/80">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span className="font-semibold tabular-nums">₹{subtotal}</span>
              </div>
              <div className="flex justify-between">
                <span>Pan-India Delivery</span>
                <span className="font-semibold tabular-nums">
                  {shippingFee === 0 ? (
                    <span className="text-emerald-700 font-bold">COMPLIMENTARY</span>
                  ) : (
                    `₹${shippingFee}`
                  )}
                </span>
              </div>
              <div className="flex justify-between pt-3 border-t border-[#242A26]/10 text-base font-bold text-[#173D32]">
                <span>Estimated Total</span>
                <span className="tabular-nums">₹{totalAmount}</span>
              </div>
            </div>

            <button
              onClick={() => setCurrentView('checkout')}
              className="w-full py-3.5 bg-[#173D32] hover:bg-[#0F2A22] text-[#F7F4EC] rounded-xl text-xs font-semibold uppercase tracking-wider flex items-center justify-center gap-2 transition-all shadow-md cursor-pointer mt-4"
            >
              <span>Proceed to Checkout</span>
              <ArrowRight className="w-4 h-4 text-[#B79A69]" />
            </button>

            <div className="pt-2 text-[11px] text-[#242A26]/60 space-y-1.5 border-t border-[#242A26]/5">
              <p className="flex items-center gap-1.5 text-emerald-800 font-medium">
                <ShieldCheck className="w-3.5 h-3.5 shrink-0" />
                100% Genuine Batch Assurance Guaranteed
              </p>
              <p>Safe & Encrypted Transactions</p>
            </div>
          </div>

          {/* Delivery Check Widget */}
          <PincodeChecker />
        </div>
      </div>
    </div>
  );
};
