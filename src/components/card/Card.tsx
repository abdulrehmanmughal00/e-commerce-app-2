"use client";

import { useState } from "react";
import Styles from "./Card.module.css";
import { FiShoppingBag } from "react-icons/fi";
import type { Product } from "@/types/type";

interface CardProps {
  product: Product;
}

const Card = ({ product }: CardProps) => {
  const [selectedSize, setSelectedSize] = useState(product.sizes[0]);

  return (
    <div className={Styles.card}>
      <div className={Styles.imageWrap}>
        <span className={Styles.badge}>{product.discount}</span>

        <img
          src={product.image}
          alt={product.title}
          className={Styles.image}
        />
      </div>

      <div className={Styles.info}>
        <h3 className={Styles.title}>{product.title}</h3>

        <div className={Styles.priceRow}>
          <span className={Styles.oldPrice}>Rs.{product.oldPrice}</span>
          <span className={Styles.newPrice}>RS.{product.newPrice}</span>
        </div>

        <div className={Styles.sizes}>
          {product.sizes.map((size) => (
            <button
              key={size}
              type="button"
              className={`${Styles.sizeBtn} ${
                selectedSize === size ? Styles.sizeActive : ""
              }`}
              onClick={() => setSelectedSize(size)}
            >
              {size}
            </button>
          ))}
        </div>

        <button type="button" className={Styles.cartBtn}>
          <FiShoppingBag />
          <span>ADD TO CART</span>
        </button>
      </div>
    </div>
  );
};

export default Card;