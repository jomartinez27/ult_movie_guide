import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom'
import MovieIndex from './components/MovieIndexContainer'
import MovieRated from './components/MovieIndexRatedContainer'
import MoviePlaying from './components/MovieIndexPlayingContainer'
import Home from './components/HomeContainer'
import MovieDetail from './components/MovieDetailContainer.jsx'

class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/popular" component={MovieIndex} />
          <Route exact path="/rated" component={MovieRated} />
          <Route exact path="/playing" component={MoviePlaying} />
          <Route exact path="/movies/:movieId" component={MovieDetail} />
          <Route path="/" component={Home} />
        </Switch>
      </div>
    );
  }
}

export default App;

