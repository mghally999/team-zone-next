import React from 'react';
import styles from '../styles/Ribbon.module.css';

const skills = [
    'FUNCTIONAL TRAINING',
    'BJJ',
    'BOXING',
];

export default function RibbonContainer() {
    // Create a new array that repeats the skills multiple times
    const repeatedSkills = Array(5).fill(skills).flat();

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
