"use client";

import { useSearchParams } from "next/navigation";

import { products } from "@/data/Product";

import styles from "./Search.module.css";
import Card from "@/components/card/Card";

export default function SearchPage() {
  const searchParams = useSearchParams();

  const query = searchParams.get("q") || "";

  const filteredProducts = products.filter((item) =>
    item.title.toLowerCase().includes(query.toLowerCase()),
  );

  // ==========================
  // Recommended Products
  // ==========================

  const recommendedProducts = products

    .filter(
      (item) => !filteredProducts.some((product) => product.id === item.id),
    )

    .slice(0, 4);

  return (
    <section className={styles.searchPage}>
      <div className={styles.container}>
        <h2 className={styles.heading}>
          Search Results for <span>&quot;{query}&quot;</span>
        </h2>

        <p className={styles.count}>
          {filteredProducts.length} Product
          {filteredProducts.length !== 1 && "s"}
          Found
        </p>

        {/* ==========================
Search Results
========================== */}

        {filteredProducts.length > 0 ? (
          <div className={styles.grid}>
            {filteredProducts.map((product) => (
              <Card key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className={styles.empty}>
            <h3>No Products Found 😔</h3>

            <p>Try searching with another keyword.</p>
          </div>
        )}

        {/* ==========================
Recommended
========================== */}

        {recommendedProducts.length > 0 && (
          <section className={styles.recommended}>
            <h2>You May Also Like</h2>

            <div className={styles.grid}>
              {recommendedProducts.map((product) => (
                <Card key={product.id} product={product} />
              ))}
            </div>
          </section>
        )}
      </div>
    </section>
  );
}
