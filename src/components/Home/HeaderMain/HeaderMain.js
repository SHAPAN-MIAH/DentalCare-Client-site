import React from 'react';
import { Link } from 'react-router-dom';
import chair from "../../../images/Mask Group 1.png";
import './HeaderMain.css'

const HeaderMain = () => {
    return (
        <>
              <main style={{height: "600px"}} className="row m-0 d-flex align-items-center main">
                    
                        <div className="col-md-4 offset-md-1 headerMain-dtl ">
                            <h1>Your New Smile <br/> Starts Here</h1>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex vero perspiciatis labore, voluptatum ipsam quam.</p>
                            <Link to="/appointment">
                            <button className="getAppointmentBtn">
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            Get Appointment</button>
                            </Link>
                        </div>
                    
                        <div className="col-md-6">
                            <img src={chair} alt="" className="img-fluid"/>
                        </div>
                    
              </main>
        </>
    );
};

export default HeaderMain;