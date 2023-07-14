import cacheKey from "../../Constant/chechKey";
import { useQuery } from "@tanstack/react-query";
import { getCategories } from "../../Service/category";

export const useGetCategories = () =>
  useQuery([cacheKey.categories], getCategories);
