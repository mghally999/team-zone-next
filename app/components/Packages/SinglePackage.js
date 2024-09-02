import React from 'react';
import styles from '../../styles/Packages/SinglePackage.module.css';
import classNames from 'classnames';

export default function SinglePackage({ imgClass, title, duration, openPopup }) {
    const bookingButton = classNames(
        styles.btn,
        styles["btn--full"],
        styles["margin-right-sm"]
    );

    return (
        <div className={styles.package}>
            <div className={styles[imgClass]}></div>
            <div className={styles.packageContent}>
                <div className={styles.packageHeader}>
                    <p className={styles.packageTitle}>{title}</p>
                    <span className={styles.ageBadge}>{duration}</span>
                </div>
                <div className={styles.packageTags}>
                    <span className={styles.tag}>{duration}</span>
                </div>
                <button className={bookingButton} onClick={openPopup} type="button">GET STARTED</button>
            </div>
        </div>
    );
}
