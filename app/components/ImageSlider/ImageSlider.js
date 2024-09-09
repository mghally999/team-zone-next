import React, { useContext } from "react";
import Image from "next/image";
import { AppContext } from "../../context/AppContext";
import styles from "../../styles/ImageSlider/ImageSlider.module.css";

export default function ImageSlider() {
  const { currentSlide, nextSlide, prevSlide, goToSlide, slides } =
    useContext(AppContext);

  return (
    <div className={styles.slider}>
      <div
        className={styles.slides}
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`${styles.slide} ${
              index === currentSlide ? styles.active : ""
            }`}
          >
            <Image
              src={slide}
              alt={`Slide ${index}`}
              priority
              width={1700}
              height={778}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
        ))}
      </div>
      <button onClick={prevSlide} className={styles.prevBtn}>
        &larr;
      </button>
      <button onClick={nextSlide} className={styles.nextBtn}>
        &rarr;
      </button>
      <div className={styles.dots}>
        {slides.map((_, index) => (
          <span
            key={index}
            className={`${styles.dot} ${
              index === currentSlide ? styles.active : ""
            }`}
            onClick={() => goToSlide(index)}
          ></span>
        ))}
      </div>
    </div>
  );
}
