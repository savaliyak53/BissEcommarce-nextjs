"use client";
import { usePathname, useRouter } from "next/navigation";
import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import { FaOpencart } from "react-icons/fa";

const Navbar = () => {
  const router = useRouter();
  const handleRouter = (route: string) => {
    router.push(route);
  };

  const path = usePathname()
  console.log(path,"path")

  return (
    <div className="sticky top-0  bg-gray-800  z-50">
      <div className="flex justify-around font-bold text-white py-3 px-10 lg:px-0">
        <div className="flex justify-between w-[35%]">
          <div
            onClick={() => handleRouter("/")}
            className="space-x-3 my-2 text-3xl"
          >
            <span>BISS</span>
            <FaOpencart className="hidden sm:inline font-semibold " />
          </div>
          <div className={`lg:flex gap-x-5 hidden py-3 `}>
            <div onClick={() => handleRouter("/")} className={`navbarhover ${(path === "/") ? 'text-black px-2 bg-blue-400':""}`}>
              Home
            </div>
            <div
              onClick={() => handleRouter("/products")}
              className={`navbarhover ${((path !== "/") && (path !== "/cart")  && (path !== "/about")  && (path !== "/contact") && (path !== "/registration/joinus") && (path !== "/registration")) ? 'text-black px-2 bg-blue-400':""}`}
            >
              Products
            </div>
            <div onClick={() => handleRouter("/about")} className={`navbarhover ${(path === "/about") ? 'text-black px-2 bg-blue-400':""}`}>
              About
            </div>
            <div
              onClick={() => handleRouter("/contact")}
              className={`navbarhover ${(path === "/contact") ? 'text-black px-2 bg-blue-400':""}`}
            >
              Contact
            </div>
            <div onClick={() => handleRouter("/cart")} className={`navbarhover ${(path === "/cart") ? 'text-black px-2 bg-blue-400':""}`}>
              Cart
            </div>
          </div>
        </div>
        <div className="flex sm:gap-x-5 gap-x-3">
          <div className="lg:hidden my-3 navbarhover ">Icon</div>
          <div
            onClick={() => handleRouter("/registration")}
            className="my-3 navbarhover "
          >
            Login
          </div>
          <div
            onClick={() => handleRouter("/registration/joinus")}
            className="bg-blue-400 rounded-md h-[3rem] p-3"
          >
            JOIN US
            <AiOutlineArrowRight className="inline relative z-0 bottom-[1px] w-8 h-6" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
