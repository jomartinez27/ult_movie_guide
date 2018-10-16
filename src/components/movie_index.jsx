import React from 'react'
import "../CSS/Movie.css"
import $ from 'jquery'

class MovieRow extends React.Component {
  constructor(props) {
    super(props)

    this.displayInfo = this.displayInfo.bind(this)
  }


  displayMovie() {
    let urlString = `https://api.themoviedb.org/3/movie/${this.props.movie.id}?api_key=${'13974aec8a507bc409f142057852e657'}&language=en-US`
    let mov = $.ajax({
      url: urlString,
    })
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
    let cards = document.getElementsByClassName("movie")
    let moreInfo = document.getElementsByClassName("more-info")
    for (let i = 0; i < cards.length; i++) {
      let card = cards[i]
      let height = card.style.height
      card.addEventListener("click", () => {
        console.log(card)
        moreInfo[i].style.display === 'none' ? moreInfo[i].style.display = 'block' : moreInfo[i].style.display = "none"
      })
    }
  }

  render() {
    return (
      <div className="movie-index-container">
        <div className="grid-container">
          <div className="movie" id="movie">
            <div className="images">
              <img src={this.props.movie.img} alt="Movie poster" style={{ width: 188, height: 285 }} />
              <div className="more-info" id="more-info">
                <img src={this.props.movie.background} style={{ width: 285, height: 205 }} />
              </div>
            </div>
            <div className="movie-info">
              <div className="movie-title" onClick={this.displayMovie}>{this.props.movie.title}
              </div>
              {this.displayDate()}
              <div className="movie-date">Release Date: {this.props.movie.get_date}
              </div>
              <p className="movie-overview">{this.props.movie.overview}</p>
              <input type="button" onClick={this.displayInfo}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default MovieRow
