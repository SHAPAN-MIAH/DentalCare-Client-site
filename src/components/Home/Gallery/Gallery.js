import React from 'react';
import borderBrige from '../../../images/title-icon.png'
import './Gallery.css'
import CheckupGallery from '../CheckupGallery/CheckupGallery';
import WhiteningGallery from '../WhiteningGallery/WhiteningGallery';
import SurgeryGallery from '../SurgeryGallery/SurgeryGallery';


const Gallery = () => {

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