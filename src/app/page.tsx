// import styles from "@/../style/style.module.css";
"use client";
import { useGetProducts } from "../../Hooks/api_hooks/products";
import Navbar from "../../components/navbar";

export default function Home() {
  const { data } = useGetProducts();
  return (
    <Navbar>
      <h1 className="text-3xl">Page</h1>
    </Navbar>
  );
}
