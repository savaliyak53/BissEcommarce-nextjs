/* eslint-disable @next/next/no-img-element */
import React, { useMemo } from "react";
import { filterData, filterProp, params, prod } from "../types";
import { useGetProducts } from "../Hooks/api_hooks/products";
import AddPercent from "../helper/addPercentage";
import { useRouter } from "next/navigation";
import GetRandomInteger from "../helper/createReviwNo";
import { LoaderIcon } from "./loader";

const FilterProducts = ({ isOpen, params, filterProduct }: filterProp) => {
  const { search, sorting, brand, star, priceSlider } = filterProduct ?? {};
  const { data: productData, isLoading }: any = useGetProducts();
  const productDatas = productData?.data.products;
  const filteredProducts = productDatas?.filter((product: prod) => {
    return (
      product.category === params ||
      product.brand === params ||
      params === "products"
    );
  });
  const filter: any = useMemo(() => {
    let products = filteredProducts;

    if (search) {
      const searchLower = search.toLowerCase();
      products = products.filter((item: any) => {
        const descriptionLower = item.description.toLowerCase();
        const categoryLower = item.category.toLowerCase();
        const brandLower = item.brand.toLowerCase();

        return (
          descriptionLower.includes(searchLower) ||
          categoryLower.includes(searchLower) ||
          brandLower.includes(searchLower)
        );
      });
    }

    if (brand && brand !== "All") {
      products = products.filter((item: any) => {
        return item.brand === brand;
      });
    }

    if (star && star !== 5) {
      products = products.filter((item: any) => {
        return item.rating < star;
      });
    }
    if (priceSlider && priceSlider !== 0) {
      products = products.filter((item: any) => {
        return item.price < priceSlider;
      });
    }

    if (sorting) {
      if (sorting === "price-asc") {
        products.sort((a: prod, b: prod) => a.price - b.price);
      } else if (sorting === "price-desc") {
        products.sort((a: prod, b: prod) => b.price - a.price);
      } else if (sorting === "a-z") {
        products?.sort((a: prod, b: prod) => a.title.localeCompare(b.title));
      } else if (sorting === "z-a") {
        products.sort((a: prod, b: prod) => b.title.localeCompare(a.title));
      }
    }

    return products;
  }, [filteredProducts, search, sorting, brand]);

  return (
    <>
      {isOpen ? (
        <Listview
          filteredProducts={filter ? filter : filteredProducts}
          isLoading={isLoading}
        />
      ) : (
        <Gridview
          filteredProducts={filter ? filter : filteredProducts}
          isLoading={isLoading}
        />
      )}
    </>
  );
};

const Listview = ({ filteredProducts, isLoading }: any) => {
  const router = useRouter();
  return (
    <>
      <div className="col-start-3 col-end-7 mx-3 desktop:-mt-[36px] lg:mt-[-7px] text-gray-800 row-start-2 row-end-7 overflow-y-scroll">
        {isLoading ? (
          <LoaderIcon size="30" classNames="h-40" />
        ) : (
          filteredProducts?.map((item: prod) => {
            return (
              <div
                key={item.id}
                className=" border border-slate-400 mb-2 px-3 rounded-lg  text-gray-900"
                onClick={() => router.push(`/singleproducts/${item.id}`)}
              >
                <div className="h-max w-max relative top-1 px-2 right-2 rounded-lg shadow-black shadow-md text-black bg-red-500  text-center">
                  Up to {item.discountPercentage}% off
                </div>
                <div className="flex justify-between">
                  <div className="flex w-[70%] items-center space-x-6  p-2 -mt-5">
                    <img
                      src={item.thumbnail}
                      alt=" product imgee"
                      className="w-64 h-56 p-1 object-cover object-center rounded-lg"
                    />

                    <div className="">
                      <div className="flex items-baseline">
                        <span className=" text-teal-800 text-xs uppercase font-semibold tracking-wide">
                          {item.brand}
                        </span>
                      </div>
                      <h4 className="mt-1 text-xl font-semibold uppercase leading-tight truncate">
                        {item.title}
                      </h4>
                      <div className="-mt-1">{item.category}</div>
                      <div className="-mt-1 w-[90%]">
                        <span className="font-semibold ">discription:</span>
                        {item.description}
                      </div>
                      <div className="-mt-1">
                        <span className="font-bold !text-teal-800">
                          {item.rating}/5 rating (based on <GetRandomInteger />
                          people)
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col justify-center">
                    <div className="-mt-1 line-through">
                      price:$
                      <AddPercent
                        number={item.price}
                        percentage={item.discountPercentage}
                      />
                    </div>
                    <div>offer price:${item.price}</div>
                    <button
                      onClick={() => router.push(`/singleproducts/${item.id}`)}
                      className="bg-blue-400 p-1 rounded-md"
                    >
                      Buying options
                    </button>
                  </div>
                </div>
              </div>
            );
          })
        )}
      </div>
      <div className="col-start-7 row-start-2 row-end-4 col-end-9 border desktop:-mt-[36px] lg:mt-[-7px] border-red-500 mx-3 text-gray-800">
        123
      </div>
      <div className="col-start-7 row-start-4 row-end-7 col-end-9 border py-[40px] border-red-500 mx-3 mt-3 text-gray-800">
        123
      </div>
    </>
  );
};

const Gridview = ({ filteredProducts, isLoading }: any) => {
  const router = useRouter();
  return isLoading ? (
    <div className="col-start-3 col-end-9 mt-3 text-gray-800">
      <LoaderIcon size="30" classNames="h-40" />
    </div>
  ) : (
    <div className="col-start-1 lg:col-start-3 col-end-9 row-start-1 mt-2 lg:row-start-2 row-end-7 desktop:-mt-[36px] lg:mt-[-7px] text-gray-800 overflow-y-scroll">
      <div className="grid lg:grid-cols-5 gap-3 mx-3 sm:grid-cols-4 grid-cols-2">
        {filteredProducts?.map((item: prod) => {
          return (
            <div
              key={item.id}
              className="wrapper border border-slate-400 rounded-lg antialiased text-gray-900"
              onClick={() => router.push(`/singleproducts/${item.id}`)}
            >
              <div>
                <img
                  src={item.thumbnail}
                  alt=" product imgee"
                  className="w-[80%] mx-auto p-3 h-60 object-cover object-center rounded-lg"
                />
                <div className="relative ml-5 bottom-8 p-1 px-2  rounded-lg shadow-black shadow-md text-black bg-red-500 w-max text-center">
                  Up to {item.discountPercentage}% off
                </div>

                <div className="p-3 -mt-6">
                  <div className=" border-red-400 pb-2  shadow-lg">
                    <div className="flex items-baseline">
                      <span className=" text-teal-800 text-xs   uppercase font-semibold tracking-wide">
                        {item.brand}
                      </span>
                    </div>
                    <h4 className="mt-1 text-xl font-semibold uppercase leading-tight truncate">
                      {item.title}
                    </h4>
                    <div className="-mt-1">{item.category}</div>
                    <div className="-mt-1 line-through">
                      price:$
                      <AddPercent
                        number={item.price}
                        percentage={item.discountPercentage}
                      />
                    </div>
                    <div>offer price:${item.price}</div>
                    <div>
                      <button
                        onClick={() =>
                          router.push(`/singleproducts/${item.id}`)
                        }
                        className="bg-blue-400 p-1 rounded-md"
                      >
                        Buying options
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FilterProducts;
