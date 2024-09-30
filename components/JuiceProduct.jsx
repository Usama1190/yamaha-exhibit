import React, { useState } from 'react';
import { data } from '../utils/data';
import { Image } from 'react-bootstrap';
import styles from './showcase.module.css';

const JuiceProduct = () => {
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
      <div className={styles.images_list_wrapper}>
        {data.map((value) => {
          return (
            <div onClick={() => filterImage(value.id)} key={value.id} className={styles.images_list}>
                <Image width={300} height={300} src={value.img2} alt="ChotiImages" thumbnail />
            </div>
          )
        })}
       </div>

      <div>
        <Image width={500} height={500} src={filter.img2 || data[0].img1} alt='BariImage' thumbnail />
      </div>
    </div>
  )
}

export default JuiceProduct;
