import React from 'react';
import './Login.css'
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from '../Firebase/firebaseConfig';
import { useHistory, useLocation, Link, NavLink } from 'react-router-dom';
import { useContext } from 'react';
import { useState } from 'react/cjs/react.development';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle, faFacebook, faInstagram, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { UserContext } from '../../../App';
import LoginBg from '../../../images/flat-dental-care-concept-illustration_23-2148982240.jpg';
import useAuth from './../../../Hooks/useAuth';


const Login = () => {
  const [loginData, setLoginData] = useState({});
  const {user, loading, loginUser, googleSignIn, authError} = useAuth();

  const history = useHistory();
  const location = useLocation();


    // Email & password sign in method..................
    const handelBlur = (event)=> {
        let isFormValid = true;
        if(event.target.name === "email"){
          isFormValid = /\S+@\S+\.\S+/.test(event.target.value);
          
        }
        if(event.target.name === "password"){
          const isPasswordValid = event.target.value.length > 6;
          const passwordHasNumber = /\d{1}/.test(event.target.value);
          isFormValid = isPasswordValid && passwordHasNumber;
        }
        
        if(isFormValid){
          let newUserInfo = {...loginData};
          newUserInfo[event.target.name] = event.target.value;
          setLoginData(newUserInfo);
          
        }
      }

      const handelSubmit = (e) => {
        loginUser(loginData.email, loginData.password, location, history);
        e.preventDefault()
      }
      const handelGoogleSubmit = (e) => {
        googleSignIn(location, history)
      }

    // const storeAuthToken = () => {
    //   firebase.auth().currentUser.getIdToken(/* forceRefresh */ true)
    //     .then(function (idToken) {
    //       sessionStorage.setItem('token', idToken);
    //       history.replace(from);
    //     }).catch(function (error) {
    //       // Handle error
    //     });
    // }

    return (
        <div className='loginAndSignup'>
          <div className="container login-container">
            <h3>Login with your existing Email and Password</h3>
            <div className="row">
              <div className="col-md-6">
                <div className="formContainer" style={{paddingBottom: '20px'}}>
                  {user?.email && <span style={{marginBottom: '20px', color: 'green'}}>User login successfully.</span>}
                  {authError && <span style={{marginBottom: '20px', color: 'red'}}>{authError}</span>}
                      <h3>Login</h3>
                      {!loading && 
                      <div>
                        <form onSubmit={handelSubmit}>
                            
                            <input  type="email" onBlur={handelBlur} name="email"  placeholder="Email" required/>
                            <br/>
                            <input  type="password" onBlur={handelBlur} name="password" placeholder="Password" required/>
                            <br/>
                            <input  type="password" onBlur={handelBlur} name="confirmPassword" placeholder="Confirm Password" required/>
                            <br/>
                            <input id="submitBtn" type="submit" value='Login'/>
                        </form>
                        
                          <div className="loginToggle">
                            <span>Need an account?</span>
                            <NavLink style={{textDecoration: 'none'}} to='/register'>
                              <strong> Register</strong>
                            </NavLink>
                          </div>
                      </div>}
                      {loading && 
                        <div class="spinner-border text-info" role="status">
                          <span class="visually-hidden"></span>
                        </div>
                      }
                </div>
                <p className='mt-2'>or</p>
                <button onClick={handelGoogleSubmit} className='googleSignInBtn' type=""><span className="google-icon"><FontAwesomeIcon icon={faGoogle} /></span> <span className='googleSignInBtn-content'>Sign In with Google</span></button>
              </div>
              <div className="col-md-6 login-img text-left d-flex justify-content-center align-items-center">
                <img className="img-fluid loginImg" src={LoginBg} alt="" />
              </div>
            </div>
            <div className="copyRight text-center mt-4">
              <p>Copyright {(new Date()).getFullYear()} All Rights Reserved</p>
            </div>
          </div>
        </div>
    );
};

export default Login;