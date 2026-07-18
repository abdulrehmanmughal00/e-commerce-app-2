"use client";

import { useState } from "react";
import Styles from "./Card.module.css";
import { FiShoppingBag } from "react-icons/fi";
import Image from "next/image";
import { toast } from "sonner";

import type { Product } from "@/types/type";
import { useCart } from "@/hooks/useCart";
import Link from "next/link";

interface CardProps {
  product: Product;
}

const Card = ({ product }: CardProps) => {
  const [selectedSize, setSelectedSize] = useState(product.sizes[0]);

  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart(product, selectedSize);

    toast.success(`${product.title} added to cart`);
  };

  return (
    <div className={Styles.card}>
      <Link href={`/product/${product.id}`} className={Styles.imageLink}>
        <div className={Styles.imageWrap}>
          <span className={Styles.badge}>{product.discount}</span>

          <Image
            src={product.image}
            alt={product.title}
            width={300}
            height={300}
            className={Styles.image}
          />
        </div>
      </Link>
      <div className={Styles.info}>
        <h3 className={Styles.title}>{product.title}</h3>

        <div className={Styles.priceRow}>
          <span className={Styles.oldPrice}>Rs.{product.oldPrice}</span>

          <span className={Styles.newPrice}>Rs.{product.newPrice}</span>
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

        <button
          type="button"
          className={Styles.cartBtn}
          onClick={handleAddToCart}
        >
          <FiShoppingBag />

          <span>ADD TO CART</span>
        </button>
      </div>
    </div>
  );
};

export default Card;
