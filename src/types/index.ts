/**
 * Tipos TypeScript para o projeto BOX BOX
 */

// Categoria de produtos
export interface Category {
  id: string;
  name: string;
  slug: string;
  description: string | null;
  imageUrl: string | null;
  isActive: boolean;
  sortOrder: number;
  createdAt: Date;
  updatedAt: Date;
}

// Produto
export interface Product {
  id: string;
  name: string;
  slug: string;
  description: string | null;
  price: number;
  imageUrl: string;
  images: string[] | null;
  isActive: boolean;
  isFeatured: boolean;
  stock: number;
  categoryId: string;
  category?: Category;
  sizes?: Size[];
  createdAt: Date;
  updatedAt: Date;
}

// Tamanho
export interface Size {
  id: string;
  name: string;
  width: number;
  height: number;
  price: number;
  isActive: boolean;
}

// Lead (contato via WhatsApp)
export interface Lead {
  id: string;
  name: string | null;
  phone: string;
  message: string | null;
  productId: string | null;
  source: string | null;
  createdAt: Date;
}

// Item de navegação
export interface NavItem {
  name: string;
  href: string;
  icon?: React.ComponentType<{ className?: string }>;
}

// Props comuns para componentes
export interface BaseProps {
  className?: string;
  children?: React.ReactNode;
}

// Resposta padrão de API
export interface ApiResponse<T = unknown> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}

// Filtros de produtos
export interface ProductFilters {
  categoryId?: string;
  search?: string;
  minPrice?: number;
  maxPrice?: number;
  sortBy?: "name" | "price" | "createdAt";
  sortOrder?: "asc" | "desc";
  page?: number;
  limit?: number;
}

// Resultado paginado
export interface PaginatedResult<T> {
  items: T[];
  total: number;
  page: number;
  limit: number;
  totalPages: number;
  hasMore: boolean;
}
