"use client";

import Link from "next/link";
import Styles from "./NewArrivals.module.css";
import type { Product } from "@/types/type";
import Card from "@/components/card/Card";

const products: Product[] = [
  {
    id: 1,
    title: "Paris Graphic Panel Tee (Grey & Brown)",
    image: "/products/product-1.jpg",
    oldPrice: 200,
    newPrice: 1050,
    discount: "40% Off",
    sizes: ["S", "M", "L", "XL"],
  },
  {
    id: 2,
    title: "Paris Statement Panel Tee (Grey & Sand)",
    image: "/products/product-2.jpg",
    oldPrice: 1750,
    newPrice: 1050,
    discount: "40% Off",
    sizes: ["S", "M", "L", "XL"],
  },
  {
    id: 3,
    title: "Black & Grey Chevron V-Neck T-Shirt",
    image: "/products/product-3.jpg",
    oldPrice: 1850,
    newPrice: 1110,
    discount: "40% Off",
    sizes: ["S", "M", "L", "XL"],
  },
  {
    id: 4,
    title: "Black & Red Chevron V-Neck T-Shirt",
    image: "/products/product-4.jpg",
    oldPrice: 1850,
    newPrice: 1110,
    discount: "40% Off",
    sizes: ["S", "M", "L", "XL"],
  },
];

const NewArrivals = () => {
  return (
    <section className={Styles.newArrival}>
      <div className={Styles.container}>
        <h2 className={Styles.heading}>NEW ARRIVALS</h2>

        <div className={Styles.grid}>
          {products.map((product) => (
            <Card key={product.id} product={product} />
          ))}
        </div>

        <Link href="/" className={Styles.viewAll}>
          VIEW ALL
        </Link>
      </div>
    </section>
  );
};

export default NewArrivals;
