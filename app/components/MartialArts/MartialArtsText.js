import React from "react";
import styles from "../../styles/MartialArts/MartialArtsText.module.css";
import ServicesContainer from "./ServicesContainer";

export default function MartialArtsText() {
  return (
    <div className={styles.martialArtsBox}>
      <h1 className={styles.headingPrimaryMartial}>
        Our Various programs are designed to transform both your physical and
        mental well-being.
      </h1>
      <h1 className={styles.headingPrimaryMartialTwo}>
        Shape your child’s future through Team Zone 10’s development program:
      </h1>
      <ServicesContainer />
    </div>
  );
}
