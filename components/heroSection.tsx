/* eslint-disable @next/next/no-img-element */
"use client";
import { useRouter } from "next/navigation";
import React from "react";
import { useGetProducts } from "../Hooks/api_hooks/products";
import { Carousel } from "antd";
import { LoaderIcon } from "./loader";

const HeroSection: React.FC = () => {
  const { data, isLoading }: any = useGetProducts();
  const router = useRouter();
  const products = data?.data.products;

  const contentStyle: React.CSSProperties = {
    margin: 0,
    height: "260px",
    color: "#fff",
    lineHeight: "160px",
    textAlign: "center",
    background: "white",
    width: "360px",
    objectFit: "contain",
  };

  const items: { id: number; image: string[] }[] = products
    ?.filter((product: any) => {
      if (
        product?.title === "iPhone 9" ||
        product?.title === "Skin Beauty Serum." ||
        product?.title === "perfume Oil"
      ) {
        return product?.id;
      }
    })
    .map((product: any) => {
      return { id: product?.id, image: product?.images };
    });

  const [firstObj, secondObj, thirdObj] = items ?? [];

  const mobileImg: string[] | undefined = firstObj?.image;
  const skinImg: string[] | undefined = secondObj?.image;
  const perfumeImg: string[] | undefined = thirdObj?.image;

  const mobileId = firstObj?.id;
  const skinId = firstObj?.id;
  const perfumeId = firstObj?.id;

  return (
    <>
      <div className="h-auto bg-gray-800 text-white py-10 space-y-[2.5rem] flex flex-col items-center justify-around">
        <div className="sm:w-[60%] mx-5 leading-tight text-center font-bold text-6xl">
          Bizz platform for everyone
        </div>
        <div className="w-[40%] space-y-[2.5rem] leading-snug font-semibold text-center ">
          <div>
            Is No Sore It Will Not Heal, No Ecommerce It Will Not Subdue ll
            Wonder Where The Yellow Went, When You Brush Your Teeth With
            Ecommerce
          </div>
          <button
            className="p-5 bg-blue-500 rounded-lg "
            onClick={() => router.push("/products")}
          >
            Go to shopping
          </button>
        </div>
        <div className="flex-lg lg:flex justify-center !mx-5 space-y-6 lg:space-y-0">
          <Carousel
            dots={false}
            autoplay={true}
            className="w-[25rem] mx-3 shadow-xl shadow-black z-0"
          >
            {isLoading ? (
              <LoaderIcon size="30" classNames="bg-white h-[260px]" />
            ) : (
              mobileImg?.map((img, index) => {
                return (
                  <div key={index}>
                    <img
                      src={img}
                      alt="img"
                      style={contentStyle}
                      className="!object-contain"
                    />
                  </div>
                );
              })
            )}
          </Carousel>
          <Carousel
            dots={false}
            autoplay={true}
            className="w-[25rem] !mx-3 shadow-xl shadow-black"
          >
            {isLoading ? (
              <LoaderIcon size="30" classNames="bg-white h-[260px]" />
            ) : (
              skinImg?.map((img, index) => {
                return (
                  <div key={index}>
                    <img src={img} alt="img" style={contentStyle} />
                  </div>
                );
              })
            )}
          </Carousel>
          <Carousel
            dots={false}
            autoplay={true}
            className="w-[25rem] !mx-3 shadow-xl shadow-black"
          >
            {isLoading ? (
              <LoaderIcon size="30" classNames="bg-white h-[260px]" />
            ) : (
              perfumeImg?.map((img, index) => {
                return (
                  <div key={index}>
                    <img src={img} alt="img" style={contentStyle} />
                  </div>
                );
              })
            )}
          </Carousel>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
