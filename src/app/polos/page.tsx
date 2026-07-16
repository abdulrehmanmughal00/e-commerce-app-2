"use client";

import { useState } from "react";
import Styles from "./Polos.module.css";
import Sidebar from "@/components/sidebar/Sidebar";
import Card from "@/components/card/Card";

import { products } from "@/data/Product";
import { FiFilter, FiX } from "react-icons/fi";

const Polos = () => {
  const [sort, setSort] = useState("Featured");
  const [mobileFilter, setMobileFilter] = useState(false);

  const polos = products.filter((item) => item.category === "polos");

  return (
    <section className={Styles.polos}>
      <div className={Styles.container}>
        {/* Mobile Filter */}
        <div className={Styles.mobileBar}>
          <button
            className={Styles.filterBtn}
            onClick={() => setMobileFilter(!mobileFilter)}
          >
            {mobileFilter ? <FiX /> : <FiFilter />}
            <span>Filter & Sort</span>
          </button>
        </div>

        {/* Mobile Sidebar */}
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

        {/* Desktop */}
        <div className={Styles.wrapper}>
          <div className={Styles.desktopSidebar}>
            <Sidebar sort={sort} onSortChange={setSort} />
          </div>

          <div className={Styles.products}>
            <div className={Styles.grid}>
              {polos.map((product) => (
                <Card key={product.id} product={product} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Polos;