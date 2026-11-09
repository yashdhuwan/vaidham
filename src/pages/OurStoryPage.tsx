import React from 'react';
import { useCart } from '../context/CartContext';
import { ShieldCheck, Award, HeartHandshake, ArrowRight } from 'lucide-react';

export const OurStoryPage: React.FC = () => {
  const { setCurrentView } = useCart();

  return (
    <div className="max-w-7xl mx-auto px-6 sm:px-8 py-12 space-y-16">
      {/* Hero Header */}
      <div className="border-b border-[#242A26]/10 pb-10 space-y-4 max-w-3xl">
        <span className="text-xs font-semibold uppercase tracking-widest text-[#B79A69]">
          Our Genesis & Philosophy
        </span>
        <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#173D32] leading-tight">
          Healing from Root.
        </h1>
        <p className="text-base sm:text-lg text-[#242A26]/80 font-light leading-relaxed">
          Vaidham was created to restore Ayurveda to its rightful place: as a sophisticated, profound, and deeply scientific tradition of root-cause medicine.
        </p>
      </div>

      {/* Editorial Story Section with Image */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-6 space-y-6 text-sm text-[#242A26]/85 font-light leading-relaxed">
          <h2 className="font-serif text-3xl text-[#173D32] font-semibold">
            The Dilemma of Modern Wellness
          </h2>
          <p>
            For decades, consumers seeking natural solutions were faced with a false compromise: accept industrial pharmaceuticals that suppress symptoms while ignoring systemic roots, or trust commercial herbal brands that hide behind vague proprietary blends, unstandardized powders, and zero batch documentation.
          </p>
          <p>
            Classical Ayurvedic treatises such as the <em>Charaka Samhita</em> and <em>Sushruta Samhita</em> never advocated for guesswork. They laid down meticulous guidelines for harvesting seasons, extraction mediums, purification (Shodhana), and active tissue delivery.
          </p>
          <p>
            Vaidham was born out of a desire to eliminate the guesswork. We pair ancient botanical pharmacopeia with modern liquid chromatography, mass spectrometry, and pharmaceutical cleanroom manufacturing.
          </p>
        </div>

        <div className="lg:col-span-6">
          <div className="aspect-16/10 rounded-2xl overflow-hidden shadow-xl border border-[#242A26]/10">
            <img
              src="/src/assets/images/hero_ayurvedic_apothecary_1794065931319.jpg"
              alt="Ayurvedic botanicals and apothecary extraction"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* The Three Pillars of the Vaidham Creed */}
      <div className="bg-[#EAE3D6] rounded-3xl p-8 lg:p-12 border border-[#242A26]/10 space-y-8">
        <div className="max-w-xl space-y-2">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#B79A69]">
            Our Creed
          </span>
          <h3 className="font-serif text-3xl text-[#173D32]">
            The Three Inviolable Standards
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-xs text-[#242A26]/80 leading-relaxed">
          <div className="space-y-2 bg-white/70 p-6 rounded-2xl border border-[#242A26]/5">
            <h4 className="font-serif text-xl font-semibold text-[#173D32]">
              1. Root-Cause Focus
            </h4>
            <p>
              We reject superficial suppression of discomfort. Our formulations nourish the underlying Dhatus (bodily tissues) and pacify aggravated Doshas at their physiological origin.
            </p>
          </div>

          <div className="space-y-2 bg-white/70 p-6 rounded-2xl border border-[#242A26]/5">
            <h4 className="font-serif text-xl font-semibold text-[#173D32]">
              2. Absolute Transparency
            </h4>
            <p>
              No secret proprietary formulas. Every milligram of standardized extract is listed on our packaging, and every batch has a public NABL laboratory report accessible to every customer.
            </p>
          </div>

          <div className="space-y-2 bg-white/70 p-6 rounded-2xl border border-[#242A26]/5">
            <h4 className="font-serif text-xl font-semibold text-[#173D32]">
              3. Human Stewardship
            </h4>
            <p>
              We maintain a dedicated Wellness Desk with real Ayurvedic professionals ready to guide your dosages, dietary recommendations, and long-term health objectives.
            </p>
          </div>
        </div>
      </div>

      {/* Manufacturing & Gurugram Facility */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center pt-8 border-t border-[#242A26]/10">
        <div className="lg:col-span-6 aspect-16/10 rounded-2xl overflow-hidden shadow-xl border border-[#242A26]/10">
          <img
            src="/src/assets/images/wellness_botanical_laboratory_1794065933054.jpg"
            alt="Vaidham cleanroom laboratory facility"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="lg:col-span-6 space-y-4 text-xs sm:text-sm text-[#242A26]/80 font-light leading-relaxed">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#B79A69]">
            Manufacturing Excellence
          </span>
          <h3 className="font-serif text-3xl text-[#173D32] font-semibold">
            Formulated & Packaged in Gurugram, India
          </h3>
          <p>
            Our facility at No. 100, Village Choma, Phase-III, Gurugram operates under strict Good Manufacturing Practices (GMP) and ISO 9001:2015 quality assurance protocols.
          </p>
          <p>
            From raw root quarantine and moisture control to HEPA-filtered encapsulation and inductive tamper-evident induction sealing, every phase ensures therapeutic potency until the day of consumption.
          </p>

          <div className="pt-4">
            <button
              onClick={() => setCurrentView('quality')}
              className="px-6 py-3 bg-[#173D32] hover:bg-[#0F2A22] text-[#F7F4EC] rounded-lg text-xs font-semibold uppercase tracking-wider transition-colors inline-flex items-center gap-2 cursor-pointer"
            >
              <span>Explore Quality Standards</span>
              <ArrowRight className="w-4 h-4 text-[#B79A69]" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
