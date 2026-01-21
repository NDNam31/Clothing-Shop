export type Role = 'USER' | 'ADMIN';

export interface User {
  id: string;
  name: string;
  email: string;
  role: Role;
}

export interface Category {
  id: string;
  name: string;
  slug: string;
}

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  category_id?: string;
  category?: Category;
  image_url: string; // Simplified for UI demo
  gender: 'male' | 'female' | 'unisex';
}
