import React from "react";
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Appointment from "./components/Appointment/Appointment/Appointment";
import Home from "./components/Home/Home/Home";
import Dashboard from "./components/Dashboard/Dashboard/Dashboard";
import Login from "./components/Login/Login/Login";
import PrivateRoute from "./components/Login/PrivateRoute/PrivateRoute";
import Patients from "./components/Dashboard/Patients/Patients";
import Register from './components/Login/Register/Register';
import AuthProvider from './Contexts/AuthProvider/AuthProvider';
import Gallery from './components/Home/Gallery/Gallery';


function App() {

  return (
    <div className="App">
    <AuthProvider>
      <Router>
          <Switch>
            <Route exact path="/">
              <Home/>
            </Route>
            <Route path="/login">
              <Login/>
            </Route>
            <Route path="/register">
              <Register/>
            </Route>
            <Route path="/gallery">
              <Gallery/>
            </Route>
            <PrivateRoute path="/dashboard">
              <Dashboard/>
            </PrivateRoute>
            <PrivateRoute path="/dashboard/patients">
              <Patients/>
            </PrivateRoute>
            <PrivateRoute path="/appointment">
              <Appointment/>
            </PrivateRoute>
          </Switch>
      </Router>
    </AuthProvider>
    </div>
  );
}
    


export default App;
