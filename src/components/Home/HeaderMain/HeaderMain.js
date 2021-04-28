import React from 'react';
import { Link } from 'react-router-dom';
import chair from "../../../images/Mask Group 1.png";
import './HeaderMain.css'
const HeaderMain = () => {
    return (
        <main style={{height: "600px"}} className="row d-flex align-items-center ">
            <div className="col-md-4 offset-md-1 headerMain-dtl">
                <h1 style={{color: '#3A4256'}}>Your New Smile <br/> Starts Here</h1>
                <p className="text-secondary">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex vero perspiciatis labore, voluptatum ipsam quam.</p>
                <Link to="/appointment">
                <button style={{background: 'rgb(19, 190, 190)', color: 'white'}} className="btn">Get Appointment</button>
                </Link>
            </div>
            <div className="col-md-6">
                <img src={chair} alt="" className="img-fluid"/>
            </div>
            
        </main>
    );
};

export default HeaderMain;