import React, { Component } from 'react'
import './App.css'
import Home from './HomePage/Home'
import {BrowserRouter, Route} from 'react-router-dom'
import {connect} from 'react-redux'


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Route exact={true} path="/" component={Home} />
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
