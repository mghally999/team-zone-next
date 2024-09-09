import React, { useContext } from "react";
import styles from "../../styles/MentorSlider/MentorSlider.module.css";
import { AppContext } from "../../context/AppContext";

export default function MentorSlider() {
  const { mentors } = useContext(AppContext);

  return (
    <section className={styles.sectionMentor}>
      <div className={styles.container}>
        <h2 className={styles.headingSecondaryCoaches}>
          Meet Our Expert Trainers
        </h2>
      </div>

      <div className={styles.mentorContainer}>
        {mentors.map((mentor, index) => (
          <div key={index} className={styles.mentorCard}>
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
    </section>
  );
}
