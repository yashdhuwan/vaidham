import React, { useState } from 'react';
import { ShieldCheck, FileText, RefreshCw, Truck } from 'lucide-react';

export const LegalPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'shipping' | 'refund' | 'privacy' | 'terms'>('shipping');

  return (
    <div className="max-w-4xl mx-auto px-6 sm:px-8 py-12 space-y-12">
      <div className="border-b border-[#242A26]/10 pb-8 space-y-3">
        <span className="text-xs font-semibold uppercase tracking-widest text-[#B79A69]">
          Regulatory & Compliance
        </span>
        <h1 className="font-serif text-4xl sm:text-5xl text-[#173D32]">
          Policies & Transparency
        </h1>
        <p className="text-sm sm:text-base text-[#242A26]/80 font-light leading-relaxed">
          Official statutory disclosures, dispatch timelines, refund protocols, and data protection policies for Vaidham Life Sciences.
        </p>
      </div>

      {/* Tabs */}
      <div className="flex border-b border-[#242A26]/10 gap-2 sm:gap-6 overflow-x-auto no-scrollbar">
        {[
          { id: 'shipping', label: 'Shipping & Delivery Policy' },
          { id: 'refund', label: 'Refund & Return Policy' },
          { id: 'privacy', label: 'Privacy Policy' },
          { id: 'terms', label: 'Terms & Conditions' },
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

      {/* Content */}
      <div className="bg-white rounded-3xl p-8 sm:p-10 border border-[#242A26]/10 shadow-2xs space-y-8 text-xs sm:text-sm text-[#242A26]/85 font-light leading-relaxed">
        {activeTab === 'shipping' && (
          <div className="space-y-6">
            <h2 className="font-serif text-2xl font-semibold text-[#173D32]">
              Pan-India Shipping & Delivery Policy
            </h2>
            <div className="space-y-4">
              <p>
                <strong>1. Dispatch Timeline:</strong> All verified orders placed before 2:00 PM IST on working days (Monday through Saturday) are prepared in our certified cleanroom facility in Gurugram, Haryana, and dispatched within 24 hours.
              </p>
              <p>
                <strong>2. Delivery Threshold:</strong> Orders with a merchandise subtotal of ₹999 or greater receive <strong>Complimentary Standard Shipping</strong> across all serviceable pin codes in India. For orders below ₹999, a nominal logistics fee of ₹99 applies.
              </p>
              <p>
                <strong>3. Estimated Transit Times:</strong>
              </p>
              <ul className="list-disc list-inside space-y-1 pl-2">
                <li>Delhi NCR & Gurugram: 1 to 2 business days.</li>
                <li>Metro Centers (Mumbai, Bengaluru, Kolkata, Chennai, Hyderabad, Pune, Ahmedabad): 2 to 3 business days.</li>
                <li>Rest of India: 3 to 5 business days.</li>
              </ul>
              <p>
                <strong>4. Courier Partners:</strong> We partner exclusively with tier-1 logistics carriers including BlueDart, Delhivery, and Xpressbees to guarantee tamper-evident delivery.
              </p>
            </div>
          </div>
        )}

        {activeTab === 'refund' && (
          <div className="space-y-6">
            <h2 className="font-serif text-2xl font-semibold text-[#173D32]">
              Cancellation & 7-Day Return Policy
            </h2>
            <div className="space-y-4">
              <p>
                <strong>1. Damaged or Tampered Shipments:</strong> If your carton arrives with broken outer security tape or visible container damage, please photograph the package and notify our Wellness Desk (+91 9416367044 / care@vaidham.com) within 48 hours of delivery. A replacement will be expedited immediately at no cost.
              </p>
              <p>
                <strong>2. Unopened Products:</strong> Unopened bottles in their original shrink-wrapped packaging may be returned within 7 days of delivery for a full refund minus actual reverse logistics handling.
              </p>
              <p>
                <strong>3. Refund Processing:</strong> Approved refunds are credited directly back to the original payment source (UPI, Credit/Debit Card, or Bank Account) within 5 to 7 business days following inspection at our Gurugram warehouse.
              </p>
            </div>
          </div>
        )}

        {activeTab === 'privacy' && (
          <div className="space-y-6">
            <h2 className="font-serif text-2xl font-semibold text-[#173D32]">
              Data Privacy & Healthcare Discretion
            </h2>
            <div className="space-y-4">
              <p>
                <strong>1. Data Minimization:</strong> Vaidham Life Sciences collects only the information required to process and ship your herbal orders, issue regulatory tax invoices, and provide consultation callbacks requested through our Wellness Desk.
              </p>
              <p>
                <strong>2. Zero Sale of Patron Information:</strong> We do not sell, rent, or lease customer telephone numbers, addresses, or health consultation notes to third-party telemarketers or ad brokers.
              </p>
              <p>
                <strong>3. Secure Transmission:</strong> All transactions are transmitted through 256-bit TLS encryption in compliance with RBI e-commerce standards.
              </p>
            </div>
          </div>
        )}

        {activeTab === 'terms' && (
          <div className="space-y-6">
            <h2 className="font-serif text-2xl font-semibold text-[#173D32]">
              Terms of Use & Statutory Disclaimers
            </h2>
            <div className="space-y-4">
              <p>
                <strong>1. Statutory Ayurveda Disclaimer:</strong> Vaidham formulations (including ArthReliv and LIVODHAM) are classical Ayurvedic proprietary medicines manufactured under Ayush License AYU-HR-1092-A. They are designed to support systemic tissue nourishment and Dosha balance. Statements made on this website have not been evaluated to diagnose, cure, treat, or prevent any specific disease.
              </p>
              <p>
                <strong>2. Medical Supervision:</strong> Dietary supplements should not replace medical advice prescribed by a physician. If you are pregnant, nursing, taking chronic prescription drugs, or have diagnosed organ pathology, always consult your physician before use.
              </p>
              <p>
                <strong>3. Registered Office:</strong> Vaidham Life Sciences, No. 100, Village Choma, Phase-III, Gurugram - 122017, Haryana, India.
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
