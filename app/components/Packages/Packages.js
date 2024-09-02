import React, { useState } from 'react';
import styles from '../../styles/Packages/Packages.module.css';
import PackagesText from './PackagesText';
import PackagesContainer from './PackagesContainer';
import PopupForm from "../PopUpForm/PopUpForm";

export default function Packages() {
    const [isPopupVisible, setPopupVisible] = useState(false);

    const openPopup = () => setPopupVisible(true);
    const closePopup = () => setPopupVisible(false);

    return (
        <section className={styles.sectionPackages}>
            <PackagesText />
            <PackagesContainer openPopup={openPopup} />
            <PopupForm show={isPopupVisible} onClose={closePopup} />
        </section>
    );
}
