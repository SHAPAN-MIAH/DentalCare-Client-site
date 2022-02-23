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
import img49 from '../../../images/little-beautiful-girl-dentist-looking-smiling_158595-7740.jpg'
import img50 from '../../../images/vecteezy_young-woman-having-teeth-examined-by-dentist-in-dental_5557869_421.jpg'
import CheckupGalleryDetails from './CheckupGalleryDetails';
// import 'photoswipe/dist/photoswipe.css'
// import 'photoswipe/dist/default-skin/default-skin.css'
// import { Gallery, Item } from 'react-photoswipe-gallery'


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
    {
      img:img49
    },
    {
      img:img50
    },
    
  ]
  return (
    <>
     <div className='row'>
        {
          checkupData.map(data => <CheckupGalleryDetails key={data} data={data}></CheckupGalleryDetails>)
        }
      </div> 


    {/* <Gallery>
    <Item
      original='img50'
      thumbnail="img50"
      width="300px"
      height="100"
    >
      {({ ref, open }) => (
        <img ref={ref} onClick={open} src={img50} />
        
      )}
    </Item>
    <Item
      original="https://placekitten.com/1024/768?image=2"
      thumbnail="https://placekitten.com/80/60?image=2"
      width="1024"
      height="768"
    >
      {({ ref, open }) => (
        <img ref={ref} onClick={open} src="https://placekitten.com/80/60?image=2" />
      )}
    </Item>
  </Gallery> */}
    </>
  );
};

export default CheckupGallery;