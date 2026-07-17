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

  const [filters, setFilters] = useState({
    sizes: [] as string[],

    categories: [] as string[],
    availability: [] as string[],
    minPrice: "",

    maxPrice: "",
  });

  // ==========================
  // ALL PRODUCTS
  // ==========================

  let filteredProducts = [...products];

  // ==========================
  // SIZE FILTER
  // ==========================

  filteredProducts = filteredProducts.filter((item) => {
    if (filters.sizes.length > 0) {
      const availableSize = item.sizes.some((size) =>
        filters.sizes.includes(size),
      );

      if (!availableSize) {
        return false;
      }
    }

    return true;
  });
  // ==========================
  // AVAILABILITY FILTER
  // ==========================

  filteredProducts = filteredProducts.filter((item) => {
    if (filters.availability.length > 0) {
      const status = item.inStock ? "in-stock" : "out-of-stock";

      if (!filters.availability.includes(status)) {
        return false;
      }
    }

    return true;
  });
  // ==========================
  // PRODUCT TYPE FILTER
  // ==========================

  filteredProducts = filteredProducts.filter((item) => {
    if (filters.categories.length > 0) {
      if (!filters.categories.includes(item.category)) {
        return false;
      }
    }

    return true;
  });

  // ==========================
  // PRICE FILTER
  // ==========================

  filteredProducts = filteredProducts.filter((item) => {
    if (filters.minPrice) {
      if (item.newPrice < Number(filters.minPrice)) {
        return false;
      }
    }

    if (filters.maxPrice) {
      if (item.newPrice > Number(filters.maxPrice)) {
        return false;
      }
    }

    return true;
  });

  // ==========================
  // SORT
  // ==========================

  if (sort === "Price Low → High") {
    filteredProducts.sort((a, b) => a.newPrice - b.newPrice);
  }

  if (sort === "Price High → Low") {
    filteredProducts.sort((a, b) => b.newPrice - a.newPrice);
  }

  return (
    <section className={Styles.newArrivals}>
      <div className={Styles.container}>
        {/* MOBILE FILTER BUTTON */}

        <div className={Styles.mobileBar}>
          <button
            className={Styles.filterBtn}
            onClick={() => setMobileFilter(!mobileFilter)}
          >
            {mobileFilter ? <FiX /> : <FiFilter />}

            <span>Filter & Sort</span>
          </button>
        </div>

        {/* MOBILE SIDEBAR */}

        <div
          className={`${Styles.mobilePanel}
${mobileFilter ? Styles.showPanel : ""}`}
        >
          <Sidebar
            sort={sort}
            onSortChange={setSort}
            filters={filters}
            setFilters={setFilters}
            onClose={() => setMobileFilter(false)}
          />

          <button
            className={Styles.applyBtn}
            onClick={() => setMobileFilter(false)}
          >
            Apply Filters
          </button>
        </div>

        {/* DESKTOP LAYOUT */}

        <div className={Styles.wrapper}>
          <div className={Styles.desktopSidebar}>
            <Sidebar
              sort={sort}
              onSortChange={setSort}
              filters={filters}
              setFilters={setFilters}
            />
          </div>

          <div className={Styles.products}>
            <div className={Styles.grid}>
              {filteredProducts.length > 0 ? (
                filteredProducts.map((product) => (
                  <Card key={product.id} product={product} />
                ))
              ) : (
                <p>No Products Found</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewArrivals;
