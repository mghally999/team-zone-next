import React, { useState } from 'react';
import TabsContainer from './TabsContainer';
import TabContent from './TabContent';
import PopupForm from '../PopUpForm/PopUpForm';
import classNames from 'classnames';
import styles from "../../styles/Programs/Programs.module.css";

export default function Programs() {
    const [showPopup, setShowPopup] = useState(false);

    const bookingButton = classNames(styles.btn, styles['btn--full'], styles['margin-right-sm']);

    const handlePopupOpen = () => {
        setShowPopup(true);
    };

    const handlePopupClose = () => {
        setShowPopup(false);
    };

    return (
        <section className={styles.sectionPrograms}>
            <h1 className={styles.headingPrimaryPrograms}>
                ADAPTIVE PROGRAM FOR ALL AGES
            </h1>
            <div className={styles.programs}>
                <div className={styles.heroTextBox2nd}>
                    <TabsContainer />
                    <button
                        className={bookingButton}
                        type="button"
                        onClick={handlePopupOpen}
                    >
                        BOOK A TRIAL CLASS
                    </button>
                </div>
                <div className={styles.heroImgBox}>
                    <div className={styles.imagePlaceholder}>[Photo Placeholder]</div>
                    <TabContent />
                </div>
            </div>
            <PopupForm show={showPopup} onClose={handlePopupClose} />
        </section>
    );
}
