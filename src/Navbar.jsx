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
      </div>
    )
  }
}
