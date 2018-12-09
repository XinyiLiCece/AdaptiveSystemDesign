import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './Search.css';
import { List, Icon } from 'antd';
import { Input } from 'antd';
import { Rate } from 'antd';
import ModalForm from '../../component/ModalForm/ModalForm';
import Axios from 'axios';

const Search = Input.Search;

class Recommend extends Component {
    constructor(props) {
        super(props)
        this.state = {
            visible: false,
            userId: "test",
            data: []
        }
    }

    render() {
        return (
            <div>
                <Search
                    placeholder="input search text"
                    onSearch={value => console.log(value)}
                    enterButton
                />
            </div>)
    };
};
export default Recommend;

