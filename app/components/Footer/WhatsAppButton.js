import React from 'react';
import styles from '../../styles/Footer/WhatsAppButton.module.css';
import { LogoWhatsapp } from 'react-ionicons';

const WhatsAppButton = () => {
    return (
        <a href="https://wa.me/971508272111" className={styles.whatsappFloat} target="_blank" rel="noopener noreferrer" aria-label="Contact us on WhatsApp">
            <LogoWhatsapp
                color={'#fff'}
                height="30px"
                width="30px"
            />
        </a>
    );
};

export default WhatsAppButton;
