export interface Product {
  id: string;
  name: string;
  slug: string;
  description: string;
  price: number;
  originalPrice?: number;
  category: "senna" | "f1-legends" | "classic" | "modern";
  images: string[];
  sizes: string[];
  inStock: boolean;
  featured?: boolean;
  createdAt: Date;
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  description: string;
  image: string;
}
