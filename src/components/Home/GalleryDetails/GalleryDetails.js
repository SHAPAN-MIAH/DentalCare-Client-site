import React from 'react';
import './GalleryDetails.css'

const GalleryDetails = (props) => {
  const {img} = props.data;
  return (
    <div className='col-md-4'>
      <div className='galleryImg'>
        <img width='100%' src={img} alt=""/>
      </div>
    </div>
  );
};

export default GalleryDetails;