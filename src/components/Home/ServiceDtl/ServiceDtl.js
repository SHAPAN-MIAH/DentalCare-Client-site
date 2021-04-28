import React from 'react';

const ServiceDtl = (props) => {
    const {title, img} = props.service;
    return (
        <div className="col-md-4 text-center">
            <div style={{height: '60px'}}>
            <img style={{width: '50px'}} src={img} alt=""/>
            </div>
            <h5 className="pb-2 pt-2">{title}</h5>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. A, vitae!</p>
        </div>
    );
};

export default ServiceDtl;