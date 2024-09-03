import React from "react";
import styles from "../../styles/Footer/FooterLogo.module.css";
import { IoLogoInstagram } from "react-icons/io";
import Link from "next/link";
import Image from "next/image";

export default function FooterLogo() {
  return (
    <div className={styles.logoCol}>
      <Link href="/" passHref>
        <Image
          className={styles.logo}
          alt="Team Zone 10 logo"
          src="/teamzone-logo.png"
          width={150}
          height={50}
          priority
        />
      </Link>
      <p className={styles.copyright}>
        Copyright &copy; <span className={styles.year}>2024</span> by Team Zone
        10, Inc. All rights reserved.
      </p>
      <ul className={styles.socialLinks}>
        <li>
          <Link href="https://www.instagram.com/team_zone10/" passHref>
            <IoLogoInstagram
              className={styles.footerLink}
              color="#fff"
              size="24px"
              target="_blank"
              rel="noopener noreferrer"
            />
          </Link>
        </li>
      </ul>
    </div>
  );
}
