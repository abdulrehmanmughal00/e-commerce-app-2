"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FiShoppingBag } from "react-icons/fi";
import Styles from "./Card.module.css";
import type { Product } from "@/types/type";

interface Props {
  product: Product;
}

const Card = ({ product }: Props) => {
  const [selectedSize, setSelectedSize] = useState("");

  return (
    <div className={Styles.card}>
      <span className={Styles.discount}>{product.discount}</span>

      <Link href="/" className={Styles.imageWrapper}>
        <Image
          src={product.image}
          alt={product.title}
          fill
          className={Styles.image}
        />
      </Link>

      <div className={Styles.content}>
        <h3 className={Styles.title}>{product.title}</h3>

        <div className={Styles.price}>
          <span className={Styles.oldPrice}>Rs.{product.oldPrice}</span>

          <span className={Styles.newPrice}>Rs.{product.newPrice}</span>
        </div>

        <div className={Styles.sizes}>
          {product.sizes.map((size) => (
            <button
              key={size}
              onClick={() => setSelectedSize(size)}
              className={`${Styles.sizeBtn} ${
                selectedSize === size ? Styles.activeSize : ""
              }`}
            >
              {size}
            </button>
          ))}
        </div>

        <button className={Styles.cartBtn}>
          <FiShoppingBag />
          <span>ADD TO CART</span>
        </button>
      </div>
    </div>
  );
};

export default Card;
