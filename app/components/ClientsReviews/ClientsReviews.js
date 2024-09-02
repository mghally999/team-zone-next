import React from 'react';
import styles from '../../styles/ClientsReviews/ClientsReviews.module.css';
import ReviewsText from './ReviewsText';
import ReviewsContainer from './ReviewsContainer';

export default function ClientsReviews() {
    return (
        <section className={styles.sectionReviews}>
            <div className={styles.reviewsContainer}>
                <ReviewsText />
                <ReviewsContainer />
            </div>
        </section>
    );
}
