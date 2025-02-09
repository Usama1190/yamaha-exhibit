import React, { useState } from 'react';
import { data } from '../../utils/data';
import styles from './Hero.module.css';

const Hero = () => {
  const [filter, setFilter] = useState(data[0].img1);

  const filterImage = (id) => {
    const filterData = data.find((item) => {
      return item.id === id;
    })
    setFilter(filterData);
  }  

  return (
    <div className={styles.hw}>
      <div className={styles.siw}>
        <h1>{}</h1>
        <img className={styles.si} src={filter.img2 || data[0].img1} alt='BariImage' />
      </div>
      
      <div className={styles.ilw}>
        {data.map((value) => {
          return (
            <div onClick={() => filterImage(value.id)} key={value.id} className={styles.images_list}>
                <img className={styles.img} src={value.img2} alt="ChotiImages" />
            </div>
          )
        })}
       </div>
    </div>
  )
}

export default Hero;
