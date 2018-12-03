import React from 'react';
import ReactDOM from 'react-dom';
import './ratingBlock.css';
import { Rate } from 'antd';


class RatingBlock extends React.Component {
    state = {
        value: 0,
    }
    handleChange = (value) => {
        this.setState({ value });
    }
    handleClick(url) {
        console.log("go to resturant");
        // open resturant page
    }
    render() {
        const name = this.props.name;
        const genre = this.props.genre;
        const url = this.props.url;
        const { value } = this.state;
        return (
            <div className = "rating-container">
                <div className="resturant_name">{name}</div>
                <div className="resturant_gerne">{genre}</div>
                <span>
                    <Rate onChange={this.handleChange} value={value} />
                    <span className="ant-rate-text"></span>
                </span>
            </div>
        )
    }
}
export default RatingBlock;