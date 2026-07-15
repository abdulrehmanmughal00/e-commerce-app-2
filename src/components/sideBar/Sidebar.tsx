"use client";

import { useState } from "react";
import Styles from "./Sidebar.module.css";
import { FiPlus, FiMinus, FiChevronDown } from "react-icons/fi";

interface SidebarProps {
  sort: string;
  onSortChange: (value: string) => void;
}

const Sidebar = ({ sort, onSortChange }: SidebarProps) => {
  const [availability, setAvailability] = useState(false);
  const [price, setPrice] = useState(false);
  const [productType, setProductType] = useState(false);
  const [size, setSize] = useState(false);

  return (
    <aside className={Styles.sidebar}>
      {/* ===========================
          Sort By
      =========================== */}

      <div className={Styles.sortSection}>
        <label className={Styles.sortLabel}>SORT BY</label>

        <div className={Styles.selectWrap}>
          <select
            value={sort}
            onChange={(e) => onSortChange(e.target.value)}
          >
            <option>Featured</option>
            <option>Newest</option>
            <option>Price Low → High</option>
            <option>Price High → Low</option>
          </select>

          <FiChevronDown />
        </div>
      </div>

      {/* ===========================
          Availability
      =========================== */}

      <div className={Styles.section}>
        <button
          type="button"
          className={Styles.header}
          onClick={() => setAvailability(!availability)}
        >
          <span>AVAILABILITY</span>

          {availability ? <FiMinus /> : <FiPlus />}
        </button>

        <div
          className={`${Styles.content} ${
            availability ? Styles.open : ""
          }`}
        >
          <label className={Styles.checkbox}>
            <input type="checkbox" />
            <span>In Stock (18)</span>
          </label>

          <label className={Styles.checkbox}>
            <input type="checkbox" />
            <span>Out Of Stock (2)</span>
          </label>
        </div>
      </div>

      {/* ===========================
          Price
      =========================== */}

      <div className={Styles.section}>
        <button
          type="button"
          className={Styles.header}
          onClick={() => setPrice(!price)}
        >
          <span>PRICE</span>

          {price ? <FiMinus /> : <FiPlus />}
        </button>

        <div
          className={`${Styles.content} ${
            price ? Styles.open : ""
          }`}
        >
          <p className={Styles.priceText}>
            The highest price is Rs.1,850
          </p>

          <div className={Styles.priceInputs}>
            <input
              type="number"
              placeholder="Rs From"
            />

            <input
              type="number"
              placeholder="Rs To"
            />
          </div>

          <button className={Styles.filterBtn}>
            APPLY
          </button>
        </div>
      </div>

      {/* ===========================
          Product Type
      =========================== */}

      <div className={Styles.section}>
        <button
          type="button"
          className={Styles.header}
          onClick={() => setProductType(!productType)}
        >
          <span>PRODUCT TYPE</span>

          {productType ? <FiMinus /> : <FiPlus />}
        </button>

        <div
          className={`${Styles.content} ${
            productType ? Styles.open : ""
          }`}
        >
          {[
            "T-Shirt",
            "Polo",
            "Cargo Pants",
            "Trouser",
            "Jeans",
          ].map((item) => (
            <label
              key={item}
              className={Styles.checkbox}
            >
              <input type="checkbox" />

              <span>{item}</span>
            </label>
          ))}
        </div>
      </div>

      {/* ===========================
          Size
      =========================== */}

      <div className={Styles.section}>
        <button
          type="button"
          className={Styles.header}
          onClick={() => setSize(!size)}
        >
          <span>SIZE</span>

          {size ? <FiMinus /> : <FiPlus />}
        </button>

        <div
          className={`${Styles.content} ${
            size ? Styles.open : ""
          }`}
        >
          {[
            "S",
            "M",
            "L",
            "XL",
            "XXL",
          ].map((item) => (
            <label
              key={item}
              className={Styles.checkbox}
            >
              <input type="checkbox" />

              <span>{item}</span>
            </label>
          ))}
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;