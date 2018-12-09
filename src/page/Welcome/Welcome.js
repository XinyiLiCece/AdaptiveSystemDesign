import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Redirect, Link } from "react-router-dom";
import 'antd/dist/antd.css';
import RegistrationForm from '../SignUp/signUp';
import { Button } from 'antd';

function SignUp() {
    return (
      <div>
        <RegistrationForm></RegistrationForm>
      </div>
    );
  }

class Welcome extends React.Component {
    render() {
        return (
            <Router>
            <div>
                <h1>Welcome to the resturant recommender!</h1>
                <Button>Sign Up
                <Link to={{pathname: '/signup'}}></Link>
                </Button>
                <Button>Sign In</Button>
                <Route path="/signup" component={SignUp} />   
            </div>
            </Router>
        )

    };
}
export default Welcome;
