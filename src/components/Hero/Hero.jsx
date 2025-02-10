import React, { useState } from "react";
import { data } from "../../utils/constant/data";
import styles from "./Hero.module.css";

const Hero = () => {
  const [filter, setFilter] = useState(data[0].img1);

  const filterImage = (id) => {
    const filterData = data.find((item) => {
      return item.id === id;
    });
    setFilter(filterData);
  };

  return (
    <div className={styles.hw}>
      <div className={styles.hiw}>
        <div className={styles.hic}>
          <div className={styles.siw}>
            <img
              src={filter.img2 || data[0].img1}
              alt="BariImage"
            />
          </div>
          <div className={styles.scw}>
              <h2>{filter.brand}</h2>
              <h2>{filter.model}</h2>
              <h2>{filter.price}</h2>
              <h2>{filter.modelName}</h2>
              <h2>{filter.modelColor}</h2>
              <h2>{filter.engineCapacity}</h2>
              <h2>{filter.topSpeed}</h2>
              <h2>{filter.fuelType}</h2>
              <h2>{filter.weight}</h2>
          </div>
        </div>

        <div className={styles.ilw}>
          {data.map((value) => {
            return (
              <div
                onClick={() => filterImage(value.id)}
                key={value.id}
                className={styles.images_list}
              >
                <img
                  className={styles.img}
                  src={value.img2}
                  alt="ChotiImages"
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Hero;
