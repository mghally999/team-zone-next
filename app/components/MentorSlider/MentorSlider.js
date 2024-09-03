import React, { useState, useEffect, useRef } from 'react';
import styles from '../../styles/MentorSlider/MentorSlider.module.css';

const mentors = [
    {
        name: 'Zelim',
        img: '/martial1.png',
        details: ['BJJ Black belt', 'ACB JJ World Champ', 'AJP Grand Slam World Cup Winner']
    },
    {
        name: 'Max',
        img: '/martial2.png',
        details: ['BJJ Black belt', 'ACB JJ World Champ', 'AJP Europe Continental Pro medalist']
    },
    {
        name: 'Muslim',
        img: '/martial3.jpeg',
        details: ['BJJ Brown belt', 'Winner and medalist of international BJJ competitions', 'Arabic Speaker']
    }
];

export default function MentorSlider() {
    const [curSlide, setCurSlide] = useState(0);
    const mentorRef = useRef([]);

    useEffect(() => {
        const goToSlide = (slide) => {
            mentorRef.current.forEach((s, i) => {
                if (slide === 0) {
                    s.style.transform = `translateX(${0}%)`;
                } else {
                    s.style.transform = `translateX(${-100}%)`;
                }
            });
        };

        goToSlide(curSlide);
    }, [curSlide]);

    const nextSlide = () => {
        setCurSlide(curSlide === 0 ? 1 : 0);
    };

    const prevSlide = () => {
        setCurSlide(curSlide === 0 ? 1 : 0);
    };

    return (
        <section className={styles.sectionMentor}>
            <div className={styles.container}>
                <h2 className={styles.headingSecondaryCoaches}>
                    THE MAIN CHARACTERISTIC OF <span>MENTORS</span> IS THE COMBINATION OF <span>A SPORTS COACH</span>,
                    <span>A PARENT</span>, AND <span>A PEER</span> IN ONE PERSON.
                </h2>
            </div>

            <div className={styles.mentorContainer}>
                {mentors.map((mentor, index) => (
                    <div
                        key={index}
                        ref={(el) => (mentorRef.current[index] = el)}
                        className={styles.mentorCard}
                    >
                        <div className={styles.mentorImg} style={{ backgroundImage: `url(${mentor.img})` }}>
                        </div>
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
                onClick={prevSlide}
            >
                &larr;
            </button>
            <button
                className={`${styles.sliderBtnMentor} ${styles.sliderBtnRight}`}
                onClick={nextSlide}
            >
                &rarr;
            </button>
        </section>
    );
}
