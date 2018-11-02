import React from 'react'
import '../CSS/Movies.css'
import Movies from './Movies'

class MovieIndex extends React.Component {
  componentDidMount() {
    this.props.fetchPopular()
  }

  render() {
    if (this.props.movies === undefined) {
      return (
        <div>
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

export default MovieIndex;
