
import React from 'react';
import useAuth from './../../../Hooks/useAuth';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';

const AllAppointmentsList = ({appointments}) => {

  const {admin} = useAuth();

  const deleteAppointmentAfterService = id => {
    axios.delete(`https://doctors-port.herokuapp.com/deleteAppointment/${id}`)
    .then(res => {
      console.log(res)
    })
        
  }
    
    return (
        <div>
            {/* <table className="table table-borderless"> */}
            <table className="table">
                <thead>
                    <tr>
                        <th style={{color: "rgb(100, 100, 100)", fontSize: '17px'}} scope="col">Name</th>
                        <th style={{color: "rgb(100, 100, 100)", fontSize: '17px'}} scope="col">Email</th>
                        <th style={{color: "rgb(100, 100, 100)", fontSize: '17px'}} scope="col">Phone</th>
                        <th style={{color: "rgb(100, 100, 100)", fontSize: '17px'}} scope="col">service</th>
                        {admin && <th style={{color: "rgb(100, 100, 100)", fontSize: '17px'}} scope="col">Delete</th>}
                    </tr>
                </thead>
                <tbody>
                    {
                    appointments.map((appointment, index) => 
                            
                        <tr>
                            <td style={{color: "#0fceec"}}>{appointment.name}</td>
                            <td style={{color: "#19d3aede"}}>{appointment.email}</td>
                            <td style={{color: "#0fceec"}}>{appointment.phone}</td>
                            <td style={{color: "#19d3aede"}}>{appointment.service}</td>
                            {admin && <td style={{color: "red"}}><FontAwesomeIcon onClick={() => deleteAppointmentAfterService(appointment._id)} className='dashboardIcons' style={{cursor: 'pointer'}} icon={faTrash} /></td>}
                        </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    );
};

export default AllAppointmentsList;