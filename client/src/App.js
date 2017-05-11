import React, { Component } from 'react'
import './App.css'
import {BrowserRouter, Route} from 'react-router-dom'
import {connect} from 'react-redux'
import Home from './HomePage/Home'
import Results from './resultsPage/Results'
import Directions from './DirectionsPage/Directions'


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Route exact={true} path="/" component={Home} />
          <Route path="/Results" component={Results} />
          <Route exact={true} path="/directions" component={Directions} />
        </div>
      </BrowserRouter>
      )
  }
}

const mapStateToProps = function(appState) {
  return {

  }
}

export default connect (mapStateToProps)(App)
