import React, { Component } from 'react';
import './Catalog.css'


class MoviesDetail extends Component {

    render() {

        const id = this.props.match.params.id
        const movies = this.props.state.movies
        let filter = movies.filter(f => f.id == id)

        return (

            filter.map(f =>


                <div key={f.id}>

                    <img className="directory-img" src={f.img} alt="" />
                    <div>{f.title} {f.year}:</div>
                    <div>
                        {f.descrShort}
                    </div>

                </div>
            
           )


        )
}
}

export default MoviesDetail;
