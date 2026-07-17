import { products } from "@/data/Product";
import Image from "next/image";
import Styles from "./Product.module.css";
import AddToCartSection from "./ProductClient";

interface ProductPageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { id } = await params;

  const product = products.find((item) => item.id === Number(id));

  if (!product) {
    return (
      <section className={Styles.notFound}>
        <h1>Product Not Found</h1>
      </section>
    );
  }

  return (
    <section className={Styles.product}>
      <div className={Styles.container}>
        {/* Image */}

        <div className={Styles.imageBox}>
          <span className={Styles.badge}>{product.discount}</span>

          <Image
            src={product.image}
            alt={product.title}
            width={700}
            height={900}
            className={Styles.image}
            priority
          />
        </div>

        {/* Content */}

        <div className={Styles.content}>
          <h1>{product.title}</h1>

          <div className={Styles.priceRow}>
            <span className={Styles.oldPrice}>Rs. {product.oldPrice}</span>

            <span className={Styles.newPrice}>Rs. {product.newPrice}</span>
          </div>

          <p className={Styles.desc}>
            Premium quality fabric with modern fit. Perfect for everyday wear.
          </p>

          <AddToCartSection product={product} />
        </div>
      </div>
    </section>
  );
}
