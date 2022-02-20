import React from 'react';
import './PriceDetail.css'

const PriceDetail = (props) => {
  const {title, img, price, dec} = props.price

 
  return (
    <>
      <div className='col-md-4'>
        <div className='priceDetail-content text-center'>
          <img width='70px' src={img} alt=""/>
          <div className='priceDetail-text'>
            <h4 className='mt-5'>{title}</h4>
            <h5>${price}</h5>
            <p>{dec}</p>
            <button className='priceBtn' type="">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              Make an Appointment
              </button>
          </div>
        </div>
      </div> 
    </>
  );
};

export default PriceDetail;