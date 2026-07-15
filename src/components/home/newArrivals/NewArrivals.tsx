"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FiShoppingBag } from "react-icons/fi";
import Styles from "./NewArrivals.module.css";

const products = [
  {
    id: 1,
    title: "Paris Graphic Panel Tee (Grey & Brown)",
    image: "/products/product-1.jpg",
    oldPrice: 200,
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
];

const NewArrivals = () => {
  const [selectedSizes, setSelectedSizes] = useState<Record<number, string>>(
    {},
  );

  return (
    <section className={Styles.newArrival}>
      <div className={Styles.container}>
        <h2 className={Styles.heading}>NEW ARRIVALS</h2>

        <div className={Styles.grid}>
          {products.map((product) => (
            <div key={product.id} className={Styles.card}>
              {/* Discount */}

              <span className={Styles.discount}>{product.discount}</span>

              {/* Image */}

              <Link href="/" className={Styles.imageWrapper}>
                <Image
                  src={product.image}
                  alt={product.title}
                  fill
                  className={Styles.image}
                  sizes="(max-width:768px) 100vw,
                         (max-width:992px) 50vw,
                         25vw"
                />
              </Link>

              {/* Content */}

              <div className={Styles.content}>
                <h3 className={Styles.title}>{product.title}</h3>
                <div className={Styles.price}>
                  <span className={Styles.oldPrice}>Rs.{product.oldPrice}</span>

                  <span className={Styles.newPrice}>Rs.{product.newPrice}</span>
                </div>
                {/* Sizes */}
                <div className={Styles.sizes}>
                  {product.sizes.map((size) => (
                    <button
                      key={size}
                      onClick={() =>
                        setSelectedSizes((prev) => ({
                          ...prev,
                          [product.id]: size,
                        }))
                      }
                      className={`${Styles.sizeBtn} ${
                        selectedSizes[product.id] === size
                          ? Styles.activeSize
                          : ""
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>{" "}
                {/* Add To Cart */}
                <button className={Styles.cartBtn}>
                  <FiShoppingBag />

                  <span>ADD TO CART</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* View All */}

        <Link href="/" className={Styles.viewAll}>
          VIEW ALL
        </Link>
      </div>
    </section>
  );
};

export default NewArrivals;
