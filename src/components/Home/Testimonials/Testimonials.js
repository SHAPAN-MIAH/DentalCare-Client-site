import React from 'react';
import './Testimonials.css';
// import Testimonial from '../Testimonial/Testimonial';
import Carousel from 'react-grid-carousel'
import { useState, useEffect } from 'react';


const Testimonials = () => {

    const [testimonialsData, setTestimonialsData] = useState()

    useEffect(()=> {
        fetch('https://doctors-port.herokuapp.com/review')
        .then(res=> res.json())
        .then(data => setTestimonialsData(data))

    }, [])
 
    return (
       <section className="testimonials mt-5">
           <div className="container">
              <div className="section-header">
                <h4 style={{color: '#ffffff'}} className="text-uppercase">Testimonial</h4>
                <h2 style={{color: '#3A4256'}}>What Our Patients <br/> Says </h2>
              </div>
                <div className="row mt-5">
                    <Carousel cols={3} rows={1} gap={28} showDots loop>
                      {testimonialsData?.map((review, i) => (
                        <Carousel.Item key={i}>
                          <div className="card shadow-sm" style={{color: 'rgb(100, 100, 100)'}}>
                            <div className="card-body">
                              <p className="card-text">{review.comments}</p>
                            </div>
                            <div className="card-footer d-flex  align-items-center mb-3">
                              <img className="mx-3" src={review.imageUrl} alt="" width="60"/>
                              <div>
                                <h6 style={{color: 'rgb(19, 190, 190)'}}>{review.name}</h6>
                                <p className="m-0">{review.location}</p>
                              </div>
                            </div>
                          </div>
                        </Carousel.Item>
                      ))}
                    </Carousel>
                </div>
           </div>
       </section>
    );
};

export default Testimonials;