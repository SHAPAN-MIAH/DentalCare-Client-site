import React from 'react';
import WhiteningGalleryDetail from './WhiteningGalleryDetail';
import img1 from '../../../images/8.jpg'
import img2 from '../../../images/7.jpg'
import img3 from '../../../images/2 (3).jpg'
import img5 from '../../../images/1 (3).jpg'
import img6 from '../../../images/kids-dentist-hvpd-2006.jpg'
import img7 from '../../../images/istockphoto-1268441485-612x612.jpg'
import img8 from '../../../images/3 (1).jpg'
import img10 from '../../../images/2380623.jpg'
import img17 from '../../../images/dentist.jpg'
import img34 from '../../../images/iStock-831623072_2_485x341.jpg'
import img33 from '../../../images/istock-810206880.jpg'
import img35 from '../../../images/emergency-dental-care.jpeg'
import img36 from '../../../images/endodontic-endodontist-patient-trust-dental-dentist-referral.jpg'
import img37 from '../../../images/female-dentist-and-male-patient-having-his-teeth-examined.png'
import img46 from '../../../images/what-age-should-a-child-go-to-the-dentist.jpeg'
import img47 from '../../../images/shutterstock_273042527.jpg'
import img51 from '../../../images/vecteezy_young-woman-having-teeth-examined-by-dentist-in-dental_5751755_457.jpg'

const WhiteningGallery = () => {
  const whiteningData = [
    {
      img:img1
    },
    {
      img:img2
    },
    {
      img:img3
    },
    {
      img:img5
    },
    {
      img:img6
    },
    {
      img:img7
    },
    {
      img:img8
    },
    {
      img:img10
    },
    {
      img:img17
    },
    {
      img:img33
    },
    {
      img:img34
    },
    {
      img:img35
    },
    {
      img:img36
    },
    {
      img:img37
    },
    {
      img:img46
    },
    {
      img:img47
    },
    {
      img:img51
    },
  ]
  return (
    <>
     <div className='row'>
        {
          whiteningData.map(data => <WhiteningGalleryDetail key={data} data={data}></WhiteningGalleryDetail>)
        }
    </div> 
    </>
  );
};

export default WhiteningGallery;