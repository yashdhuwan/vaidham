import React, { useState } from 'react';
import { ARTICLES, Article } from '../data/articles';
import { useCart } from '../context/CartContext';
import { ArrowRight, BookOpen } from 'lucide-react';

export const LibraryPage: React.FC = () => {
  const { navigateToArticle } = useCart();
  const [selectedCat, setSelectedCat] = useState('All');

  const categories = ['All', 'Musculoskeletal Health', 'Hepatic & Metabolic Wellness', 'Quality & Science'];

  const filtered = selectedCat === 'All'
    ? ARTICLES
    : ARTICLES.filter((a) => a.category === selectedCat);

  return (
    <div className="max-w-7xl mx-auto px-6 sm:px-8 py-12 space-y-16">
      <div className="border-b border-[#242A26]/10 pb-8 space-y-3 max-w-3xl">
        <span className="text-xs font-semibold uppercase tracking-widest text-[#B79A69]">
          The Classical Journal
        </span>
        <h1 className="font-serif text-4xl sm:text-5xl text-[#173D32]">
          Wellness Library
        </h1>
        <p className="text-sm sm:text-base text-[#242A26]/80 font-light leading-relaxed">
          In-depth educational treatises, phytochemistry analyses, and classical dinacharya rituals curated by Vaidham’s formulation scientists and Ayurvedic physicians.
        </p>
      </div>

      {/* Categories Bar */}
      <div className="flex items-center gap-1 p-1 bg-[#EAE3D6] rounded-xl overflow-x-auto no-scrollbar w-fit">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCat(cat)}
            className={`px-4 py-2 text-xs font-medium rounded-lg whitespace-nowrap transition-all cursor-pointer ${
              selectedCat === cat
                ? 'bg-white text-[#173D32] shadow-xs font-semibold'
                : 'text-[#242A26]/70 hover:text-[#173D32]'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Featured Lead Article */}
      {filtered.length > 0 && (
        <div
          onClick={() => navigateToArticle(filtered[0].id)}
          className="bg-white rounded-3xl overflow-hidden border border-[#242A26]/10 shadow-xs hover:shadow-xl transition-all duration-300 grid grid-cols-1 lg:grid-cols-12 cursor-pointer group"
        >
          <div className="lg:col-span-7 aspect-16/10 lg:aspect-auto overflow-hidden bg-[#EAE3D6]">
            <img
              src={filtered[0].coverImage}
              alt={filtered[0].title}
              className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-700 ease-out"
            />
          </div>

          <div className="lg:col-span-5 p-8 sm:p-10 flex flex-col justify-between space-y-6">
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-xs text-[#A8B49B]">
                <span className="font-medium text-[#B79A69] uppercase tracking-wider">
                  Featured Treatise
                </span>
                <span>·</span>
                <span>{filtered[0].readTime}</span>
              </div>
              <h2 className="font-serif text-3xl font-semibold text-[#173D32] group-hover:text-[#B79A69] transition-colors leading-snug">
                {filtered[0].title}
              </h2>
              <p className="text-xs sm:text-sm text-[#242A26]/75 font-light leading-relaxed">
                {filtered[0].excerpt}
              </p>
            </div>

            <div className="pt-4 border-t border-[#242A26]/10 flex items-center justify-between text-xs font-semibold text-[#173D32]">
              <span>Read Full Research Note</span>
              <ArrowRight className="w-4 h-4 text-[#B79A69] group-hover:translate-x-1 transition-transform" />
            </div>
          </div>
        </div>
      )}

      {/* Remaining Articles Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filtered.slice(1).map((article) => (
          <article
            key={article.id}
            onClick={() => navigateToArticle(article.id)}
            className="bg-white rounded-2xl overflow-hidden border border-[#242A26]/10 shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between cursor-pointer group p-6"
          >
            <div className="space-y-4">
              <div className="aspect-16/10 rounded-xl overflow-hidden bg-[#EAE3D6]">
                <img
                  src={article.coverImage}
                  alt={article.title}
                  className="w-full h-full object-cover group-hover:scale-104 transition-transform duration-500 ease-out"
                />
              </div>

              <div className="space-y-2">
                <div className="flex items-center gap-2 text-xs text-[#A8B49B]">
                  <span>{article.category}</span>
                  <span>·</span>
                  <span>{article.readTime}</span>
                </div>
                <h3 className="font-serif text-xl font-semibold text-[#173D32] group-hover:text-[#B79A69] transition-colors leading-snug">
                  {article.title}
                </h3>
                <p className="text-xs text-[#242A26]/70 line-clamp-3 leading-relaxed font-light">
                  {article.excerpt}
                </p>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-[#242A26]/10 flex items-center justify-between text-xs font-semibold text-[#173D32]">
              <span>Read Article</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#B79A69]" />
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};
