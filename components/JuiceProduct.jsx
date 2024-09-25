import React from 'react';
import { data } from '../utils/data';
import { Image } from 'react-bootstrap';

const JuiceProduct = () => {
  return (
    <div>
      <div>
        <Image src={data[0].img1} alt='BariImage' thumbnail />
      </div>
      <div className='d-flex gap-3'>
        {data.map((value) => {
            return (
                <div key={value.id}>
                    <Image width={300} height={300} src={value.id} alt="ChotiImages" thumbnail />
                </div>
            )
        })}
       </div>
    </div>
  )
}

export default JuiceProduct;
