import React from "react";
import styles from "../../styles/Footer/FooterNav.module.css";
import Link from "next/link";

export default function FooterNav() {
  return (
    <nav className={styles.navCol}>
      <Link href="/terms-conditions">
        <span className={styles.footerHeading}>TERMS AND CONDITIONS</span>
      </Link>
      <Link href="/privacy-policy">
        <span className={styles.footerHeading}>Privacy Policy</span>
      </Link>
    </nav>
  );
}
