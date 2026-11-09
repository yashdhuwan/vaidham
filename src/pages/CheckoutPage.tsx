import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { ShieldCheck, CheckCircle2, CreditCard, Smartphone, Banknote, ArrowRight, Truck, Lock, ArrowLeft } from 'lucide-react';

export const CheckoutPage: React.FC = () => {
  const { items, subtotal, shippingFee, totalAmount, clearCart, setCurrentView } = useCart();

  // Form State
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('Haryana');
  const [pincode, setPincode] = useState('122017');
  const [paymentMethod, setPaymentMethod] = useState<'upi' | 'card' | 'cod'>('upi');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [completedOrder, setCompletedOrder] = useState<any | null>(null);

  if (items.length === 0 && !completedOrder) {
    return (
      <div className="max-w-xl mx-auto px-6 py-20 text-center space-y-4">
        <h2 className="font-serif text-3xl text-[#173D32]">Your Shopping Bag is Empty</h2>
        <p className="text-xs text-[#242A26]/70">Add formulations before proceeding to checkout.</p>
        <button
          onClick={() => setCurrentView('shop')}
          className="px-6 py-2.5 bg-[#173D32] text-[#F7F4EC] rounded-lg text-xs font-semibold uppercase tracking-wider"
        >
          Explore Formulations
        </button>
      </div>
    );
  }

  // ORDER CONFIRMED STATE
  if (completedOrder) {
    return (
      <div className="max-w-3xl mx-auto px-6 py-16 space-y-8 animate-in fade-in">
        <div className="bg-white rounded-3xl p-8 sm:p-12 border-2 border-emerald-700/30 shadow-md text-center space-y-6">
          <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center mx-auto">
            <CheckCircle2 className="w-10 h-10 text-emerald-700" />
          </div>

          <div className="space-y-2">
            <span className="text-[11px] font-mono uppercase tracking-widest text-emerald-800 font-bold block">
              Order Confirmed & Authenticated
            </span>
            <h1 className="font-serif text-3xl sm:text-4xl font-semibold text-[#173D32]">
              Thank You for Trusting Vaidham
            </h1>
            <p className="text-xs sm:text-sm text-[#242A26]/75 max-w-lg mx-auto font-light leading-relaxed">
              Your order reference is <strong className="font-mono text-[#173D32]">{completedOrder.orderId}</strong>. A confirmation summary has been logged for delivery to <strong>{completedOrder.address}</strong>.
            </p>
          </div>

          <div className="bg-[#F7F4EC] p-6 rounded-2xl border border-[#242A26]/10 text-left text-xs space-y-3 max-w-md mx-auto">
            <div className="flex justify-between border-b border-[#242A26]/5 pb-2">
              <span className="text-[#242A26]/60">Order Reference</span>
              <span className="font-mono font-bold text-[#173D32]">{completedOrder.orderId}</span>
            </div>
            <div className="flex justify-between border-b border-[#242A26]/5 pb-2">
              <span className="text-[#242A26]/60">Payment Method</span>
              <span className="font-semibold text-[#173D32] uppercase">{completedOrder.paymentMethod}</span>
            </div>
            <div className="flex justify-between border-b border-[#242A26]/5 pb-2">
              <span className="text-[#242A26]/60">Estimated Dispatch</span>
              <span className="font-semibold text-emerald-800">Within 24 Hours (Gurugram Facility)</span>
            </div>
            <div className="flex justify-between text-sm font-bold text-[#173D32] pt-1">
              <span>Total Paid</span>
              <span className="tabular-nums">₹{completedOrder.totalAmount}</span>
            </div>
          </div>

          <div className="pt-4 flex flex-col sm:flex-row justify-center gap-3">
            <button
              onClick={() => setCurrentView('track-order')}
              className="px-6 py-3 bg-[#173D32] text-[#F7F4EC] rounded-xl text-xs font-semibold uppercase tracking-wider hover:bg-[#0F2A22] transition-colors cursor-pointer"
            >
              Track Your Order Status
            </button>
            <button
              onClick={() => setCurrentView('shop')}
              className="px-6 py-3 border border-[#173D32]/30 text-[#173D32] rounded-xl text-xs font-semibold uppercase tracking-wider hover:bg-[#EAE3D6] transition-colors cursor-pointer"
            >
              Return to Store
            </button>
          </div>

          <div className="pt-4 border-t border-[#242A26]/10 text-[11px] text-[#242A26]/60">
            For modifications or urgent assistance, please contact the Vaidham Wellness Desk: <strong>+91 9416367044</strong> or <strong>care@vaidham.com</strong>.
          </div>
        </div>
      </div>
    );
  }

  const handlePlaceOrder = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName || !phone || !address || !pincode) {
      alert('Please complete all mandatory delivery fields.');
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      const newOrder = {
        orderId: `VDH-ORD-${Math.floor(10000 + Math.random() * 90000)}`,
        items: [...items],
        totalAmount,
        customerName: fullName,
        phone,
        address: `${address}, ${city}, ${state} - ${pincode}`,
        paymentMethod,
        date: new Date().toLocaleDateString(),
      };

      try {
        const history = JSON.parse(localStorage.getItem('vaidham_orders') || '[]');
        history.unshift(newOrder);
        localStorage.setItem('vaidham_orders', JSON.stringify(history));
      } catch (err) {
        console.warn('Could not store order locally', err);
      }

      setCompletedOrder(newOrder);
      clearCart();
      setIsSubmitting(false);
    }, 1200);
  };

  return (
    <div className="max-w-7xl mx-auto px-6 sm:px-8 py-12 space-y-12">
      {/* Header */}
      <div className="border-b border-[#242A26]/10 pb-6 flex items-center justify-between">
        <div>
          <span className="text-xs font-semibold uppercase tracking-widest text-[#B79A69]">
            Secure Checkout
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl text-[#173D32]">
            Finalize Your Order
          </h1>
        </div>
        <button
          onClick={() => setCurrentView('cart')}
          className="text-xs font-semibold text-[#173D32] hover:text-[#B79A69] transition-colors flex items-center gap-1 cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Shopping Bag</span>
        </button>
      </div>

      <form onSubmit={handlePlaceOrder} className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* LEFT COLUMN: Shipping & Payment Form */}
        <div className="lg:col-span-7 space-y-8">
          {/* Step 1: Contact Information */}
          <div className="bg-white p-6 sm:p-8 rounded-3xl border border-[#242A26]/10 shadow-xs space-y-4">
            <div className="flex items-center gap-2 border-b border-[#242A26]/10 pb-3">
              <span className="w-6 h-6 rounded-full bg-[#173D32] text-[#F7F4EC] text-xs font-bold flex items-center justify-center">
                1
              </span>
              <h3 className="font-serif text-xl font-semibold text-[#173D32]">
                Contact Information
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
              <div>
                <label className="block text-[#173D32] font-semibold mb-1">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  placeholder="e.g. Yash Dhuwan"
                  className="w-full bg-[#F7F4EC] border border-[#242A26]/15 rounded-xl px-4 py-2.5 text-xs text-[#242A26] focus:outline-hidden focus:border-[#173D32]"
                />
              </div>

              <div>
                <label className="block text-[#173D32] font-semibold mb-1">
                  Mobile Number (for Order SMS & Tracking) *
                </label>
                <input
                  type="tel"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="e.g. 9416367044"
                  className="w-full bg-[#F7F4EC] border border-[#242A26]/15 rounded-xl px-4 py-2.5 text-xs text-[#242A26] focus:outline-hidden focus:border-[#173D32]"
                />
              </div>

              <div className="sm:col-span-2">
                <label className="block text-[#173D32] font-semibold mb-1">
                  Email Address (for Digital Tax Invoice & COA)
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="e.g. care@vaidham.com"
                  className="w-full bg-[#F7F4EC] border border-[#242A26]/15 rounded-xl px-4 py-2.5 text-xs text-[#242A26] focus:outline-hidden focus:border-[#173D32]"
                />
              </div>
            </div>
          </div>

          {/* Step 2: Shipping Destination */}
          <div className="bg-white p-6 sm:p-8 rounded-3xl border border-[#242A26]/10 shadow-xs space-y-4">
            <div className="flex items-center gap-2 border-b border-[#242A26]/10 pb-3">
              <span className="w-6 h-6 rounded-full bg-[#173D32] text-[#F7F4EC] text-xs font-bold flex items-center justify-center">
                2
              </span>
              <h3 className="font-serif text-xl font-semibold text-[#173D32]">
                Shipping Address
              </h3>
            </div>

            <div className="space-y-4 text-xs">
              <div>
                <label className="block text-[#173D32] font-semibold mb-1">
                  Street Address & House / Apartment *
                </label>
                <input
                  type="text"
                  required
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  placeholder="e.g. Plot No. 100, Village Choma, Phase-III"
                  className="w-full bg-[#F7F4EC] border border-[#242A26]/15 rounded-xl px-4 py-2.5 text-xs text-[#242A26] focus:outline-hidden focus:border-[#173D32]"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="block text-[#173D32] font-semibold mb-1">
                    City *
                  </label>
                  <input
                    type="text"
                    required
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    placeholder="e.g. Gurugram"
                    className="w-full bg-[#F7F4EC] border border-[#242A26]/15 rounded-xl px-4 py-2.5 text-xs text-[#242A26] focus:outline-hidden focus:border-[#173D32]"
                  />
                </div>

                <div>
                  <label className="block text-[#173D32] font-semibold mb-1">
                    State *
                  </label>
                  <input
                    type="text"
                    required
                    value={state}
                    onChange={(e) => setState(e.target.value)}
                    placeholder="e.g. Haryana"
                    className="w-full bg-[#F7F4EC] border border-[#242A26]/15 rounded-xl px-4 py-2.5 text-xs text-[#242A26] focus:outline-hidden focus:border-[#173D32]"
                  />
                </div>

                <div>
                  <label className="block text-[#173D32] font-semibold mb-1">
                    PIN Code *
                  </label>
                  <input
                    type="text"
                    maxLength={6}
                    required
                    value={pincode}
                    onChange={(e) => setPincode(e.target.value.replace(/\D/g, ''))}
                    placeholder="e.g. 122017"
                    className="w-full bg-[#F7F4EC] border border-[#242A26]/15 rounded-xl px-4 py-2.5 text-xs font-mono text-[#242A26] focus:outline-hidden focus:border-[#173D32]"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Step 3: Payment Options (Cashfree / UPI / Cards / COD) */}
          <div className="bg-white p-6 sm:p-8 rounded-3xl border border-[#242A26]/10 shadow-xs space-y-4">
            <div className="flex items-center gap-2 border-b border-[#242A26]/10 pb-3">
              <span className="w-6 h-6 rounded-full bg-[#173D32] text-[#F7F4EC] text-xs font-bold flex items-center justify-center">
                3
              </span>
              <h3 className="font-serif text-xl font-semibold text-[#173D32]">
                Payment Method
              </h3>
            </div>

            <div className="space-y-3">
              {/* Option: UPI */}
              <label
                className={`flex items-start gap-3 p-4 rounded-2xl border cursor-pointer transition-all ${
                  paymentMethod === 'upi'
                    ? 'border-[#173D32] bg-[#EAE3D6]/40'
                    : 'border-[#242A26]/10 hover:border-[#173D32]/30'
                }`}
              >
                <input
                  type="radio"
                  name="payment"
                  checked={paymentMethod === 'upi'}
                  onChange={() => setPaymentMethod('upi')}
                  className="mt-1 accent-[#173D32]"
                />
                <div className="space-y-0.5 text-xs">
                  <div className="flex items-center gap-2">
                    <Smartphone className="w-4 h-4 text-[#B79A69]" />
                    <span className="font-semibold text-[#173D32]">Instant UPI Payment</span>
                    <span className="text-[10px] bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded font-mono">
                      Fastest
                    </span>
                  </div>
                  <p className="text-[#242A26]/70">
                    Google Pay, PhonePe, Paytm, CRED or any BHIM UPI application.
                  </p>
                </div>
              </label>

              {/* Option: Cards & Netbanking via Cashfree */}
              <label
                className={`flex items-start gap-3 p-4 rounded-2xl border cursor-pointer transition-all ${
                  paymentMethod === 'card'
                    ? 'border-[#173D32] bg-[#EAE3D6]/40'
                    : 'border-[#242A26]/10 hover:border-[#173D32]/30'
                }`}
              >
                <input
                  type="radio"
                  name="payment"
                  checked={paymentMethod === 'card'}
                  onChange={() => setPaymentMethod('card')}
                  className="mt-1 accent-[#173D32]"
                />
                <div className="space-y-0.5 text-xs">
                  <div className="flex items-center gap-2">
                    <CreditCard className="w-4 h-4 text-[#B79A69]" />
                    <span className="font-semibold text-[#173D32]">
                      Cashfree Secure Gateway (Credit/Debit Cards & Net Banking)
                    </span>
                  </div>
                  <p className="text-[#242A26]/70">
                    Visa, MasterCard, RuPay, and all major Indian commercial banks.
                  </p>
                </div>
              </label>

              {/* Option: Cash on Delivery (COD) */}
              <label
                className={`flex items-start gap-3 p-4 rounded-2xl border cursor-pointer transition-all ${
                  paymentMethod === 'cod'
                    ? 'border-[#173D32] bg-[#EAE3D6]/40'
                    : 'border-[#242A26]/10 hover:border-[#173D32]/30'
                }`}
              >
                <input
                  type="radio"
                  name="payment"
                  checked={paymentMethod === 'cod'}
                  onChange={() => setPaymentMethod('cod')}
                  className="mt-1 accent-[#173D32]"
                />
                <div className="space-y-0.5 text-xs">
                  <div className="flex items-center gap-2">
                    <Banknote className="w-4 h-4 text-[#B79A69]" />
                    <span className="font-semibold text-[#173D32]">Cash on Delivery (COD)</span>
                  </div>
                  <p className="text-[#242A26]/70">
                    Pay securely in cash or via delivery agent UPI upon doorstep receipt.
                  </p>
                </div>
              </label>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN: Order Summary & Confirmation CTA */}
        <div className="lg:col-span-5 space-y-6">
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#242A26]/10 shadow-xs space-y-4">
            <h3 className="font-serif text-xl font-semibold text-[#173D32] border-b border-[#242A26]/10 pb-4">
              Your Order Breakdown
            </h3>

            {/* Itemized Mini List */}
            <div className="space-y-3 max-h-60 overflow-y-auto divide-y divide-[#242A26]/5">
              {items.map((item) => (
                <div key={item.product.id} className="pt-3 first:pt-0 flex items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <img
                      src={item.product.image}
                      alt={item.product.name}
                      className="w-12 h-12 object-cover rounded-lg bg-[#EAE3D6]"
                    />
                    <div className="text-xs">
                      <span className="font-serif font-semibold text-[#173D32] block">
                        {item.product.name}
                      </span>
                      <span className="text-[#242A26]/60">Qty: {item.quantity}</span>
                    </div>
                  </div>
                  <span className="font-semibold text-xs text-[#173D32] tabular-nums">
                    ₹{item.product.price * item.quantity}
                  </span>
                </div>
              ))}
            </div>

            {/* Calculations */}
            <div className="pt-4 border-t border-[#242A26]/10 space-y-2 text-xs text-[#242A26]/80">
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
              <div className="flex justify-between pt-3 border-t border-[#242A26]/10 text-lg font-bold text-[#173D32]">
                <span>Total Amount</span>
                <span className="tabular-nums">₹{totalAmount}</span>
              </div>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-4 bg-[#173D32] hover:bg-[#0F2A22] text-[#F7F4EC] rounded-xl text-xs font-semibold uppercase tracking-wider flex items-center justify-center gap-2 transition-all shadow-md cursor-pointer disabled:opacity-50 mt-4"
            >
              <Lock className="w-4 h-4 text-[#B79A69]" />
              <span>{isSubmitting ? 'Authenticating Order...' : `Place Order (₹${totalAmount})`}</span>
            </button>

            <div className="pt-2 text-[11px] text-[#242A26]/60 space-y-1.5 border-t border-[#242A26]/5 text-center">
              <p className="flex items-center justify-center gap-1.5 text-emerald-800 font-medium">
                <ShieldCheck className="w-3.5 h-3.5" />
                Verified Batch Documentation Included with Every Dispatch
              </p>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};
