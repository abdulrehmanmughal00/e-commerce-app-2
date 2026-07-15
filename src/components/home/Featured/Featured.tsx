import Image from "next/image";
import Link from "next/link";
import Styles from "./Featured.module.css";

const categories = [
  {
    id: 1,
    title: "POLOS",
    image: "/polo.jpg",
    href: "/",
  },
  {
    id: 2,
    title: "T-SHIRTS",
    image: "/tshirt.jpg",
    href: "/",
  },
  {
    id: 3,
    title: "DROP SHOULDERS",
    image: "/drop-shoulder.jpg",
    href: "/",
  },
  {
    id: 4,
    title: "TROUSERS",
    image: "/trouser.jpg",
    href: "/",
  },
];

const Featured = () => {
  return (
    <section className={Styles.featured}>
      <div className={Styles.container}>
        <h2 className={Styles.heading}>FEATURED CATEGORIES</h2>

        <div className={Styles.grid}>
          {categories.map((item) => (
            <Link key={item.id} href={item.href} className={Styles.card}>
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
