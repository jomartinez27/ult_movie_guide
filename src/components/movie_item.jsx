import React, { Component } from 'react'
import $ from 'jquery'

export default class MovieItem extends Component {
    constructor(props) {
        super(props)

        this.state = {
            title: undefined,
        }

        this._isMounted = false;
    }

    displayMovie() {
        this._isMounted = true;
        let id = this.props.match.params.movieId
        $.ajax({
            url: `https://api.themoviedb.org/3/movie/${id}?api_key=13974aec8a507bc409f142057852e657&language=en-US`,
            method: 'GET',
        }).then(movie => {
            if (this._isMounted) {
                this.setState({title: movie.title})
            }
        })
    }

    componentWillUnmount() {
        this._isMounted = false;
    }

  render() {
    return (
      <div>
        <div>
        {this.displayMovie()}
        {this.state.title}
        </div>
      </div>
    )
  }
}
