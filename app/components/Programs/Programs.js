import React from 'react';
import TabsContainer from './TabsContainer';
import TabContent from './TabContent';
import classNames from 'classnames';
import styles from "../../styles/Programs/Programs.module.css";

export default function Programs() {
    const bookingButton = classNames(styles.btn, styles['btn--full'], styles['margin-right-sm']);

    return (
        <section className={styles.sectionPrograms}>
            <h1 className={styles.headingPrimaryPrograms}>
                ADAPTIVE PROGRAM FOR ALL AGES
            </h1>
            <div className={styles.programs}>
                <div className={styles.heroTextBox2nd}>
                    <TabsContainer />
                    <button className={bookingButton} type="submit">BOOK A TRIAL CLASS</button>
                </div>
                <div className={styles.heroImgBox}>
                    <div className={styles.imagePlaceholder}>[Photo Placeholder]</div>
                    <TabContent />
                </div>
            </div>
        </section>
    );
}
