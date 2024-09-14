import styles from "../../styles/IntroSection/IntroSection.module.css";
import IntroText from "./IntroText";
import Image from "next/image";

export default function IntroSection() {
  return (
    <section className={styles.sectionIntro}>
      <div className={styles.intro}>
        <div className={styles.backgroundImageWrapper}>
          <Image
            src="/gallery/gallery2.JPG"
            alt="Background Image"
            layout="fill"
            className={styles.backgroundImage}
            quality={70}
            priority
          />
        </div>
        <div className={styles.introTextBox}>
          <IntroText />
        </div>
      </div>
    </section>
  );
}
