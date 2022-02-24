import React from 'react';
import './Pricing.css'
import borderBrige from '../../../images/title-icon.png'
import dentistIcon1 from '../../../images/dentist-icon-16.jpg'
import dentistIcon5 from '../../../images/dental-icon-png-20.jpg'
import PriceDetail from './../PriceDetail/PriceDetail';

const Pricing = () => {
  const pricingData = [
    {
      title: 'Dental Implants',
      price: 120,
      img: dentistIcon1,
      dec: 'Default text for Box Content. Lorem ipsum dolor sit amet Default text for Box Conten Lorem ipsum dolor sit amet'
    },
    {
      title: 'Dental Root Treatment',
      price: 100,
      img: dentistIcon5,
      dec: 'Default text for Box Content. Lorem ipsum dolor sit amet Default text for Box Conten Lorem ipsum dolor sit amet'
    },
    {
      title: 'Dental Whitening',
      price: 80,
      img: dentistIcon1,
      dec: 'Default text for Box Content. Lorem ipsum dolor sit amet Default text for Box Conten Lorem ipsum dolor sit amet'
    }
    
  ]
  return (
    <>
      <div className='container mt-5 pb-4'>
        <div className='pricing-container'>
            <div className="text-center mb-5 mt-5 pt-3">
              <h2>Pricing</h2>
              <img src={borderBrige} alt=""/>
              <br/>
              <small>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem autem voluptatem obcaecati!</small>
            </div>
            <div className='row pt-4'>
              {
                pricingData.map(price => <PriceDetail key={price.key} price={price}></PriceDetail>)
              }
            </div>
        </div>
      </div>
    </>
  );
};

export default Pricing;