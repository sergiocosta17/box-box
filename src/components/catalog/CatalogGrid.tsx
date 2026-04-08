"use client";

import { useState, useMemo } from "react";
import { products } from "@/data/products";
import { ProductCard } from "@/components/product/ProductCard"; // <-- CAMINHO ATUALIZADO
import { CatalogFilters } from "./CatalogFilters";

export function CatalogGrid() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [sortBy, setSortBy] = useState("featured");

  const filteredAndSortedProducts = useMemo(() => {
    let filtered = [...products];

    // Filtrar por categoria
    if (selectedCategory !== "all") {
      const categoryMap: Record<string, string> = {
        "senna-collection": "senna",
        "f1-legends": "f1-legends",
        classic: "classic",
        modern: "modern",
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

      <div className="mb-8 flex items-center">
        <span className="text-xs font-bold uppercase tracking-widest text-neutral-500">
          Mostrando <span className="text-white">{filteredAndSortedProducts.length}</span> artes exclusivas
        </span>
      </div>

      {filteredAndSortedProducts.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
          {filteredAndSortedProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center py-32 border border-white/5 bg-white/2 rounded-3xl backdrop-blur-sm">
          <span className="text-6xl font-black italic text-white/10 mb-4">S</span>
          <p className="text-neutral-400 text-lg">
            Nenhuma arte encontrada para esta seleção no grid.
          </p>
        </div>
      )}
    </div>
  );
}