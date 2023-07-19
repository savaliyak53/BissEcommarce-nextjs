/* eslint-disable @next/next/no-img-element */
import React from "react";
import { params, prod } from "../types";
import { useGetProducts } from "../Hooks/api_hooks/products";

const FilterProducts = ({ isOpen, params }: any) => {
  const { data: productData, isLoading }: any = useGetProducts();
  const productDatas = productData?.data.products;
  const filteredProducts = productDatas?.filter((product: prod) => {
    return (
      product.category === params ||
      product.brand === params ||
      params === "products"
    );
  });
  console.log(params);
  return (
    <>
      {isOpen ? (
        <Listview filteredProducts={filteredProducts} />
      ) : (
        <Gridview filteredProducts={filteredProducts} />
      )}
    </>
  );
};

const Listview = ({ filteredProducts }: any) => {
  return (
    <div className="col-start-3 col-end-9 mx-6 space-y-3">
      {filteredProducts?.map((item: prod) => {
        return (
          <div key={item.id} className="border border-red-500 flex h-60">
            <img
              src={item?.images[0]}
              alt="img"
              className="h-60 w-96 object-contain border border-gray-200 p-2 rounded-md"
            />
            <div>
              <h1>{item.title}</h1>
            </div>
          </div>
        );
      })}
    </div>
  );
};

const Gridview = ({ filteredProducts }: any) => {
  return (
    <div className="col-start-3 col-end-9 mx-6 mt-3">
      <div className="grid grid-cols-4 gap-3 ">
        {filteredProducts?.map((item: prod) => {
          return (
            <div key={item.id} className=" p-2  border border-gray-800">
              <img
                src={item?.images[0]}
                alt="img"
                className="h-60 border object-contain mx-auto border-gray-200 p-1 rounded-md"
              />
              <div>
                <h1>{item.title}</h1>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FilterProducts;
