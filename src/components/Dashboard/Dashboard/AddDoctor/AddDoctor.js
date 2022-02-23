import React, { useState } from 'react';
import borderBrige from '../../../../images/title-icon.png'


const AddDoctor = () => {
  const [doctorData, setDoctorData] = useState('');
  const [success, setSuccess] = useState('');

  const handleBlur = (e) => {
    console.log(e.target.value);
    setDoctorData(e.target.value);
  }

  const handleSubmit = (e) => {
    const doctor = {doctorData};

    fetch('https://doctors-port.herokuapp.com/addDoctor', {
      method: 'POST',
      headers: {
        'content-type' : 'application/json'
      },
      body: JSON.stringify(doctor)
    })
    .then(res => res.json())
    .then(data => {
      if(data.modifiedCount){
        console.log(data)
        setSuccess(true);
      }
    })

    e.preventDefault()
  }


  return (
    <>
      <div className='makeAdmin-container'>
        <div>
          <h2 className='text-center'>Add a Doctor</h2>
          <small>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem autem voluptatem obcaecati!</small>
          <br/>
          <img className='mt-3' src={borderBrige} alt=""/>
        </div>

        <form onSubmit={handleSubmit} className='mt-5'>
          <input  type="text" onBlur={handleBlur} name="name"  placeholder="Name" required/>
          <br/>
          <input  type="text" onBlur={handleBlur} name="designation"  placeholder="Designation" required/>
          <br/>
          <input  type="file" onBlur={handleBlur} name="img"  required/>
          <br/>
          
          <button className='makeAdminBtn' type="submit">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            Add a Doctor
          </button>
        </form>

        {success && <p style={{color: 'green', marginTop: '20px'}}>Doctor added successfully</p>}
      </div>
    </>
  );
};

export default AddDoctor;