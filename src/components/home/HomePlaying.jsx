import React from 'react'
import { Carousel } from 'react-bootstrap'
import { Link } from 'react-router-dom'

class HomePlaying extends React.Component {
  componentDidMount() {
    this.props.fetchPlaying()
  }

  render () {
    return (
      <Carousel>
          <Carousel.Item>
              <Link to={`movies/${this.props.movies[0].id}`}>
              <img src={"https://image.tmdb.org/t/p/original" + this.props.movies[0].poster_path} alt="Movie poster" className="home-image"/>
              </Link>
          </Carousel.Item>
          <Carousel.Item>
              <Link to={`movies/${this.props.movies[1].id}`}>
              <img src={"https://image.tmdb.org/t/p/original" + this.props.movies[1].poster_path} alt="Movie poster" className="home-image"/>
              </Link>
          </Carousel.Item>
          <Carousel.Item>
              <Link to={`movies/${this.props.movies[2].id}`}>
              <img src={"https://image.tmdb.org/t/p/original" + this.props.movies[2].poster_path} alt="Movie poster" className="home-image"/>
              </Link>
          </Carousel.Item>
          <Carousel.Item>
              <Link to={`movies/${this.props.movies[3].id}`}>
                  <img src={"https://image.tmdb.org/t/p/original" + this.props.movies[3].poster_path} alt="Movie poster" className="home-image"/>
              </Link>
          </Carousel.Item>
          <Carousel.Item>
              <Link to={`movies/${this.props.movies[4].id}`}>
                  <img src={"https://image.tmdb.org/t/p/original" + this.props.movies[4].poster_path} alt="Movie poster" className="home-image"/>
              </Link>
          </Carousel.Item>
      </Carousel>
    )
  }
}

export default HomePlaying;
