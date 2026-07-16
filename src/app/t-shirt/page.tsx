"use client";

import { useState } from "react";
import Styles from "./T-shirt.module.css";
import Sidebar from "@/components/sidebar/Sidebar";
import Card from "@/components/card/Card";

import { products } from "@/data/Product";
import { FiFilter, FiX } from "react-icons/fi";

const Tshirts = () => {
  const [sort, setSort] = useState("Featured");
  const [mobileFilter, setMobileFilter] = useState(false);

  const tshirts = products.filter(
    (item) => item.category === "t-shirts"
  );

  return (
    <section className={Styles.tshirts}>
      <div className={Styles.container}>
        <div className={Styles.mobileBar}>
          <button
            className={Styles.filterBtn}
            onClick={() => setMobileFilter(!mobileFilter)}
          >
            {mobileFilter ? <FiX /> : <FiFilter />}
            <span>Filter & Sort</span>
          </button>
        </div>

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

        <div className={Styles.wrapper}>
          <div className={Styles.desktopSidebar}>
            <Sidebar sort={sort} onSortChange={setSort} />
          </div>

          <div className={Styles.products}>
            <div className={Styles.grid}>
              {tshirts.map((product) => (
                <Card key={product.id} product={product} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tshirts;