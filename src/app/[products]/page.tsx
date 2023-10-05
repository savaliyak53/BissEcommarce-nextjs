"use client";
import React, { useRef, useState } from "react";
import Navbar from "../../../components/navbar";
import { FaList } from "react-icons/fa";
import { BiSolidGrid } from "react-icons/bi";
import FilterProducts from "../../../components/view";
import CategoryBar from "../../../components/categoryProduct";
import Footer2 from "../../../components/footer2";
import { Select, Slider } from "antd";
import { useGetProducts } from "../../../Hooks/api_hooks/products";
import ReactStars from "react-rating-star-with-type";

const Option = Select.Option;

interface FilterProduct {
  sorting:string | null,
  search:string | null,
  brand:string | null,
  star:number,
  priceSlider:number
}

interface Params {
  params:{products:string}
}

interface ProductData {
  [x: string]: any;
  brand:string,
  category:string,
  description:string,
  discountPercentage:number,
  id:number,
  images:string[],
  price:number,
  rating:number,
  stock:number,
  thumbnail:string,
  title:string
}



interface ProductDatas extends Array<ProductData> {}

export default function Products({ params }: Params ):JSX.Element {

  const [filterProduct, setFilterProduct] = useState<FilterProduct>({
    sorting: "a-z",
    search: null,
    brand: "All",
    star: 5,
    priceSlider: 0,
  });

  const productType:string = decodeURIComponent(params.products);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const onRequestClose = ():void => setIsOpen(!isOpen);

  const { data: productData, isLoading }:{data:any,isLoading:boolean} = useGetProducts();

  const productDatas:ProductDatas = productData?.data.products;

  const productBrand: string[] = productDatas?.map((item: ProductData) => item.brand);

  const brand:string[] = ["All", ...new Set(productBrand)];

  const starRating:number[] = [4.8, 4.6, 4.4, 4.2, 3.5];

  const handleStar = (value: number):void => {
    setFilterProduct({
      ...filterProduct,
      star: value,
    });
  };

  const handleSlider = (value: number):void => {
    setFilterProduct({
      ...filterProduct,
      priceSlider: value,
    });
  };

  const handSort = (value: string):void => {
    setFilterProduct({
      ...filterProduct,
      sorting: value,
    });
  };

  const handleSearch = (event:React.ChangeEvent<HTMLInputElement>):void => {
    setFilterProduct({
      ...filterProduct,
      search: event.target.value,
    });
  };

  const handleBrand = (value: string):void => {
    setFilterProduct({
      ...filterProduct,
      brand: value,
    });
  };

  return (
    <>
      <Navbar />
      <div>
        <div className="grid grid-cols-8 grid-rows-6 h-[100vh] mb-5">
          <div className="hidden lg:block col-span-2 row-start-2 row-end-7 desktop:-mt-[36px] lg:mt-[-7px] mx-3 border rounded-lg border-slate-400">
            <div className="flex justify-between items-center m-3 ">
              <input
                type="search"
                placeholder="Search"
                className="border p-1 px-2 w-80 mr-3   h-12 rounded-md border-gray-800 focus:outline-none"
                onChange={handleSearch}
              />
              {isOpen ? (
                <BiSolidGrid
                  onClick={onRequestClose}
                  title="Grid"
                  className="w-12 h-12"
                />
              ) : (
                <FaList
                  onClick={onRequestClose}
                  title="List"
                  className="w-8 h-8"
                />
              )}
            </div>
            <div className="text-center ">
              <Select
                className="w-[80%]"
                placeholder="Sort products"
                popupClassName="border border-gray-800 rounded-lg "
                bordered={false}
                rootClassName="!border !border-gray-800 rounded-lg"
                onChange={handSort}
              >
                <Option value="price-asc">Sort by Price (Low to High)</Option>
                <Option value="price-desc">Sort by Price (High to Low)</Option>
                <Option value="a-z">Sort by Name (A to Z)</Option>
                <Option value="z-a">Sort by Name (Z to A)</Option>
              </Select>
            </div>

            <div className="text-center my-3">
              <Select
                className="w-[80%]"
                popupClassName="border border-gray-800 rounded-lg "
                bordered={false}
                rootClassName="!border !border-gray-800 capitalize rounded-lg"
                onChange={handleBrand}
                placeholder="Select Company"
                showSearch={true}
              >
                {brand?.map((item: any) => {
                  return (
                    <Option key={item} value={item}>
                      {item}
                    </Option>
                  );
                })}
              </Select>
            </div>
            <div className="flex flex-col items-center">
              <h1 className="text-2xl py-2 font-medium text-gray-800">
                Find by Rating
              </h1>
              {starRating?.map((star: number, index) => {
                return (
                  <div key={index} onClick={() => handleStar(star)}>
                    <ReactStars
                      activeColors={["yellow"]}
                      onChange={handleStar}
                      value={5 - index}
                      size={22}
                    />
                  </div>
                );
              })}
            </div>
            <div className="mt-3">
              <h1 className="text-center text-2xl font-medium text-gray-800">
                Pricing
              </h1>
              <Slider
                className="w-[50%] -mt-[2px] mx-auto"
                onChange={handleSlider}
                min={0}
                max={2200}
                tooltip={{ placement: "bottom" }}
                trackStyle={{ background: " #2d3748" }}
              />
            </div>
          </div>
          <div className=" col-start-1 self-start col-end-9 ">
            <CategoryBar />
          </div>
          <FilterProducts
            isOpen={isOpen}
            params={productType}
            filterProduct={filterProduct}
          />
        </div>
      </div>
      <Footer2 />
    </>
  );
}
