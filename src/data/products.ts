import { Product, Category } from "@/types/product";

export const categories: Category[] = [
  {
    id: "1",
    name: "Senna Collection",
    slug: "senna-collection",
    description: "Homenagem ao maior piloto de todos os tempos",
    image: "/images/categories/senna.jpg",
  },
  {
    id: "2",
    name: "F1 Legends",
    slug: "f1-legends",
    description: "Os maiores nomes da história da Fórmula 1",
    image: "/images/categories/legends.jpg",
  },
  {
    id: "3",
    name: "Carros Clássicos",
    slug: "classic",
    description: "Máquinas que marcaram época",
    image: "/images/categories/classic.jpg",
  },
  {
    id: "4",
    name: "F1 Moderna",
    slug: "modern",
    description: "A nova era da Fórmula 1",
    image: "/images/categories/modern.jpg",
  },
];

export const products: Product[] = [
  {
    id: "1",
    name: "Senna McLaren 1988",
    slug: "senna-mclaren-1988",
    description:
      "Arte exclusiva retratando Ayrton Senna em seu icônico capacete durante a temporada de 1988, quando conquistou seu primeiro título mundial.",
    price: 299.9,
    originalPrice: 399.9,
    category: "senna",
    images: ["/images/products/senna-1988.jpg"],
    sizes: ["30x40cm", "50x70cm", "70x100cm"],
    inStock: true,
    featured: true,
    createdAt: new Date("2024-01-01"),
  },
  {
    id: "2",
    name: "Senna Rain Master",
    slug: "senna-rain-master",
    description:
      "Obra que captura a maestria de Senna na chuva, considerado o melhor piloto de todos os tempos em condições adversas.",
    price: 349.9,
    category: "senna",
    images: ["/images/products/senna-rain.jpg"],
    sizes: ["30x40cm", "50x70cm", "70x100cm"],
    inStock: true,
    featured: true,
    createdAt: new Date("2024-01-02"),
  },
  {
    id: "3",
    name: "Senna Interlagos 1991",
    slug: "senna-interlagos-1991",
    description:
      "A emocionante vitória em casa, no GP do Brasil de 1991, onde Senna cruzou a linha de chegada com o carro enguiçado.",
    price: 379.9,
    category: "senna",
    images: ["/images/products/senna-interlagos.jpg"],
    sizes: ["30x40cm", "50x70cm", "70x100cm"],
    inStock: true,
    featured: true,
    createdAt: new Date("2024-01-03"),
  },
  {
    id: "4",
    name: "Schumacher Ferrari",
    slug: "schumacher-ferrari",
    description:
      "Michael Schumacher em sua lendária Ferrari, período em que dominou a F1 com 5 títulos consecutivos.",
    price: 289.9,
    category: "f1-legends",
    images: ["/images/products/schumacher.jpg"],
    sizes: ["30x40cm", "50x70cm", "70x100cm"],
    inStock: true,
    createdAt: new Date("2024-01-04"),
  },
  {
    id: "5",
    name: "Hamilton 7 Títulos",
    slug: "hamilton-7-titulos",
    description:
      "Lewis Hamilton celebrando sua conquista histórica de 7 títulos mundiais, igualando o recorde de Schumacher.",
    price: 279.9,
    category: "f1-legends",
    images: ["/images/products/hamilton.jpg"],
    sizes: ["30x40cm", "50x70cm", "70x100cm"],
    inStock: true,
    createdAt: new Date("2024-01-05"),
  },
  {
    id: "6",
    name: "Verstappen Dominância",
    slug: "verstappen-dominancia",
    description:
      "Max Verstappen em sua Red Bull dominante, representando a nova era da Fórmula 1.",
    price: 269.9,
    category: "modern",
    images: ["/images/products/verstappen.jpg"],
    sizes: ["30x40cm", "50x70cm", "70x100cm"],
    inStock: true,
    createdAt: new Date("2024-01-06"),
  },
  {
    id: "7",
    name: "Prost vs Senna",
    slug: "prost-vs-senna",
    description:
      "A maior rivalidade da história da F1 eternizada em arte. Prost e Senna lado a lado.",
    price: 399.9,
    category: "f1-legends",
    images: ["/images/products/prost-senna.jpg"],
    sizes: ["30x40cm", "50x70cm", "70x100cm"],
    inStock: true,
    featured: true,
    createdAt: new Date("2024-01-07"),
  },
  {
    id: "8",
    name: "Ferrari F40",
    slug: "ferrari-f40",
    description:
      "O último carro aprovado pessoalmente por Enzo Ferrari, um ícone do design automotivo.",
    price: 249.9,
    category: "classic",
    images: ["/images/products/ferrari-f40.jpg"],
    sizes: ["30x40cm", "50x70cm", "70x100cm"],
    inStock: true,
    createdAt: new Date("2024-01-08"),
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getProductsByCategory(categorySlug: string): Product[] {
  const categoryMap: Record<string, string> = {
    "senna-collection": "senna",
    "f1-legends": "f1-legends",
    classic: "classic",
    modern: "modern",
  };
  const category = categoryMap[categorySlug] || categorySlug;
  return products.filter((p) => p.category === category);
}

export function getFeaturedProducts(): Product[] {
  return products.filter((p) => p.featured);
}

export function getCategoryBySlug(slug: string): Category | undefined {
  return categories.find((c) => c.slug === slug);
}
