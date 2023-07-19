"use client";

import React, { useState } from "react";
import Navbar from "../../../components/navbar";
import { FaList } from "react-icons/fa";
import { BiSolidGrid } from "react-icons/bi";
import FilterProducts from "../../../components/view";
import useModal from "antd/es/modal/useModal";

export default function Products({ params }: { params: { products: string } }) {
  const productType = decodeURIComponent(params.products);
  const [isOpen, setIsOpen] = useState(true);

  const onRequestClose = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar />
      <div className="grid grid-cols-8 grid-rows-6 h-[100vh]">
        <div className="col-span-2 row-start-1 row-end-7 py-10 px-10 fixed w-[25%] top-[57px]">
          You can see in the HTML I commented out the cell that will used by the
          rowspan and added a .test class with a height and background color so
        </div>
        <div className="bg-blue-500 col-start-3 col-end-9 sticky top-[57px]">
          {isOpen ? (
            <BiSolidGrid onClick={onRequestClose} title="Grid" />
          ) : (
            <FaList onClick={onRequestClose} title="List" />
          )}
        </div>
        <FilterProducts isOpen={isOpen} params={productType} />
      </div>
    </div>
  );
}
