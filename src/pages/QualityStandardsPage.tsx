import React from 'react';
import { useCart } from '../context/CartContext';
import { ShieldCheck, Award, FlaskConical, CheckCircle2, ArrowRight } from 'lucide-react';

export const QualityStandardsPage: React.FC = () => {
  const { setCurrentView } = useCart();

  const tiers = [
    {
      step: '01',
      title: 'Raw Botanical Authentication',
      desc: 'All raw roots, barks, and leaves undergo macroscopic and microscopic botanical identity testing, moisture level verification, and loss-on-drying evaluation before being admitted to our cleanrooms.',
    },
    {
      step: '02',
      title: 'High-Performance Phyto-Assays',
      desc: 'Standardized via HPLC and HPTLC testing to verify minimum guaranteed potency of active compounds—such as 65% Boswellic acids in Shallaki, 95% Curcuminoids in Haridra, and 3% Phyllanthin in Bhumi Amla.',
    },
    {
      step: '03',
      title: 'Heavy Metal ICP-MS Screening',
      desc: 'Every single batch is tested by independent NABL-accredited analytical laboratories for heavy metals (Lead, Arsenic, Mercury, Cadmium) with thresholds far stricter than permissible WHO/AYUSH limits.',
    },
    {
      step: '04',
      title: 'Microbiological & Pathogen Safety',
      desc: 'Finished capsules are evaluated for Total Plate Count, Yeast and Mould, and complete absence of pathogenic microorganisms like E. Coli and Salmonella.',
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 sm:px-8 py-12 space-y-16">
      <div className="border-b border-[#242A26]/10 pb-10 space-y-3 max-w-3xl">
        <span className="text-xs font-semibold uppercase tracking-widest text-[#B79A69]">
          Transparency & Assurance
        </span>
        <h1 className="font-serif text-4xl sm:text-5xl text-[#173D32]">
          Our Quality Standards
        </h1>
        <p className="text-sm sm:text-base text-[#242A26]/80 font-light leading-relaxed">
          At Vaidham, purity is not an advertising phrase—it is an empirical science. Discover how our four-tier verification protocol ensures every bottle meets global standards of safety and clinical potency.
        </p>
      </div>

      {/* Certifications Banner */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-2xl border border-[#242A26]/10 space-y-2 shadow-2xs">
          <div className="w-10 h-10 rounded-lg bg-[#EAE3D6] text-[#173D32] flex items-center justify-center">
            <Award className="w-5 h-5 text-[#B79A69]" />
          </div>
          <h3 className="font-serif text-xl font-semibold text-[#173D32]">
            Ayush GMP Certified
          </h3>
          <p className="text-xs text-[#242A26]/70 leading-relaxed">
            Good Manufacturing Practices certified facility adhering to strict environmental, hygiene, and documentation parameters.
          </p>
        </div>

        <div className="bg-white p-6 rounded-2xl border border-[#242A26]/10 space-y-2 shadow-2xs">
          <div className="w-10 h-10 rounded-lg bg-[#EAE3D6] text-[#173D32] flex items-center justify-center">
            <ShieldCheck className="w-5 h-5 text-[#B79A69]" />
          </div>
          <h3 className="font-serif text-xl font-semibold text-[#173D32]">
            ISO 9001:2015 Quality
          </h3>
          <p className="text-xs text-[#242A26]/70 leading-relaxed">
            International Organization for Standardization compliance ensuring consistent batch-to-batch quality management.
          </p>
        </div>

        <div className="bg-white p-6 rounded-2xl border border-[#242A26]/10 space-y-2 shadow-2xs">
          <div className="w-10 h-10 rounded-lg bg-[#EAE3D6] text-[#173D32] flex items-center justify-center">
            <FlaskConical className="w-5 h-5 text-[#B79A69]" />
          </div>
          <h3 className="font-serif text-xl font-semibold text-[#173D32]">
            NABL Lab Testing
          </h3>
          <p className="text-xs text-[#242A26]/70 leading-relaxed">
            Independent third-party analytical laboratories (Accreditation #TC-8192) test each batch before release into the dispensary.
          </p>
        </div>
      </div>

      {/* The 4-Tier Analytical Protocol */}
      <div className="space-y-8">
        <div className="border-b border-[#242A26]/10 pb-4">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#B79A69]">
            Methodology
          </span>
          <h2 className="font-serif text-3xl text-[#173D32] font-semibold mt-1">
            The 4-Tier Analytical Verification Protocol
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {tiers.map((tier) => (
            <div
              key={tier.step}
              className="bg-white p-8 rounded-2xl border border-[#242A26]/10 space-y-3 relative overflow-hidden group hover:border-[#173D32]/40 transition-all"
            >
              <span className="font-serif text-4xl text-[#B79A69]/30 font-bold block">
                {tier.step}
              </span>
              <h3 className="font-serif text-2xl font-semibold text-[#173D32]">
                {tier.title}
              </h3>
              <p className="text-xs text-[#242A26]/80 leading-relaxed font-light">
                {tier.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA to Authenticity Check */}
      <div className="bg-[#173D32] text-[#F7F4EC] rounded-3xl p-8 sm:p-12 flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="space-y-2">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#B79A69]">
            Verify For Yourself
          </span>
          <h3 className="font-serif text-2xl sm:text-3xl font-semibold">
            Inspect the Lab Certificate for Your Batch
          </h3>
          <p className="text-xs text-[#A8B49B] max-w-xl font-light">
            Every product bottle is stamped with an identification batch number. Search your code to review actual heavy metal and assay readings.
          </p>
        </div>

        <button
          onClick={() => setCurrentView('authenticity')}
          className="px-8 py-3.5 bg-[#B79A69] hover:bg-[#A88B5A] text-[#173D32] rounded-xl text-xs font-bold uppercase tracking-wider transition-colors shrink-0 flex items-center gap-2 cursor-pointer"
        >
          <span>Batch Verification Tool</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
