export interface Product {
  id: string;
  name: string;
  category: 'cortinas' | 'persianas' | 'almofadas' | 'papeis';
  description: string;
  fullDetails: string;
  features: string[];
  materials: string[];
  image: string;
}

export type RoomType = 'sala' | 'quarto' | 'escritorio';

export interface RoomOption {
  id: RoomType;
  name: string;
  description: string;
}

export interface ProductTypeOption {
  id: string;
  name: string;
  category: 'cortinas' | 'persianas';
  imagePlaceholder: string;
  basePricePerSqm: number;
}

export interface ColorOption {
  id: string;
  name: string;
  hex: string;
  description: string;
}
