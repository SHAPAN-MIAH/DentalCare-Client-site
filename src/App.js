import React, { createContext, useState } from "react";
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

export const UserContext = createContext();
function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <div className="App">
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
    <Router>
        <Switch>
        <Route exact path="/">
            <Home/>
          </Route>
          {/* <Route path="/appointment">
            <Appointment/>
          </Route> */}
          <PrivateRoute path="/dashboard/appointment">
            <Dashboard/>
          </PrivateRoute>
          <PrivateRoute path="/dashboard/patients">
            <Patients/>
          </PrivateRoute>
          <PrivateRoute path="/appointment">
            <Appointment/>
          </PrivateRoute>
          <Route path="/login">
            <Login/>
          </Route>
        </Switch>
    </Router>
    </UserContext.Provider>
    </div>
  );
}
    


export default App;
