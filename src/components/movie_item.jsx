import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

class MovieItem extends Component {
  componentDidMount() {
    this.props.fetchMovie(this.props.match.params.id)
  }

  render() {
    return (
      <div>
      </div>
    )
  }
}

export default withRouter(MovieItem)
