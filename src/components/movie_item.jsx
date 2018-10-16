import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

class MovieItem extends Component {

  render() {
    return (
      <div>
        {this.props.movie.title}
      </div>
    )
  }
}

export default withRouter(MovieItem)
