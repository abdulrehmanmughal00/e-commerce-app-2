import Image from "next/image";
import Link from "next/link";
import Styles from "./Featured.module.css";

import { products } from "@/data/Product";

const Featured = () => {
  const featuredProducts = products.slice(0, 4);

  return (
    <section className={Styles.featured}>
      <div className={Styles.container}>
        <h2 className={Styles.heading}>FEATURED PRODUCTS</h2>

        <div className={Styles.grid}>
          {featuredProducts.map((item) => (
            <Link
              key={item.id}
              href={`/product/${item.id}`}
              className={Styles.card}
            >
              <div className={Styles.imageWrapper}>
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className={Styles.image}
                  sizes="(max-width:768px) 100vw,
                         (max-width:992px) 50vw,
                         25vw"
                />
              </div>

              <h3 className={Styles.title}>{item.title}</h3>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Featured;
