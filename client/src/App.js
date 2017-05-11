import React, { Component } from 'react'
import './App.css'
import {BrowserRouter, Route, hashHistory as history} from 'react-router-dom'
import Home from './HomePage/Home'
import MealActResults from './Results/MealActResults'
import MealResult from './Results/MealResult'
import ActivityResult from './Results/ActivityResult'
import SingleStop from './DirectionsPage/SingleStop'
import MultiStop from './DirectionsPage/MultiStop'

class App extends Component {
  render() {
    return (
      <BrowserRouter history={history}>
        <div>
          <Route exact={true} path="/" component={Home} />
          <Route exact={true} path="/results/meal+act" component={MealActResults} />
          <Route exact={true} path="/results/meal" component={MealResult} />
          <Route exact={true} path="/results/activity" component={ActivityResult} />
          <Route exact={true} path="/directions/single" component={SingleStop} />
          <Route exact={true} path="/directions/multi" component={MultiStop} />
        </div>
      </BrowserRouter>
      )
  }
}

export default App


// <Route path="/MoreInfo" component={MoreInfo} />