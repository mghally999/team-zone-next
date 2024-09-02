import React from 'react';
import styles from '../../styles/Footer/Footer.module.css';
import FooterLogo from './FooterLogo';
import FooterContact from './FooterContact';
import FooterNav from './FooterNav';
import WhatsAppButton from './WhatsAppButton';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={`${styles.container} ${styles.gridFooter}`}>
        <FooterLogo />
        <FooterContact />
        <FooterNav />
      </div>
      <WhatsAppButton />
    </footer>
  );
};

export default Footer;
