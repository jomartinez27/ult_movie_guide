import React from 'react'
import Navbar from '../Navbar'
import { Link } from 'react-router-dom'
import { Carousel } from 'react-bootstrap'
import "../CSS/Home.css"

class Home extends React.Component {
    componentDidMount() {
        this.props.fetchPlaying()
        .then(() => this.props.fetchPopular())
    }

    render() {
        if (this.props.movies === undefined) {
            return <div>Loading</div>
        }

        return (
            <div className="home-container">
                <Navbar />
                <div className="movie-guide">
                    The Ultimate Movie Guide
                </div>
                <div className="home-movies-container">
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
                </div>
            </div>
        )
    }
}

export default Home;