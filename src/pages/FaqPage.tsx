import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Sparkles, PhoneCall } from 'lucide-react';
import { useCart } from '../context/CartContext';

interface FAQItem {
  category: string;
  question: string;
  answer: string;
}

const FAQS: FAQItem[] = [
  {
    category: 'Formulations & Ayurveda',
    question: 'How do Vaidham formulations differ from standard marketplace Ayurvedic products?',
    answer:
      'Unlike commercial products that rely on crude, unstandardized powdered leaves or undisclosed "proprietary blends", Vaidham utilizes exclusively standardized extracts with verified biomarker potencies (e.g. 65% Boswellic acids in ArthReliv, 95% Curcuminoids, and standardized Kutkin in LIVODHAM). Furthermore, we manufacture in Ayush GMP & ISO cleanrooms without synthetic binders or animal gelatins.',
  },
  {
    category: 'Formulations & Ayurveda',
    question: 'Are Vaidham capsules 100% vegetarian?',
    answer:
      'Yes. We use only high-purity Hydroxypropyl Methylcellulose (HPMC) plant-cellulose capsules derived from pine pulp, certified vegetarian, non-GMO, and free from animal bone gelatin.',
  },
  {
    category: 'Quality & Traceability',
    question: 'How does the Batch Verification tool work?',
    answer:
      'Every single bottle carton is printed with a batch identification code (such as AR-2024-08 or LV-2024-09). Entering this code into our Authenticity Check portal instantly pulls the exact independent NABL-accredited laboratory certificate showing heavy metal readings, active phytochemical assays, and microbiological clearance.',
  },
  {
    category: 'Quality & Traceability',
    question: 'What heavy metal testing standards does Vaidham uphold?',
    answer:
      'We test every batch using Inductively Coupled Plasma Mass Spectrometry (ICP-MS) for Lead, Arsenic, Mercury, and Cadmium. Our release thresholds are strictly compliant with the highest pharmacopeia benchmarks.',
  },
  {
    category: 'Orders & Pan-India Shipping',
    question: 'What is the estimated delivery timeframe across India?',
    answer:
      'Orders within Delhi NCR and Gurugram are typically delivered within 24 to 48 hours. Metro cities (Mumbai, Bengaluru, Kolkata, Chennai, Hyderabad, Pune, Ahmedabad) receive shipments in 2 to 3 business days. All other Indian postal codes are serviced within 3 to 5 business days.',
  },
  {
    category: 'Orders & Pan-India Shipping',
    question: 'Is Cash on Delivery (COD) supported?',
    answer:
      'Yes, Cash on Delivery is supported across serviceable PIN codes in India. You can choose COD during checkout or use instant UPI upon parcel arrival.',
  },
  {
    category: 'Safety & Precautions',
    question: 'Can I take Vaidham formulations if I am on prescription medications?',
    answer:
      'While our products are 100% herbal and free from synthetic chemicals, botanicals can have mild interactions with pharmaceuticals (for example, blood thinners or immunosuppressants). We strongly advise consulting your treating physician or speaking with our Wellness Desk (+91 9416367044) prior to beginning any new regimen.',
  },
];

export const FaqPage: React.FC = () => {
  const { setIsAiModalOpen, setCurrentView } = useCart();
  const [openIdx, setOpenIdx] = useState<number | null>(0);
  const [selectedCat, setSelectedCat] = useState('All');

  const categories = ['All', 'Formulations & Ayurveda', 'Quality & Traceability', 'Orders & Pan-India Shipping', 'Safety & Precautions'];

  const filtered = selectedCat === 'All' ? FAQS : FAQS.filter((f) => f.category === selectedCat);

  return (
    <div className="max-w-4xl mx-auto px-6 sm:px-8 py-12 space-y-12">
      <div className="border-b border-[#242A26]/10 pb-8 space-y-3">
        <span className="text-xs font-semibold uppercase tracking-widest text-[#B79A69]">
          Common Inquiries
        </span>
        <h1 className="font-serif text-4xl sm:text-5xl text-[#173D32]">
          Frequently Asked Questions
        </h1>
        <p className="text-sm sm:text-base text-[#242A26]/80 font-light leading-relaxed">
          Clear, honest answers regarding our formulations, batch verification protocols, and clinical standards.
        </p>
      </div>

      {/* Category Filter */}
      <div className="flex items-center gap-1 p-1 bg-[#EAE3D6] rounded-xl overflow-x-auto no-scrollbar w-fit">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => {
              setSelectedCat(cat);
              setOpenIdx(null);
            }}
            className={`px-3 py-1.5 text-xs font-medium rounded-lg whitespace-nowrap transition-all cursor-pointer ${
              selectedCat === cat
                ? 'bg-white text-[#173D32] shadow-xs font-semibold'
                : 'text-[#242A26]/70 hover:text-[#173D32]'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Accordion List */}
      <div className="space-y-4">
        {filtered.map((item, idx) => {
          const isOpen = openIdx === idx;
          return (
            <div
              key={idx}
              className="bg-white rounded-2xl border border-[#242A26]/10 overflow-hidden shadow-2xs transition-all"
            >
              <button
                onClick={() => setOpenIdx(isOpen ? null : idx)}
                className="w-full p-6 text-left flex items-center justify-between gap-4 cursor-pointer hover:bg-[#F7F4EC]/50 transition-colors"
              >
                <div className="space-y-1">
                  <span className="text-[10px] uppercase font-mono tracking-wider text-[#B79A69]">
                    {item.category}
                  </span>
                  <h3 className="font-serif text-lg font-semibold text-[#173D32]">
                    {item.question}
                  </h3>
                </div>
                {isOpen ? (
                  <ChevronUp className="w-5 h-5 text-[#173D32] shrink-0" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-[#242A26]/40 shrink-0" />
                )}
              </button>

              {isOpen && (
                <div className="px-6 pb-6 pt-1 text-xs sm:text-sm text-[#242A26]/80 font-light leading-relaxed border-t border-[#242A26]/5 animate-in fade-in">
                  {item.answer}
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Consultation Callout */}
      <div className="bg-[#EAE3D6] p-8 rounded-3xl border border-[#242A26]/10 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="space-y-1 text-xs">
          <span className="font-semibold text-[#173D32] text-sm block font-serif">
            Have a question not listed here?
          </span>
          <p className="text-[#242A26]/70">
            Our Ayurvedic advisors are available on WhatsApp or through our direct line: +91 9416367044.
          </p>
        </div>

        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={() => setIsAiModalOpen(true)}
            className="px-5 py-2.5 bg-white text-[#173D32] border border-[#242A26]/20 rounded-xl text-xs font-semibold hover:bg-[#F7F4EC] transition-colors cursor-pointer flex items-center gap-1.5"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#B79A69]" />
            <span>Ask Vaidham AI</span>
          </button>
          <button
            onClick={() => setCurrentView('wellness-desk')}
            className="px-5 py-2.5 bg-[#173D32] text-[#F7F4EC] rounded-xl text-xs font-semibold hover:bg-[#0F2A22] transition-colors cursor-pointer"
          >
            Wellness Desk
          </button>
        </div>
      </div>
    </div>
  );
};
