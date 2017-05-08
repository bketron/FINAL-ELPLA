import React, { Component } from 'react'
import './App.css'
import {connect} from 'react-redux'
// import Test from './CharlesComponents/test'
import FilterPanel from './CharlesComponents/FilterPanel'
// import Carousel from './CharlesComponents/Carousel'

class App extends Component {
 	  render() {
      return (
        <div>
          <FilterPanel />
          
        </div>
      )
    }
}

const mapStateToProps = function(appState) {
  return {
    
  }
}

export default connect(mapStateToProps)(App)
// <Carousel />
// <FilterChips /><FilterPanel />
