import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import jwt_decode from "jwt-decode";
import useAuth from './../../../Hooks/useAuth';

const PrivetRoute = ({ children, ...rest }) => {
    const {user, loading} = useAuth()
    
    // const isLoggedIn = () => {
    //   const token = sessionStorage.getItem('token');
    //   if(!token){
    //     return false;
    //   }
    //   const decodedToken = jwt_decode(token);
    //   const currentTime = new Date().getTime() / 1000;
    //   return decodedToken.exp > currentTime;
    // }

    if(loading) {
      return <div class="spinner-border text-info" role="status">
                <span class="visually-hidden"></span>
              </div>
    }
    return (
        <Route
            {...rest}
            render={({ location }) =>
            // user.email || isLoggedIn() ? (
            user.email ? (
                children
                ) : (
                <Redirect
                    to={{
                    pathname: "/login",
                    state: { from: location }
                    }}
                />
                )
            }
        />
    );
};

export default PrivetRoute;