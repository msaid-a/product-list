// components/Rating.tsx

import React from 'react';
import { FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa';
import styles from './Rating.module.scss';

interface RatingProps {
  rating: number;
  reviewsCount: number;
}

const Rating: React.FC<RatingProps> = ({ rating, reviewsCount }) => {
  const renderStars = () => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= rating) {
        stars.push(<FaStar key={i} className={styles.star} />);
      } else if (i - rating < 1) {
        stars.push(<FaStarHalfAlt key={i} className={styles.star} />);
      } else {
        stars.push(<FaRegStar key={i} className={styles.star} />);
      }
    }
    return stars;
  };

  return (
    <div className={styles.rating}>
      {renderStars()}
      <span>({reviewsCount} reviews)</span>
    </div>
  );
};

export default Rating;
