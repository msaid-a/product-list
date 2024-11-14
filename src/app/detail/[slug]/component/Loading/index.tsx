import React from 'react';
import styles from './styles.module.scss';
import classNames from 'classnames';

const Loading = () => {
    return (
        <div className={styles.card}>
        <div className={classNames(styles.imageWrapper,styles.loadingImage)}></div>
        <div className={styles.content}>
          <div className={classNames(styles.loadingText,styles.loadingName)}></div>
          <div className={classNames(styles.loadingText,styles.loadingDescription)}></div>
          <div className={classNames(styles.loadingText,styles.loadingRating)}></div>
          <div className={classNames(styles.loadingText,styles.loadingPrice)}></div>
        </div>
      </div>
    );
};

export default Loading;
