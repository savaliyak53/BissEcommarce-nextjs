import { product, categorys } from "../types";

const products: product = {
  product: "/products?limit=100",
};

const category: categorys = {
  categories: "/products/categories",
};

export const apiRoutes = {
  ...products,
  ...category,
};
