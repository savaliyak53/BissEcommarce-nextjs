// import styles from "@/../style/style.module.css";
"use client";
import Categories from "../../components/category";
import Footer from "../../components/footer";
import HeroSection from "../../components/heroSection";
import Navbar from "../../components/navbar";
// import PhoneInput from "react-phone-input-2";

export default function Home():React.ReactNode {
  return (
    <>
      <Navbar />
      <HeroSection />
      <Categories />
      <Footer />
    </>
  );
}
