import React, { useState } from 'react';
import { PRODUCTS, Product } from '../data/products';
import { useCart } from '../context/CartContext';
import { Search, SlidersHorizontal, CheckCircle2, ShieldCheck, ArrowRight } from 'lucide-react';
import { PincodeChecker } from '../components/PincodeChecker';

export const ShopPage: React.FC = () => {
  const { addItem, navigateToProduct } = useCart();
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [search, setSearch] = useState('');
  const [sortBy, setSortBy] = useState<'featured' | 'price-asc' | 'price-desc'>('featured');

  const categories = ['All', 'Joint & Muscle Care', 'Liver Care'];

  const filtered = PRODUCTS.filter((p) => {
    const matchesCategory = selectedCategory === 'All' || p.category === selectedCategory;
    const matchesSearch =
      p.name.toLowerCase().includes(search.toLowerCase()) ||
      p.shortDescription.toLowerCase().includes(search.toLowerCase()) ||
      p.ingredients.some((i) => i.name.toLowerCase().includes(search.toLowerCase()));
    return matchesCategory && matchesSearch;
  }).sort((a, b) => {
    if (sortBy === 'price-asc') return a.price - b.price;
    if (sortBy === 'price-desc') return b.price - a.price;
    return 0;
  });

  return (
    <div className="max-w-7xl mx-auto px-6 sm:px-8 py-12 space-y-12">
      {/* Header */}
      <div className="border-b border-[#173D32]/15 pb-8 space-y-3">
        <div className="flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-[0.2em] text-[#B79A69]">
          <span>Archival Dispensary</span>
          <span>·</span>
          <span>NABL Verified Stock</span>
        </div>
        <h1 className="font-serif text-4xl sm:text-6xl font-black text-[#173D32] tracking-tight">
          Shop All Formulations
        </h1>
        <p className="text-sm sm:text-base text-[#1F2420]/75 max-w-2xl font-light leading-relaxed font-serif">
          Manufactured in Ayush GMP cleanrooms in Gurugram, India. Each formulation provides guaranteed percentage assays of active botanical biomarkers.
        </p>
      </div>

      {/* Filter and Control Bar */}
      <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 border-b border-[#173D32]/15 pb-6">
        {/* Category Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto no-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 text-xs uppercase tracking-wider font-semibold rounded-xs transition-all cursor-pointer border ${
                selectedCategory === cat
                  ? 'bg-[#173D32] text-[#F7F4EC] border-[#173D32] shadow-xs'
                  : 'bg-white text-[#173D32] border-[#173D32]/20 hover:border-[#173D32]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Search & Sort Controls */}
        <div className="flex items-center gap-3">
          <div className="relative flex-1 md:w-64">
            <Search className="w-4 h-4 text-[#173D32]/40 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search formulations..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full bg-white border border-[#173D32]/20 rounded-xs pl-9 pr-3 py-2 text-xs text-[#1F2420] placeholder-[#1F2420]/40 focus:outline-hidden focus:border-[#173D32]"
            />
          </div>

          <div className="flex items-center gap-2 bg-white border border-[#173D32]/20 rounded-xs px-3 py-2 text-xs">
            <SlidersHorizontal className="w-3.5 h-3.5 text-[#B79A69]" />
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as any)}
              className="bg-transparent text-xs text-[#173D32] font-semibold outline-hidden cursor-pointer"
            >
              <option value="featured">Featured First</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
            </select>
          </div>
        </div>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filtered.map((product) => (
          <div
            key={product.id}
            className="bg-white p-7 border border-[#173D32]/20 shadow-xs hover:border-[#173D32] transition-all flex flex-col justify-between group"
          >
            <div>
              {/* Product Image */}
              <div
                onClick={() => navigateToProduct(product.id)}
                className="relative aspect-4/3 overflow-hidden bg-[#EAE3D6] border border-[#173D32]/10 cursor-pointer mb-5"
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-104 transition-transform duration-700 ease-out"
                />
                <div className="absolute top-3 left-3 bg-[#173D32] text-[#F7F4EC] text-[10px] uppercase font-mono tracking-widest px-2.5 py-0.5">
                  {product.category}
                </div>
                <div className="absolute bottom-3 right-3 bg-[#F7F4EC] border border-[#173D32]/20 text-[#173D32] text-[10px] font-mono font-bold px-2 py-0.5 shadow-2xs">
                  № {product.activeBatch}
                </div>
              </div>

              {/* Information */}
              <div className="space-y-2">
                <div className="flex items-baseline justify-between border-b border-[#173D32]/10 pb-2">
                  <h3
                    onClick={() => navigateToProduct(product.id)}
                    className="font-serif text-2xl sm:text-3xl font-bold text-[#173D32] group-hover:text-[#B79A69] transition-colors cursor-pointer"
                  >
                    {product.name}
                  </h3>
                  <span className="font-serif font-black text-xl text-[#173D32] tabular-nums">
                    ₹{product.price}
                  </span>
                </div>

                <p className="text-xs text-[#B79A69] font-serif italic">
                  {product.sanskritName}
                </p>

                <p className="text-xs text-[#1F2420]/75 font-light leading-relaxed line-clamp-2 pt-1">
                  {product.shortDescription}
                </p>

                <div className="pt-2 text-[11px] font-mono text-[#173D32] flex items-center justify-between border-t border-[#173D32]/5">
                  <span>{product.packSize}</span>
                  <span className="text-emerald-800 font-bold">100% Vegetarian (In Stock)</span>
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="mt-6 pt-4 border-t border-[#173D32]/15 flex items-center gap-2">
              <button
                onClick={() => addItem(product, 1)}
                className="flex-1 py-3 bg-[#173D32] hover:bg-[#0B221B] text-[#F7F4EC] text-xs font-bold uppercase tracking-[0.14em] transition-all cursor-pointer rounded-xs btn-handcrafted text-center"
              >
                Add to Bag
              </button>
              <button
                onClick={() => navigateToProduct(product.id)}
                className="px-4 py-3 border border-[#173D32]/30 hover:bg-[#EAE3D6] text-[#173D32] text-xs font-bold uppercase tracking-[0.12em] transition-colors cursor-pointer rounded-xs"
              >
                Monograph
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Pincode & Delivery Section */}
      <div className="max-w-xl mx-auto pt-8">
        <PincodeChecker />
      </div>
    </div>
  );
};
