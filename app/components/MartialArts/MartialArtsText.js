import React from "react";
import styles from "../../styles/MartialArts/MartialArtsText.module.css";
import ServicesContainer from "./ServicesContainer";

export default function MartialArtsText() {
  return (
    <div className={styles.martialArtsBox}>
      <h1 className={styles.headingPrimaryMartial}>
        MARTIAL ARTS FOR ADULTS <br />
        <span>UNLEASH YOUR INNER WARRIOR</span>
      </h1>
      <h1 className={styles.headingPrimaryMartialTwo}>
        MASTER MARTIAL ARTS WITH THE BEST TRAINERS: <br />
      </h1>
      <ServicesContainer />
    </div>
  );
}
