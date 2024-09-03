import React from 'react';
import styles from '../../styles/Footer/FooterLogo.module.css';
import { IoLogoInstagram, IoLogoWhatsapp } from 'react-icons/io';

const FooterLogo = () => {
    return (
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
                        <IoLogoInstagram color="#fff" size="24px" />
                    </a>
                </li>
            </ul>
        </div>
    );
};

export default FooterLogo;
