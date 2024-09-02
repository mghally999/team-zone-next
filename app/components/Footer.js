import React from 'react';
import styles from '../styles/Footer.module.css';
import { LogoInstagram, LogoWhatsapp } from 'react-ionicons';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={`${styles.container} ${styles.gridFooter}`}>
        <div className={styles.logoCol}>
          <a href="#" className={styles.footerLogo}>
            <img className={styles.logo} alt="Team Zone 10 logo" src="/teamzone-logo.png" />
          </a>
          <p className={styles.copyright}>
            Copyright &copy; <span className={styles.year}>2024</span> by Team Zone 10, Inc.
            All rights reserved.
          </p>
          <ul className={styles.socialLinks}>
            <li>
              <a className={styles.footerLink} href="https://www.instagram.com/team_zone10/" target="_blank" rel="noopener noreferrer">
                <LogoInstagram
                  color={'#fff'}
                  height="24px"
                  width="24px"
                />
              </a>
            </li>

          </ul>
        </div>

        <div className={styles.addressCol}>
          <p className={styles.footerHeading}>Contact us</p>
          <address className={styles.contacts}>
            <p className={styles.address}>
              Nas 2 Building, Arjan, Dubai, UAE
            </p>
            <p>
              <a className={styles.footerLink} href="tel:+971562413781">+971 56 241 3781</a><br />
              <a className={styles.footerLink} href="mailto:info@teamzone10.net">info@teamzone10.net</a>
            </p>
          </address>
        </div>

        <nav className={styles.navCol}>
          <p className={styles.footerHeading}>TERMS AND CONDITIONS</p>
        </nav>
      </div>

      {/* WhatsApp Floating Button */}
      <a href="https://wa.me/971508272111" className={styles.whatsappFloat} target="_blank" rel="noopener noreferrer" aria-label="Contact us on WhatsApp">
        <LogoWhatsapp
          color={'#fff'}
          height="30px"
          width="30px"
        />
      </a>
    </footer>
  );
};

export default Footer;
