import React from 'react';
import './PriceDetail.css'
import { Link } from 'react-router-dom';

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
            <Link to="/appointment">
              <button className='priceBtn' type="">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                Make an Appointment
              </button>
            </Link>
           
          </div>
        </div>
      </div> 
    </>
  );
};

export default PriceDetail;