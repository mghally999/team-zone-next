import React, { useContext, useRef } from "react";
import styles from "../../styles/MentorSlider/MentorSlider.module.css";
import { AppContext } from "../../context/AppContext";

export default function MentorSlider() {
  const { curSlide, nextSlideMentors, prevSlideMentors, mentors } =
    useContext(AppContext);

  const mentorRef = useRef([]);

  return (
    <section className={styles.sectionMentor}>
      <div className={styles.container}>
        <h2 className={styles.headingSecondaryCoaches}>
          THE MAIN CHARACTERISTIC OF <span>MENTORS</span> IS THE COMBINATION OF{" "}
          A <span>SPORTS COACH</span>, A <span>PARENT</span>, AND A{" "}
          <span>PEER</span> IN ONE PERSON.
        </h2>
      </div>

      <div className={styles.mentorContainer}>
        {mentors.map((mentor, index) => (
          <div
            key={index}
            ref={(el) => (mentorRef.current[index] = el)}
            className={styles.mentorCard}
            style={{
              transform: `translateX(-${curSlide * 100}%)` /* Updated logic */,
            }}
          >
            <div
              className={styles.mentorImg}
              style={{ backgroundImage: `url(${mentor.img})` }}
            ></div>
            <div className={styles.mentorContent}>
              <h3 className={styles.mentorName}>{mentor.name}</h3>
              <ul className={styles.mentorDetails}>
                {mentor.details.map((detail, i) => (
                  <li key={i}>{detail}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>

      <button
        className={`${styles.sliderBtnMentor} ${styles.sliderBtnLeft}`}
        onClick={prevSlideMentors}
      >
        &larr;
      </button>
      <button
        className={`${styles.sliderBtnMentor} ${styles.sliderBtnRight}`}
        onClick={nextSlideMentors}
      >
        &rarr;
      </button>
    </section>
  );
}
