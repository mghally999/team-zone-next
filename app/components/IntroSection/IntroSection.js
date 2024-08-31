import styles from "../../styles/IntroSection/IntroSection.module.css";
import VideoBackground from "./VideoBackground";
import IntroText from "./IntroText";
import StudentsContainer from "./StudentsContainer";

export default function IntroSection() {
  return (
    <section className={styles.sectionIntro}>
      <VideoBackground />

      <div className={styles.intro}>
        <div className={styles.introTextBox}>
          <IntroText />
          <StudentsContainer />
        </div>
      </div>
    </section>
  )
}
