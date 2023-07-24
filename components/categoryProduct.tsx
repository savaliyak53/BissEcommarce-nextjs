import React from "react";
import { useGetCategories } from "../Hooks/api_hooks/category";
import { LoaderIcon } from "./loader";
import { useRouter } from "next/navigation";

const CategoryBar = () => {
  const router = useRouter();
  const { data: Category, isLoading }: any = useGetCategories();
  const Categories = Category?.data;
  return isLoading ? (
    <LoaderIcon size="30" classNames="h-24 bg-slate-300" />
  ) : (
    <div
      id="forTop"
      className="lg:grid grid-cols-10 justify-evenly text-gray-800 px-3 lg:py-1   hidden pl-5 bg-slate-300 gap-3"
    >
      {Categories?.map((item: string) => {
        return (
          <div
            key={item}
            className="capitalize hover:underline"
            onClick={() => router.push(`/${item}`)}
          >
            {item}
          </div>
        );
      })}
    </div>
  );
};

export default CategoryBar;
