import React, { useState } from 'react';
import styles from '../styles/Packages.module.css';
import PopupForm from './PopUpForm';
import classNames from 'classnames';

export default function Packages() {
    const [isPopupVisible, setPopupVisible] = useState(false);

    const openPopup = () => setPopupVisible(true);
    const closePopup = () => setPopupVisible(false);

    const bookingButton = classNames(
        styles.btn,
        styles["btn--full"],
        styles["margin-right-sm"]
    );

    return (
        <section className={styles.sectionMeals} id="meals">
            <div className={styles.containerPackages}>
                <h2 className={styles.headingSecondaryPackages}>
                    CHECK OUT OUR PACKAGES BELOW
                </h2>
            </div>

            <div className={`${styles.containerPackages} ${styles.gridPackages} ${styles.grid3Cols} ${styles.marginBottomMd}`}>
                <div className={styles.meal}>
                    <div className={styles.mealImg1}></div>
                    <div className={styles.mealContent}>
                        <div className={styles.mealHeader}>
                            <p className={styles.mealTitle}>Monthly Package</p>
                            <span className={styles.ageBadge}>1 Month</span>
                        </div>
                        <div className={styles.mealTags}>
                            <span className={styles.tag}>1 Month</span>
                        </div>
                        <button className={bookingButton} onClick={openPopup} type="button">GET STARTED</button>
                    </div>
                </div>

                <div className={styles.meal}>
                    <div className={styles.mealImg2}></div>
                    <div className={styles.mealContent}>
                        <div className={styles.mealHeader}>
                            <p className={styles.mealTitle}>3-Month Package</p>
                            <span className={styles.ageBadge}>3 Months</span>
                        </div>
                        <div className={styles.mealTags}>
                            <span className={styles.tag}>3 Months</span>
                        </div>
                        <button className={bookingButton} onClick={openPopup} type="button">GET STARTED</button>
                    </div>
                </div>

                <div className={styles.meal}>
                    <div className={styles.mealImg3}></div>
                    <div className={styles.mealContent}>
                        <div className={styles.mealHeader}>
                            <p className={styles.mealTitle}>Annual Package</p>
                            <span className={styles.ageBadge}>1 Year</span>
                        </div>
                        <div className={styles.mealTags}>
                            <span className={styles.tag}>1 Year</span>
                        </div>
                        <button className={bookingButton} onClick={openPopup} type="button">GET STARTED</button>
                    </div>
                </div>
            </div>

            {/* Popup Form */}
            <PopupForm show={isPopupVisible} onClose={closePopup} />
        </section>
    );
}
