import logo from './logo.svg';
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import CreateGymSession from "./components/create-gym-session.component.js";
import CreateUser from "./components/create-user.component.js";
import Navbar from "./components/navbar.component.js"
import GymLog from "./components/gym-log.component.js";
import EditGymSession from "./components/edit-gym-session.component.js";

function App() {
  return (
    <Router>
      <div className="container">
      <Navbar />
      <br/>
      <Route path="/" exact component={GymLog} />
      <Route path="/edit/:id" component={EditGymSession} />
      <Route path="/create" component={CreateGymSession} />
      <Route path="/user" component={CreateUser} />
      </div>
    </Router>
  );
}

export default App;