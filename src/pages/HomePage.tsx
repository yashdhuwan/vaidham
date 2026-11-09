import React from 'react';
import { useCart } from '../context/CartContext';
import { PRODUCTS } from '../data/products';
import { ARTICLES } from '../data/articles';
import {
  ShieldCheck,
  FlaskConical,
  Award,
  HeartHandshake,
  ArrowRight,
  Sparkles,
  Search,
  CheckCircle2,
  PhoneCall,
  MessageCircle,
  Mail,
  ChevronRight,
  ArrowUpRight,
} from 'lucide-react';

export const HomePage: React.FC = () => {
  const { setCurrentView, navigateToProduct, navigateToArticle, addItem, setIsAiModalOpen } = useCart();

  return (
    <div className="space-y-20 md:space-y-32">
      {/* 1. CINEMATIC HERO — BESPOKE ARCHIVAL BROADSHEET */}
      <section className="relative pt-6 pb-16 lg:py-20 border-b border-[#173D32]/15">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          {/* Handcrafted Archival Kicker */}
          <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-[#173D32]/15 text-[11px] font-mono uppercase tracking-[0.18em] text-[#173D32]/80">
            <div className="flex items-center gap-3">
              <span className="w-2 h-2 bg-[#B79A69]" />
              <span className="font-bold text-[#173D32]">Dispensary Monograph Vol. II</span>
              <span className="text-[#173D32]/30">|</span>
              <span>Ayurvedic Pharmacopeia</span>
            </div>
            <div className="flex items-center gap-4 text-[#B79A69] font-medium">
              <span>Gurugram Cleanrooms</span>
              <span>·</span>
              <span>Batch Verified 2024</span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center pt-10">
            {/* Bold Headline & Proposition */}
            <div className="lg:col-span-7 space-y-6">
              <div className="space-y-2">
                <span className="text-xs font-mono font-semibold uppercase tracking-[0.25em] text-[#B79A69] block">
                  Root-Cause Botanical Formulation
                </span>
                <h1 className="font-serif font-black text-5xl sm:text-7xl lg:text-[5.5rem] text-[#173D32] leading-[0.93] tracking-tight">
                  Healing from the Root.
                </h1>
              </div>

              <p className="text-base sm:text-xl text-[#1F2420]/85 font-light leading-relaxed max-w-2xl font-serif">
                Derived from classical Ayurvedic wisdom, standardized through high-performance liquid chromatography, and formulated without synthetic excipients.
              </p>

              {/* Handcrafted Quote */}
              <div className="border-l-2 border-[#B79A69] pl-4 py-1 text-xs text-[#1F2420]/75 font-mono italic max-w-xl">
                "In classical Ayurveda, true healing is never the suppression of distress—it is the structural re-alignment of tissue (Dhatu) and metabolic flame (Agni)."
              </div>

              {/* Minimalist Action Controls */}
              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <button
                  onClick={() => setCurrentView('shop')}
                  className="px-8 py-4 bg-[#173D32] hover:bg-[#0B221B] text-[#F7F4EC] rounded-xs text-xs font-bold uppercase tracking-[0.16em] transition-all flex items-center justify-center gap-3 cursor-pointer shadow-xs btn-handcrafted"
                >
                  <span>Explore Dispensary</span>
                  <ArrowRight className="w-4 h-4 text-[#B79A69]" />
                </button>

                <button
                  onClick={() => setCurrentView('authenticity')}
                  className="px-8 py-4 bg-transparent hover:bg-[#EAE3D6] text-[#173D32] border border-[#173D32]/30 rounded-xs text-xs font-semibold uppercase tracking-[0.14em] transition-colors text-center cursor-pointer"
                >
                  Verify Batch Code
                </button>
              </div>

              {/* Inked Archival Metrics Table */}
              <div className="pt-8 border-t border-[#173D32]/15 grid grid-cols-3 gap-4 text-xs font-mono">
                <div>
                  <span className="text-[10px] uppercase text-[#B79A69] block font-semibold">Standard</span>
                  <span className="font-bold text-[#173D32]">NABL TC-8192</span>
                </div>
                <div>
                  <span className="text-[10px] uppercase text-[#B79A69] block font-semibold">Capsule Shell</span>
                  <span className="font-bold text-[#173D32]">100% Pine Cellulose</span>
                </div>
                <div>
                  <span className="text-[10px] uppercase text-[#B79A69] block font-semibold">Fillers</span>
                  <span className="font-bold text-[#173D32]">0.0% Synthetic</span>
                </div>
              </div>
            </div>

            {/* Right Still-Life Presentation */}
            <div className="lg:col-span-5 relative">
              <div className="relative border border-[#173D32]/20 bg-[#EAE3D6] p-2 sm:p-3 shadow-xl">
                <div className="relative aspect-4/5 overflow-hidden bg-[#173D32]">
                  <img
                    src="/src/assets/images/hero_ayurvedic_apothecary_1794065931319.jpg"
                    alt="Vaidham luxury botanical apothecary formulation still life"
                    className="w-full h-full object-cover transition-transform duration-700 ease-out hover:scale-102"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />

                  {/* Archival Physical Plaque */}
                  <div className="absolute bottom-4 left-4 right-4 bg-[#F7F4EC]/95 backdrop-blur-xs p-4 border border-[#173D32]/20 text-xs">
                    <div className="flex items-center justify-between border-b border-[#173D32]/10 pb-1.5 mb-1.5">
                      <span className="font-serif font-bold text-[#173D32] text-sm">
                        Authentic Phyto-Assays
                      </span>
                      <span className="font-mono text-[10px] text-[#B79A69] font-bold">
                        № AR-2024-08
                      </span>
                    </div>
                    <p className="text-[11px] text-[#1F2420]/75 font-light leading-snug">
                      Each batch is independently screened by NABL-accredited analytical laboratories prior to release.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. THE FOUR PILLARS — HANDCRAFTED ARCHIVAL MANIFEST */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="border border-[#173D32]/15 divide-y md:divide-y-0 md:divide-x divide-[#173D32]/15 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 bg-white/60">
          <div className="p-8 space-y-3">
            <span className="font-mono text-xs text-[#B79A69] font-bold block">
              [ PILLAR 01 ]
            </span>
            <h3 className="font-serif text-xl font-bold text-[#173D32]">
              Batch Traceability
            </h3>
            <p className="text-xs text-[#1F2420]/75 leading-relaxed font-light">
              Every package is stamped with a unique batch identifier linking to genuine HPLC assays and harvest records.
            </p>
          </div>

          <div className="p-8 space-y-3">
            <span className="font-mono text-xs text-[#B79A69] font-bold block">
              [ PILLAR 02 ]
            </span>
            <h3 className="font-serif text-xl font-bold text-[#173D32]">
              ICP-MS Heavy Metal Screen
            </h3>
            <p className="text-xs text-[#1F2420]/75 leading-relaxed font-light">
              Lead, Arsenic, Mercury, and Cadmium are screened below detectable pharmacopeia thresholds.
            </p>
          </div>

          <div className="p-8 space-y-3">
            <span className="font-mono text-xs text-[#B79A69] font-bold block">
              [ PILLAR 03 ]
            </span>
            <h3 className="font-serif text-xl font-bold text-[#173D32]">
              Ayush GMP Cleanrooms
            </h3>
            <p className="text-xs text-[#1F2420]/75 leading-relaxed font-light">
              Formulated and encapsulated under ISO 9001:2015 and Ayush GMP licensing standards in Gurugram, India.
            </p>
          </div>

          <div className="p-8 space-y-3">
            <span className="font-mono text-xs text-[#B79A69] font-bold block">
              [ PILLAR 04 ]
            </span>
            <h3 className="font-serif text-xl font-bold text-[#173D32]">
              Practitioner Desk
            </h3>
            <p className="text-xs text-[#1F2420]/75 leading-relaxed font-light">
              Direct consultation with trained Ayurvedic wellness professionals via telephone and WhatsApp (+91 9416367044).
            </p>
          </div>
        </div>
      </section>

      {/* 3. BOTANICAL CATEGORIES — THE THREE DOSHA TRACTS */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8 space-y-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-[#173D32]/15 pb-4">
          <div>
            <span className="text-xs font-mono font-semibold uppercase tracking-[0.2em] text-[#B79A69]">
              Classical Systematic Index
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl font-bold text-[#173D32] mt-1">
              Find Your Path to Wellness.
            </h2>
          </div>
          <button
            onClick={() => setCurrentView('categories')}
            className="text-xs font-bold uppercase tracking-[0.14em] text-[#173D32] hover:text-[#B79A69] transition-colors flex items-center gap-1.5 cursor-pointer"
          >
            <span>View Compendium</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Tract 1: Vata / Joint Care */}
          <div
            onClick={() => navigateToProduct('arthreliv')}
            className="group bg-white p-8 border border-[#173D32]/20 hover:border-[#173D32] transition-all cursor-pointer flex flex-col justify-between shadow-2xs hover:shadow-md"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between text-[11px] font-mono text-[#B79A69] border-b border-[#173D32]/10 pb-2">
                <span>TRACT I · VATA DOSHA</span>
                <span>ASTHI & MAJJA</span>
              </div>
              <h3 className="font-serif text-2xl font-bold text-[#173D32] group-hover:text-[#B79A69] transition-colors">
                Joint & Muscle Care
              </h3>
              <p className="text-xs text-[#1F2420]/75 leading-relaxed font-light">
                Targeted cartilage lubrication, synovial comfort, and anti-inflammatory support powered by high-potency Boswellia (65%) and Curcuminoids (95%).
              </p>
              <div className="pt-2 text-[11px] font-mono text-[#173D32]">
                Key Phyto-Actives: Boswellic Acids, Curcumin, Hadjod
              </div>
            </div>
            <div className="mt-8 pt-4 border-t border-[#173D32]/10 flex items-center justify-between text-xs font-bold text-[#173D32] uppercase tracking-wider">
              <span>Inspect ArthReliv</span>
              <ArrowRight className="w-4 h-4 text-[#B79A69] group-hover:translate-x-1 transition-transform" />
            </div>
          </div>

          {/* Tract 2: Pitta / Liver Care */}
          <div
            onClick={() => navigateToProduct('livodham')}
            className="group bg-white p-8 border border-[#173D32]/20 hover:border-[#173D32] transition-all cursor-pointer flex flex-col justify-between shadow-2xs hover:shadow-md"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between text-[11px] font-mono text-[#B79A69] border-b border-[#173D32]/10 pb-2">
                <span>TRACT II · PITTA DOSHA</span>
                <span>YAKRIT & RAKTA</span>
              </div>
              <h3 className="font-serif text-2xl font-bold text-[#173D32] group-hover:text-[#B79A69] transition-colors">
                Liver & Metabolic Care
              </h3>
              <p className="text-xs text-[#1F2420]/75 leading-relaxed font-light">
                Hepatoprotective botanical bitters formulated to stimulate natural bile flow, enzyme equilibrium, and gentle cellular cleansing.
              </p>
              <div className="pt-2 text-[11px] font-mono text-[#173D32]">
                Key Phyto-Actives: Phyllanthin, Kutkin, Punarnava
              </div>
            </div>
            <div className="mt-8 pt-4 border-t border-[#173D32]/10 flex items-center justify-between text-xs font-bold text-[#173D32] uppercase tracking-wider">
              <span>Inspect LIVODHAM</span>
              <ArrowRight className="w-4 h-4 text-[#B79A69] group-hover:translate-x-1 transition-transform" />
            </div>
          </div>

          {/* Tract 3: Kapha / Weight & Metabolism */}
          <div
            onClick={() => setCurrentView('categories')}
            className="group bg-[#EAE3D6]/50 p-8 border border-dashed border-[#173D32]/20 transition-all cursor-pointer flex flex-col justify-between"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between text-[11px] font-mono text-[#B79A69] border-b border-[#173D32]/10 pb-2">
                <span>TRACT III · KAPHA DOSHA</span>
                <span>MEDOHAR & AGNI</span>
              </div>
              <h3 className="font-serif text-2xl font-bold text-[#173D32]">
                Weight & Metabolism
              </h3>
              <p className="text-xs text-[#1F2420]/75 leading-relaxed font-light">
                Classical Medohar formulations currently completing third-party laboratory assay and clinical documentation.
              </p>
              <div className="pt-2 text-[11px] font-mono text-[#B79A69]">
                Status: In Clinical Phyto-Assay Validation
              </div>
            </div>
            <div className="mt-8 pt-4 border-t border-[#173D32]/10 flex items-center justify-between text-xs font-bold text-[#B79A69] uppercase tracking-wider">
              <span>Pre-Register for Batch</span>
              <ArrowRight className="w-4 h-4" />
            </div>
          </div>
        </div>
      </section>

      {/* 4. THE APOTHECARY CATALOGUE (FEATURED FORMULATIONS) */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8 space-y-12">
        <div className="max-w-2xl space-y-3">
          <span className="text-xs font-mono font-semibold uppercase tracking-[0.2em] text-[#B79A69]">
            Archival Dispensary
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-[#173D32]">
            Thoughtfully Formulated. Carefully Selected.
          </h2>
          <p className="text-sm text-[#1F2420]/75 font-light leading-relaxed">
            Standardized botanical extracts bottled in amber glass and certified non-GMO vegetarian plant cellulose capsules.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {PRODUCTS.map((product) => (
            <div
              key={product.id}
              className="bg-white border border-[#173D32]/20 p-8 sm:p-10 flex flex-col justify-between space-y-8 shadow-xs hover:border-[#173D32] transition-all group"
            >
              <div>
                {/* Physical Product Frame */}
                <div
                  onClick={() => navigateToProduct(product.id)}
                  className="relative aspect-4/3 overflow-hidden bg-[#EAE3D6] border border-[#173D32]/10 mb-6 cursor-pointer"
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute top-4 left-4 bg-[#173D32] text-[#F7F4EC] text-[10px] font-mono font-semibold uppercase tracking-widest px-3 py-1">
                    {product.category}
                  </div>
                  <div className="absolute top-4 right-4 bg-[#F7F4EC] text-[#173D32] border border-[#173D32]/20 text-[10px] font-mono font-bold px-2.5 py-1">
                    № {product.activeBatch}
                  </div>
                </div>

                {/* Product Metadata */}
                <div className="space-y-3">
                  <div className="flex items-baseline justify-between border-b border-[#173D32]/10 pb-3">
                    <div>
                      <h3
                        onClick={() => navigateToProduct(product.id)}
                        className="font-serif text-3xl sm:text-4xl font-bold text-[#173D32] hover:text-[#B79A69] transition-colors cursor-pointer"
                      >
                        {product.name}
                      </h3>
                      <p className="text-xs text-[#B79A69] font-serif italic mt-0.5">
                        {product.sanskritName}
                      </p>
                    </div>

                    <div className="text-right">
                      <span className="font-serif text-2xl sm:text-3xl font-black text-[#173D32] tabular-nums block">
                        ₹{product.price}
                      </span>
                      {product.originalPrice > product.price && (
                        <span className="text-xs text-[#1F2420]/40 line-through tabular-nums block">
                          MRP: ₹{product.originalPrice}
                        </span>
                      )}
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-[#1F2420]/80 font-light leading-relaxed pt-1">
                    {product.shortDescription}
                  </p>

                  {/* Archival Specification Monograph Table */}
                  <div className="mt-4 border border-[#173D32]/10 bg-[#F7F4EC] p-3 text-[11px] font-mono space-y-1">
                    <div className="flex justify-between text-[#173D32]">
                      <span className="text-[#173D32]/60">Net Weight / Count:</span>
                      <span className="font-bold">{product.packSize}</span>
                    </div>
                    <div className="flex justify-between text-[#173D32]">
                      <span className="text-[#173D32]/60">Standardization:</span>
                      <span className="font-bold">{product.batchDetails.activeStandardization}</span>
                    </div>
                    <div className="flex justify-between text-[#173D32]">
                      <span className="text-[#173D32]/60">Laboratory Status:</span>
                      <span className="font-bold text-emerald-800">100% NABL Passed</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 border-t border-[#173D32]/15 flex items-center gap-3">
                <button
                  onClick={() => addItem(product, 1)}
                  className="flex-1 py-3.5 bg-[#173D32] hover:bg-[#0B221B] text-[#F7F4EC] text-xs font-bold uppercase tracking-[0.16em] transition-all cursor-pointer rounded-xs btn-handcrafted text-center"
                >
                  Add to Shopping Bag
                </button>
                <button
                  onClick={() => navigateToProduct(product.id)}
                  className="px-6 py-3.5 border border-[#173D32]/30 hover:bg-[#EAE3D6] text-[#173D32] text-xs font-bold uppercase tracking-[0.14em] transition-colors cursor-pointer rounded-xs"
                >
                  Inspect Monograph
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. THE VAIDHAM PHILOSOPHY — EDITORIAL BROADSHEET */}
      <section className="bg-[#173D32] text-[#F7F4EC] py-20 lg:py-24 border-y border-[#B79A69]/30">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs font-mono font-semibold uppercase tracking-[0.25em] text-[#B79A69]">
                Ancient Wisdom · Modern Transparency
              </span>
              <h2 className="font-serif text-3xl sm:text-5xl font-bold leading-tight">
                Ancient Wisdom. A More Thoughtful Approach to Modern Wellness.
              </h2>
              <div className="space-y-4 text-xs sm:text-sm text-[#F7F4EC]/85 font-light leading-relaxed">
                <p>
                  Vaidham was founded on a singular conviction: classical Ayurveda does not need reinventing, but it demands radical scientific honesty. For generations, traditional herbal knowledge was compromised by commercial shortcuts, undisclosed binders, and opaque supply chains.
                </p>
                <p>
                  We believe that authentic wellness is only possible when every ingredient is known, standardized, and verifiable. We combine ancient plant synergies with contemporary pharmacognosy to nourish your body at its foundational root.
                </p>
              </div>

              <div className="pt-4 flex flex-wrap items-center gap-4">
                <button
                  onClick={() => setCurrentView('story')}
                  className="px-8 py-3.5 bg-[#B79A69] hover:bg-[#9E8254] text-[#173D32] text-xs font-bold uppercase tracking-[0.16em] transition-colors cursor-pointer rounded-xs"
                >
                  Read Our Full Story
                </button>
                <button
                  onClick={() => setCurrentView('quality')}
                  className="px-8 py-3.5 border border-[#F7F4EC]/30 hover:bg-white/10 text-[#F7F4EC] text-xs font-bold uppercase tracking-[0.14em] transition-colors cursor-pointer rounded-xs"
                >
                  Quality Standards
                </button>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="border border-[#F7F4EC]/20 p-2 sm:p-3 bg-[#0B221B]">
                <div className="aspect-16/10 overflow-hidden relative">
                  <img
                    src="/src/assets/images/wellness_botanical_laboratory_1794065933054.jpg"
                    alt="Vaidham Botanical Research Laboratory"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
                  <div className="absolute bottom-4 left-4 right-4 bg-[#173D32]/90 backdrop-blur-xs p-3 border border-[#B79A69]/30 text-xs font-mono">
                    <span className="text-[#B79A69] font-bold block mb-0.5">
                      Vaidham Cleanroom Unit № 100
                    </span>
                    Gurugram, Haryana · Ayush GMP Certified Facility
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. THE TRACEABILITY EXPERIENCE (VERIFY YOUR PRODUCT) */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="border-2 border-[#173D32] bg-[#EAE3D6] p-8 sm:p-12 lg:p-16 relative">
          <div className="max-w-3xl space-y-6">
            <span className="text-xs font-mono font-semibold uppercase tracking-[0.25em] text-[#B79A69]">
              Radical Verification Protocol
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl font-black text-[#173D32] leading-tight">
              Don't Just Trust. Verify.
            </h2>
            <p className="text-sm sm:text-base text-[#1F2420]/85 font-light leading-relaxed">
              Every Vaidham bottle carries an authenticated batch identification number. Enter your batch code to instantly inspect independent NABL laboratory assay certificates, heavy metal safety screenings, and manufacturing dates.
            </p>

            <div className="pt-2 flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => setCurrentView('authenticity')}
                className="px-8 py-4 bg-[#173D32] hover:bg-[#0B221B] text-[#F7F4EC] rounded-xs text-xs font-bold uppercase tracking-[0.16em] flex items-center justify-center gap-2 transition-all cursor-pointer shadow-xs btn-handcrafted"
              >
                <Search className="w-4 h-4 text-[#B79A69]" />
                <span>Verify Your Product Batch</span>
              </button>

              <button
                onClick={() => setIsAiModalOpen(true)}
                className="px-8 py-4 bg-white hover:bg-[#F7F4EC] text-[#173D32] border border-[#173D32]/30 rounded-xs text-xs font-bold uppercase tracking-[0.14em] flex items-center justify-center gap-2 transition-colors cursor-pointer"
              >
                <Sparkles className="w-4 h-4 text-[#B79A69]" />
                <span>Ask Vaidham AI</span>
              </button>
            </div>

            <div className="pt-4 flex flex-wrap items-center gap-4 text-xs font-mono text-[#173D32]/80">
              <span className="font-bold text-[#B79A69]">Inspect Active Production Batches:</span>
              <button
                onClick={() => setCurrentView('authenticity')}
                className="underline font-bold text-[#173D32] hover:text-[#B79A69] cursor-pointer"
              >
                № AR-2024-08 (ArthReliv)
              </button>
              <span>·</span>
              <button
                onClick={() => setCurrentView('authenticity')}
                className="underline font-bold text-[#173D32] hover:text-[#B79A69] cursor-pointer"
              >
                № LV-2024-09 (LIVODHAM)
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 7. WELLNESS DESK SECTION */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5 space-y-4">
            <span className="text-xs font-mono font-semibold uppercase tracking-[0.2em] text-[#B79A69]">
              Personalized Guidance
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#173D32]">
              Personal Guidance. A More Confident Wellness Journey.
            </h2>
            <p className="text-xs sm:text-sm text-[#1F2420]/75 font-light leading-relaxed">
              Have specific questions regarding dosages, contraindications, or which herbal synergy aligns with your biological constitution? The Vaidham Wellness Desk is manned by trained Ayurvedic practitioners.
            </p>

            <div className="pt-4 space-y-3 text-xs text-[#173D32]">
              <div className="border border-[#173D32]/15 bg-white p-4 flex items-center justify-between">
                <div>
                  <span className="text-[10px] uppercase font-mono text-[#B79A69] block font-semibold">
                    Direct Telephone
                  </span>
                  <a href="tel:+919416367044" className="font-serif text-lg font-bold text-[#173D32] hover:underline">
                    +91 9416367044
                  </a>
                </div>
                <PhoneCall className="w-4 h-4 text-[#B79A69]" />
              </div>

              <div className="border border-[#173D32]/15 bg-white p-4 flex items-center justify-between">
                <div>
                  <span className="text-[10px] uppercase font-mono text-[#B79A69] block font-semibold">
                    WhatsApp Chat Desk
                  </span>
                  <a
                    href="https://wa.me/919416367044"
                    target="_blank"
                    rel="noreferrer"
                    className="font-serif text-lg font-bold text-[#173D32] hover:underline"
                  >
                    Chat on WhatsApp
                  </a>
                </div>
                <MessageCircle className="w-4 h-4 text-[#B79A69]" />
              </div>

              <div className="border border-[#173D32]/15 bg-white p-4 flex items-center justify-between">
                <div>
                  <span className="text-[10px] uppercase font-mono text-[#B79A69] block font-semibold">
                    Email Inquiries
                  </span>
                  <a href="mailto:care@vaidham.com" className="font-serif text-lg font-bold text-[#173D32] hover:underline">
                    care@vaidham.com
                  </a>
                </div>
                <Mail className="w-4 h-4 text-[#B79A69]" />
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 bg-white p-8 sm:p-10 border border-[#173D32]/20 shadow-xs space-y-6">
            <div>
              <span className="text-xs font-mono font-semibold uppercase tracking-[0.2em] text-[#B79A69]">
                Consultation Request
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#173D32] mt-1">
                Request a Callback from the Wellness Desk
              </h3>
              <p className="text-xs text-[#1F2420]/75 mt-1 font-light">
                Consult with our formulation scientists regarding your personal wellness regimen.
              </p>
            </div>
            <button
              onClick={() => setCurrentView('wellness-desk')}
              className="w-full py-4 bg-[#173D32] hover:bg-[#0B221B] text-[#F7F4EC] rounded-xs text-xs font-bold uppercase tracking-[0.16em] transition-all flex items-center justify-center gap-3 cursor-pointer btn-handcrafted"
            >
              <span>Open Wellness Desk Form</span>
              <ArrowRight className="w-4 h-4 text-[#B79A69]" />
            </button>
          </div>
        </div>
      </section>

      {/* 8. WELLNESS LIBRARY — BROADSHEET JOURNAL */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8 space-y-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-[#173D32]/15 pb-4">
          <div>
            <span className="text-xs font-mono font-semibold uppercase tracking-[0.2em] text-[#B79A69]">
              Editorial Pharmacopeia
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl font-bold text-[#173D32] mt-1">
              Explore the Wisdom of Ayurveda.
            </h2>
          </div>
          <button
            onClick={() => setCurrentView('library')}
            className="text-xs font-bold uppercase tracking-[0.14em] text-[#173D32] hover:text-[#B79A69] transition-colors flex items-center gap-1.5 cursor-pointer"
          >
            <span>View All Treatises</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {ARTICLES.map((article, idx) => (
            <article
              key={article.id}
              onClick={() => navigateToArticle(article.id)}
              className="group cursor-pointer space-y-4 bg-white p-6 border border-[#173D32]/15 hover:border-[#173D32] transition-all"
            >
              <div className="aspect-16/10 overflow-hidden bg-[#EAE3D6] border border-[#173D32]/10">
                <img
                  src={article.coverImage}
                  alt={article.title}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-103"
                />
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between text-[11px] font-mono text-[#B79A69]">
                  <span>{`[ TREATISE 0${idx + 1} ]`}</span>
                  <span>{article.readTime}</span>
                </div>
                <h3 className="font-serif text-xl font-bold text-[#173D32] group-hover:text-[#B79A69] transition-colors leading-snug">
                  {article.title}
                </h3>
                <p className="text-xs text-[#1F2420]/70 line-clamp-3 leading-relaxed font-light">
                  {article.excerpt}
                </p>
                <div className="pt-2 text-xs font-bold uppercase tracking-wider text-[#173D32] group-hover:underline flex items-center gap-1">
                  <span>Read Treatise</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#B79A69]" />
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* 9. CLOSING SECTION */}
      <section className="bg-[#EAE3D6] py-20 text-center border-t border-[#173D32]/15">
        <div className="max-w-3xl mx-auto px-6 space-y-6">
          <span className="text-xs font-mono font-semibold uppercase tracking-[0.25em] text-[#B79A69]">
            The Botanical Baseline
          </span>
          <h2 className="font-serif text-4xl sm:text-6xl font-black text-[#173D32] leading-tight">
            Come Back to Your Roots.
          </h2>
          <p className="text-sm sm:text-base text-[#1F2420]/80 font-light leading-relaxed font-serif">
            Discover a more thoughtful approach to everyday wellness with Vaidham. Transparent formulations, classical synergy, and zero compromise.
          </p>
          <div className="pt-2 flex flex-col sm:flex-row justify-center gap-4">
            <button
              onClick={() => setCurrentView('shop')}
              className="px-8 py-4 bg-[#173D32] hover:bg-[#0B221B] text-[#F7F4EC] rounded-xs text-xs font-bold uppercase tracking-[0.16em] transition-all cursor-pointer shadow-xs btn-handcrafted"
            >
              Explore Dispensary
            </button>
            <button
              onClick={() => setCurrentView('authenticity')}
              className="px-8 py-4 bg-white hover:bg-[#F7F4EC] text-[#173D32] border border-[#173D32]/30 rounded-xs text-xs font-bold uppercase tracking-[0.14em] transition-colors cursor-pointer"
            >
              Verify Your Batch
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
