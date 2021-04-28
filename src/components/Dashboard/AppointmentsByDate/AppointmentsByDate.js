import React from 'react';
import "./AppointmentsByDate.css";
import AppointmentShortList from '../AppointmentShortList/AppointmentShortList';

const AppointmentsByDate = ({appointments}) => {
    return (
        <div className="mt-5 py-5 appointment-list">
            <h4 className="text-brand ">Appointments list</h4>
            {
                appointments.length ?
                 <AppointmentShortList appointments={appointments} ></AppointmentShortList>
                :
                <div className="p-5">
                    <h4 className="lead text-center">No Appointments for this Date</h4>
                </div>
            }
        </div>
    );
};

export default AppointmentsByDate;