export interface product {
  product: string;
}
export interface categorys {
  categories: string;
}
export interface auth {
  authentication: string;
}

export interface params {
  param: string;
}

export interface prod {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: string[];
}

export interface addPercentdata {
  number: number;
  percentage: number;
}
export interface filterProp {
  params: string;
  isOpen: boolean;
  filterProduct?: filterData;
}

export interface filterData {
  sorting: string | null;
  search: string | null;
  brand: string | null;
  star: number | null;
  priceSlider: number | null;
}
