// app/lib/components/Navbar.tsx
"use client";

import { useState } from "react";
import Link from "next/link";
import styles from "./navbar.module.css";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(prev => !prev);

  return (
    <nav className={`${styles.navbar} ${styles.desktopOnly}`}>
      <div className={styles.menuToggle} onClick={toggleMenu}>
        <span className={`${styles.bar} ${menuOpen ? styles.open : ""}`}></span>
        <span className={`${styles.bar} ${menuOpen ? styles.open : ""}`}></span>
        <span className={`${styles.bar} ${menuOpen ? styles.open : ""}`}></span>
      </div>

      <ul className={`${styles.navLinks} ${menuOpen ? styles.open : ""}`}>
        <li><Link href="/" className={styles.a}>Home</Link></li>
        <li><Link href="/pages/projects" className={styles.a}>Projects</Link></li>
        <li><Link href="/pages/about" className={styles.a}>About</Link></li>
      </ul>
    </nav>
  );
}
