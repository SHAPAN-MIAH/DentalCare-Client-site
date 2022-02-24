import React from 'react';
import chair from '../../../images/dentist-with-smile_144627-888.jpg';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './AppointmentHeader.css'


const AppointmentHeader = ({handleDateChange}) => {
    
    return (
        <main style={{ height: '640px'}} className="row d-flex align-items-center AppointmentHeader-container">
            <div className="col-md-4 offset-md-1 calendar-container">
                <h2 style={{ color: '#0fceec' }}>Make Appointment</h2>
                <h6>Select Appointment Date.</h6>
                <div className="calenders">
                <Calendar
                    onChange={handleDateChange}
                    value={new Date()}
                    className='calender'
                />
                </div>
            </div>
            <div className="col-md-6 mt-4">
                <img src={chair} alt="" className="img-fluid"  style={{borderRadius: '10px', marginTop: '10px'}}/>
            </div>
        </main>
    );
};

export default AppointmentHeader;