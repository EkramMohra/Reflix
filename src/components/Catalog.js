import React, { Component } from 'react';
import Movie from './Movie';
import './Catalog.css'

class Catalog extends Component {

    constructor() {
        super()
        this.state = {
            search: "",
            budget: 100

        }
    }
    serach = movie => {
        return this.state.search === "" ? true : (movie.title.toLowerCase().indexOf(this.state.search) > -1 ? true : false)
    }
    changeSearch = async (e) => {
        await this.setState({ search: e.target.value })
     
    }
    displyRented = (myMovies) => {
        return (
            <div>
                <h3>Rented</h3>
                <div className="container">

                    {myMovies.map(m => {
                        return (m.isRented) ? <Movie movie={m} key={m.id} handleButton={this.props.handleButton} /> : null
                    })}
                </div>
            </div>
        )

    }

    render() {
    
        const movies = this.props.state.movies

        return (
            <div>
                <input value={this.state.search} onChange={this.changeSearch} placeholder="Search for a movie" />
                <div>{this.state.budget}</div>
                {this.props.state.isHaveMovie ? this.displyRented(movies) : null}



                <hr></hr>
                <h3>Catalog</h3>
                <div className="container">

                    {movies.map(m => this.serach(m) ? <Movie key={m.id} className="all-cards-movie" handleButton={this.props.handleButton} movie={m} /> : null)}
                </div>

            </div>
        )
    }
}
/* render() {
    let myMovies = [...this.props.state.movies]
    return (
      <div>
        <div className="budget">{this.state.budget}</div>
        { (this.props.state.isHaveMovie) ? this.displyRented(myMovies) : null}
        <div>
        <input type="text" value={this.state.serachText} onChange={this.updateTestText}/>
        </div>
        <h3>Catalog</h3>
        {this.displayMovies(myMovies)}
      </div>
    );
  }
 */

export default Catalog