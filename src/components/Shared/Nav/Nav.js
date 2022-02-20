import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import logo from "../../../images/0001036-dental-logo-maker-dentist-Logo-02.png";
import './Nav.css'
import useAuth from './../../../Hooks/useAuth';



const Nav = () => {
  const {user, logOut} = useAuth()
  return (
    <>

      <nav className="navbar navbar-expand-lg navbar-light  pt-3 pb-0">
        <div className="container-fluid" style={{width: '1300px'}}>
          <a className="navbar-brand" href="#">
            <div id="mainlogo">
              <img style={{ width: "50px" }} src={logo} />
              <span>DentalCare</span>
            </div>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 ml-auto">
              {/* <li className="nav-item nav-menu">
                <a className="nav-link" aria-current="page" href="/">
                  
                </a>
              </li>
              <li className="nav-item nav-menu">
                <a className="nav-link" href="">
                  SERVICES
                </a>
              </li>
              
              <li className="nav-item nav-menu">
                <a className="nav-link" href="#">
                  DEPARTMENT
                </a>
              </li>
              <li className="nav-item nav-menu">
                <a className="nav-link" href="/gallery">
                GALLERY
                </a>
              </li> */}
              <li className="nav-item nav-menu">
                {
                  user?.email ? <a className="nav-link" href="/">
                  HOME
                </a> : 
                <a style={{color: 'rgb(170, 170, 170)'}} className="nav-link" href="/">
                  HOME
                </a>
                }
              </li>
              
              <li className="nav-item nav-menu">
                <a style={{color: 'rgb(170, 170, 170)'}} className="nav-link" href="/appointment">
                APPOINTMENT
                </a>
              </li>

              {user?.email? <li className="nav-item nav-menu">
                <a style={{color: 'rgb(170, 170, 170)'}} className="nav-link " href="/dashboard">
                  DASHBOARD
                </a>
              </li> : ''}

              <li className="nav-item nav-menu">
                {
                  user?.email ? <a  onClick={logOut} style={{color: 'rgb(170, 170, 170)', cursor: 'pointer'}} className="nav-link">LOG OUT</a> : <a style={{color: 'rgb(170, 170, 170)'}} className="nav-link" href="/login">SIGN UP/ SIGN IN</a>
                }
              </li>
            </ul>
            
          </div>
        </div>
      </nav>
    </>
  );
};

export default Nav;
