import React from "react";
import MartialArtsText from "./MartialArtsText";
import MartialArtsImg from "./MartialArtsImg";
import styles from "../../styles/MartialArts/MartialArts.module.css";

export default function MartialArts() {
  return (
    <section className={styles.sectionMartialArts}>
      <h1 className={styles.headingPrimaryMartial}>
        Our Various programs are designed to transform both your physical and
        mental well-being
      </h1>
      <div className={styles.martialArts}>
        <MartialArtsImg />
        <MartialArtsText />
      </div>
    </section>
  );
}
