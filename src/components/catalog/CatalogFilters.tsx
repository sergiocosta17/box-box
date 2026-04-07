"use client";

import { categories } from "@/data/products";

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
    <div className="flex flex-col sm:flex-row gap-4 justify-between items-start sm:items-center mb-8">
      {/* Filtro por categoria */}
      <div className="flex flex-wrap gap-2">
        <button
          onClick={() => onCategoryChange("all")}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
            selectedCategory === "all"
              ? "bg-green-500 text-white"
              : "bg-zinc-800 text-zinc-400 hover:bg-zinc-700 hover:text-white"
          }`}
        >
          Todos
        </button>
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => onCategoryChange(cat.slug)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
              selectedCategory === cat.slug
                ? "bg-green-500 text-white"
                : "bg-zinc-800 text-zinc-400 hover:bg-zinc-700 hover:text-white"
            }`}
          >
            {cat.name}
          </button>
        ))}
      </div>

      {/* Ordenação */}
      <select
        value={sortBy}
        onChange={(e) => onSortChange(e.target.value)}
        className="bg-zinc-800 text-white px-4 py-2 rounded-lg border border-zinc-700 focus:border-green-500 focus:outline-none text-sm"
      >
        <option value="featured">Destaques</option>
        <option value="price-asc">Menor preço</option>
        <option value="price-desc">Maior preço</option>
        <option value="newest">Mais recentes</option>
        <option value="name">Nome A-Z</option>
      </select>
    </div>
  );
}
