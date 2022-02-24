import React from 'react';
import dentist1 from '../../../images/1 (2).jpg'
import dentist2 from '../../../images/2 (2).jpg'
import dentist3 from '../../../images/3.jpg'
import dentist4 from '../../../images/4 (1).jpg'
import dentist5 from '../../../images/img-dentist.png'
import dentist6 from '../../../images/download.png'
import dentist7 from '../../../images/smiling-beautiful-female-dentist-assistant-in-dental-clinic-ABZF03396.jpg'
import dentist8 from '../../../images/main-qimg-e308e0118156557d6fe9dc4637c14f01-lq.jpg'
import dentist9 from '../../../images/lady-doctor-27s-apron-stitching-500x500.jpg'
import dentist10 from '../../../images/depositphotos_148316093-stock-photo-beautiful-young-dentist-with-jaw.jpg'
import dentist11 from '../../../images/1194147-female-dentist-menu-female-dentist-png-300_510_preview.png'
import dentist12 from '../../../images/istockphoto-490512182-612x612.jpg'
import borderBrige from '../../../images/title-icon.png'
// import DoctorDetail from '../DoctorDetail/DoctorDetail';
import './Doctor.css'
import '../DoctorDetail/DoctorDetail.css'
import Carousel from 'react-grid-carousel'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';

const Doctor = () => {
    const doctorsData = [
        {
          name: 'Dr. Evans',
          img: dentist1,
          deg: 'Dentist Surgeon'  
        },
        {
          name: 'Dr. Andrea',
          img: dentist9,
          deg: 'Dentist Surgeon'  
        },
        {
          name: 'Dr. Ellie',
          img: dentist2,
          deg: 'Dentist Surgeon'  
        },

        {
          name: 'Dr. Jones',
          img: dentist3,
          deg: 'Dentist Surgeon'  
        },
        {
          name: 'Dr. Samantha',
          img: dentist4,
          deg: 'Dentist Surgeon'  
        },
        {
          name: 'Dr. Athena',
          img: dentist5,
          deg: 'Dentist Surgeon'  
        },
        {
          name: 'Dr. Alyssa',
          img: dentist6,
          deg: 'Dentist Surgeon'  
        },
        {
          name: 'Dr. Mackenzie',
          img: dentist7,
          deg: 'Dentist Surgeon'  
        },
        {
          name: 'Dr. Katherine',
          img: dentist8,
          deg: 'Dentist Surgeon'  
        },
        {
          name: 'Dr. Katherine',
          img: dentist10,
          deg: 'Dentist Surgeon'  
        },
        {
          name: 'Dr. Katherine',
          img: dentist11,
          deg: 'Dentist Surgeon'  
        },
        {
          name: 'Dr. Katherine',
          img: dentist12,
          deg: 'Dentist Surgeon'  
        }
        
    ]

   
    return (
      <div className='container'>
        <div className='doctors-header'>
          <div className="text-center mb-5 pt-3">
            <h2>Our Dentist</h2>
            <img src={borderBrige} alt=""/>
            <br/>
            <small>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem autem voluptatem obcaecati!</small>
          </div>
        </div>
        <div className='row pt-4'>
          {/* {
            doctorsData.map(doctor => <DoctorDetail key={doctor.key} doctor={doctor}></DoctorDetail>)
          } */}

          <Carousel cols={3} rows={1} gap={25} showDots loop>
            {doctorsData.map((val, i) => (
              <Carousel.Item key={i}>
                <div className='doctorDetail-content'>
                  <div className='doctorImg'>
                  <img src={val.img} alt=""/>
                  </div>
                  <div className='doctorDetail-text'>
                    <div className='DDtext-content'>
                      <h3>{val.name}</h3>
                      <p>{val.deg}</p>
                      
                      <div social-container>
                      <FontAwesomeIcon className='social-icon' icon={faFacebookF} />
                      <FontAwesomeIcon className='social-icon' icon={faInstagram} />
                      <FontAwesomeIcon className='social-icon' icon={faTwitter} />
                      <FontAwesomeIcon className='social-icon' icon={faYoutube} />
                      </div>
                    </div>
                  </div>
                </div>
              </Carousel.Item>
            ))}
          </Carousel>
          
        </div>
      </div>
    );
};

export default Doctor;