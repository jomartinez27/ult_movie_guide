import React from 'react'
import "../CSS/Movie.css"
import $ from 'jquery'
import MovieItem from './movie_item'

class MovieRow extends React.Component {
  constructor(props) {
    super(props)

    this.state = {}
  }


  displayMovie() {
    let urlString = `https://api.themoviedb.org/3/movie/${this.props.movie.id}?api_key=${'13974aec8a507bc409f142057852e657'}&language=en-US`
    $.ajax({
      url: urlString,
      success: movie => {
        const movieItem = <MovieItem key={movie.id} movie={movie}/>
        this.setState({movie: movieItem})
        console.log(this.state)
      }
    })
  }

  displayDate() {
    
  }

  render() {
    return (
      <div className="movie-index-container">
        <div className="grid-container">
          <div className="movie">
            <img src={this.props.movie.img} alt="Movie poster"/>
            <div className="movie-info">
              <div className="movie-title" onClick={this.displayMovie.bind(this)}>{this.props.movie.title}
              </div>
              <div className="movie-date">Release Date: {this.props.movie.get_date}
              </div>
              <p className="movie-overview">{this.props.movie.overview}</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default MovieRow
