import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import './Catalog.css'
import { BsFillDashCircleFill, BsFillPlusCircleFill } from 'react-icons/bs';


class Movie extends Component {
    changeRented = () => {
this.props.handleButton(this.props.movie.id)
    }
    render() {
     
        const movie = this.props.movie
    

        return (
            <div id="movies-conFtainer">
                
                    <div className="icon">{movie.isRented ? <BsFillDashCircleFill onClick={this.changeRented} /> : <BsFillPlusCircleFill onClick={this.changeRented} />}</div>
                    <Link to={`/MoviesDetail/${movie.id}`}>
                        <img className="directory-img" src={movie.img} alt="" />
                        <div>{movie.title}</div>
                    </Link>
            
            </div >
        )
    }
}

export default Movie;
