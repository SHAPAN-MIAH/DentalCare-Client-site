import React from 'react';
import './Contact.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
const Contact = () => {
    return (
       <section className="contact mt-5 pt-5 pb-4">
           <div className='contact-container d-flex align-items-center justify-content-center'>
               <div className='contact-content'>
                   <h3><FontAwesomeIcon icon={faPhoneAlt} /> (+01) – 234 567 890</h3>
                   <h2>Please free to contact us for emergency case.</h2>
                   <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit rem autem voluptatem obcaecati lienum phaedrum torquatos nec eu, vis detraxit periculis ex.</p>
                   <button type="">
                       <span></span>
                       <span></span>
                       <span></span>
                       <span></span>
                       Contact With us</button>
               </div>
           </div>
           {/* <div className="container">
               <div className="section-header text-center text-white mb-5">
                    <h5 className="text-primary">Contact</h5>
                    <h1>Always  connect with us</h1>
               </div>
               <div className="col-md-9 mx-auto">
                   <form action="">
                       <div className="form-group">
                           <input type="text" className="form-control" placeholder="Email Address *"/>
                       </div>
                       <div className="form-group">
                           <input type="text" className="form-control" placeholder="Subject *"/>
                       </div>
                       <div className="form-group">
                           <textarea name="" className="form-control" id="" cols="30" rows="10" placeholder="Message *"></textarea>
                       </div>
                       <div className="form-group text-center">
                           <button type="button" className="btn btn-primary"> Submit </button>
                       </div>
                   </form>
               </div>
           </div> */}
       </section>
    );
};

export default Contact;