// import styles from "@/../style/style.module.css";
"use client";
import { useGetProducts } from "../../Hooks/api_hooks/products";
import Categories from "../../components/category";
import Footer from "../../components/footer";
import HeroSection from "../../components/heroSection";
import Navbar from "../../components/navbar";

export default function Home() {
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
