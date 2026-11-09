import React, { useState } from 'react';
import { PRODUCTS, Product } from '../data/products';
import { useCart } from '../context/CartContext';
import { PincodeChecker } from '../components/PincodeChecker';
import {
  ShieldCheck,
  CheckCircle2,
  AlertCircle,
  Truck,
  RotateCcw,
  Sparkles,
  Search,
  Plus,
  Minus,
  ChevronDown,
  ArrowRight,
  FlaskConical,
  Award,
} from 'lucide-react';

export const ProductDetailPage: React.FC = () => {
  const { selectedProductId, addItem, setCurrentView, navigateToProduct } = useCart();
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState<'overview' | 'ingredients' | 'usage' | 'batch' | 'faqs'>('overview');

  const product = PRODUCTS.find((p) => p.id === selectedProductId) || PRODUCTS[0];
  const relatedProducts = PRODUCTS.filter((p) => p.id !== product.id);

  const handleBuyNow = () => {
    addItem(product, quantity);
    setCurrentView('checkout');
  };

  return (
    <div className="max-w-7xl mx-auto px-6 sm:px-8 py-10 space-y-16">
      {/* Breadcrumb Navigation */}
      <nav className="text-xs text-[#242A26]/60 flex items-center gap-2">
        <button
          onClick={() => setCurrentView('home')}
          className="hover:text-[#173D32] transition-colors"
        >
          Home
        </button>
        <span>/</span>
        <button
          onClick={() => setCurrentView('shop')}
          className="hover:text-[#173D32] transition-colors"
        >
          Formulations
        </button>
        <span>/</span>
        <span className="text-[#173D32] font-semibold">{product.name}</span>
      </nav>

      {/* Primary 2-Column Product Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        {/* LEFT COLUMN: Gallery & Packaging */}
        <div className="lg:col-span-7 space-y-4 lg:sticky lg:top-24">
          {/* Main Showcase Image */}
          <div className="relative aspect-4/3 overflow-hidden bg-[#EAE3D6] border border-[#173D32]/20 shadow-md">
            <img
              src={product.gallery[selectedImageIndex] || product.image}
              alt={product.name}
              className="w-full h-full object-cover transition-all duration-500"
            />
            <div className="absolute top-4 left-4 bg-[#173D32] text-[#F7F4EC] text-[10px] uppercase font-mono font-bold tracking-widest px-3 py-1">
              {product.category}
            </div>
            <div className="absolute bottom-4 right-4 bg-[#F7F4EC] border border-[#173D32]/20 text-[#173D32] text-xs font-mono font-bold px-3 py-1 shadow-2xs">
              № {product.activeBatch}
            </div>
          </div>

          {/* Thumbnail Gallery */}
          <div className="flex gap-3">
            {product.gallery.map((img, idx) => (
              <button
                key={idx}
                onClick={() => setSelectedImageIndex(idx)}
                className={`relative w-20 h-20 overflow-hidden border-2 transition-all cursor-pointer ${
                  selectedImageIndex === idx
                    ? 'border-[#173D32]'
                    : 'border-transparent opacity-60 hover:opacity-100'
                }`}
              >
                <img
                  src={img}
                  alt={`${product.name} preview ${idx + 1}`}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>

          {/* Botanical Trust Monograph Strip */}
          <div className="border border-[#173D32]/15 bg-white p-4 grid grid-cols-3 gap-2 text-center text-xs font-mono text-[#173D32]">
            <div className="space-y-0.5">
              <span className="font-bold block">100% Vegetarian</span>
              <span className="text-[10px] text-[#1F2420]/60">Pine Wood Pulp</span>
            </div>
            <div className="space-y-0.5 border-x border-[#173D32]/15">
              <span className="font-bold block">HPLC Standardized</span>
              <span className="text-[10px] text-[#1F2420]/60">Verified Phyto-Actives</span>
            </div>
            <div className="space-y-0.5">
              <span className="font-bold block">NABL Screened</span>
              <span className="text-[10px] text-[#1F2420]/60">Zero Heavy Metals</span>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN: Contiguous Purchase Module */}
        <div className="lg:col-span-5 space-y-6">
          <div className="space-y-3 border-b border-[#173D32]/15 pb-6">
            <span className="text-xs font-mono font-semibold uppercase tracking-[0.2em] text-[#B79A69]">
              {product.category}
            </span>
            <h1 className="font-serif text-4xl sm:text-5xl font-black text-[#173D32] leading-tight">
              {product.name}
            </h1>
            <p className="font-serif text-base text-[#B79A69] italic">
              {product.sanskritName}
            </p>
            <p className="text-xs sm:text-sm text-[#1F2420]/80 leading-relaxed font-light pt-1">
              {product.tagline}
            </p>

            {/* Pricing Section */}
            <div className="pt-4 flex items-baseline gap-4">
              <span className="font-serif text-3xl sm:text-4xl font-black text-[#173D32] tabular-nums">
                ₹{product.price}
              </span>
              {product.originalPrice > product.price && (
                <>
                  <span className="text-sm text-[#1F2420]/40 line-through tabular-nums">
                    ₹{product.originalPrice}
                  </span>
                  <span className="text-xs font-bold font-mono text-[#B79A69] uppercase tracking-wide">
                    Save ₹{product.originalPrice - product.price} (Inclusive of Taxes)
                  </span>
                </>
              )}
            </div>

            <div className="flex items-center gap-2 pt-2 text-xs font-mono text-emerald-800 font-bold">
              <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0" />
              <span>In Stock — Dispatched within 24 hours ({product.stockCount} units available)</span>
            </div>
          </div>

          {/* Quick Archival Specifications */}
          <div className="grid grid-cols-2 gap-3 text-xs font-mono">
            <div className="bg-white p-3 border border-[#173D32]/15">
              <span className="text-[#1F2420]/60 block text-[10px] uppercase">Net Quantity</span>
              <span className="font-bold text-[#173D32]">{product.packSize}</span>
            </div>
            <div className="bg-white p-3 border border-[#173D32]/15">
              <span className="text-[#1F2420]/60 block text-[10px] uppercase">Batch Identification</span>
              <span className="font-bold text-[#173D32]">№ {product.activeBatch}</span>
            </div>
          </div>

          {/* Quantity and Purchase Controls */}
          <div className="space-y-4 pt-2">
            <div className="flex items-center gap-4">
              <span className="text-xs font-mono font-bold text-[#173D32] uppercase tracking-wider">
                Quantity:
              </span>
              <div className="flex items-center border border-[#173D32]/30 bg-white">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="p-2 text-[#173D32] hover:bg-[#EAE3D6] transition-colors cursor-pointer"
                  aria-label="Decrease quantity"
                >
                  <Minus className="w-3.5 h-3.5" />
                </button>
                <span className="px-4 text-sm font-bold font-mono tabular-nums text-[#173D32]">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="p-2 text-[#173D32] hover:bg-[#EAE3D6] transition-colors cursor-pointer"
                  aria-label="Increase quantity"
                >
                  <Plus className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <button
                onClick={() => addItem(product, quantity)}
                className="flex-1 py-4 bg-[#173D32] hover:bg-[#0B221B] text-[#F7F4EC] text-xs font-bold uppercase tracking-[0.16em] transition-all cursor-pointer rounded-xs btn-handcrafted text-center"
              >
                Add to Shopping Bag
              </button>
              <button
                onClick={handleBuyNow}
                className="flex-1 py-4 bg-[#B79A69] hover:bg-[#9E8254] text-[#173D32] text-xs font-bold uppercase tracking-[0.16em] transition-all cursor-pointer rounded-xs text-center"
              >
                Instant Checkout
              </button>
            </div>
          </div>

          {/* Pincode & Delivery Serviceability Check */}
          <div className="pt-2">
            <PincodeChecker />
          </div>

          {/* Direct WhatsApp Consultation */}
          <div className="p-4 bg-white rounded-xl border border-[#242A26]/10 flex items-center justify-between">
            <div className="text-xs">
              <span className="font-semibold text-[#173D32] block">
                Dosage & Synergy Question?
              </span>
              <span className="text-[#242A26]/60">
                Ask the Vaidham Wellness Desk on WhatsApp
              </span>
            </div>
            <a
              href={`https://wa.me/919416367044?text=Hello%20Vaidham%20Wellness%20Desk,%20I%20have%20a%20question%20about%20${encodeURIComponent(product.name)}`}
              target="_blank"
              rel="noreferrer"
              className="px-3 py-1.5 bg-[#173D32] text-[#F7F4EC] rounded-lg text-xs font-semibold hover:bg-[#0F2A22] transition-colors"
            >
              Ask +91 9416367044
            </a>
          </div>
        </div>
      </div>

      {/* LOWER DETAILED SPECIFICATIONS SECTION */}
      <div className="pt-12 border-t border-[#242A26]/10 space-y-8">
        {/* Tab Controls */}
        <div className="flex border-b border-[#242A26]/10 gap-2 sm:gap-6 overflow-x-auto no-scrollbar">
          {[
            { id: 'overview', label: 'Overview & Intended Use' },
            { id: 'ingredients', label: 'Botanical Composition' },
            { id: 'usage', label: 'How to Use & Safety' },
            { id: 'batch', label: 'Batch & Lab Documentation' },
            { id: 'faqs', label: 'Frequently Asked' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`py-3 text-xs sm:text-sm font-serif font-medium whitespace-nowrap transition-colors border-b-2 cursor-pointer ${
                activeTab === tab.id
                  ? 'border-[#173D32] text-[#173D32] font-semibold'
                  : 'border-transparent text-[#242A26]/60 hover:text-[#173D32]'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab 1: Overview */}
        {activeTab === 'overview' && (
          <div className="space-y-6 max-w-4xl text-sm leading-relaxed">
            <div>
              <h3 className="font-serif text-2xl font-semibold text-[#173D32] mb-3">
                Classical Formulation Rationale
              </h3>
              <p className="text-[#242A26]/80 font-light leading-relaxed">
                {product.fullOverview}
              </p>
            </div>

            <div className="space-y-3 pt-4">
              <h4 className="font-serif text-lg font-semibold text-[#173D32]">
                Key Intended Wellness Uses
              </h4>
              <ul className="space-y-2">
                {product.intendedUse.map((use, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-xs text-[#242A26]/80">
                    <CheckCircle2 className="w-4 h-4 text-[#B79A69] mt-0.5 shrink-0" />
                    <span>{use}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}

        {/* Tab 2: Ingredients */}
        {activeTab === 'ingredients' && (
          <div className="space-y-6 max-w-4xl">
            <div>
              <h3 className="font-serif text-2xl font-semibold text-[#173D32] mb-2">
                100% Standardized Botanical Actives
              </h3>
              <p className="text-xs text-[#242A26]/70">
                Every capsule provides pharmaceutical-grade standardized extracts without synthetic diluents, starch binders, or animal tallow.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {product.ingredients.map((ing, idx) => (
                <div
                  key={idx}
                  className="bg-white p-5 rounded-xl border border-[#242A26]/10 space-y-2 shadow-2xs"
                >
                  <div className="flex items-baseline justify-between border-b border-[#242A26]/5 pb-2">
                    <div>
                      <h4 className="font-serif font-semibold text-lg text-[#173D32]">
                        {ing.name}
                      </h4>
                      <p className="text-[11px] text-[#B79A69] italic">
                        {ing.botanicalName}
                      </p>
                    </div>
                    <span className="font-mono font-semibold text-xs text-[#173D32] bg-[#EAE3D6] px-2 py-0.5 rounded">
                      {ing.amount}
                    </span>
                  </div>

                  <p className="text-xs text-[#242A26]/75">
                    <strong>Biochemical Role:</strong> {ing.role}
                  </p>
                  <p className="text-[11px] text-[#A8B49B]">
                    <strong>Ayurvedic Principle:</strong> {ing.ayurvedicAction}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tab 3: How to Use & Safety */}
        {activeTab === 'usage' && (
          <div className="space-y-6 max-w-4xl text-xs sm:text-sm">
            <div className="bg-white p-6 rounded-2xl border border-[#242A26]/10 space-y-3">
              <h4 className="font-serif text-xl font-semibold text-[#173D32]">
                Recommended Daily Administration
              </h4>
              <p className="text-[#242A26]/80 leading-relaxed font-light">
                {product.usageInstructions}
              </p>
              <div className="pt-2 text-xs text-[#173D32] font-medium bg-[#EAE3D6]/60 p-3 rounded-lg">
                <strong>Optimal Routine:</strong> {product.dosage}
              </div>
            </div>

            <div className="space-y-3 pt-2">
              <h4 className="font-serif text-lg font-semibold text-[#173D32] flex items-center gap-2">
                <AlertCircle className="w-4 h-4 text-amber-700" />
                <span>Precautions & Safety Guidelines</span>
              </h4>
              <ul className="space-y-2 text-xs text-[#242A26]/80">
                {product.precautions.map((p, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-amber-700 font-bold">·</span>
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}

        {/* Tab 4: Batch & Lab Documentation */}
        {activeTab === 'batch' && (
          <div className="space-y-6 max-w-4xl">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-[#EAE3D6] p-6 rounded-2xl border border-[#242A26]/10">
              <div>
                <span className="text-[10px] uppercase font-mono tracking-wider text-[#B79A69]">
                  Active Production Batch
                </span>
                <h3 className="font-mono text-2xl font-bold text-[#173D32]">
                  {product.batchDetails.batchNumber}
                </h3>
                <p className="text-xs text-[#242A26]/70 mt-1">
                  Mfg: {product.batchDetails.mfgDate} · Expiry: {product.batchDetails.expDate}
                </p>
              </div>

              <button
                onClick={() => setCurrentView('authenticity')}
                className="px-5 py-2.5 bg-[#173D32] hover:bg-[#0F2A22] text-[#F7F4EC] rounded-lg text-xs font-semibold uppercase tracking-wider transition-colors"
              >
                Inspect Full Certificate
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
              <div className="bg-white p-4 rounded-xl border border-[#242A26]/10 space-y-1">
                <span className="text-[#242A26]/60 block text-[11px]">Testing Laboratory</span>
                <span className="font-semibold text-[#173D32]">{product.batchDetails.labName}</span>
              </div>

              <div className="bg-white p-4 rounded-xl border border-[#242A26]/10 space-y-1">
                <span className="text-[#242A26]/60 block text-[11px]">Phyto-Standardization Assay</span>
                <span className="font-semibold text-[#173D32]">{product.batchDetails.activeStandardization}</span>
              </div>

              <div className="bg-white p-4 rounded-xl border border-[#242A26]/10 space-y-1">
                <span className="text-[#242A26]/60 block text-[11px]">Heavy Metal Screening</span>
                <span className="font-semibold text-emerald-800">
                  {product.batchDetails.heavyMetals} (Lead, Arsenic, Mercury & Cadmium below ICP-MS limits)
                </span>
              </div>

              <div className="bg-white p-4 rounded-xl border border-[#242A26]/10 space-y-1">
                <span className="text-[#242A26]/60 block text-[11px]">Microbiological Purity</span>
                <span className="font-semibold text-emerald-800">
                  {product.batchDetails.microbiological} (Pathogen free, zero E.Coli/Salmonella)
                </span>
              </div>
            </div>

            <div className="text-[11px] text-[#242A26]/60 border-t border-[#242A26]/10 pt-3">
              <p>
                <strong>Manufacturer:</strong> Vaidham Life Sciences, No. 100, Village Choma, Phase-III, Gurugram - 122017, Haryana, India.
                Ayush GMP License: AYU-HR-1092-A. GTIN: {product.gtin} · SKU: {product.sku}.
              </p>
            </div>
          </div>
        )}

        {/* Tab 5: FAQs */}
        {activeTab === 'faqs' && (
          <div className="space-y-4 max-w-4xl">
            {product.faqs.map((faq, idx) => (
              <div
                key={idx}
                className="bg-white p-5 rounded-xl border border-[#242A26]/10 space-y-2 shadow-2xs"
              >
                <h4 className="font-serif font-semibold text-lg text-[#173D32]">
                  {faq.question}
                </h4>
                <p className="text-xs sm:text-sm text-[#242A26]/75 font-light leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* RELATED PRODUCTS */}
      {relatedProducts.length > 0 && (
        <div className="pt-16 border-t border-[#242A26]/10 space-y-6">
          <h3 className="font-serif text-2xl font-semibold text-[#173D32]">
            Complementary Ayurvedic Synergies
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {relatedProducts.map((rel) => (
              <div
                key={rel.id}
                onClick={() => navigateToProduct(rel.id)}
                className="bg-white p-6 rounded-2xl border border-[#242A26]/10 flex gap-6 items-center hover:shadow-lg transition-all cursor-pointer group"
              >
                <img
                  src={rel.image}
                  alt={rel.name}
                  className="w-24 h-24 object-cover rounded-xl bg-[#EAE3D6] shrink-0 border border-[#242A26]/5"
                />
                <div className="flex-1 min-w-0">
                  <span className="text-[10px] uppercase font-mono tracking-wider text-[#B79A69]">
                    {rel.category}
                  </span>
                  <h4 className="font-serif text-xl font-semibold text-[#173D32] group-hover:text-[#B79A69] transition-colors">
                    {rel.name}
                  </h4>
                  <p className="text-xs text-[#242A26]/70 truncate">{rel.tagline}</p>
                  <div className="mt-2 flex items-center justify-between">
                    <span className="font-semibold text-sm text-[#173D32] tabular-nums">
                      ₹{rel.price}
                    </span>
                    <span className="text-xs font-semibold text-[#173D32] group-hover:underline flex items-center gap-1">
                      Explore Synergy <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
