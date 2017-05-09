import React, { Component } from 'react'
import './App.css'
import Home from './HomePage/Home'
import {BrowserRouter, Route} from 'react-router-dom'


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

export default App
