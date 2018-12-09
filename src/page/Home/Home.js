import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './Home.css';
import RestuantBlock from '../../component/resturantBlock/resturantBlock';
import Questionary from '../Questionary/Questionary';
import { Row, Col, Slider } from 'antd';
import Recommend from '../Recom/Recom';
import WrappedSignUp from '../SignUp/signUp';
import Input from '../../component/input/Input'
import RegistrationForm from '../SignUp/signUp'
import SignUpPage from '../SignUpPage/SignUpPage'
import { BrowserRouter as Router, Route, Redirect, Link } from "react-router-dom";
import Welcome from '../Welcome/Welcome'
import Search from '../Search/Search'


function Register(props) {
    return (
        <div>
            <Welcome onClick = {this.props.handleFinishRegister()}/>
        </div>
    )
}
// function Search() {
//     return (
//         <div>
//            hi
//         </div>
//     )
// }
class Home extends Component {
    
handleFinishRegister = () => {
    this.props.history.push('/recom');
}
    render() {
        return (
            <Router>

                <div>
                    <ul>
                        <li>
                            <Link to="/regis">Register</Link>
                        </li>
                        <li>
                            <Link to="/recom">Recommend</Link>
                        </li>
                        <li>
                            <Link to="/search">Search</Link>
                        </li>
                    </ul>
                <Route path = '/regis' component = {Welcome} /> 
            <Route path = '/Recom' component = {Recommend} /> 
                <Route path = '/search' component = {Search} /> 
                    {/* <Welcome></Welcome> */}
                    {/* <SignUpPage></SignUpPage>  */}
                    {/* <Route path = '/Recom' component = {Recommend} /> */}
                    {/* <RestuantBlock name = "Lily"
                    rating = "3.4"
                     genre = "Chinese"
                     url = "http">
             </RestuantBlock>
            <Questionary></Questionary> */}
                    {/* <Recommend></Recommend> */}
                    {/* <WrappedSignUp></WrappedSignUp>
             <Input></Input>
             <RegistrationForm></RegistrationForm>
             <SignUpPage></SignUpPage> 
              {/* <Route path="/home/recommend" component={Recommend} /> */}
                </div>
            </Router>
        )
    }
}
export default Home;
