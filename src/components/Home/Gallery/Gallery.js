import React from 'react';
// import img1 from '../../../images/8.jpg'
// import img2 from '../../../images/7.jpg'
// import img3 from '../../../images/2 (3).jpg'
// import img4 from '../../../images/9.jpg'
// import img5 from '../../../images/1 (3).jpg'
// import img6 from '../../../images/kids-dentist-hvpd-2006.jpg'
// import img7 from '../../../images/istockphoto-1268441485-612x612.jpg'
// import img8 from '../../../images/3 (1).jpg'
// import img9 from '../../../images/Top-Dentist-Opener.png'
// import img10 from '../../../images/2380623.jpg'
// import img11 from '../../../images/51237616-people-medicine-stomatology-and-health-care-concept-happy-female-dentist-with-assistant-and-patient-.webp'
// import img12 from '../../../images/14954757176_f8b3eec02b_o.jpg'
// import img13 from '../../../images/AdobeStock_278526410.jpeg'
// import img14 from '../../../images/Child-at-the-dentist.jpg'
// import img15 from '../../../images/Dental-Sedation-Experts.jpg'
// import img16 from '../../../images/dental-surgery01-1.jpg'
// import img17 from '../../../images/dentist.jpg'
// import img18 from '../../../images/dentist-nurse-treat-patient-dental-office_85574-3.webp'
// import img19 from '../../../images/dentistry-580x358.jpg'
// import img20 from '../../../images/dentist-safety-melchers.jpg'
// import img21 from '../../../images/3-Reasons-You-Should-Consider-Involving-a-Dental-Associate-Accountant-in-Your-Practice.jpg'
// import img22 from '../../../images/360_F_240982187_auR9cM9G0gGmXvh1RZJoBufjTKVIclC3.jpg'
// import img23 from '../../../images/2202139.jpeg'
// import img24 from '../../../images/2380623.jpg'
// import img25 from '../../../images/48434503_m-pa3hxx8vbximu21ip38nbc6kwro29ik7hj4crlbtj4.jpg'
// import img27 from '../../../images/bigstock-Pretty-Womans-Teeth-Cleaning-I-330157039.jpg'
// import img28 from '../../../images/Best-Dentist-Sydney.jpg'
// import img29 from '../../../images/BD-Dental-Implant.jpeg'
// import img30 from '../../../images/Benefits-of-Being-a-Full-Time-Dental-Hygienist.jpg'
// import img31 from '../../../images/dental_hygienist (2).jpg'
// import img32 from '../../../images/CD-Cosmetic-e1534392784958.jpg'
// import img33 from '../../../images/istock-810206880.jpg'
// import img34 from '../../../images/iStock-831623072_2_485x341.jpg'
// import img35 from '../../../images/emergency-dental-care.jpeg'
// import img36 from '../../../images/endodontic-endodontist-patient-trust-dental-dentist-referral.jpg'
// import img37 from '../../../images/female-dentist-and-male-patient-having-his-teeth-examined.png'
// import img38 from '../../../images/female-dentist-checking-patient-girl-teeth.jpg'
// // import img39 from '../../../images/first-dentist-appointment-1080x675.jpeg'
// import img40 from '../../../images/Happy-Girl-at-Dentist-920x614.jpg'
// import img41 from '../../../images/How-Long-Does-it-Take-to-Become-a-Dentist-Your-Simple-Guide.jpg'
// import img42 from '../../../images/How-Long-is-the-Healing-Process-1.jpg'
// import img43 from '../../../images/Hygienist-and-Patient.png'
// import img44 from '../../../images/Oral-Health-Regular-Checkup.jpg'
// import img45 from '../../../images/routin-check-up.jpg'

import borderBrige from '../../../images/title-icon.png'
import GalleryDetails from './../GalleryDetails/GalleryDetails';
import './Gallery.css'
import CheckupGallery from '../CheckupGallery/CheckupGallery';
import WhiteningGallery from '../WhiteningGallery/WhiteningGallery';
import SurgeryGallery from '../SurgeryGallery/SurgeryGallery';


