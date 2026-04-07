"use client";

import { useState, useMemo } from "react";
import { products } from "@/data/products";
import { ProductCard } from "./ProductCard";
import { CatalogFilters } from "./CatalogFilters";

export function CatalogGrid() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [sortBy, setSortBy] = useState("featured");

  const filteredAndSortedProducts = useMemo(() => {
    let filtered = [...products];

    // Filtrar por categoria
    if (selectedCategory !== "all") {
      // Mapear slug para category
      const categoryMap: Record<string, string> = {
        "senna-collection": "senna",
        "f1-legends": "f1-legends",
        "classic": "classic",
        "modern": "modern",
      };
      const category = categoryMap[selectedCategory] || selectedCategory;
      filtered = filtered.filter((p) => p.category === category);
    }

    // Ordenar
    switch (sortBy) {
      case "price-asc":
        filtered.sort((a, b) => a.price - b.price);
        break;
      case "price-desc":
        filtered.sort((a, b) => b.price - a.price);
        break;
      case "newest":
        filtered.sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime());
        break;
      case "name":
        filtered.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case "featured":
      default:
        filtered.sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));
        break;
    }

    return filtered;
  }, [selectedCategory, sortBy]);

  return (
    <div>
      <CatalogFilters
        selectedCategory={selectedCategory}
        onCategoryChange={setSelectedCategory}
        sortBy={sortBy}
        onSortChange={setSortBy}
      />

      {/* Contador de resultados */}
      <p className="text-zinc-400 mb-6">
        {filteredAndSortedProducts.length} produto(s) encontrado(s)
      </p>

      {/* Grid de produtos */}
      {filteredAndSortedProducts.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredAndSortedProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-zinc-800 flex items-center justify-center">
            <svg
              className="w-8 h-8 text-zinc-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M12 12h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
          <p className="text-zinc-400">Nenhum produto encontrado nesta categoria.</p>
        </div>
      )}
    </div>
  );
}
