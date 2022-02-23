import React from 'react';

const Testimonial = (props) => {
    const {name, location, comments ,imageUrl} = props.testimonial;
    return (
        <div className='col-md-4'>
            <div className="card shadow-sm" style={{color: 'rgb(100, 100, 100)'}}>
                <div className="card-body">
                    <p className="card-text">{comments}</p>
                </div>
                <div className="card-footer d-flex  align-items-center mb-3">
                    <img className="mx-3" src={imageUrl} alt="" width="60"/>
                    <div>
                        <h6 style={{color: 'rgb(19, 190, 190)'}}>{name}</h6>
                        <p className="m-0">{location}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Testimonial;