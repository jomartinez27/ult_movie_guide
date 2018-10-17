import React from 'react'
import "../CSS/Movie.css"
import $ from 'jquery'

class MovieRow extends React.Component {
  constructor(props) {
    super(props)

    this.displayMovie = this.displayMovie.bind(this)
  }


  displayMovie() {
    let urlString = `https://api.themoviedb.org/3/movie/${this.props.movie.id}?api_key=${'13974aec8a507bc409f142057852e657'}&language=en-US`
    let mov = $.ajax({
      url: urlString,
      success: movie => {
        console
      }
    })
    console.log(mov)
  }

  displayDate() {
    let months = {
      "01": "Jan.",
      "02": "Feb.",
      "03": "Mar.",
      "04": "Apr.",
      "05": "May",
      "06": "Jun.",
      "07": "Jul.",
      "08": "Aug.",
      "09": "Sept.",
      "10": "Oct.",
      "11": "Nov.",
      "12": "Dec."
    }
      let year = "";
      let month = "";
      let day = "";
      let date = this.props.movie.release_date.split('-')
      year += date[0];
      month += months[date[1]];
      day += date[2]
      this.props.movie.get_date = `${month} ${day}, ${year}`
  }

  displayInfo() {
    let card = document.getElementById("movie")
    card.style.height !== '500px' ? card.style.height = '500px' : card.style.height = "307px"
  }

  render() {
    return (
      <div className="movie-index-container">
        <div className="grid-container">
          <div className="movie" id="movie">
            <img src={this.props.movie.img} alt="Movie poster" style={{width: 188, height: 285}}/>
            <div className="movie-info">
              <div className="movie-title" onClick={this.displayMovie}>{this.props.movie.title}
              </div>
              {this.displayDate()}
              <div className="movie-date">Release Date: {this.props.movie.get_date}
              </div>
              <p className="movie-overview">{this.props.movie.overview}</p>
              <input type="button" onClick={this.displayInfo.bind(this)}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default MovieRow
