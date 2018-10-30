import React from 'react'
import { Link } from 'react-router-dom'
import '../CSS/Movies.css'
import Navbar from '../Navbar';
import Movies from './Movies'

class MovieIndexRated extends React.Component {
    componentDidMount() {
        this.props.fetchTopRated()
    }

    render() {
        if (this.props.movies === undefined) {
            return (
              <div>
                <Navbar />
                <div className="loading-container">
                  <div className="lds-ring"><div></div><div></div><div></div><div></div></div>
                </div>
              </div>
            )
        }
        return (
          <div>
            <Movies movies={this.props.movies}/>
          </div>
        )
    }
}

export default MovieIndexRated;
