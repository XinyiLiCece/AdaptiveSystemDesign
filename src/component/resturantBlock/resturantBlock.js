import React from 'react';
import ReactDOM from 'react-dom';
import './resturantBlock.css';
import Star from '../Star/Star';

//button star
class ResturantBlock extends React.Component {
    handleClick(url) {
        console.log("go to resturant");
// open resturant page
    }
    render() {
        const name = this.props.name;
        const rating = this.props.rating;
        const genre = this.props.genre;
        const url = this.props.url;

        return (
            <div>
                <div className = "resturant_name">{name}</div>
                <div className = "resturant_score">
                    <Star value = {rating}></Star>
                    {rating}
                </div>
                <div className = "resturant_gerne">{genre}</div>
                <button 
                    className = "resturant_btn"
                    onClick = {() => this.handleClick(url)}> Open
                </button>
            </div>
        )
    }
}
export default ResturantBlock;