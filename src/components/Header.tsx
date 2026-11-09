import React, { useState, useEffect } from 'react';
import { ShoppingBag, Search, Sparkles, Menu, X, ArrowRight } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { PRODUCTS } from '../data/products';

export const Header: React.FC = () => {
  const { totalItems, setIsCartOpen, setIsAiModalOpen, currentView, setCurrentView, navigateToProduct } = useCart();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Shop', view: 'shop' },
    { label: 'Categories', view: 'categories' },
    { label: 'Our Story', view: 'story' },
    { label: 'Authenticity Check', view: 'authenticity' },
    { label: 'Wellness Library', view: 'library' },
    { label: 'Wellness Desk', view: 'wellness-desk' },
  ];

  const filteredProducts = searchQuery.trim()
    ? PRODUCTS.filter((p) =>
        p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.ingredients.some((i) => i.name.toLowerCase().includes(searchQuery.toLowerCase()))
      )
    : [];

  return (
    <>
      <header
        className={`sticky top-0 z-40 w-full transition-all duration-300 ${
          isScrolled
            ? 'bg-[#F7F4EC]/95 backdrop-blur-md shadow-xs py-3 border-b border-[#242A26]/10'
            : 'bg-[#F7F4EC] py-5 border-b border-[#242A26]/5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 flex items-center justify-between gap-8">
          {/* Zone 1: Bespoke Wordmark */}
          <button
            onClick={() => setCurrentView('home')}
            className="text-left group cursor-pointer shrink-0"
          >
            <span className="font-serif text-2xl sm:text-3xl tracking-[0.24em] font-black text-[#173D32] uppercase group-hover:text-[#B79A69] transition-colors block">
              VAIDHAM
            </span>
            <span className="block text-[8px] tracking-[0.32em] uppercase text-[#B79A69] font-mono font-semibold -mt-0.5">
              Healing from Root · Est. Gurugram
            </span>
          </button>

          {/* Zone 2: Bespoke Archival Single-Line Nav Links */}
          <nav className="hidden lg:flex items-center gap-7 text-[12px] uppercase tracking-[0.14em] font-medium">
            {navLinks.map((link, idx) => {
              const isActive = currentView === link.view;
              return (
                <button
                  key={link.view}
                  onClick={() => setCurrentView(link.view)}
                  className={`relative py-1 whitespace-nowrap shrink-0 transition-colors cursor-pointer ${
                    isActive
                      ? 'text-[#173D32] font-bold'
                      : 'text-[#242A26]/75 hover:text-[#173D32]'
                  }`}
                >
                  <span className="text-[10px] text-[#B79A69] font-mono mr-1.5 opacity-80">
                    {`0${idx + 1}.`}
                  </span>
                  <span>{link.label}</span>
                  {isActive && (
                    <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#173D32]" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Zone 3: Actions (Search, Vaidham AI Advisor, Shopping Bag) */}
          <div className="flex items-center gap-3 sm:gap-4 shrink-0">
            {/* Search Trigger */}
            <button
              onClick={() => setIsSearchOpen(true)}
              aria-label="Search catalogue"
              className="p-2 text-[#242A26]/80 hover:text-[#173D32] hover:bg-[#EAE3D6]/60 rounded-sm transition-colors cursor-pointer"
            >
              <Search className="w-4 h-4" />
            </button>

            {/* Vaidham AI Advisor Trigger */}
            <button
              onClick={() => setIsAiModalOpen(true)}
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 text-[11px] font-semibold text-[#173D32] bg-[#EAE3D6] hover:bg-[#E2DAC8] border border-[#173D32]/20 rounded-xs transition-all cursor-pointer shadow-2xs whitespace-nowrap uppercase tracking-wider"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#B79A69]" />
              <span>Vaidham AI</span>
            </button>

            {/* Bag Button */}
            <button
              onClick={() => setIsCartOpen(true)}
              aria-label="Shopping bag"
              className="relative p-2 text-[#173D32] hover:bg-[#EAE3D6]/60 rounded-xs transition-colors cursor-pointer flex items-center justify-center"
            >
              <ShoppingBag className="w-5 h-5 stroke-[2]" />
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 bg-[#173D32] text-[#F7F4EC] text-[10px] font-mono font-bold w-5 h-5 rounded-full flex items-center justify-center shadow-xs">
                  {totalItems}
                </span>
              )}
            </button>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle navigation"
              className="lg:hidden p-2 text-[#242A26] hover:bg-[#EAE3D6] rounded-xs transition-colors"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {isMobileMenuOpen && (
          <div className="lg:hidden fixed inset-x-0 top-[65px] bg-[#F7F4EC] border-b border-[#242A26]/10 p-6 shadow-xl transition-all z-50">
            <nav className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <button
                  key={link.view}
                  onClick={() => {
                    setCurrentView(link.view);
                    setIsMobileMenuOpen(false);
                  }}
                  className={`text-left text-base font-serif tracking-wide py-2 border-b border-[#242A26]/5 transition-colors ${
                    currentView === link.view
                      ? 'text-[#173D32] font-semibold'
                      : 'text-[#242A26]'
                  }`}
                >
                  {link.label}
                </button>
              ))}
              <div className="pt-2 flex flex-col gap-3">
                <button
                  onClick={() => {
                    setIsAiModalOpen(true);
                    setIsMobileMenuOpen(false);
                  }}
                  className="w-full flex items-center justify-center gap-2 py-3 bg-[#173D32] text-[#F7F4EC] rounded-lg text-sm font-medium tracking-wide shadow-sm"
                >
                  <Sparkles className="w-4 h-4 text-[#B79A69]" />
                  Consult Vaidham AI Advisor
                </button>
                <div className="flex items-center justify-between text-xs text-[#242A26]/70 pt-2">
                  <span>Wellness Desk: +91 9416367044</span>
                  <a
                    href="https://wa.me/919416367044"
                    target="_blank"
                    rel="noreferrer"
                    className="text-[#173D32] font-semibold underline"
                  >
                    WhatsApp
                  </a>
                </div>
              </div>
            </nav>
          </div>
        )}
      </header>

      {/* Search Modal */}
      {isSearchOpen && (
        <div className="fixed inset-0 z-50 bg-[#242A26]/60 backdrop-blur-xs flex items-start justify-center pt-20 px-4">
          <div className="bg-[#F7F4EC] w-full max-w-2xl rounded-2xl shadow-2xl border border-[#242A26]/10 p-6 overflow-hidden">
            <div className="flex items-center justify-between border-b border-[#242A26]/10 pb-4">
              <div className="flex items-center gap-3 flex-1">
                <Search className="w-5 h-5 text-[#B79A69]" />
                <input
                  type="text"
                  placeholder="Search formulations, ingredients (Shallaki, Kutki, Bhumi Amla)..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  autoFocus
                  className="w-full bg-transparent text-base font-sans outline-hidden text-[#242A26] placeholder-[#242A26]/40"
                />
              </div>
              <button
                onClick={() => {
                  setIsSearchOpen(false);
                  setSearchQuery('');
                }}
                className="p-1 text-[#242A26]/60 hover:text-[#242A26] rounded-md"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="mt-4 max-h-96 overflow-y-auto">
              {searchQuery.trim() === '' ? (
                <div className="py-6 text-center text-xs text-[#242A26]/60">
                  <p className="font-serif text-sm text-[#173D32] mb-1">
                    Popular Botanical Searches
                  </p>
                  <div className="flex flex-wrap justify-center gap-2 mt-3">
                    {['ArthReliv', 'LIVODHAM', 'Joint Care', 'Liver Detox', 'Shallaki', 'Curcumin', 'Kutki'].map(
                      (tag) => (
                        <button
                          key={tag}
                          onClick={() => setSearchQuery(tag)}
                          className="px-3 py-1 bg-[#EAE3D6] text-[#173D32] rounded-md text-xs hover:bg-[#E2DAC8] transition-colors"
                        >
                          {tag}
                        </button>
                      )
                    )}
                  </div>
                </div>
              ) : filteredProducts.length > 0 ? (
                <div className="space-y-3 py-2">
                  {filteredProducts.map((p) => (
                    <div
                      key={p.id}
                      onClick={() => {
                        navigateToProduct(p.id);
                        setIsSearchOpen(false);
                        setSearchQuery('');
                      }}
                      className="flex items-center gap-4 p-3 rounded-xl hover:bg-[#EAE3D6]/70 transition-colors cursor-pointer group"
                    >
                      <img
                        src={p.image}
                        alt={p.name}
                        className="w-14 h-14 object-cover rounded-lg bg-[#EAE3D6] shrink-0"
                      />
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between">
                          <h4 className="font-serif font-semibold text-[#173D32] text-base group-hover:text-[#B79A69] transition-colors">
                            {p.name}
                          </h4>
                          <span className="font-sans font-medium text-sm text-[#173D32] tabular-nums">
                            ₹{p.price}
                          </span>
                        </div>
                        <p className="text-xs text-[#242A26]/70 truncate">{p.tagline}</p>
                        <div className="flex items-center gap-2 mt-1 text-[11px] text-[#A8B49B]">
                          <span>{p.category}</span>
                          <span>·</span>
                          <span>{p.packSize}</span>
                        </div>
                      </div>
                      <ArrowRight className="w-4 h-4 text-[#242A26]/40 group-hover:text-[#173D32] group-hover:translate-x-1 transition-all" />
                    </div>
                  ))}
                </div>
              ) : (
                <div className="py-8 text-center text-xs text-[#242A26]/60">
                  <p>No formulations matched "{searchQuery}".</p>
                  <p className="mt-1">
                    Contact the{' '}
                    <button
                      onClick={() => {
                        setCurrentView('wellness-desk');
                        setIsSearchOpen(false);
                      }}
                      className="text-[#173D32] underline font-semibold"
                    >
                      Wellness Desk
                    </button>{' '}
                    for custom herbal guidance.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};
