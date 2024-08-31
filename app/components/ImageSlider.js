import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import styles from '../styles/ImageSlider.module.css';

const ImageSlider = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const slides = [
        "/img1.jpeg",
        "/img2.jpeg",
        "/img3.jpeg",
        "/img1.jpeg",
        "/img2.jpeg",
        "/img3.jpeg",
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
        }, 3000); // Slide change interval (3 seconds)
        return () => clearInterval(interval);
    }, [slides.length]);

    const nextSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prevSlide) =>
            (prevSlide - 1 + slides.length) % slides.length
        );
    };

    const goToSlide = (slideIndex) => {
        setCurrentSlide(slideIndex);
    };

    return (
        <div className={styles.slider}>
            <div className={styles.slides}>
                {slides.map((slide, index) => (
                    <div
                        key={index}
                        className={`${styles.slide} ${index === currentSlide ? styles.active : ""}`}
                        style={{
                            transform: `translateX(-${currentSlide * 100}%)`,
                            transition: 'transform 1s ease-in-out', // Smooth transition
                        }}
                    >
                        <Image
                            src={slide}
                            alt={`Slide ${index}`}
                            layout="fill"
                            objectFit="cover"
                            priority
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
                        className={`${styles.dot} ${index === currentSlide ? styles.active : ""}`}
                        onClick={() => goToSlide(index)}
                    ></span>
                ))}
            </div>
        </div>
    );
};

export default ImageSlider;
