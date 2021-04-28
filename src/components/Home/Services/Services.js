import React from 'react';
import fluoride from '../../../images/Fluoride.png';
import cavity from '../../../images/cavity.png';
import teethWhitening from '../../../images/tooth white.png';
import ServiceDtl from '../ServiceDtl/ServiceDtl';


const serviceData = [
    {
        title: 'Fluoride Treatment',
        img: fluoride
    },
    {
        title: 'Cavity Filling',
        img: cavity
    },
    {
        title: 'Teeth Whitening',
        img: teethWhitening
    }
]
const Services = () => {
    return (
        <section className="services-Container pb-5">
            <div className="text-center mb-5 pt-5">
                <h5 style={{color: "rgb(19, 190, 190)"}}>OUR SERVICES</h5>
                <h2 style={{color: "#3A4256"}}>Services We Provided</h2>
            </div>

            <div className="d-flex justify-content-center align-items-center">
                <div className="row w-75 pt-3">
                    {
                    serviceData.map(service => <ServiceDtl service={service}></ServiceDtl>)  
                    }
                </div>
            </div>
        </section>
    );
};

export default Services;