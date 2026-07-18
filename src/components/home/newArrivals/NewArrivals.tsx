"use client";

import Link from "next/link";
import Styles from "./NewArrivals.module.css";

import { products } from "@/data/Product";
import Card from "@/components/card/Card";

const NewArrivals = () => {
  const newArrivalProducts = products
    .filter((product) => product.collection === "new-arrivals")
    .slice(0, 4);

  return (
    <section className={Styles.newArrival}>
      <div className={Styles.container}>
        <h2 className={Styles.heading}>NEW ARRIVALS</h2>

        <div className={Styles.grid}>
          {newArrivalProducts.map((product) => (
            <Card key={product.id} product={product} />
          ))}
        </div>

        <Link href="/new-arrivals" className={Styles.viewAll}>
          VIEW ALL
        </Link>
      </div>
    </section>
  );
};

export default NewArrivals;
