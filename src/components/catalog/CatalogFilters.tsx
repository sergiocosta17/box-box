"use client";

import { categories } from "@/data/products";
import { SlidersHorizontal } from "lucide-react";

interface CatalogFiltersProps {
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
  sortBy: string;
  onSortChange: (sort: string) => void;
}

export function CatalogFilters({
  selectedCategory,
  onCategoryChange,
  sortBy,
  onSortChange,
}: CatalogFiltersProps) {
  return (
    <div className="flex flex-col xl:flex-row xl:items-center justify-between gap-6 mb-12">
      
      {/* Filtros de Categoria (Tabs Premium) */}
      <div className="flex flex-wrap gap-2 md:gap-3">
        <button
          onClick={() => onCategoryChange("all")}
          className={`px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-widest transition-all duration-300 border ${
            selectedCategory === "all"
              ? "bg-box-yellow text-box-black border-box-yellow shadow-lg shadow-box-yellow/20"
              : "bg-white/3-neutral-400 border-white/10 hover:border-white/30 hover:text-white backdrop-blur-sm"
          }`}
        >
          Todos
        </button>
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => onCategoryChange(category.slug)}
            className={`px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-widest transition-all duration-300 border ${
              selectedCategory === category.slug
                ? "bg-box-yellow text-box-black border-box-yellow shadow-lg shadow-box-yellow/20"
                : "bg-white/3 text-neutral-400 border-white/10 hover:border-white/30 hover:text-white backdrop-blur-sm"
            }`}
          >
            {category.name}
          </button>
        ))}
      </div>

      {/* Ordenação (Select Customizado Minimalista) */}
      <div className="flex items-center gap-3 bg-white/3 border border-white/10 rounded-full px-5 py-2 backdrop-blur-sm">
        <SlidersHorizontal className="w-4 h-4 text-box-yellow" />
        <label htmlFor="sort" className="sr-only">
          Ordenar:
        </label>
        <select
          id="sort"
          value={sortBy}
          onChange={(e) => onSortChange(e.target.value)}
          className="bg-transparent text-white text-xs font-bold uppercase tracking-widest focus:outline-none cursor-pointer appearance-none pr-4"
          style={{ WebkitAppearance: 'none', MozAppearance: 'none' }}
        >
          <option value="featured" className="bg-box-black text-white">Destaques</option>
          <option value="newest" className="bg-box-black text-white">Mais recentes</option>
          <option value="price-asc" className="bg-box-black text-white">Menor preço</option>
          <option value="price-desc" className="bg-box-black text-white">Maior preço</option>
          <option value="name" className="bg-box-black text-white">Nome A-Z</option>
        </select>
      </div>
    </div>
  );
}