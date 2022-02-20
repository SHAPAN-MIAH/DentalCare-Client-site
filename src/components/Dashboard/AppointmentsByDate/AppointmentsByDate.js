import React from 'react';
import "./AppointmentsByDate.css";
import AppointmentShortList from '../AppointmentShortList/AppointmentShortList';

const AppointmentsByDate = ({appointments}) => {
    return (
        <div className=" appointment-list">
            <h3 className="text-brand ">Appointments list</h3>
            {
                appointments.length ?
                 <AppointmentShortList appointments={appointments} ></AppointmentShortList>
                :
                <div className="mt-4">
                    <h4 className="lead">No Appointments for this Date</h4>
                </div>
            }
        </div>
    );
};

export default AppointmentsByDate;