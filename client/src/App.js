import React, { Component } from 'react'
import './App.css'
import {BrowserRouter, Route} from 'react-router-dom'
import Home from './HomePage/Home'
import Results from './Results/Results'
import Directions from './DirectionsPage/Directions'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Route exact={true} path="/" component={Home} />
          <Route path="/results" component={Results} />
          <Route exact={true} path="/directions" component={Directions} />
        </div>
      </BrowserRouter>
      )
  }
}

export default App


// <Route path="/MoreInfo" component={MoreInfo} />