import React from "react";
import styles from "../../styles/Ribbon/Ribbon.module.css";

export default function Ribbon({ skills, repetitionCount = 5 }) {
  const repeatedSkills = Array(repetitionCount).fill(skills).flat();

  return (
    <div className={styles.ribbonContainer}>
      <div className={styles.ribbon}>
        {repeatedSkills.map((skill, index) => (
          <React.Fragment key={index}>
            <div className={styles.movingSkill}>{skill}</div>
            <div className={styles.movingSkillSeparator}>|</div>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}
