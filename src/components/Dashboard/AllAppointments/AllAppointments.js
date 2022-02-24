import React, { useEffect, useState } from 'react';
import AllAppointmentsList from './AllAppointmentsList';


const AllAppointments = () => {
  const [allAppointments, setAllAppointments] = useState([]);

  useEffect(()=> {
    fetch(`https://doctors-port.herokuapp.com/allAppointments`)
    .then(res=>res.json())
    .then(data => setAllAppointments(data));
  }, [])
    
    return (
        <div className=" appointment-list">
            {
               <AllAppointmentsList appointments={allAppointments}></AllAppointmentsList>
            }
        </div>
    );
};

export default AllAppointments;