import React from 'react';
import "./AllPatientsDtl.css"

const AllPatientsDtl = ({patient, index}) => {
    return (
        <div>
            <table className="table">
            <tbody>
                    <tr>
                        <td>{index + 1}</td>
                        <td>{patient.name}</td>
                        <td>{patient.gender}</td>
                        <td>{patient.age}</td>
                        <td>{patient.weight}KG</td>
                        <td>{patient.phone}</td>
                        <td>{patient.email}</td>
                    </tr>
            </tbody>
        </table>
        </div>
    );
};

export default AllPatientsDtl;