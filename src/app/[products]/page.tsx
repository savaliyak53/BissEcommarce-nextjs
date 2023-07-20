"use client";

import React, { useState } from "react";
import Navbar from "../../../components/navbar";
import { FaList } from "react-icons/fa";
import { BiSolidGrid } from "react-icons/bi";
import FilterProducts from "../../../components/view";
import CategoryBar from "../../../components/categoryProduct";

export default function Products({ params }: { params: { products: string } }) {
  const productType = decodeURIComponent(params.products);
  const [isOpen, setIsOpen] = useState(true);

  const onRequestClose = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar />
      <div className="grid grid-cols-8 grid-rows-6 h-[100vh]">
        <div className="col-span-2 row-start-2 row-end-7 bg-red-500">
          You can see in the HTML I commented out the cell that will used by the
          rowspan and added a .test class with a height and background color so
          You can see in the HTML I commented out the cell that will used by the
          rowspan and added a .test class with a height and background color so
          You can see in the HTML I commented out the cell that will used by the
          rowspan and added a .test class with a height and background color so
          You can see in the HTML I commented out the cell that will used by the
          rowspan and added a .test class with a height and background color so
          {isOpen ? (
            <BiSolidGrid onClick={onRequestClose} title="Grid" />
          ) : (
            <FaList onClick={onRequestClose} title="List" />
          )}
        </div>
        <div className=" col-start-1 border border-red-300  bg-yellow-500 col-end-9">
          <CategoryBar />
        </div>
        <FilterProducts isOpen={isOpen} params={productType} />
      </div>
    </div>
  );
}
