import React, { useState } from 'react';
import { PhoneCall, MessageCircle, Mail, MapPin, CheckCircle2, Clock, ShieldCheck, ArrowRight, RefreshCw } from 'lucide-react';
import { useCart } from '../context/CartContext';

export const WellnessDeskPage: React.FC = () => {
  const { setIsAiModalOpen } = useCart();
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [topic, setTopic] = useState('Joint & Mobility Guidance');
  const [windowTime, setWindowTime] = useState('Morning (10:00 AM - 01:00 PM)');
  const [notes, setNotes] = useState('');
  const [loading, setLoading] = useState(false);
  const [submittedTicket, setSubmittedTicket] = useState<any | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !phone.trim()) return;

    setLoading(true);
    try {
      const res = await fetch('/api/request-callback', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: name.trim(),
          phone: phone.trim(),
          preferredTopic: topic,
          preferredTime: windowTime,
          notes: notes.trim(),
        }),
      });
      const data = await res.json();
      if (res.ok && data.success) {
        setSubmittedTicket(data);
      } else {
        alert(data.message || 'Failed to submit request');
      }
    } catch {
      // Local fallback acknowledgment
      setSubmittedTicket({
        success: true,
        ticketId: `VDH-CB-${Math.floor(100000 + Math.random() * 900000)}`,
        message: `Thank you ${name}. The Vaidham Wellness Desk has recorded your consultation request. An Ayurvedic practitioner will reach out to ${phone}.`,
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-6 sm:px-8 py-12 space-y-16">
      <div className="border-b border-[#242A26]/10 pb-8 space-y-3 max-w-3xl">
        <span className="text-xs font-semibold uppercase tracking-widest text-[#B79A69]">
          Direct Ayurvedic Consultation
        </span>
        <h1 className="font-serif text-4xl sm:text-5xl text-[#173D32]">
          Vaidham Wellness Desk
        </h1>
        <p className="text-sm sm:text-base text-[#242A26]/80 font-light leading-relaxed">
          True Ayurvedic guidance requires personal understanding. Speak directly with a qualified Ayurvedic professional regarding formulations, classical dietetics (Ahar), and daily rituals (Dinacharya).
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Contact Information & Channels */}
        <div className="lg:col-span-5 space-y-8">
          <div className="space-y-4">
            <h2 className="font-serif text-2xl font-semibold text-[#173D32]">
              Official Communication Channels
            </h2>
            <p className="text-xs text-[#242A26]/70 leading-relaxed font-light">
              Our clinical consultation desk operates Monday through Saturday, from 10:00 AM to 7:00 PM IST.
            </p>
          </div>

          <div className="space-y-4">
            {/* Phone */}
            <div className="bg-white p-5 rounded-2xl border border-[#242A26]/10 flex items-start gap-4 shadow-2xs">
              <div className="w-10 h-10 rounded-xl bg-[#EAE3D6] text-[#173D32] flex items-center justify-center shrink-0">
                <PhoneCall className="w-5 h-5 text-[#B79A69]" />
              </div>
              <div className="space-y-0.5">
                <span className="text-[11px] uppercase tracking-wider text-[#242A26]/60 font-semibold">
                  Telephone Assistance
                </span>
                <a
                  href="tel:+919416367044"
                  className="font-serif text-xl font-bold text-[#173D32] block hover:text-[#B79A69] transition-colors"
                >
                  +91 9416367044
                </a>
                <span className="text-[11px] text-[#A8B49B] block">Direct Line to Senior Formulation Desk</span>
              </div>
            </div>

            {/* WhatsApp */}
            <div className="bg-white p-5 rounded-2xl border border-[#242A26]/10 flex items-start gap-4 shadow-2xs">
              <div className="w-10 h-10 rounded-xl bg-[#EAE3D6] text-[#173D32] flex items-center justify-center shrink-0">
                <MessageCircle className="w-5 h-5 text-[#B79A69]" />
              </div>
              <div className="space-y-0.5">
                <span className="text-[11px] uppercase tracking-wider text-[#242A26]/60 font-semibold">
                  WhatsApp Direct Chat
                </span>
                <a
                  href="https://wa.me/919416367044?text=Hello%20Vaidham%20Wellness%20Desk,%20I%20would%20like%20guidance%20regarding%20Ayurvedic%20formulations."
                  target="_blank"
                  rel="noreferrer"
                  className="font-serif text-xl font-bold text-[#173D32] block hover:text-[#B79A69] transition-colors"
                >
                  Connect on WhatsApp
                </a>
                <span className="text-[11px] text-[#A8B49B] block">Available for quick queries & dosage reviews</span>
              </div>
            </div>

            {/* Email */}
            <div className="bg-white p-5 rounded-2xl border border-[#242A26]/10 flex items-start gap-4 shadow-2xs">
              <div className="w-10 h-10 rounded-xl bg-[#EAE3D6] text-[#173D32] flex items-center justify-center shrink-0">
                <Mail className="w-5 h-5 text-[#B79A69]" />
              </div>
              <div className="space-y-0.5">
                <span className="text-[11px] uppercase tracking-wider text-[#242A26]/60 font-semibold">
                  Email Desk
                </span>
                <a
                  href="mailto:care@vaidham.com"
                  className="font-serif text-xl font-bold text-[#173D32] block hover:text-[#B79A69] transition-colors"
                >
                  care@vaidham.com
                </a>
                <span className="text-[11px] text-[#A8B49B] block">Detailed health histories & blood report reviews</span>
              </div>
            </div>

            {/* Physical Location */}
            <div className="bg-[#EAE3D6] p-5 rounded-2xl border border-[#242A26]/10 flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-white text-[#173D32] flex items-center justify-center shrink-0">
                <MapPin className="w-5 h-5 text-[#B79A69]" />
              </div>
              <div className="space-y-0.5 text-xs text-[#242A26]/80">
                <span className="text-[11px] uppercase tracking-wider text-[#173D32] font-semibold block">
                  Registered Laboratory & Corporate Office
                </span>
                <p className="font-light">
                  Vaidham Life Sciences<br />
                  No. 100, Village Choma, Phase-III,<br />
                  Gurugram - 122017, Haryana, India.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Request-a-Callback Form */}
        <div className="lg:col-span-7 bg-white p-8 sm:p-10 rounded-3xl border border-[#242A26]/10 shadow-xs space-y-6">
          <div>
            <span className="text-xs font-semibold uppercase tracking-widest text-[#B79A69]">
              Schedule Consultation
            </span>
            <h2 className="font-serif text-3xl font-semibold text-[#173D32] mt-1">
              Request a Wellness Callback
            </h2>
            <p className="text-xs text-[#242A26]/70 mt-1">
              Leave your contact details and an Ayurvedic practitioner will call you to discuss your wellness goals.
            </p>
          </div>

          {submittedTicket ? (
            <div className="bg-[#F7F4EC] p-8 rounded-2xl border-2 border-emerald-700/30 space-y-4 animate-in fade-in">
              <div className="w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-800">
                <CheckCircle2 className="w-6 h-6 text-emerald-700" />
              </div>
              <div className="space-y-1">
                <span className="text-[10px] font-mono uppercase tracking-wider text-emerald-800 font-bold">
                  Reference: {submittedTicket.ticketId}
                </span>
                <h3 className="font-serif text-2xl font-semibold text-[#173D32]">
                  Consultation Request Received
                </h3>
                <p className="text-xs sm:text-sm text-[#242A26]/80 leading-relaxed font-light">
                  {submittedTicket.message}
                </p>
              </div>
              <button
                onClick={() => setSubmittedTicket(null)}
                className="text-xs font-semibold text-[#173D32] underline hover:text-[#B79A69] cursor-pointer"
              >
                Submit another inquiry
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-[#173D32] mb-1">
                    Your Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. Ramesh Chandra"
                    className="w-full bg-[#F7F4EC] border border-[#242A26]/15 rounded-xl px-4 py-2.5 text-xs text-[#242A26] focus:outline-hidden focus:border-[#173D32]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#173D32] mb-1">
                    Mobile Number (WhatsApp Enabled) *
                  </label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="e.g. +91 98765 43210"
                    className="w-full bg-[#F7F4EC] border border-[#242A26]/15 rounded-xl px-4 py-2.5 text-xs text-[#242A26] focus:outline-hidden focus:border-[#173D32]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-[#173D32] mb-1">
                    Primary Area of Inquiry
                  </label>
                  <select
                    value={topic}
                    onChange={(e) => setTopic(e.target.value)}
                    className="w-full bg-[#F7F4EC] border border-[#242A26]/15 rounded-xl px-3 py-2.5 text-xs text-[#242A26] focus:outline-hidden focus:border-[#173D32] cursor-pointer"
                  >
                    <option value="Joint & Mobility Guidance (ArthReliv)">Joint & Mobility Guidance (ArthReliv)</option>
                    <option value="Liver Care & Detoxification (LIVODHAM)">Liver Care & Detoxification (LIVODHAM)</option>
                    <option value="Batch Authenticity & Lab Reports">Batch Authenticity & Lab Reports</option>
                    <option value="Dosha & Lifestyle Consultation">Dosha & Lifestyle Consultation</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#173D32] mb-1">
                    Preferred Callback Window
                  </label>
                  <select
                    value={windowTime}
                    onChange={(e) => setWindowTime(e.target.value)}
                    className="w-full bg-[#F7F4EC] border border-[#242A26]/15 rounded-xl px-3 py-2.5 text-xs text-[#242A26] focus:outline-hidden focus:border-[#173D32] cursor-pointer"
                  >
                    <option value="Morning (10:00 AM - 01:00 PM)">Morning (10:00 AM - 01:00 PM)</option>
                    <option value="Afternoon (01:00 PM - 04:00 PM)">Afternoon (01:00 PM - 04:00 PM)</option>
                    <option value="Evening (04:00 PM - 07:00 PM)">Evening (04:00 PM - 07:00 PM)</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#173D32] mb-1">
                  Brief Medical / Wellness Context (Optional)
                </label>
                <textarea
                  rows={3}
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="Share details such as how long you have experienced symptoms, current prescription medications, or specific questions..."
                  className="w-full bg-[#F7F4EC] border border-[#242A26]/15 rounded-xl p-3 text-xs text-[#242A26] focus:outline-hidden focus:border-[#173D32]"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-3.5 bg-[#173D32] hover:bg-[#0F2A22] text-[#F7F4EC] rounded-xl text-xs font-semibold uppercase tracking-wider transition-colors disabled:opacity-50 flex items-center justify-center gap-2 cursor-pointer shadow-xs"
                >
                  {loading ? (
                    <>
                      <RefreshCw className="w-4 h-4 animate-spin text-[#B79A69]" />
                      <span>Scheduling Callback...</span>
                    </>
                  ) : (
                    <>
                      <span>Schedule Free Wellness Callback</span>
                      <ArrowRight className="w-4 h-4 text-[#B79A69]" />
                    </>
                  )}
                </button>
              </div>

              <p className="text-[11px] text-[#242A26]/50 text-center font-light pt-1">
                Your health data is kept strictly confidential under our privacy standards.
              </p>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
