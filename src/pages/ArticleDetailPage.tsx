import React from 'react';
import { ARTICLES } from '../data/articles';
import { useCart } from '../context/CartContext';
import { ArrowLeft, Clock, Calendar, Share2, BookOpen, User } from 'lucide-react';

export const ArticleDetailPage: React.FC = () => {
  const { selectedArticleId, setCurrentView, navigateToProduct } = useCart();

  const article = ARTICLES.find((a) => a.id === selectedArticleId) || ARTICLES[0];

  return (
    <div className="max-w-4xl mx-auto px-6 sm:px-8 py-12 space-y-12">
      {/* Back Button */}
      <button
        onClick={() => setCurrentView('library')}
        className="inline-flex items-center gap-2 text-xs font-semibold text-[#173D32] hover:text-[#B79A69] transition-colors cursor-pointer uppercase tracking-wider"
      >
        <ArrowLeft className="w-4 h-4" />
        <span>Return to Wellness Library</span>
      </button>

      {/* Article Header */}
      <div className="space-y-4 border-b border-[#242A26]/10 pb-8">
        <div className="flex items-center gap-2 text-xs text-[#B79A69] uppercase font-mono tracking-wider">
          <span>{article.category}</span>
          <span>·</span>
          <span>{article.readTime}</span>
        </div>

        <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#173D32] font-semibold leading-tight">
          {article.title}
        </h1>

        <div className="pt-2 flex items-center justify-between text-xs text-[#242A26]/60">
          <div className="flex items-center gap-2">
            <User className="w-4 h-4 text-[#B79A69]" />
            <span>By <strong>{article.author.name}</strong>, {article.author.title}</span>
          </div>
          <span>Published {article.publishDate}</span>
        </div>
      </div>

      {/* Hero Cover Image */}
      <div className="aspect-16/9 rounded-3xl overflow-hidden bg-[#EAE3D6] shadow-md border border-[#242A26]/10">
        <img
          src={article.coverImage}
          alt={article.title}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Lead Excerpt */}
      <div className="bg-[#EAE3D6]/70 p-6 sm:p-8 rounded-2xl border-l-2 border-[#B79A69] text-sm sm:text-base text-[#173D32] font-serif italic leading-relaxed">
        "{article.excerpt}"
      </div>

      {/* Body Content Sections */}
      <div className="space-y-10 text-sm sm:text-base text-[#242A26]/85 font-light leading-relaxed">
        {article.content.map((sec, idx) => (
          <div key={idx} className="space-y-4">
            <h2 className="font-serif text-2xl sm:text-3xl font-semibold text-[#173D32]">
              {sec.sectionHeading}
            </h2>
            <div className="space-y-3">
              {sec.body.map((para, pIdx) => (
                <p key={pIdx} className="leading-relaxed">
                  {para}
                </p>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Author Card & Recommendation */}
      <div className="pt-12 border-t border-[#242A26]/10 bg-white p-8 rounded-3xl border border-[#242A26]/10 space-y-6">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-full bg-[#173D32] text-[#B79A69] flex items-center justify-center font-serif text-xl font-bold">
            {article.author.name[0]}
          </div>
          <div>
            <h4 className="font-serif text-lg font-semibold text-[#173D32]">
              {article.author.name}
            </h4>
            <p className="text-xs text-[#242A26]/60">{article.author.title}</p>
          </div>
        </div>

        <div className="pt-4 border-t border-[#242A26]/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs">
          <span className="text-[#242A26]/70">
            Have clinical questions regarding this study? Connect with the author via the Wellness Desk.
          </span>
          <button
            onClick={() => setCurrentView('wellness-desk')}
            className="px-5 py-2.5 bg-[#173D32] text-[#F7F4EC] rounded-lg font-semibold hover:bg-[#0F2A22] transition-colors cursor-pointer shrink-0"
          >
            Wellness Desk (+91 9416367044)
          </button>
        </div>
      </div>
    </div>
  );
};
