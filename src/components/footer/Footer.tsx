"use client";

import { useState } from "react";
import Link from "next/link";
import Styles from "./Footer.module.css";
import { Mail, ArrowRight } from "lucide-react";

const Footer = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email) return;

    const res = await fetch("/api/newsletter", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email }),
    });

    if (res.ok) {
      alert("Subscribed Successfully!");
      setEmail("");
    } else {
      alert("Something went wrong!");
    }
  };

  return (
    <footer className={Styles.footer}>
      <div className={Styles.container}>
        {/* Left Side */}

        <div className={Styles.links}>
          <Link href="/return-exchange-policy">Return & Exchange Policy</Link>

          <Link href="/shipping-policy">Shipping Policy</Link>

          <Link href="/terms-and-conditions">Terms & Conditions</Link>

          <Link href="/privacy-policy">Privacy Policy</Link>

          <Link href="/blogs">Blogs</Link>
        </div>

        {/* Right Side */}

        <div className={Styles.newsletter}>
          <h2>BE THE FIRST TO KNOW</h2>

          <p>
            Get an update of all our latest collections, discounts & features
            coming up.
          </p>

          <form onSubmit={handleSubmit} className={Styles.form}>
            <div className={Styles.inputBox}>
              <Mail size={20} />

              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />

              <button type="submit">
                <ArrowRight size={22} />
              </button>
            </div>
          </form>
        </div>
      </div>

      <div className={Styles.bottom}>
        © {new Date().getFullYear()} M Apparel. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
