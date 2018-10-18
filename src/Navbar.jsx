import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import "./CSS/Navbar.css"
import powerBy from './images/power-by-movie.png';

export default class Navbar extends Component {
    render() {
        return (
            <div className="navbar-container">
                <div className="navbar">
                    <Link to="/"><img src={powerBy} alt="powered by movieDB" /></Link>
                </div>
                <div className="links-container">
                    <div className="links">
                        <ul>
                            <li className="link-list"><Link to="/">Home</Link></li>
                            <li className="link-list"><Link to="/popular">Popular</Link></li>
                            <li className="link-list"><Link to="/rated">Top Rated</Link></li>
                            <li className="link-list"><Link to="/playing">Now Playing</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}