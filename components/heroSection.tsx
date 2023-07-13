"use client";
import { useRouter } from "next/navigation";
import React from "react";
import { useGetProducts } from "../Hooks/api_hooks/products";
import { Button, Carousel } from "antd";
import Image from "next/image";

const HeroSection: React.FC = () => {
  const { data, isloading }: any = useGetProducts();
  const router = useRouter();
  const products = data?.data.products;

  const contentStyle: React.CSSProperties = {
    margin: 0,
    height: "260px",
    color: "#fff",
    lineHeight: "160px",
    textAlign: "center",
    width: "360px",
    objectFit:'contain'
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

  if (mobileImg && mobileImg.length > 0) {
    console.log(mobileImg[0]);
  } else {
    console.log("No mobile image found.");
  }

  const mobileId = firstObj?.id;
  const skinId = firstObj?.id;
  const perfumeId = firstObj?.id;

  return (
    <>
      <div className="h-[125vh] bg-gray-800 text-white flex flex-col items-center justify-around">
        <div className="w-[40%] leading-tight text-center font-bold text-6xl">
          Amazing <br /> e-commerce platform for everyone
        </div>
        <div className="w-[40%] space-y-[2.5rem] -mt-32 leading-snug font-semibold text-center ">
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
        <div className="flex justify-center space-x-6 -mt-10 ">
          <Carousel dots={false} autoplay={true} className="w-96">
            {mobileImg?.map((img, index) => {
              return (
                <div key={index}>
                  <img src={img} alt="img" style={contentStyle} />
                </div>
              );
            })}
          </Carousel>
          <Carousel dots={false} autoplay={true} className="w-96">
            {skinImg?.map((img, index) => {
              return (
                <div key={index}>
                  <img src={img} alt="img" style={contentStyle} />
                </div>
              );
            })}
          </Carousel>
          <Carousel dots={false} autoplay={true} className="w-96">
            {perfumeImg?.map((img, index) => {
              return (
                <div key={index}>
                  <img src={img} alt="img" style={contentStyle} />
                </div>
              );
            })}
          </Carousel>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
