import React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "../styles/Header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <Link href="/">
        <Image className={styles.logo}
          alt="Team Zone Logo"
          src="/teamzone-logo.png"
          width={150}
          height={50}
        />
      </Link>
    </header>
  );
}
