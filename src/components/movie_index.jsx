import React from 'react'
import "../CSS/Movie.css"

class MovieRow extends React.Component {
  viewMovie() {
    // console.log("Trying to view movie")
    // console.log(this.props.movie.title)
    const url = "https://www.themoviedb.org/movie/" + this.props.movie.id
    window.location.href = url
  }

  render() {
    return (
      <div className="grid-container">
        <div className="movie-index">
          <div className="movie">
          </div>
        </div>
      </div>
    )
  }
}

export default MovieRow
