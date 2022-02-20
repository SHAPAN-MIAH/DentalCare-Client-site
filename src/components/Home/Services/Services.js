import React from 'react';
// import fluoride from '../../../images/Fluoride.png';
// import cavity from '../../../images/cavity.png';
import teethWhitening from '../../../images/tooth white.png';
import ServiceDtl from '../ServiceDtl/ServiceDtl';
import borderBrige from '../../../images/title-icon.png'
import dentistIcon1 from '../../../images/dentist-icon-16.jpg'
import dentistIcon2 from '../../../images/dental-icon-png-9.jpg'
import dentistIcon3 from '../../../images/images.png'
import dentistIcon4 from '../../../images/Tooth-blue-icon.png'
import dentistIcon5 from '../../../images/dental-icon-png-20.jpg'
import './Services.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTooth } from '@fortawesome/free-solid-svg-icons';

const serviceData = [
    {
        title: 'Dental Implants',
        img: teethWhitening,
        dec: 'Default text for Box Content. Lorem ipsum dolor sit amet Default text for Box Conten Lorem ipsum dolor sit amet'
    },
    {
        title: 'Dental Root canal',
        img: teethWhitening,
        dec: 'Default text for Box Content. Lorem ipsum dolor sit amet Default text for Box Conten Lorem ipsum dolor sit amet'
    },
    {
        title: 'Teeth Whitening',
        img: teethWhitening,
        dec: 'Default text for Box Content. Lorem ipsum dolor sit amet Default text for Box Conten Lorem ipsum dolor sit amet'
    },
    {
        title: 'Wisdom Teeth',
        img: teethWhitening,
        dec: 'Default text for Box Content. Lorem ipsum dolor sit amet Default text for Box Conten Lorem ipsum dolor sit amet'
    },
    {
        title: 'Crowns Bridges',
        img: teethWhitening,
        dec: 'Default text for Box Content. Lorem ipsum dolor sit amet Default text for Box Conten Lorem ipsum dolor sit amet'
    },
    {
        title: 'Cosmetic Dentis',
        img: teethWhitening,
        dec: 'Default text for Box Content. Lorem ipsum dolor sit amet Default text for Box Conten Lorem ipsum dolor sit amet'
    }
]
const Services = () => {
    return (
        <section className="services-Container">
            <div className="text-center mb-5 mt-5 pt-3">
                <h2 style={{color: "#3A4256"}}>Services We Provided</h2>
                <img src={borderBrige} alt=""/>
                <br/>
                <small>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem autem voluptatem obcaecati!</small>
            </div>

            <div className='container'>
            <div className="d-flex justify-content-center align-items-center">
                <div className="row pt-4">
                    {
                    serviceData.map(service => <ServiceDtl service={service}></ServiceDtl>)  
                    }
                </div>
            </div>
            </div>
        </section>
    );
};

export default Services;