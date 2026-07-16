export interface Category {
  id: number;
  title: string;
  image: string;
  href: string;
}

export interface Product {
  id: number;
  title: string;
  image: string;
  oldPrice: number;
  newPrice: number;
  discount: string;
  sizes: string[];
  category: string;
}