const Gallery = () => {
  const galleryData = [
    // {
    //   img:img1
    // },
    // {
    //   img:img2
    // },
    // {
    //   img:img3
    // },
    // {
    //   img:img4
    // },
    // {
    //   img:img5
    // },
    // {
    //   img:img6
    // },
    // {
    //   img:img7
    // },
    // {
    //   img:img8
    // },
    // {
    //   img:img9
    // },
    // {
    //   img:img10
    // },
    // {
    //   img:img11
    // },
    // {
    //   img:img12
    // },
    // {
    //   img:img13
    // },
    // {
    //   img:img14
    // },
    // {
    //   img:img15
    // },
    // {
    //   img:img16
    // },
    // {
    //   img:img17
    // },
    // {
    //   img:img18
    // },
    // {
    //   img:img19
    // },
    // {
    //   img:img20
    // },
    // {
    //   img:img21
    // },
    // {
    //   img:img22
    // },
    // {
    //   img:img23
    // },
    // {
    //   img:img24
    // },
    // {
    //   img:img25
    // },
    
    // {
    //   img:img27
    // },
    // {
    //   img:img28
    // },
    // {
    //   img:img29
    // },
    // {
    //   img:img30
    // },
    // {
    //   img:img31
    // },
    // {
    //   img:img32
    // },
    // {
    //   img:img33
    // },
    // {
    //   img:img34
    // },
    // {
    //   img:img35
    // },
    // {
    //   img:img36
    // },
    // {
    //   img:img37
    // },
    // {
    //   img:img38
    // },
    // // {
    // //   img:img39
    // // },
    // {
    //   img:img40
    // },
    // {
    //   img:img41
    // },
    // {
    //   img:img42
    // },
    // {
    //   img:img43
    // },
    // {
    //   img:img44
    // },
    // {
    //   img:img45
    // },
    
  ]

  const checkupGalleryHandler = () => {
    const checkupBtnHandle = document.querySelector('.checkupGallery-container')
    const whiteBtnHandle = document.querySelector('.whitenGallery-container')
    const surgeryBtnHandle = document.querySelector('.surgeryGallery-container')

    checkupBtnHandle.style.display = "block"
    whiteBtnHandle.style.display = "none"
    surgeryBtnHandle.style.display = "none"

  }
  const whiteGalleryHandler = () => {
    const checkupBtnHandle = document.querySelector('.checkupGallery-container')
    const whiteBtnHandle = document.querySelector('.whitenGallery-container')
    const surgeryBtnHandle = document.querySelector('.surgeryGallery-container')

    checkupBtnHandle.style.display = "none"
    whiteBtnHandle.style.display = "block"
    surgeryBtnHandle.style.display = "none"

  }
  const surgeryGalleryHandler = () => {
    const checkupBtnHandle = document.querySelector('.checkupGallery-container')
    const whiteBtnHandle = document.querySelector('.whitenGallery-container')
    const surgeryBtnHandle = document.querySelector('.surgeryGallery-container')

    checkupBtnHandle.style.display = "none"
    whiteBtnHandle.style.display = "none"
    surgeryBtnHandle.style.display = "block"

  }
  return (
    <div className='container mt-5 pb-4'>
      <div className="gallery-container text-center mt-5 mb-3">
        <h2>Gallery</h2>
        <img src={borderBrige} alt=""/>
        <br/>
        <small>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem autem voluptatem obcaecati!</small>
      </div>

      <div className='galleryBtn-container text-center mb-5'>
        <button onClick={checkupGalleryHandler} className='galleryBtn' type="">
          <span></span>
              <span></span>
              <span></span>
              <span></span>
              CHECKUP
        </button>
        <button onClick={whiteGalleryHandler} className='galleryBtn' type="">
        <span></span>
              <span></span>
              <span></span>
              <span></span>
          WHITENING
        </button>
        <button onClick={surgeryGalleryHandler} className='galleryBtn' type="">
        <span></span>
              <span></span>
              <span></span>
              <span></span>
          SURGERY
        </button>
      </div>

      
      <div className='row'>
        <div className='checkupGallery-container galleryContent'>
          <CheckupGallery/>
        </div>
        <div className='whitenGallery-container galleryContent'>
          <WhiteningGallery/>
        </div>
        <div className='surgeryGallery-container galleryContent'>
          <SurgeryGallery/>
        </div>
      </div>
      
    </div>
  );
};

export default Gallery;