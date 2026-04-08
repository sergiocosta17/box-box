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
    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
      {/* Filtros de categoria */}
      <div className="flex flex-wrap gap-2">
        <button
          onClick={() => onCategoryChange("all")}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
            selectedCategory === "all"
              ? "bg-green-500 text-white"
              : "bg-zinc-800 text-zinc-400 hover:bg-zinc-700 hover:text-white"
          }`}
        >
          Todos
        </button>
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => onCategoryChange(category.slug)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              selectedCategory === category.slug
                ? "bg-green-500 text-white"
                : "bg-zinc-800 text-zinc-400 hover:bg-zinc-700 hover:text-white"
            }`}
          >
            {category.name}
          </button>
        ))}
      </div>

      {/* Ordenação */}
      <div className="flex items-center gap-2">
        <label htmlFor="sort" className="text-zinc-400 text-sm">
          Ordenar:
        </label>
        <select
          id="sort"
          value={sortBy}
          onChange={(e) => onSortChange(e.target.value)}
          className="bg-zinc-800 text-white text-sm rounded-lg px-3 py-2 border border-zinc-700 focus:outline-none focus:border-green-500"
        >
          <option value="featured">Destaques</option>
          <option value="newest">Mais recentes</option>
          <option value="price-asc">Menor preço</option>
          <option value="price-desc">Maior preço</option>
          <option value="name">Nome A-Z</option>
        </select>
      </div>
    </div>
  );
}
