import React from 'react';
import './ServiceDtl.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTooth } from '@fortawesome/free-solid-svg-icons';

const ServiceDtl = (props) => {
    const {title, img, dec} = props.service;
    return (
        <div className="col-md-4 text-center mb-4 serviceDtl-container">
            <div style={{height: 'auto'}}>
            <img style={{width: '40px'}} src={img} alt=""/>
            {/* <FontAwesomeIcon icon={faTooth} /> */}
            </div>
            <div className='ml-3 serviceDtl-container-text'>
            <h4 className="pb-2 pt-2">{title}</h4>
            <p>{dec}</p>
            </div>
        </div>
    );
};

export default ServiceDtl;