import React from 'react';
import { useCart } from '../context/CartContext';
import { ArrowRight, Sparkles, CheckCircle2 } from 'lucide-react';

export const CategoriesPage: React.FC = () => {
  const { navigateToProduct, setIsAiModalOpen } = useCart();

  return (
    <div className="max-w-7xl mx-auto px-6 sm:px-8 py-12 space-y-12">
      <div className="border-b border-[#242A26]/10 pb-8 space-y-3">
        <span className="text-xs font-semibold uppercase tracking-widest text-[#B79A69]">
          Holistic Categorization
        </span>
        <h1 className="font-serif text-4xl sm:text-5xl text-[#173D32]">
          Wellness Categories
        </h1>
        <p className="text-sm text-[#242A26]/70 max-w-2xl font-light leading-relaxed">
          In Ayurveda, health is the balanced coordination of the biological doshas, metabolic fire (Agni), and tissue nourishment (Dhatus). Explore our targeted formulation pathways.
        </p>
      </div>

      <div className="space-y-8">
        {/* Category 1: Joint & Muscle Care */}
        <div className="bg-white rounded-3xl p-8 lg:p-10 border border-[#242A26]/10 shadow-xs grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-4 aspect-4/3 rounded-2xl overflow-hidden bg-[#EAE3D6]">
            <img
              src="/src/assets/images/product_arthreliv_luxury_1794065932156.jpg"
              alt="Joint and Muscle Care - ArthReliv"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="lg:col-span-8 space-y-4">
            <div className="flex items-center gap-2 text-xs font-mono text-[#B79A69] uppercase tracking-wider">
              <span>Primary Dosha: Vata</span>
              <span>·</span>
              <span>Target: Asthi & Majja Dhatus</span>
            </div>
            <h2 className="font-serif text-3xl text-[#173D32] font-semibold">
              Joint & Muscle Care
            </h2>
            <p className="text-sm text-[#242A26]/80 font-light leading-relaxed">
              Vata dosha governs movement throughout the human physiology. When Vata becomes aggravated due to dry weather, stress, or age, the unctuous synovial fluid within articular joints begins to dry out, resulting in stiffness, friction, and cartilage degradation.
            </p>
            <div className="flex flex-wrap gap-2 text-xs text-[#173D32] pt-1">
              <span className="bg-[#EAE3D6] px-3 py-1 rounded-md">Shallaki (Boswellia 65%)</span>
              <span className="bg-[#EAE3D6] px-3 py-1 rounded-md">Curcumin 95%</span>
              <span className="bg-[#EAE3D6] px-3 py-1 rounded-md">Hadjod</span>
              <span className="bg-[#EAE3D6] px-3 py-1 rounded-md">Ashwagandha</span>
            </div>
            <div className="pt-4 flex items-center gap-4">
              <button
                onClick={() => navigateToProduct('arthreliv')}
                className="px-6 py-3 bg-[#173D32] hover:bg-[#0F2A22] text-[#F7F4EC] rounded-lg text-xs font-semibold uppercase tracking-wider transition-colors flex items-center gap-2 cursor-pointer"
              >
                <span>View ArthReliv (90 Capsules)</span>
                <ArrowRight className="w-4 h-4 text-[#B79A69]" />
              </button>
            </div>
          </div>
        </div>

        {/* Category 2: Liver Care */}
        <div className="bg-white rounded-3xl p-8 lg:p-10 border border-[#242A26]/10 shadow-xs grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-4 aspect-4/3 rounded-2xl overflow-hidden bg-[#EAE3D6]">
            <img
              src="/src/assets/images/product_livodham_luxury_1794065933873.jpg"
              alt="Liver Care - LIVODHAM"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="lg:col-span-8 space-y-4">
            <div className="flex items-center gap-2 text-xs font-mono text-[#B79A69] uppercase tracking-wider">
              <span>Primary Dosha: Pitta</span>
              <span>·</span>
              <span>Target: Yakrit & Rakta Dhatu</span>
            </div>
            <h2 className="font-serif text-3xl text-[#173D32] font-semibold">
              Liver & Metabolic Care
            </h2>
            <p className="text-sm text-[#242A26]/80 font-light leading-relaxed">
              The liver (Yakrit) is the seat of biological fire and metabolic transmutation. Modern environmental chemicals, refined fats, and stress produce toxic metabolic residue (Ama) that burden hepatocytes. Classical bitter herbs restore bile drainage and cellular vitality.
            </p>
            <div className="flex flex-wrap gap-2 text-xs text-[#173D32] pt-1">
              <span className="bg-[#EAE3D6] px-3 py-1 rounded-md">Bhumi Amla</span>
              <span className="bg-[#EAE3D6] px-3 py-1 rounded-md">Himalayan Kutki</span>
              <span className="bg-[#EAE3D6] px-3 py-1 rounded-md">Punarnava</span>
              <span className="bg-[#EAE3D6] px-3 py-1 rounded-md">Kalmegh</span>
            </div>
            <div className="pt-4 flex items-center gap-4">
              <button
                onClick={() => navigateToProduct('livodham')}
                className="px-6 py-3 bg-[#173D32] hover:bg-[#0F2A22] text-[#F7F4EC] rounded-lg text-xs font-semibold uppercase tracking-wider transition-colors flex items-center gap-2 cursor-pointer"
              >
                <span>View LIVODHAM (60 Capsules)</span>
                <ArrowRight className="w-4 h-4 text-[#B79A69]" />
              </button>
            </div>
          </div>
        </div>

        {/* Category 3: Weight & Metabolism (Honest in-progress state) */}
        <div className="bg-[#EAE3D6]/50 rounded-3xl p-8 lg:p-10 border border-dashed border-[#242A26]/20 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-4 aspect-4/3 rounded-2xl overflow-hidden bg-[#D8CEBC]/50 flex items-center justify-center p-6 text-center">
            <div className="space-y-2">
              <Sparkles className="w-8 h-8 text-[#B79A69] mx-auto" />
              <p className="font-serif text-lg text-[#173D32] font-medium">In Clinical Testing</p>
              <p className="text-[11px] text-[#242A26]/60">NABL Phyto-Assay Validation</p>
            </div>
          </div>
          <div className="lg:col-span-8 space-y-3">
            <div className="text-xs font-mono text-[#A8B49B] uppercase tracking-wider">
              Dosha Focus: Kapha / Agni Deepana
            </div>
            <h2 className="font-serif text-2xl text-[#173D32] font-semibold">
              Weight & Metabolism (Medohar Formulation)
            </h2>
            <p className="text-sm text-[#242A26]/70 font-light leading-relaxed">
              In accordance with Vaidham’s transparency code, we never release a product until its active standardized marker assays and stability parameters have been fully confirmed by independent NABL laboratories.
            </p>
            <div className="pt-2">
              <button
                onClick={() => setIsAiModalOpen(true)}
                className="px-5 py-2.5 bg-white border border-[#242A26]/20 text-[#173D32] rounded-lg text-xs font-semibold hover:bg-[#F7F4EC] transition-colors flex items-center gap-2 cursor-pointer"
              >
                <Sparkles className="w-4 h-4 text-[#B79A69]" />
                <span>Ask Vaidham AI About Metabolic Balancing</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
