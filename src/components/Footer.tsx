import React from 'react';
import { useCart } from '../context/CartContext';
import { ShieldCheck, PhoneCall, Mail, MapPin, ArrowUpRight } from 'lucide-react';

export const Footer: React.FC = () => {
  const { setCurrentView } = useCart();

  return (
    <footer className="bg-[#173D32] text-[#F7F4EC] border-t border-[#173D32]/20 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Top Editorial Row */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-14 border-b border-[#F7F4EC]/10">
          {/* Brand Column */}
          <div className="md:col-span-5 space-y-4">
            <div>
              <span className="font-serif text-3xl sm:text-4xl tracking-[0.26em] font-black text-[#F7F4EC] uppercase block">
                VAIDHAM
              </span>
              <p className="text-[10px] tracking-[0.34em] uppercase text-[#B79A69] font-mono font-bold mt-1">
                Healing from Root · Est. Gurugram
              </p>
            </div>
            <p className="text-sm text-[#A8B49B] leading-relaxed max-w-md font-light">
              Rooted in authentic classical Ayurvedic wisdom, guided by rigorous scientific standardization, and committed to complete batch-level transparency.
            </p>
            <div className="pt-2 flex items-center gap-2 text-xs text-[#EAE3D6]/90">
              <ShieldCheck className="w-4 h-4 text-[#B79A69] shrink-0" />
              <span>GMP & ISO 9001:2015 Certified Manufacturing Facility</span>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="md:col-span-2 space-y-3">
            <h4 className="text-xs uppercase tracking-widest text-[#B79A69] font-semibold">
              Explore
            </h4>
            <ul className="space-y-2 text-sm text-[#F7F4EC]/80 font-light">
              <li>
                <button
                  onClick={() => setCurrentView('shop')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Shop Formulations
                </button>
              </li>
              <li>
                <button
                  onClick={() => setCurrentView('categories')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Wellness Categories
                </button>
              </li>
              <li>
                <button
                  onClick={() => setCurrentView('authenticity')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Authenticity Check
                </button>
              </li>
              <li>
                <button
                  onClick={() => setCurrentView('library')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Wellness Library
                </button>
              </li>
              <li>
                <button
                  onClick={() => setCurrentView('track-order')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Track Your Order
                </button>
              </li>
            </ul>
          </div>

          {/* Heritage & Standards Column */}
          <div className="md:col-span-2 space-y-3">
            <h4 className="text-xs uppercase tracking-widest text-[#B79A69] font-semibold">
              Company
            </h4>
            <ul className="space-y-2 text-sm text-[#F7F4EC]/80 font-light">
              <li>
                <button
                  onClick={() => setCurrentView('story')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Our Story & Philosophy
                </button>
              </li>
              <li>
                <button
                  onClick={() => setCurrentView('quality')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Quality Standards
                </button>
              </li>
              <li>
                <button
                  onClick={() => setCurrentView('wellness-desk')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Wellness Desk
                </button>
              </li>
              <li>
                <button
                  onClick={() => setCurrentView('faq')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Frequently Asked
                </button>
              </li>
              <li>
                <button
                  onClick={() => setCurrentView('legal')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Policies & Shipping
                </button>
              </li>
            </ul>
          </div>

          {/* Real Contact & Wellness Desk Details */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs uppercase tracking-widest text-[#B79A69] font-semibold">
              Wellness Desk
            </h4>
            <div className="space-y-2 text-xs text-[#A8B49B] leading-relaxed">
              <div className="flex items-start gap-2.5">
                <PhoneCall className="w-3.5 h-3.5 text-[#B79A69] mt-0.5 shrink-0" />
                <div>
                  <a href="tel:+919416367044" className="text-[#F7F4EC] hover:underline font-medium">
                    +91 9416367044
                  </a>
                  <p className="text-[11px] text-[#A8B49B]/80">Mon – Sat, 10 AM – 7 PM IST</p>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <Mail className="w-3.5 h-3.5 text-[#B79A69] shrink-0" />
                <a href="mailto:care@vaidham.com" className="text-[#F7F4EC] hover:underline">
                  care@vaidham.com
                </a>
              </div>

              <div className="flex items-start gap-2.5">
                <MapPin className="w-3.5 h-3.5 text-[#B79A69] mt-0.5 shrink-0" />
                <p className="text-[11px]">
                  No. 100, Village Choma, Phase-III, Gurugram - 122017, Haryana, India.
                </p>
              </div>

              <div className="pt-2">
                <a
                  href="https://wa.me/919416367044"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs text-[#B79A69] hover:text-white transition-colors font-medium"
                >
                  Chat with Consultant on WhatsApp
                  <ArrowUpRight className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Regulatory & Medical Disclaimer */}
        <div className="pt-8 pb-6 border-b border-[#F7F4EC]/10 text-[11px] text-[#A8B49B]/80 leading-relaxed text-justify">
          <p>
            <strong className="text-[#EAE3D6]">Disclaimer:</strong> The statements, formulations, and information provided on this website are for educational and nutritional wellness purposes only and have not been evaluated by drug regulatory authorities to diagnose, treat, mitigate, or cure any disease. Vaidham formulations are Ayurvedic proprietary medicines manufactured in accordance with AYUSH licensing standards and certified GMP/ISO manufacturing protocols. If you are pregnant, lactating, taking prescription medication, or have a chronic medical condition, please seek guidance from a qualified Ayurvedic physician or medical healthcare professional.
          </p>
        </div>

        {/* Bottom Copyright & Legal Links */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#A8B49B]">
          <p>© {new Date().getFullYear()} Vaidham Life Sciences. All rights reserved.</p>
          <div className="flex flex-wrap items-center gap-4 text-[11px]">
            <button onClick={() => setCurrentView('legal')} className="hover:text-white transition-colors">
              Privacy Policy
            </button>
            <span>·</span>
            <button onClick={() => setCurrentView('legal')} className="hover:text-white transition-colors">
              Terms & Conditions
            </button>
            <span>·</span>
            <button onClick={() => setCurrentView('legal')} className="hover:text-white transition-colors">
              Refund & Cancellation
            </button>
            <span>·</span>
            <button onClick={() => setCurrentView('legal')} className="hover:text-white transition-colors">
              Shipping Policy
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
