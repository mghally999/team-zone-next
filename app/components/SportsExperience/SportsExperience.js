import styles from "../../styles/SportsExperience/SportsExperience.module.css";

export default function SportsExperience() {
    return (
        <section className={styles.sectionSports}>
            <div className={`${styles.container} ${styles.centerText}`}>
                <h2 className={styles.headingPrimarySports}>
                    A Different <span>Sports</span> Experience
                </h2>
            </div>
        </section>
    )
};
