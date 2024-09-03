import React from "react";
import Image from "next/image";
import styles from "../../styles/MartialArts/MartialArtsImg.module.css";

export default function MartialArtsImg() {
  return (
    <div className={styles.martialImgBox}>
      <Image
        src="/img3.jpeg"
        alt="Martial Arts"
        responsive="true"
        width={500}
        height={300}
        className={styles.martialImg}
      />
    </div>
  );
}
