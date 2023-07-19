import React from "react";
import Navbar from "../../../../components/navbar";

export default function SingleProducts({
  params,
}: {
  params: { singleProduct: string };
}) {
  const productType = params.singleProduct;
  return (
    <div>
      <Navbar />
      <p>Post:{productType}</p>
    </div>
  );
}
