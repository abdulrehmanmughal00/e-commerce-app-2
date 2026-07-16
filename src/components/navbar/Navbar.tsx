"use client";

import { useState } from "react";
import Link from "next/link";
import styles from "./Nav.module.css";

import { FiMenu, FiX, FiSearch, FiShoppingBag } from "react-icons/fi";

const navLinks = [
  { title: "NEW ARRIVALS", href: "/new-arrivals" },
  { title: "POLOS", href: "/polos" },
  { title: "T-SHIRTS", href: "/t-shirt" },
  { title: "TROUSERS", href: "/trousers" },
  { title: "REVIEWS", href: "/reviews" },
];

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header className={styles.header}>
        <div className={styles.container}>
          {/* Mobile Menu Button */}

          <button className={styles.menuBtn} onClick={() => setMenuOpen(true)}>
            <FiMenu />
          </button>

          {/* Logo */}

          <Link href="/" className={styles.logo}>
            <h2>
              <span>M</span> APPAREL
            </h2>
          </Link>

          {/* Desktop Navigation */}

          <nav className={styles.nav}>
            {navLinks.map((item) => (
              <Link key={item.title} href={item.href} className={styles.link}>
                {item.title}
              </Link>
            ))}
          </nav>

          {/* Right Side */}

          <div className={styles.actions}>
            <div className={styles.search}>
              <input type="text" placeholder="Search..." />

              <button>
                <FiSearch />
              </button>
            </div>

            <button className={styles.icon}>
              <FiShoppingBag />
              <span>1</span>
            </button>
          </div>
        </div>
      </header>

      {/* Overlay */}

      <div
        className={`${styles.overlay} ${menuOpen ? styles.overlayShow : ""}`}
        onClick={() => setMenuOpen(false)}
      />

      {/* Drawer */}

      <aside
        className={`${styles.drawer} ${menuOpen ? styles.drawerShow : ""}`}
      >
        <div className={styles.drawerTop}>
          <h3>Menu</h3>

          <button onClick={() => setMenuOpen(false)}>
            <FiX />
          </button>
        </div>

        <nav className={styles.mobileNav}>
          {navLinks.map((item) => (
            <Link
              key={item.title}
              href={item.href}
              onClick={() => setMenuOpen(false)}
            >
              {item.title}
            </Link>
          ))}
        </nav>
      </aside>
    </>
  );
}
