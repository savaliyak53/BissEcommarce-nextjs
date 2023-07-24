// import styles from "@/../style/style.module.css";
"use client";
import { useState } from "react";
import { useGetProducts } from "../../Hooks/api_hooks/products";
import Categories from "../../components/category";
import Footer from "../../components/footer";
import HeroSection from "../../components/heroSection";
import Navbar from "../../components/navbar";
// import PhoneInput from "react-phone-input-2";

export default function Home() {
  const [phone, setPhone] = useState("");
  const { data } = useGetProducts();
  return (
    <>
      <Navbar />
      <HeroSection />
      <Categories />
      <Footer />
    </>
  );
}
