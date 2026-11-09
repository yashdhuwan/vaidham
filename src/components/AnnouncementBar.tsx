import React, { useState, useEffect } from 'react';
import { ShieldCheck, Truck, PhoneCall, Sparkles } from 'lucide-react';

const MESSAGES = [
  { icon: Truck, text: 'Complimentary Pan-India Delivery on all orders above ₹999' },
  { icon: ShieldCheck, text: 'GMP & ISO 9001:2015 Certified Manufacturing Facility' },
  { icon: Sparkles, text: '100% Batch-Traceable Formulations · NABL Tested' },
  { icon: PhoneCall, text: 'Vaidham Wellness Desk Assistance: +91 9416367044' },
];

export const AnnouncementBar: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % MESSAGES.length);
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  const current = MESSAGES[currentIndex];
  const Icon = current.icon;

  return (
    <div className="bg-[#173D32] text-[#F7F4EC] text-xs font-medium py-2 px-4 transition-colors">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="hidden lg:flex items-center gap-6 text-[#A8B49B] text-[11px] tracking-wider uppercase">
          <span>Ayurvedic Botanical Integrity</span>
          <span className="text-[#F7F4EC]/30">·</span>
          <span>Zero Synthetic Fillers</span>
        </div>

        <div className="flex-1 flex items-center justify-center">
          <div className="flex items-center gap-2 transition-all duration-500 ease-out">
            <Icon className="w-3.5 h-3.5 text-[#B79A69] shrink-0" />
            <span className="tracking-wide text-center">{current.text}</span>
          </div>
        </div>

        <div className="hidden lg:flex items-center gap-4 text-[11px] text-[#A8B49B]">
          <span className="hover:text-white transition-colors cursor-pointer">
            Authenticity Guarantee
          </span>
          <span className="text-[#F7F4EC]/30">·</span>
          <a
            href="https://wa.me/919416367044"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#B79A69] hover:underline"
          >
            Direct WhatsApp Help
          </a>
        </div>
      </div>
    </div>
  );
};
