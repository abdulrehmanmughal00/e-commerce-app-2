"use client";

import styles from "./Topbar.module.css";
import { motion } from "framer-motion";

const items = [
  "FREE SHIPPING ON ORDER'S ABOVE PKR 3000",
  "14-DAY EASY RETURNS & EXCHANGES",
  "OPEN PARCEL BEFORE PAYMENT",
  "FREE SHIPPING ON ORDER'S ABOVE PKR 3000",
];

export default function TopBar() {
  return (
    <div className={styles.topbar}>
      <motion.div
        className={styles.track}
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          duration: 20,
          ease: "linear",
          repeat: Infinity,
        }}
      >
        {[...items, ...items].map((item, index) => (
          <div className={styles.item} key={index}>
            {item}
          </div>
        ))}
      </motion.div>
    </div>
  );
}
