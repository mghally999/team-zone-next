import React, { useContext } from "react";
import styles from "../../styles/IntroSection/StudentsContainer.module.css";
import SingleStudent from "./SingleStudent";
import { AppContext } from "../../context/AppContext";

export default function StudentsContainer() {
  const { students } = useContext(AppContext);

  return (
    <div className={styles.studentsContainer}>
      <div className={styles.studentImgs}>
        {students.map((student, index) => (
          <SingleStudent
            key={index}
            imgSrc={student.imgSrc}
            altText={student.altText}
          />
        ))}
      </div>
      <p className={styles.studentsNumbers}>
        <span>50+</span> Students
      </p>
    </div>
  );
}
