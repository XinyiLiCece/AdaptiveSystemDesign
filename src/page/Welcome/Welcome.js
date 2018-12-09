import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Redirect, Link } from "react-router-dom";
import 'antd/dist/antd.css';
import RegistrationForm from '../SignUp/signUp';
import { Button } from 'antd';
import SignUpPage from '../SignUpPage/SignUpPage';
import { withRouter } from 'react-router-dom'


  const SignUpBtn = withRouter(({ history }) => (
    <div>
    <Button
      type='button'
      onClick={() => {
          console.log(history) 
          history.push('/signup') }
        }
    >
      Click Me To Sign Up!
    </Button>
    <Route path="/signup" component={SignUpPage} />
    </div>
  ))

class Welcome extends React.Component {
    constructor(props) {
        super(props);
        this.state = {disabled: false};
      }
    handleClick = () => {
        this.setState({
            disabled: true
        })
    }
    render() {
        const { match, location, history } = this.props;
        return (
            <Router>
            <div>
                <h1>Welcome to the resturant recommender!</h1>
                <SignUpBtn disabled = {this.state.disabled} onClick = {() => this.handleClick()}>Sign Up
                </SignUpBtn>
                <Button disabled = {this.state.disabled} onClick = {() => this.handleClick()}>Have account? Sign In Here</Button>
                {/* <Route path="/signup" component={SignUpPage} /> */}
            </div>
            </Router>
        )

    };
}
export default Welcome;
