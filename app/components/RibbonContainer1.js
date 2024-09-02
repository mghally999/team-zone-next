import React from 'react';
import styles from '../styles/RibbonContainer1.module.css';

const skills = [
    'WORLD CHAMPION',
];

export default function RibbonContainer1() {
    // Create a new array that repeats the skills multiple times
    const repeatedSkills = Array(9).fill(skills).flat();

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
