import classNames from 'classnames';
import styles from "../../styles/IntroSection/IntroText.module.css";

export default function IntroText() {
    const bookingButton = classNames(styles.btn, styles['btn--full'], styles['margin-right-sm']);

    return (
        <div className={styles.introTextBox}>
            <h1 className={styles.headingPrimaryIntro}>
                Your Hub For Transformation
            </h1>
            <p className={styles.heroDescription}>
                Building minds and bodies Physical and mental growth for kids
                Discpline and strong mindset for kids and adults Master martial
                arts by the hands of veteran trainers
            </p>
            <button className={bookingButton}>
                Start Today
            </button>
        </div>
    );
};
