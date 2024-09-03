import React from "react";
import styles from "../../styles/Footer/FooterContact.module.css";

export default function FooterContact() {
  return (
    <div className={styles.addressCol}>
      <p className={styles.footerHeading}>Contact us</p>
      <address className={styles.contacts}>
        <p className={styles.address}>Nas 2 Building, Arjan, Dubai, UAE</p>
        <p>
          <a className={styles.footerLink} href="tel:+971562413781">
            +971 56 241 3781
          </a>
          <br />
          <a className={styles.footerLink} href="mailto:info@teamzone10.net">
            info@teamzone10.net
          </a>
        </p>
      </address>
    </div>
  );
}
