"use client";
import { useRouter } from "next/navigation";
import React from "react";

interface navbarProps {
  children: React.ReactNode;
}

const Navbar = ({ children }: navbarProps) => {
  const router = useRouter();

  const handleRouter = (route: string) => {
    router.push(route);
  };

  return (
    <>
      <div className="flex justify-around bg-gray-800 font-semibold text-white py-4">
        <div className="flex justify-between  w-[35%]">
          <div onClick={() => handleRouter("/")}>LOGO</div>
          <div className="lg:flex gap-x-5 hidden ">
            <div onClick={() => handleRouter("/")}>Home</div>
            <div onClick={() => handleRouter("/products")}>Products</div>
            <div onClick={() => handleRouter("/about")}>About</div>
            <div onClick={() => handleRouter("/contact")}>Contact</div>
            <div onClick={() => handleRouter("/cart")}>Cart</div>
          </div>
        </div>
        <div className="flex gap-x-3 ">
          <div className="lg:hidden">Icon</div>
          <div onClick={() => handleRouter("/registration")}>Login</div>
          <div onClick={() => handleRouter("/registration/joinus")}>JoinUs</div>
        </div>
      </div>
      {children}
    </>
  );
};

export default Navbar;
