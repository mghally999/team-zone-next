import React from 'react';
import styles from '../../styles/Footer/WhatsAppButton.module.css';
import { IoLogoWhatsapp } from 'react-icons/io';

const WhatsAppButton = () => {
    return (
        <a href="https://wa.me/971508272111" className={styles.whatsappFloat} target="_blank" rel="noopener noreferrer" aria-label="Contact us on WhatsApp">
            <IoLogoWhatsapp color="#fff" size="30px" />
        </a>
    );
};

export default WhatsAppButton;
