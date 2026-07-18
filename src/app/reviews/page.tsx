"use client";

import Styles from "./Reviews.module.css";
import { FaStar, FaCheckCircle } from "react-icons/fa";
import Link from "next/link";

const reviews = [
  {
    id: 1,
    name: "Ali Khan",
    rating: 5,
    date: "12 July 2026",
    review:
      "Amazing quality! The fabric feels premium and the fitting is perfect. Definitely ordering again.",
  },
  {
    id: 2,
    name: "Usman Ahmed",
    rating: 5,
    date: "10 July 2026",
    review:
      "Delivery was quick and the shirt looked exactly like the pictures. Highly recommended.",
  },
  {
    id: 3,
    name: "Hamza Malik",
    rating: 4,
    date: "8 July 2026",
    review:
      "Very comfortable polo shirt. Great stitching and excellent value for money.",
  },
  {
    id: 4,
    name: "Bilal Hussain",
    rating: 5,
    date: "5 July 2026",
    review:
      "Ordered two t-shirts and both exceeded my expectations. Will definitely shop again.",
  },
  {
    id: 5,
    name: "Ahsan Raza",
    rating: 5,
    date: "2 July 2026",
    review:
      "Excellent customer service and premium quality products. Worth every rupee.",
  },
  {
    id: 6,
    name: "Saad Ali",
    rating: 5,
    date: "29 June 2026",
    review:
      "One of the best online clothing stores I've purchased from. Loved the packaging too.",
  },
];

const Reviews = () => {
  return (
    <section className={Styles.reviews}>
      <div className={Styles.container}>
        {/* Hero */}

        <div className={Styles.hero}>
          <h1>Customer Reviews</h1>

          <p>
            Thousands of customers trust M Apparel for premium quality, comfort,
            and style.
          </p>
        </div>

        {/* Stats */}

        <div className={Styles.stats}>
          <div className={Styles.statCard}>
            <h2>4.9★</h2>
            <span>Average Rating</span>
          </div>

          <div className={Styles.statCard}>
            <h2>2,500+</h2>
            <span>Happy Customers</span>
          </div>

          <div className={Styles.statCard}>
            <h2>98%</h2>
            <span>Positive Reviews</span>
          </div>

          <div className={Styles.statCard}>
            <h2>5,000+</h2>
            <span>Orders Delivered</span>
          </div>
        </div>

        {/* Reviews */}

        <div className={Styles.grid}>
          {reviews.map((item) => (
            <div key={item.id} className={Styles.card}>
              <div className={Styles.top}>
                <div>
                  <h3>{item.name}</h3>

                  <p>{item.date}</p>
                </div>

                <span className={Styles.verified}>
                  <FaCheckCircle />
                  Verified
                </span>
              </div>

              <div className={Styles.stars}>
                {[...Array(item.rating)].map((_, index) => (
                  <FaStar key={index} />
                ))}
              </div>

              <p className={Styles.review}>{item.review}</p>
            </div>
          ))}
        </div>

        {/* CTA */}

        <div className={Styles.cta}>
          <h2>Ready to Upgrade Your Wardrobe?</h2>

          <p>
            Explore our latest collection and experience premium quality
            clothing.
          </p>

          <Link href="/new-arrivals" className={Styles.btn}>
            Shop Now
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
