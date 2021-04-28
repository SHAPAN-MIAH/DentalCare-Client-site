import React, { useState } from 'react';
import Footer from '../../Shared/Footer/Footer';
import NavBar from '../../Shared/NavBar/NavBar';
import AppointmentHeader from '../AppointmentHeader/AppointmentHeader';
import BookAppointment from '../BookAppointment/BookAppointment';
import './Appointment.css'

const Appointment = () => {
    const [selectedDate, setSelectedDate] = useState(new Date());
    const handleDateChange = date => {
        setSelectedDate(date);
    }
    return (
        <div className="Appointment-container">
            <NavBar></NavBar>
            <AppointmentHeader handleDateChange={handleDateChange}></AppointmentHeader>
            <div className="container">
            <BookAppointment date={selectedDate}></BookAppointment>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Appointment;