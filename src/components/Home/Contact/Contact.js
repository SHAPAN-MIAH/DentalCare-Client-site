import React from 'react';
import './Contact.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneAlt, faTimes } from '@fortawesome/free-solid-svg-icons';
import Modal from 'react-modal';
import { useForm } from "react-hook-form";
const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        fontFamily: "Rajdhani",
        width: '750px'
    }
};

Modal.setAppElement('#root')


const Contact = () => {
    const { register, handleSubmit, errors } = useForm();

    const [modalIsOpen, setIsOpen] = React.useState(false);

    function openModal() {
        setIsOpen(true);
    }
    function closeModal() {
        setIsOpen(false);
    }
    const onSubmit = data => {}

    return (
       <section className="contact mt-5 pt-5 pb-4">
           <div className='contact-container d-flex align-items-center justify-content-center'>
               <div className='contact-content'>
                   <h3><FontAwesomeIcon icon={faPhoneAlt} /> (+01) – 234 567 890</h3>
                   <h2>Please free to contact us for emergency case.</h2>
                   <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit rem autem voluptatem obcaecati lienum phaedrum torquatos nec eu, vis detraxit periculis ex.</p>
                   <button onClick={openModal} type="">
                       <span></span>
                       <span></span>
                       <span></span>
                       <span></span>
                       Contact With us</button>
               </div>
           </div>
           <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
            >
                <div style={{textAlign: 'right', cursor: 'pointer'}}>
                    <FontAwesomeIcon onClick={closeModal} icon={faTimes} />
                </div>
                <h2 className="text-center text-brand mt-4">Contact With Us</h2>
                <p className="text-secondary text-center"><small>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem autem voluptatem obcaecati!</small></p>
                <form className="p-4" onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-group">
                        <input type="text" {...register("name")} name="name" placeholder="Your Name" defaultValue='' className="form-control shadow-none"  />
                    </div>
                    <div className="form-group">
                        <input type="text" {...register("email")} name="email" placeholder="Email" defaultValue='' className="form-control shadow-none" />
                    </div>
                    <div className="form-group">
                        <input type="text" {...register("phone")} name="phone" placeholder="Phone Number" className="form-control shadow-none" />
                    </div>
                    <div className="form-group">
                        <textarea id="textarea" name="message" placeholder="Your Message" rows="4" cols="57" className="form-control shadow-none"/>
                    </div>
                    

                    <div className="form-group">
                        <button type="submit" className="booking-btn">Send</button>
                    </div>
                </form>
            </Modal>
       </section>
    );
};

export default Contact;