import React from 'react';
import styles from '../../styles/ClientsReviews/SingleReview.module.css';

export default function SingleReview({ name, stars, text }) {
    return (
        <figure className={styles.review}>
            <div className={styles.reviewContent}>
                <p className={styles.reviewName}>&mdash; {name}</p>
                <div className={styles.reviewStars}>{stars}</div>
                <blockquote className={styles.reviewText}>
                    {text}
                </blockquote>
            </div>
        </figure>
    );
}
