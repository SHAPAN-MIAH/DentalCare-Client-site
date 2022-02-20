import React from 'react';
import depertmentImg1 from '../../../images/1 (1).jpg'
import depertmentImg2 from '../../../images/2 (1).jpg'
import depertmentImg3 from '../../../images/4.jpg'
import depertmentImg4 from '../../../images/6.jpg'
import depertmentImg5 from '../../../images/5.jpg'
import depertmentImg6 from '../../../images/4 (2).jpg'
import DepertmentDetail from '../DepertmentDetails/DepertmentDetail';
import borderBrige from '../../../images/title-icon.png'
import './Department.css'


const Depertment = () => {
  const depertmentData = [
    {
        title: 'Dental Implant',
        img: depertmentImg2,
        dec: 'Default text for Box Content. Lorem ipsum dolor sit amet Default text for Box Conten Lorem ipsum dolor sit amet'
    },
    {
        title: 'Dental Bridges',
        img: depertmentImg1,
        dec: 'Default text for Box Content. Lorem ipsum dolor sit amet Default text for Box Conten Lorem ipsum dolor sit amet'
    },
    {
        title: 'Root Canel',
        img: depertmentImg3,
        dec: 'Default text for Box Content. Lorem ipsum dolor sit amet Default text for Box Conten Lorem ipsum dolor sit amet'
    },
    {
        title: 'Wisdom Teeth',
        img: depertmentImg4,
        dec: 'Default text for Box Content. Lorem ipsum dolor sit amet Default text for Box Conten Lorem ipsum dolor sit amet'
    },
    {
        title: 'Crowns Bridges',
        img: depertmentImg5,
        dec: 'Default text for Box Content. Lorem ipsum dolor sit amet Default text for Box Conten Lorem ipsum dolor sit amet'
    },
    {
        title: 'Cosmetic Dentis',
        img: depertmentImg6,
        dec: 'Default text for Box Content. Lorem ipsum dolor sit amet Default text for Box Conten Lorem ipsum dolor sit amet'
    }
]
  return (
    <>
      <div className='container'>
        <div className='depertment-hedding text-center mb-5 mt-5'>
        <h2>Our Department</h2>
        <img src={borderBrige} alt=""/>
        <br/>
        <small>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem autem voluptatem obcaecati!</small>
        </div>
        <div className='row pt-4'>
          {
            depertmentData.map(depData => <DepertmentDetail key={depData.key} depData={depData}></DepertmentDetail>)
          }
        </div>
      </div> 
    </>
  );
};

export default Depertment;