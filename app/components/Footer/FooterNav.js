import React from "react";
import styles from "../../styles/Footer/FooterNav.module.css";
import Link from "next/link";

export default function FooterNav() {
  return (
    <nav className={styles.navCol}>
      <Link href="/TermsConditions">
        <span className={styles.footerHeading}>TERMS AND CONDITIONS</span>
      </Link>
    </nav>
  );
}
