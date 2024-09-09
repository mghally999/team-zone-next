import styles from "../../styles/IntroSection/IntroSection.module.css";
import IntroText from "./IntroText";

export default function IntroSection() {
  return (
    <section className={styles.sectionIntro}>
      <div className={styles.intro}>
        <div className={styles.introTextBox}>
          <IntroText />
        </div>
      </div>
    </section>
  );
}
