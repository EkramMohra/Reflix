import React, { Component } from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom'
import '../styles/home.css'

class Landing extends Component {
    constructor() {
        super()
        this.state = {
            users: [
                { name: "Ekram", backgroundColor: "blue" },
                { name: "Laren", backgroundColor: "purple" },
                { name: "roba", backgroundColor: "yellow" },
                { name: "Nadien", backgroundColor: "pink" }
            ]
        }
    }
   

    render() {
        return (
            <div>

                <h1 id="home-title">users</h1>

                <div id="home-container">
                    {this.state.users.map(u => <Link to="/catalog" key={u.backgroundColor}> <div id={u.backgroundColor}><span className="main-directory-text">{u.name}</span></div></Link>)}



                </div>
            </div>
        );
    }
}

export default Landing;