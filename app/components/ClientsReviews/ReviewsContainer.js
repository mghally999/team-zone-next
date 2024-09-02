import React from 'react';
import styles from '../../styles/ClientsReviews/ReviewsContainer.module.css';
import SingleReview from './SingleReview';

const testimonialsData = [
    {
        name: 'Mike Schulz',
        stars: '⭐⭐⭐⭐⭐',
        text: 'Both our boys attend jiu-jitsu at this gym. The coaches are professional and have a great way with the kids. Our boys enjoy going and have progressed quickly. The atmosphere is welcoming, and the training is top-notch.'
    },
    {
        name: 'Gordinho Da Br',
        stars: '⭐⭐⭐⭐⭐',
        text: 'The best gym to train jiu-jitsu in Dubai, family and cozy atmosphere, good for beginners and many technical training for black belts.'
    },
    {
        name: 'Masoud Hesabian',
        stars: '⭐⭐⭐⭐⭐',
        text: 'I had a great session! Learned so much in one hour but mostly the service was amazing. If you are a beginner and want to learn more about jiu-jitsu, I definitely recommend this gym.'
    },
    {
        name: 'Collab giorgiacapa',
        stars: '⭐⭐⭐⭐⭐',
        text: 'I love this gym! Good vibes, great people, and top jiu-jitsu!'
    }
];

export default function ReviewsContainer() {
    return (
        <div className={styles.reviews}>
            {testimonialsData.map((review, index) => (
                <SingleReview
                    key={index}
                    name={review.name}
                    stars={review.stars}
                    text={review.text}
                />
            ))}
        </div>
    );
}
