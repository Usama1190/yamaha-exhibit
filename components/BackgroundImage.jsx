import React from 'react';
import styles from './backgroundimage.module.css';

const BackgroundImage = () => {
  return (
    <div className={styles.bg_image_wrapper}>
      <img className={styles.bg_image} src={'/images/back2.jpg'} alt="" />
    </div>
  )
}

export default BackgroundImage
