import { product, categorys,auth } from "../types";

type ApiRoutes = product & categorys & auth

const products: product = {
  product: "/products?limit=100",
};

const category: categorys = {
  categories: "/products/categories",
};
const authentication: auth = {
  authentication: "/auth/login",
};

export const apiRoutes:ApiRoutes = {
  ...products,
  ...category,
  ...authentication
};
