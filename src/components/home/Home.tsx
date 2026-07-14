import Image from "next/image";
import Styles from "./Home.module.css";

const Home = () => {
  return (
    <div className={Styles.container}>
      <section className={Styles.hero}>
        {/* Desktop Banner */}

        <Image
          src="/image1.png"
          alt="Desktop Banner"
          fill
          priority
          className={`${Styles.banner} ${Styles.desktopBanner}`}
        />

        {/* Mobile Banner */}

        <Image
          src="/image2.png"
          alt="Mobile Banner"
          fill
          priority
          className={`${Styles.banner} ${Styles.mobileBanner}`}
        />
      </section>
      <section className={Styles.categories}>

      </section>
    </div>
  );
};

export default Home;
