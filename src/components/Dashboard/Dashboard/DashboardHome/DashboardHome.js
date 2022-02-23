import React, { useEffect, useState } from 'react';
import Calendar from 'react-calendar';
import AppointmentsByDate from './../../AppointmentsByDate/AppointmentsByDate';
import './DashboardHome.css'
import useAuth from './../../../../Hooks/useAuth';

const DashboardHome = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
    const [appointments, setAppointments] = useState([]);
    const {user} = useAuth()

    const handleDateChange = date => {
        setSelectedDate(date);
    }

    useEffect( () => {
      const url = `https://doctors-port.herokuapp.com/appointmentsByDateEmail?email=${user.email}&date=${selectedDate}`
        fetch(url)
        .then(res=>res.json())
        .then(data => setAppointments(data));
    }, [selectedDate])



  return (
    <>
      <div className="row dashboardContent mt-4">
                            
        <div className="col-md-4  justify-content-center mb-5">
          <h3 className="mb-4 text-brand">Appointments by date</h3>
          <Calendar
            onChange={handleDateChange}
            value={new Date()}
          />
        </div>
        <div className="col-md-8 appointment-lists">
          <AppointmentsByDate appointments={appointments}></AppointmentsByDate>
        </div>
      </div>
    </>
  );
};

export default DashboardHome;