import { product, categorys } from "../types";

type ApiRoutes = product & categorys
interface ApiR extends product {
  name:string,
  age:number
}

const apir:ApiR = {
  name:"kishan",
  age:12,
  product:"12"
}

const products: product = {
  product: "/products?limit=100",
};

const category: categorys = {
  categories: "/products/categories",
};

export const apiRoutes:ApiRoutes = {
  ...products,
  ...category,
};
