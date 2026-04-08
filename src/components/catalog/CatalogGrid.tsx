"use client";

import { useState, useMemo } from "react";
import { products } from "@/data/products";
import { ProductCard } from "@/components/product-card";
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

      <p className="text-zinc-400 mb-6">
        {filteredAndSortedProducts.length} produto(s) encontrado(s)
      </p>

      {filteredAndSortedProducts.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredAndSortedProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <p className="text-zinc-400">
            Nenhum produto encontrado nesta categoria.
          </p>
        </div>
      )}
    </div>
  );
}
