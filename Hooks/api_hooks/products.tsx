import { getProducts } from "../../Service/products";
import cacheKey from "../../Constant/chechKey";
import { useQuery } from "@tanstack/react-query";

export const useGetProducts = () => useQuery([cacheKey.products], getProducts);
