"use client";

import { useState } from "react";
import Styles from "./Arrivals.module.css";
import Sidebar from "@/components/sidebar/Sidebar";
import Card from "@/components/card/Card";
import type { Product } from "@/types/type";

import {
  FiFilter,
  FiX,
} from "react-icons/fi";

const products: Product[] = [
  {
    id: 1,
    title: "Paris Graphic Panel Tee (Grey & Brown)",
    image: "/products/product-1.jpg",
    oldPrice: 1750,
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
  {
    id: 5,
    title: "Classic Polo Shirt",
    image: "/products/product-5.jpg",
    oldPrice: 1950,
    newPrice: 1299,
    discount: "35% Off",
    sizes: ["S", "M", "L", "XL"],
  },
  {
    id: 6,
    title: "Casual Cotton Tee",
    image: "/products/product-6.jpg",
    oldPrice: 1650,
    newPrice: 999,
    discount: "40% Off",
    sizes: ["S", "M", "L", "XL"],
  },
];

const NewArrivals = () => {
  const [sort, setSort] = useState("Featured");
  const [mobileFilter, setMobileFilter] = useState(false);

  return (
    <section className={Styles.newArrivals}>
      <div className={Styles.container}>
        {/* ===========================
            Mobile Filter Bar
        =========================== */}

        <div className={Styles.mobileBar}>
          <button
            className={Styles.filterBtn}
            onClick={() => setMobileFilter(!mobileFilter)}
          >
            {mobileFilter ? <FiX /> : <FiFilter />}
            <span>Filter & Sort</span>
          </button>
        </div>

        {/* ===========================
            Mobile Panel
        =========================== */}

        <div
          className={`${Styles.mobilePanel} ${
            mobileFilter ? Styles.showPanel : ""
          }`}
        >
          <Sidebar
            sort={sort}
            onSortChange={setSort}
            onClose={() => setMobileFilter(false)}
          />

          <button
            className={Styles.applyBtn}
            onClick={() => setMobileFilter(false)}
          >
            Apply Filters
          </button>
        </div>

        {/* ===========================
            Desktop Layout
        =========================== */}

        <div className={Styles.wrapper}>
          <div className={Styles.desktopSidebar}>
            <Sidebar sort={sort} onSortChange={setSort} />
          </div>

          <div className={Styles.products}>
            <div className={Styles.grid}>
              {products.map((product) => (
                <Card
                  key={product.id}
                  product={product}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewArrivals;