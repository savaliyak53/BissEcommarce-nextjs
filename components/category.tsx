/* eslint-disable @next/next/no-img-element */
import React from "react";
import { useGetCategories } from "../Hooks/api_hooks/category";
import { useGetProducts } from "../Hooks/api_hooks/products";

const Categories: React.FC = () => {
  const { data: Category }: any = useGetCategories();
  const { data: productsData, isLoading: isproductLoda } = useGetProducts();
  const productsList = productsData?.data.products;
  const CategoryList: string[] = Category?.data || [];

  const filteredProducts: any = [];

  for (const category of CategoryList) {
    const product = productsList.find(
      (item: any) => item.category === category
    );

    if (product) {
      filteredProducts.push(product);
    }
  }

  const companyList = productsList?.map((item: any) => {
    return item?.brand;
  });

  const uniqueCompany: Set<string> = new Set(companyList);

  const filteredCompany: any = [];

  for (const comp of uniqueCompany) {
    const product = productsList.find((item: any) => item.brand === comp);
    if (product) {
      filteredCompany.push(product);
    }
  }

  return (
    <div className="bg-slate-200 pt-3">
      <h1 className="text-3xl font-bold p-5 ">Shop by Category</h1>
      <div className="grid grid-flow-col gap-x-24  lg:gap-x-7 w-full overflow-x-auto parent-container ">
        {filteredProducts?.map((product: any) => {
          return (
            <div
              key={product.id}
              className="w-[150%] lg:w-[200%] pl-10 child-div"
            >
              <img
                src={product?.images[2]}
                alt="category"
                className="h-40 object-contain"
              />
              <p className="text-xl font-medium capitalize text-center py-2 sm:text-start">
                {product.category}
              </p>
            </div>
          );
        })}
      </div>
      <hr className="border border-b-0 border-gray-400" />
      <h1 className="text-3xl font-bold p-5 ">Shop by Company</h1>
      <div className="grid grid-flow-col gap-x-24 sm:gap-x-32   w-full overflow-x-auto parent-container ">
        {filteredCompany?.map((product: any) => {
          return (
            <div key={product.id} className="w-[200%] pl-10 child-div">
              <img
                src={product?.images[0]}
                alt="company"
                className="h-40 object-contain"
              />
              <p className="text-xl font-medium capitalize text-center py-2 sm:text-start">
                {product.brand}
              </p>
            </div>
          );
        })}
      </div>
      <hr className="border border-b-0 border-gray-400" />
      <h1 className="text-3xl font-bold p-5 ">Shop by Discount</h1>
      <div className="grid grid-flow-col gap-x-24 lg:gap-x-32 w-full overflow-x-auto parent-container ">
        {productsList?.map((product: any) => {
          return (
            <div key={product.id} className="w-[200%] pl-10 child-div">
              <img
                src={product?.images[0]}
                alt="discount"
                className="h-40 object-contain"
              />
              <p className="text-xl font-medium capitalize text-center py-2 sm:text-start">
                Up to {product.discountPercentage}% off
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Categories;
