import React from 'react';
import MartialArtsText from './MartialArtsText';
import MartialArtsImg from './MartialArtsImg';
import styles from "../../styles/MartialArts/MartialArts.module.css";

export default function MartialArts() {
    return (
        <section className={styles.sectionMartialArts}>
            <div className={styles.martialArts}>
                <MartialArtsText />
                <MartialArtsImg />
            </div>
        </section>
    );
}
