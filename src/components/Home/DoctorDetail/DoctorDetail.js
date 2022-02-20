import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './DoctorDetail.css'
import { faFacebookF, faInstagram, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';



const DoctorDetail = (props) => {
  const {name, img, deg} = props.doctor;
  


  return (
    <>
      <div className='col-md-4'>
        <div className='doctorDetail-content'>
          <div className='doctorImg'>
          <img src={img} alt=""/>
          </div>
          <div className='doctorDetail-text'>
            <div className='DDtext-content'>
              <h3>{name}</h3>
              <p>{deg}</p>
              
              <div className='social'>
              <FontAwesomeIcon className='social-icon' icon={faFacebookF} />
              <FontAwesomeIcon className='social-icon' icon={faInstagram} />
              <FontAwesomeIcon className='social-icon' icon={faTwitter} />
              <FontAwesomeIcon className='social-icon' icon={faYoutube} />
              </div>
            </div>
          </div>
        </div>
      </div> 
    </>
  );
};

export default DoctorDetail;