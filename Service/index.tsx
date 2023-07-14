import { product, categorys } from "../types";

const products: product = {
  product: "/products",
};

const category: categorys = {
  categories: "/products/categories",
};

export const apiRoutes = {
  ...products,
  ...category,
};
