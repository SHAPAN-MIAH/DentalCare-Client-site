import React, { useState } from 'react';
import "./AppointmentsByDate.css";
import AppointmentShortList from '../AppointmentShortList/AppointmentShortList';
import AllAppointments from './../AllAppointments/AllAppointments';


const AppointmentsByDate = ({appointments}) => {
    const [toggle, setToggle] = useState(false)
    
    const toggleHandler = () => {
        const youAppointmentContainer = document.querySelector('.yourAppointment-container');
        const AllAppointmentContainer = document.querySelector('.AllAppointment-container');

        toggle ? setToggle(false) : setToggle(true);
        console.log(toggle)

        if(toggle) {
            youAppointmentContainer.style.display = 'block'
            AllAppointmentContainer.style.display = 'none'
        }
        else{
            youAppointmentContainer.style.display = 'none'
            AllAppointmentContainer.style.display = 'block'
        }
    }

    return (
        <div className=" appointment-list">
            <div className='d-flex'>
                <h3 className="text-brand ">Appointments list</h3>
                
                    <button className='allPointmentBtn' type="">
                        <label class="switch mr-1">
                        <input onClick={toggleHandler} type="checkbox"/>
                        <span class="slider round"></span>
                        </label> 
                        All Appointments
                    </button>
                
            </div>

            <div>
                <div className='yourAppointment-container'>
                    {appointments.length ?
                    <AppointmentShortList appointments={appointments} ></AppointmentShortList>
                    :
                    <div className="mt-4">
                        <h4 className="lead">No Appointments for this Date</h4>
                    </div>}
                </div>
                <div className='AllAppointment-container'>
                    <AllAppointments/>
                </div>
            </div>
        </div>
    );
};

export default AppointmentsByDate;