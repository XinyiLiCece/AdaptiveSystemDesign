import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './Home.css';
import RestuantBlock from '../../component/resturantBlock/resturantBlock';
import Questionary from '../Questionary/Questionary';
import { Row, Col, Slider } from 'antd';
import Recommend from '../Recom/Recom';
import SignUp from '../SignUp/signUp';

class Home extends Component {
    render() {
        return (
            // <RestuantBlock name = "Lily"
            //     rating = "3.4"
            //     genre = "Chinese"
            //     url = "http">
            // </RestuantBlock>
            // // <div></div>
            // <Questionary></Questionary>
            <Recommend></Recommend>
            // <SignUp></SignUp>
        )
    }
}
export default Home;

