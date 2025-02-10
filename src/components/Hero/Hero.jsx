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
              src={filter.img2 || data[0].img2}
              alt="BariImage"
            />
          </div>
          <div className={styles.scw}>
              <h2>Yamaha</h2>
              <p>Model Year : <strong>{filter.model || data[0].model}</strong></p>
              <p>Model Name : <strong>{filter.modelName || data[0].modelName}</strong></p>
              <p>Engine Capacity : <strong>{filter.engineCapacity || data[0].engineCapacity}cc</strong></p>
              <p>Price : <strong>${filter.price || data[0].price}</strong></p>
              <p>Model Color : <strong>{filter.modelColor || data[0].modelColor}</strong></p>
              <p>Top Speed : <strong>{filter.topSpeed || data[0].topSpeed}/mph</strong></p>
              <p>Fuel Type : <strong>{filter.fuelType || data[0].fuelType}</strong></p>
              <p>Weight : <strong>{filter.weight || data[0].weight}kg</strong></p>
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
