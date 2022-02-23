import React from 'react';
import doctor from '../../../images/5790-removebg.png';
import './MakeAppointment.css'
import { Link } from 'react-router-dom';

const MakeAppointment = () => {
    return (
        <section className="make-appointment">
            <div className="container">
                <div className="row">
                    <div className="col-md-5 d-none d-md-block">
                        <img src={doctor} alt=""/>
                    </div>
                    <div className="col-md-7 text-white text-center d-flex justify-content-center align-items-center">
                        <div>
                            <h4 className="text-uppercase ">Appointment</h4>
                            <h1 className="">Make an Appointment Today</h1>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod quos eaque, at neque culpa fuga, iusto ad, natus odit id illo delectus quas. Ducimus, dolore praesentium culpa saepe omnis nostrum odio perferendis ad ut assumenda quisquam ea? Necessitatibus, quod ex.Quod quos eaque, at neque culpa fuga, iusto ad, natus odit id illo delectus quas. Ducimus, dolore praesentium culpa saepe omnis nostrum.</p>
                            <Link to="/appointment">
                                <button className="appointmentBtn ">
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
            </div>
        </section>
    );
};

export default MakeAppointment;