import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './Home.css';
import RestuantBlock from '../../component/resturantBlock/resturantBlock';
import Questionary from '../Questionary/Questionary';
class Home extends Component {
    render() {
        return (
            // <RestuantBlock name = "Lily"
            //     rating = "3.4"
            //     genre = "Chinese"
            //     url = "http">
            // </RestuantBlock>
            // // <div></div>
            <Questionary></Questionary>
        )
    }
}
export default Home;

