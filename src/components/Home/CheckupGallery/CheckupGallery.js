import React from 'react';
import img42 from '../../../images/How-Long-is-the-Healing-Process-1.jpg'
import img43 from '../../../images/Hygienist-and-Patient.png'
import img44 from '../../../images/Oral-Health-Regular-Checkup.jpg'
import img45 from '../../../images/routin-check-up.jpg'
import img21 from '../../../images/3-Reasons-You-Should-Consider-Involving-a-Dental-Associate-Accountant-in-Your-Practice.jpg'
import img23 from '../../../images/2202139.jpeg'
import img25 from '../../../images/48434503_m-pa3hxx8vbximu21ip38nbc6kwro29ik7hj4crlbtj4.jpg'
import img27 from '../../../images/bigstock-Pretty-Womans-Teeth-Cleaning-I-330157039.jpg'
import img28 from '../../../images/Best-Dentist-Sydney.jpg'
import img29 from '../../../images/BD-Dental-Implant.jpeg'
import img30 from '../../../images/Benefits-of-Being-a-Full-Time-Dental-Hygienist.jpg'
import img32 from '../../../images/CD-Cosmetic-e1534392784958.jpg'
import img4 from '../../../images/9.jpg'
import img9 from '../../../images/Top-Dentist-Opener.png'
import img39 from '../../../images/shutterstock_358283252.jpg'

import CheckupGalleryDetails from './CheckupGalleryDetails';

const CheckupGallery = () => {
  const checkupData = [
    {
      img:img21
    },
    
    {
      img:img23
    },
    
    {
      img:img25
    },
    
    {
      img:img27
    },
    {
      img:img28
    },
    {
      img:img29
    },
    {
      img:img30
    },
    
    {
      img:img32
    },
    {
      img:img42
    },
    {
      img:img43
    },
    {
      img:img44
    },
    {
      img:img45
    },
    {
      img:img4
    },
    {
      img:img9
    },
    {
      img:img39
    },
    
  ]
  return (
    <>
     <div className='row'>
        {
          checkupData.map(data => <CheckupGalleryDetails key={data} data={data}></CheckupGalleryDetails>)
        }
    </div> 
    </>
  );
};

export default CheckupGallery;