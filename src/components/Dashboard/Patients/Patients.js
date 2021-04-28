import React, { useEffect, useState } from 'react';
import AllPatientsDtl from '../AllPatientsDtl/AllPatientsDtl';
import Sidebar from '../Sidebar/Sidebar';
import "./Patients.css"

const Patients = () => {
    const [patients, setPatients] = useState([]);
    useEffect(()=> {
        fetch('http://localhost:4000/patients')
        .then(res=> res.json())
        .then(data => setPatients(data))

    }, [])
    return (
        <div className="row">
            <div className="col-md-2">
            <Sidebar></Sidebar>
            </div>
            <div className="col-md-9 patients-table">
            <h2>this is patients list</h2>
            <table className="table table-borderless">
                <thead>
                    <tr>
                    <th className="text-secondary text-left" scope="col">Sr No</th>
                    <th className="text-secondary" scope="col">Name</th>
                    <th className="text-secondary" scope="col">Gender</th>
                    <th className="text-secondary" scope="col">Age</th>
                    <th className="text-secondary" scope="col">Weight</th>
                    <th className="text-secondary" scope="col">Phone</th>
                    <th className="text-secondary" scope="col">Email</th>
                    </tr>
                </thead>
            </table>
            {
                patients.map((patient, index) => <AllPatientsDtl patient={patient} index={index}></AllPatientsDtl>)
            }
            </div>
        </div>
    );
};

export default Patients;