import React, { useContext } from "react";
import styles from "../../styles/ClientsReviews/ReviewsContainer.module.css";
import SingleReview from "./SingleReview";
import { AppContext } from "../../context/AppContext";

export default function ReviewsContainer() {
  const { reviewsData } = useContext(AppContext);

  return (
    <div className={styles.reviews}>
      {reviewsData.map((review, index) => (
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
