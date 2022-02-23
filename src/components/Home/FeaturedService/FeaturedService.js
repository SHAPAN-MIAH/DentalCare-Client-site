import React from 'react';
import featuredImg from "../../../images/treat-teeth-whitening.jpg"
import './FeaturedService.css'
import { Link } from 'react-router-dom';


const FeaturedService = () => {
    return (
        <section className="featured-section mt-5 pt-5">
            <div className="container ">
                <div className="row">
                    <div className="col-md-5 mb-5 pt-3">
                        <img className="img-fluid" src={featuredImg} alt=""/>
                    </div>
                    <div className="col-md-7 pt-3">
                        <h1 className="mb-3">We Care About Your teeth</h1>
                        <p className="mb-4">We sincerely believe that visiting a dentist shouldn’t be a frightening or stressful experience! We provide an equally comfortable experience of relaxation for all our young and adult customers visiting a dentist ! We sincerely believe that visiting a dentist shouldn’t be a frightening or stressful experience! We provide an equally comfortable experience of relaxation for all our young and adult customers visiting a dentist.</p>
                        <Link to="/appointment">
                            <button className="getAppointmentBtn pl-5 pr-5">
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                                Make an Appointment
                            </button>
                        </Link>
                        
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FeaturedService;