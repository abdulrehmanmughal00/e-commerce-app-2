"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";

import styles from "./Nav.module.css";

import { FiMenu, FiX, FiSearch, FiShoppingBag } from "react-icons/fi";

import { useCart } from "@/hooks/useCart";
import { products } from "@/data/Product";

const navLinks = [
  { title: "NEW ARRIVALS", href: "/new-arrivals" },
  { title: "POLOS", href: "/polos" },
  { title: "T-SHIRTS", href: "/t-shirt" },
  { title: "TROUSERS", href: "/trousers" },
  { title: "REVIEWS", href: "/reviews" },
];

export default function Navbar() {
  const router = useRouter();

  const { cartCount } = useCart();

  const [menuOpen, setMenuOpen] = useState(false);

  const [search, setSearch] = useState("");

  const [showResults, setShowResults] = useState(false);

  const searchRef = useRef<HTMLDivElement>(null);

  const filteredProducts = products
    .filter((item) => item.title.toLowerCase().includes(search.toLowerCase()))
    .slice(0, 6);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        searchRef.current &&
        !searchRef.current.contains(event.target as Node)
      ) {
        setShowResults(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);
  const handleSearch = () => {
    if (!search.trim()) return;

    router.push(`/search?q=${encodeURIComponent(search)}`);

    setShowResults(false);
    setSearch("");
  };

  return (
    <>
      <header className={styles.header}>
        <div className={styles.container}>
          {/* Mobile Menu */}

          <button className={styles.menuBtn} onClick={() => setMenuOpen(true)}>
            <FiMenu />
          </button>

          {/* Logo */}

          <Link href="/" className={styles.logo}>
            <h2>
              <span>M</span> APPAREL
            </h2>
          </Link>

          {/* Desktop Nav */}

          <nav className={styles.nav}>
            {navLinks.map((item) => (
              <Link key={item.title} href={item.href} className={styles.link}>
                {item.title}
              </Link>
            ))}
          </nav>

          {/* Right */}

          <div className={styles.actions}>
            <div className={styles.search} ref={searchRef}>
              <input
                type="text"
                placeholder="Search products..."
                value={search}
                onChange={(e) => {
                  setSearch(e.target.value);

                  setShowResults(true);
                }}
                onFocus={() => setShowResults(true)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    handleSearch();
                  }
                }}
              />

              <button onClick={handleSearch} type="button">
                <FiSearch />
              </button>

              {showResults && search.trim() && (
                <div className={styles.searchDropdown}>
                  {filteredProducts.length > 0 ? (
                    filteredProducts.map((item) => (
                      <Link
                        key={item.id}
                        href={`/product/${item.id}`}
                        className={styles.searchItem}
                        onClick={() => {
                          setShowResults(false);

                          setSearch("");
                        }}
                      >
                        <Image
                          src={item.image}
                          alt={item.title}
                          width={55}
                          height={55}
                        />

                        <div>
                          <h4>{item.title}</h4>

                          <span>
                            Rs.
                            {item.newPrice}
                          </span>
                        </div>
                      </Link>
                    ))
                  ) : (
                    <div className={styles.noResult}>No products found</div>
                  )}
                </div>
              )}
            </div>

            <Link href="/cart">
              <button className={styles.icon}>
                <FiShoppingBag />

                <span>{cartCount}</span>
              </button>
            </Link>
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
