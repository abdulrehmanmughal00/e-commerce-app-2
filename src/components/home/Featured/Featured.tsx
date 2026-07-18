import Image from "next/image";
import Link from "next/link";
import Styles from "./Featured.module.css";

import { products } from "@/data/Product";

const Featured = () => {
  const polosProducts = products
    .filter((product) => product.category === "polos")
    .slice(0, 4);

  return (
    <section className={Styles.featured}>
      <div className={Styles.container}>
        <h2 className={Styles.heading}>FEATURED CATEGORIES</h2>

        <div className={Styles.grid}>
          {polosProducts.map((item) => (
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