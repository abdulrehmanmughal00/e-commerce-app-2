import Image from "next/image";
import Styles from "./Home.module.css";
import Featured from "./Featured/Featured";
import NewArrivals from "./newArrivals/NewArrivals";

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
      <Featured />
      <NewArrivals />
    </div>
  );
};

export default Home;
