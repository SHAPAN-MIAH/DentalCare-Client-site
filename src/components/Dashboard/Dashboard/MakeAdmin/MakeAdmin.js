import React, { useState } from 'react';
import useAuth from './../../../../Hooks/useAuth';
import './MakeAdmin.css'
import borderBrige from '../../../../images/title-icon.png'

const MakeAdmin = () => {
  const [email, setEmail] = useState('');
  const [success, setSuccess] = useState('');
  const {authToken} = useAuth()

  const handleBlur = (e) => {
    console.log(e.target.value);
    setEmail(e.target.value);
  }

  const handleSubmit = (e) => {
    const user = {email};

    fetch('https://doctors-port.herokuapp.com/AddUsers/admin', {
      method: 'PUT',
      headers: { 
        'authorization' : `Bearer ${authToken}`,
        'content-type' : 'application/json'
      },
      body: JSON.stringify(user)
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
          <h2 className='text-center'>Make an Admin</h2>
          <small>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem autem voluptatem obcaecati!</small>
          <br/>
          <img className='mt-3' src={borderBrige} alt=""/>
        </div>

        <form onSubmit={handleSubmit} className='mt-5'>
          <input  type="email" onBlur={handleBlur} name="email"  placeholder="Email" required/>
          <br/>
          
          <button className='makeAdminBtn' type="submit">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            Make Admin 
          </button>
        </form>

        {success && <p style={{color: 'green', marginTop: '20px'}}>Admin create successfully</p>}
      </div>
    </>
  );
};

export default MakeAdmin;