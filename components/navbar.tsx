"use client";
import { usePathname, useRouter } from "next/navigation";
import React, {useState } from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import { ImMenu3, ImMenu4 } from "react-icons/im"

const Navbar = () => {
  const token = localStorage.getItem("token")
  const [openNav, setOpenNav] = useState(false)
 
  const router = useRouter();
  const handleRouter = (route: string) => {
    router.push(route);
    const array =Array(10).fill(3)
  };

  const path = usePathname()

  const handleOpenNav = () => {
    setOpenNav(!openNav)
  } 
  return (
    <div className="sticky top-0 bg-gray-800 z-50" >
      <div className="flex justify-around font-bold text-white py-3 px-10 lg:px-0">
        <div className={`flex justify-between relative w-[35%]`}>
          <div
            className="space-x-3 my-2 text-3xl mr-3 flex"
          >
            <span  onClick={() => handleRouter("/")}>BISS</span>
            <span className="lg:hidden text-3xl navbarhover" onClick={handleOpenNav} >{ openNav? <ImMenu4/> : <ImMenu3/> } </span>
          </div>
          <div className={`lg:!flex lg:!flex-row lg:!static lg:!bg-transparent lg:!space-y-0 lg:!w-fit lg:!px-0  gap-x-5 py-3 ${openNav?" flex-col absolute top-14 space-y-2 rounded-lg bg-black w-36 px-5":"hidden"}`}>
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
        <div className="flex items-center sm:gap-x-5 gap-x-3">
        { token?<div
            onClick={() =>{ localStorage.removeItem("token");router.refresh()}}
              className={` navbarhover ${(path === "/registration") ? 'text-black px-2  bg-blue-400':""}`}
          >
            Logout
          </div> :
          <>  
            <div
              onClick={() => handleRouter("/registration")}
              className={` navbarhover ${(path === "/registration") ? 'text-black px-2  bg-blue-400' : ""}`}
            >
              Login
            </div><div
              onClick={() => handleRouter("/registration/joinus")}
              className="bg-blue-400 rounded-md h-[3rem] p-3"
            >
                JOIN US
                <AiOutlineArrowRight className="inline relative z-0 bottom-[1px] w-8 h-6" />
              </div>
          </>
          }
        </div>
      </div>
    </div>
  );
};

export default Navbar;
