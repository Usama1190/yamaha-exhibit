import React, { useState } from 'react';
import { data } from '../utils/data';
import styles from './showcase.module.css';

const Showcase = () => {
  const [filter, setFilter] = useState(data[0].img1);

  const filterImage = (id) => {
    const filterData = data.find((item) => {
      return item.id === id;
    })
    setFilter(filterData);
  }
  // console.log(filter);
  

  return (
    <div className={styles.showcase_wrapper}>
      <div className={styles.select_image_wrapper}>
        <h1>{}</h1>
        <img className={styles.select_image} src={filter.img2 || data[0].img1} alt='BariImage' />
      </div>

      <div className={styles.images_list_wrapper}>
        {data.map((value) => {
          return (
            <div onClick={() => filterImage(value.id)} key={value.id} className={styles.images_list}>
                <img className={styles.image} src={value.img2} alt="ChotiImages" />
            </div>
          )
        })}
       </div>
    </div>
  )
}

export default Showcase;
