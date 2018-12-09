import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import RegistrationForm from '../SignUp/signUp';
import Questionary from '../Questionary/Questionary';


function SignUpPage() {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/signup">SignUp</Link>
          </li>
          <li>
            <Link to="/question">Question</Link>
          </li>
        </ul>

        <hr />

        <Route exact path="/signup" component={SignUp} />
        <Route path="/question" component={Question} />
      </div>
    </Router>
  );
}

function SignUp() {
  return (
    <div>
      <RegistrationForm></RegistrationForm>
    </div>
  );
}

function Question() {
  return (
    <div>
      <Questionary></Questionary>
    </div>
  );
}


export default SignUpPage;