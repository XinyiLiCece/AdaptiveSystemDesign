import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './Questionary.css';
import RestuantBlock from '../../component/resturantBlock/resturantBlock';
import Modal from '../../component/modal/modal';
import RatingBlock from '../../component/ratingBlock/ratingBlock'
import { Row, Col, Slider, Timeline } from 'antd';
import 'antd/dist/antd.css';
//import 'antd/lib/slider/style/css';


class Questionary extends Component {
    constructor(props) {
        super(props)
        this.state = {
            visible: false
        }
    }
    handleClick = () => {
        this.setState({
            visible: true,
        });
    }
    // renderBlock() {
    //     return (
    //         <RatingBlock
    //             name="Lily"
    //             genre="Chinese"
    //             url="http"
    //         />
    //     );
    // }


    render() {
        const datas = [
            {
                name: 'Bangkok',
                genre: 'Thai',
                url: 'http1',
                title: 'Rate',
            },
            {
                name: 'Pastoli Pizza',
                genre: 'Italian',
                url: 'http2',
                title: 'Rate',
            },
            {
                name: 'Bird On The Run',
                genre: 'Chicked Shop',
                url: 'http3',
                title: 'Rate',
            },
            {
                name: 'El Mecs',
                genre: 'Mexican',
                url: 'http4',
                title: 'Rate',
            },
            {
                name: 'Hidder Harbor',
                genre: 'Hawaiian',
                url: 'http5',
                title: 'Rate',
            },
            {
                name: 'Independent Brewing Company',
                genre: 'Pubs',
                url: 'http6',
                title: 'Rate',
            },
            {
                name: 'Aladdin Eatery',
                genre: 'Middle Eastern',
                url: 'http7',
                title: 'Rate',
            },
            {
                name: 'Ramen Bar',
                genre: 'Ramen',
                url: 'http8',
                title: 'Rate',
            },
            {
                name: 'Ramen Bar',
                genre: 'Ramen',
                url: 'http9',
                title: 'Rate',
            },
            {
                name: 'Green Pepper',
                genre: 'Korean',
                url: 'http10',
                title: 'Rate',
            },
        ];
        const colItems = datas.map((data) =>
            <Col className = "rating-block-container" span={8}>
                <RatingBlock 
                    name={data.name}
                    genre={data.genre}
                    url={data.url}
                    title={data.title}></RatingBlock>
            </Col>
        );
        return (
            <div>
                <Row>{colItems}</Row>
                    {/* <Modal 
                      title = 'Rate Me'
                      visible = {this.state.visible}
                      onClick={() => this.handleClick()}
                      onCancel = {() => this.setState({visible: false})}
                    ></Modal> */} 

            </div>)
    };
};
export default Questionary;