import React from 'react';
import Modal from 'react-modal';
import { useForm } from "react-hook-form";
import useAuth from './../../../Hooks/useAuth';
import './AppointmentForm.css'

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        fontFamily: "Rajdhani"
    }
};

Modal.setAppElement('#root')

const AppointmentForm = ({ modalIsOpen, closeModal, appointmentOn, date }) => {
    const { register, handleSubmit, errors } = useForm();
    // const { register, handleSubmit, watch, formState: { errors } } = useForm();
  
    const onSubmit = data => {
        data.service = appointmentOn;
        data.date = date.toLocaleDateString();
        data.created = new Date();
        console.log(data);

        fetch('https://doctors-port.herokuapp.com/addAppointment', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(success => {
            if(success){
                closeModal();
                alert('Appointment created successfully.');
            }
        })
    }

    const {user} = useAuth();

    return (
        <div>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
            >
                <h2 className="text-center text-brand mt-4">{appointmentOn}</h2>
                <p className="text-secondary text-center"><small>ON {date.toDateString()}</small></p>
                <form className="p-4" onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-group">
                        <input type="text" {...register("name")} name="name" placeholder="Your Name" defaultValue={user.displayName} className="form-control shadow-none"  />
                    </div>
                    <div className="form-group">
                        <input type="text" {...register("email")} name="email" placeholder="Email" defaultValue={user.email} className="form-control shadow-none" />
                    </div>
                    <div className="form-group">
                        <input type="text" {...register("phone")} name="phone" placeholder="Phone Number" className="form-control shadow-none" />
                    </div>
                    <div className="form-group row">
                        <div className="col-md-4">
                            <select className="form-control shadow-none" {...register("gender")} name="gender"  >
                                <option disabled={true} value="Not set">Select Gender</option>
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                                <option value="Not set">Other</option>
                            </select>
                        </div>

                        <div className="col-md-4">
                            <input className="form-control shadow-none" {...register("age")} name="age" placeholder="Your Age" type="number"/>
                        </div>
                        <div className="col-md-4">
                            <input className="form-control shadow-none" {...register("weight")} name="weight" placeholder="Weight" type="number" />
                        </div>
                    </div>

                    <div className="form-group">
                        <button type="submit" className="booking-btn">Submit</button>
                    </div>
                </form>
            </Modal>
        </div>
    );
};

export default AppointmentForm;