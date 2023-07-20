import React from "react";
import { useGetCategories } from "../Hooks/api_hooks/category";

const CategoryBar = () => {
  const { data: Category }: any = useGetCategories();
  return <div>categoryProduct</div>;
};

export default CategoryBar;
