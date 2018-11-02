import React from 'react'
import '../CSS/Movies.css'
import Navbar from '../Navbar';
import Movies from './Movies'

class MovieIndexPlaying extends React.Component {
  componentDidMount() {
      this.props.fetchPlaying()
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

export default MovieIndexPlaying;
