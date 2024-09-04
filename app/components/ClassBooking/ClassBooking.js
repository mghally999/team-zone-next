import React from "react";
import styles from "../../styles/ClassBooking/ClassBooking.module.css";
import ClassBookingText from "./ClassBookingText";
import ClassBookingForm from "./ClassBookingForm";
import Image from "next/image";

export default function ClassBooking() {
  return (
    <section className={styles.sectionClassBooking}>
      <div
        className={`${styles.container} ${styles.grid} ${styles.grid2Cols} ${styles.gridCenterV}`}
      >
        <ClassBookingText />
        <ClassBookingForm />
      </div>
    </section>
  );
}
