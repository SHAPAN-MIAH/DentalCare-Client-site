import React, { useState } from 'react';
import Footer from '../../Shared/Footer/Footer';
import AppointmentHeader from '../AppointmentHeader/AppointmentHeader';
import BookAppointment from '../BookAppointment/BookAppointment';
import './Appointment.css'
import Nav from './../../Shared/Nav/Nav';

const Appointment = () => {
    const [date, setDate] = useState(new Date());
    const handleDateChange = date => {
        setDate(date);
    }
    return (
        <div className="Appointment-container">
            <Nav/>
            <AppointmentHeader handleDateChange={handleDateChange}></AppointmentHeader>
            <div className="container">
            <BookAppointment date={date}></BookAppointment>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Appointment;