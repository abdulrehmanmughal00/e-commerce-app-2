"use client";

import { useSearchParams } from "next/navigation";
import { products } from "@/data/Product";
import Card from "@/components/Card/Card";
import styles from "./Search.module.css";

export default function SearchPage() {
  const searchParams = useSearchParams();

  const query = searchParams.get("q") || "";

  const filteredProducts = products.filter((item) =>
    item.title.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <section className={styles.searchPage}>
      <div className={styles.container}>
        <h2 className={styles.heading}>
          Search Results for{" "}
          <span>"{query}"</span>
        </h2>

        <p className={styles.count}>
          {filteredProducts.length} Product
          {filteredProducts.length !== 1 && "s"} Found
        </p>

        {filteredProducts.length > 0 ? (
          <div className={styles.grid}>
            {filteredProducts.map((product) => (
              <Card
                key={product.id}
                product={product}
              />
            ))}
          </div>
        ) : (
          <div className={styles.empty}>
            <h3>No Products Found 😔</h3>

            <p>
              Try searching with another keyword.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}