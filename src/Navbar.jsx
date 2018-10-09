import React, { Component } from 'react'
import "./CSS/Navbar.css"
import powerBy from './images/power-by-movie.png';

export default class Navbar extends Component {
  render() {
    return (
      <div className="navbar-container">
        <div className="navbar">
            <img src={powerBy} alt="powered by movieDB"/>
        </div>
            <div className="links-container">
                <div className="links">
                    <ul>
                        <li><a href="#">Popular</a></li>
                        <li><a href="#">Top Rated</a></li>
                        <li><a href="#">Now Playing</a></li>
                    </ul>
                </div>
            </div>
      </div>
    )
  }
}
