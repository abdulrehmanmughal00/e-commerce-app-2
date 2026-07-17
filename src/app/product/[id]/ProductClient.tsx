"use client";

import { useState } from "react";
import { toast } from "sonner";
import { FiShoppingBag } from "react-icons/fi";

import Styles from "./Product.module.css";

import type { Product } from "@/types/type";
import { useCart } from "@/hooks/useCart";

interface ProductClientProps {
  product: Product;
}

export default function ProductClient({ product }: ProductClientProps) {
  const [selectedSize, setSelectedSize] = useState(product.sizes[0]);

  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart(product, selectedSize);

    toast.success(`${product.title} added to cart`);
  };

  return (
    <>
      <h3 className={Styles.sizeHeading}>Select Size</h3>

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

      <button className={Styles.cartBtn} onClick={handleAddToCart}>
        <FiShoppingBag />

        <span>ADD TO CART</span>
      </button>
    </>
  );
}
