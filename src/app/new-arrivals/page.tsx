"use client";

import { useState } from "react";
import Styles from "./Arrivals.module.css";
import Card from "@/components/card/Card";

import { products } from "@/data/Product";
import { FiFilter, FiX } from "react-icons/fi";
import Sidebar from "@/components/sideBar/Sidebar";

const NewArrivals = () => {
  const [sort, setSort] = useState("Featured");
  const [mobileFilter, setMobileFilter] = useState(false);

  const newArrivals = products.filter(
    (item) => item.category === "new-arrivals",
  );

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
              {newArrivals.map((product) => (
                <Card key={product.id} product={product} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewArrivals;
