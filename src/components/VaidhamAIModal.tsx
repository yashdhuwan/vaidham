import React, { useState, useRef, useEffect } from 'react';
import { X, Send, Sparkles, RefreshCw, PhoneCall, Bot, User } from 'lucide-react';
import { useCart } from '../context/CartContext';

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

const PRESET_QUESTIONS = [
  'Which formulation is ideal for knee stiffness & mobility?',
  'How does LIVODHAM support liver health in Ayurveda?',
  'What is the difference between Vata and Pitta joint concerns?',
  'Are Vaidham formulations safe to consume daily?',
];

export const VaidhamAIModal: React.FC = () => {
  const { isAiModalOpen, setIsAiModalOpen, setCurrentView } = useCart();
  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'assistant',
      content:
        'Namaste and welcome to Vaidham. I am your personal Ayurvedic Wellness Advisor. How may I guide your wellness journey today? You can inquire about our classical formulations (ArthReliv & LIVODHAM), active botanical ingredients, or personalized daily routines (Dinacharya).',
    },
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isAiModalOpen) {
      scrollToBottom();
    }
  }, [messages, isAiModalOpen]);

  if (!isAiModalOpen) return null;

  const handleSend = async (queryText?: string) => {
    const textToSend = queryText || input;
    if (!textToSend.trim() || loading) return;

    const newMessages: Message[] = [...messages, { role: 'user', content: textToSend.trim() }];
    setMessages(newMessages);
    setInput('');
    setLoading(true);

    try {
      const response = await fetch('/api/vaidham-ai', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          messages: newMessages,
        }),
      });

      if (!response.ok) {
        throw new Error('Server returned an error');
      }

      const data = await response.json();
      setMessages((prev) => [...prev, { role: 'assistant', content: data.reply }]);
    } catch (err) {
      setMessages((prev) => [
        ...prev,
        {
          role: 'assistant',
          content:
            'We apologize, our digital consultation channel is momentarily resting. You can connect immediately with a senior Ayurvedic wellness consultant at the Vaidham Wellness Desk: +91 9416367044 or email care@vaidham.com.',
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-[#242A26]/60 backdrop-blur-sm"
        onClick={() => setIsAiModalOpen(false)}
      />

      <div className="relative bg-[#F7F4EC] w-full max-w-2xl h-[640px] max-h-[90vh] rounded-2xl shadow-2xl flex flex-col border border-[#242A26]/10 overflow-hidden z-10">
        {/* Header */}
        <div className="bg-[#173D32] text-[#F7F4EC] p-5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#B79A69]/20 flex items-center justify-center border border-[#B79A69]/40">
              <Sparkles className="w-5 h-5 text-[#B79A69]" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="font-serif text-xl font-semibold tracking-wide">
                  Vaidham AI Wellness Advisor
                </h3>
                <span className="text-[10px] uppercase font-sans tracking-widest text-[#B79A69] border border-[#B79A69]/30 px-1.5 py-0.5 rounded">
                  Ayurvedic Intelligence
                </span>
              </div>
              <p className="text-xs text-[#A8B49B] font-light">
                Rooted in Classical Texts · Guided by Botanical Transparency
              </p>
            </div>
          </div>

          <button
            onClick={() => setIsAiModalOpen(false)}
            className="p-1.5 text-[#F7F4EC]/70 hover:text-white rounded-md hover:bg-white/10 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Advisory banner */}
        <div className="bg-[#EAE3D6] px-5 py-2 border-b border-[#242A26]/10 text-[11px] text-[#242A26]/80 flex items-center justify-between">
          <span>Guidance for nutritional wellness only. Not a medical diagnostic tool.</span>
          <button
            onClick={() => {
              setIsAiModalOpen(false);
              setCurrentView('wellness-desk');
            }}
            className="text-[#173D32] font-semibold underline hover:text-[#B79A69] transition-colors flex items-center gap-1"
          >
            <PhoneCall className="w-3 h-3" />
            Talk to Human Doctor
          </button>
        </div>

        {/* Message Stream */}
        <div className="flex-1 overflow-y-auto p-5 space-y-4">
          {messages.map((m, idx) => (
            <div
              key={idx}
              className={`flex gap-3 ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              {m.role === 'assistant' && (
                <div className="w-8 h-8 rounded-full bg-[#173D32] text-[#B79A69] flex items-center justify-center shrink-0 mt-1 shadow-2xs">
                  <Bot className="w-4 h-4" />
                </div>
              )}
              <div
                className={`max-w-[82%] rounded-2xl p-4 text-sm leading-relaxed ${
                  m.role === 'user'
                    ? 'bg-[#173D32] text-[#F7F4EC] rounded-tr-xs'
                    : 'bg-white text-[#242A26] border border-[#242A26]/10 shadow-2xs rounded-tl-xs'
                }`}
              >
                <div className="whitespace-pre-line font-sans">{m.content}</div>
              </div>
              {m.role === 'user' && (
                <div className="w-8 h-8 rounded-full bg-[#EAE3D6] text-[#173D32] flex items-center justify-center shrink-0 mt-1">
                  <User className="w-4 h-4" />
                </div>
              )}
            </div>
          ))}

          {loading && (
            <div className="flex gap-3 items-center text-xs text-[#242A26]/60 italic pl-1">
              <RefreshCw className="w-4 h-4 text-[#B79A69] animate-spin" />
              <span>Consulting Ayurvedic texts and botanical monographs...</span>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Preset Question Pills */}
        <div className="px-5 py-2.5 bg-[#F7F4EC] border-t border-[#242A26]/10 flex gap-2 overflow-x-auto no-scrollbar">
          {PRESET_QUESTIONS.map((q, i) => (
            <button
              key={i}
              onClick={() => handleSend(q)}
              disabled={loading}
              className="text-xs whitespace-nowrap bg-white hover:bg-[#EAE3D6] text-[#173D32] border border-[#242A26]/10 px-3 py-1.5 rounded-full transition-colors cursor-pointer shrink-0 disabled:opacity-50"
            >
              {q}
            </button>
          ))}
        </div>

        {/* Input Bar */}
        <div className="p-4 bg-white border-t border-[#242A26]/10">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSend();
            }}
            className="flex items-center gap-2"
          >
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask about joint stiffness, liver detox, dosages, or herbs..."
              disabled={loading}
              className="flex-1 bg-[#F7F4EC] border border-[#242A26]/20 rounded-xl px-4 py-2.5 text-sm text-[#242A26] placeholder-[#242A26]/40 focus:outline-hidden focus:border-[#173D32]"
            />
            <button
              type="submit"
              disabled={loading || !input.trim()}
              className="p-2.5 bg-[#173D32] text-[#F7F4EC] rounded-xl hover:bg-[#0F2A22] transition-colors disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
