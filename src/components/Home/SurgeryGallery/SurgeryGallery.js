import React from 'react';
import img11 from '../../../images/51237616-people-medicine-stomatology-and-health-care-concept-happy-female-dentist-with-assistant-and-patient-.webp'
import img12 from '../../../images/14954757176_f8b3eec02b_o.jpg'
import img13 from '../../../images/AdobeStock_278526410.jpeg'
import img14 from '../../../images/Child-at-the-dentist.jpg'
import img15 from '../../../images/Dental-Sedation-Experts.jpg'
import img16 from '../../../images/dental-surgery01-1.jpg'
import img18 from '../../../images/dentist-nurse-treat-patient-dental-office_85574-3.webp'
import img19 from '../../../images/dentistry-580x358.jpg'
import img20 from '../../../images/dentist-safety-melchers.jpg'
import img22 from '../../../images/360_F_240982187_auR9cM9G0gGmXvh1RZJoBufjTKVIclC3.jpg'
import img24 from '../../../images/2380623.jpg'
import img31 from '../../../images/dental_hygienist (2).jpg'
import img38 from '../../../images/female-dentist-checking-patient-girl-teeth.jpg'
import img40 from '../../../images/Happy-Girl-at-Dentist-920x614.jpg'
import img41 from '../../../images/How-Long-Does-it-Take-to-Become-a-Dentist-Your-Simple-Guide.jpg'
import img48 from '../../../images/Shutterstock_94074997_1300x800_o.jpg'
import img49 from '../../../images/t1gpdn.jpg'
import img52 from '../../../images/vecteezy_young-woman-having-teeth-examined-by-dentist-in-dental_5751756_881.jpg'
import SurgeryGalleryDetail from './SurgeryGalleryDetail';

const SurgeryGallery = () => {
  const surgeryData = [
    {
      img:img11
    },
    {
      img:img12
    },
    {
      img:img13
    },
    {
      img:img14
    },
    {
      img:img15
    },
    {
      img:img16
    },
    
    {
      img:img18
    },
    {
      img:img49
    },
    {
      img:img20
    },
    
    {
      img:img22
    },
    
    {
      img:img24
    },
    {
      img:img52
    },
    {
      img:img31
    },
    
    {
      img:img40
    },
    {
      img:img41
    },
    {
      img:img38
    },
    {
      img:img48
    },
    {
      img:img19
    },
    
  ]
  return (
    <>
     <div className='row'>
        {
          surgeryData.map(data => <SurgeryGalleryDetail key={data} data={data}></SurgeryGalleryDetail>)
        }
    </div>  
    </>
  );
};

export default SurgeryGallery;