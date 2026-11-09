import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export const FloatingWhatsApp: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 24, scale: 0.92 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{
        duration: 0.7,
        delay: 0.8,
        ease: [0.16, 1, 0.3, 1],
      }}
      className="fixed bottom-6 right-6 z-40 flex items-center gap-3 pointer-events-auto"
    >
      {/* Tooltip on hover/open */}
      <AnimatePresence>
        {showTooltip && (
          <motion.div
            initial={{ opacity: 0, x: 14, scale: 0.96 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 14, scale: 0.96 }}
            transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
            className="bg-[#173D32] text-[#F7F4EC] p-3 rounded-xl shadow-xl border border-[#B79A69]/30 text-xs max-w-xs"
          >
            <div className="flex items-center justify-between pb-1 border-b border-white/10 mb-1.5">
              <span className="font-semibold text-[#B79A69]">Vaidham Wellness Desk</span>
              <button
                onClick={() => setShowTooltip(false)}
                className="text-white/60 hover:text-white transition-colors cursor-pointer"
                aria-label="Close tooltip"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            </div>
            <p className="text-[#A8B49B] text-[11px] leading-relaxed">
              Need guidance choosing between ArthReliv or LIVODHAM? Connect directly with our Ayurvedic team on WhatsApp.
            </p>
            <a
              href="https://wa.me/919416367044?text=Hello%20Vaidham%20Wellness%20Desk,%20I%20would%20like%20guidance%20regarding%20Ayurvedic%20formulations."
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-block font-semibold text-[#F7F4EC] underline text-[11px] hover:text-[#B79A69] transition-colors"
            >
              Start Chat (+91 9416367044) →
            </a>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Trigger Button */}
      <motion.a
        href="https://wa.me/919416367044?text=Hello%20Vaidham%20Wellness%20Desk,%20I%20would%20like%20guidance%20regarding%20Ayurvedic%20formulations."
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setShowTooltip(true)}
        whileHover={{ scale: 1.06 }}
        whileTap={{ scale: 0.96 }}
        aria-label="Contact Vaidham Wellness Desk on WhatsApp"
        className="w-13 h-13 rounded-full bg-[#173D32] text-[#F7F4EC] border-2 border-[#B79A69] shadow-xl flex items-center justify-center hover:bg-[#0F2A22] transition-colors duration-200 group cursor-pointer"
      >
        <MessageCircle className="w-6 h-6 text-[#B79A69] group-hover:text-white transition-colors" />
      </motion.a>
    </motion.div>
  );
};
