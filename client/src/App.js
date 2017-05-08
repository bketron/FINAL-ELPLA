import React, { Component } from 'react'
import './App.css'
import {connect} from 'react-redux'
// import Test from './CharlesComponents/test'
import FilterPanel from './CharlesComponents/FilterPanel'
<<<<<<< HEAD
// import Carousel from './CharlesComponents/Carousel'

class App extends Component {
 	  render() {
      return (
        <div>
          <FilterPanel />
          
        </div>
      )
    }
  
=======
// import FilterChips from './CharlesComponents/FilterChips'

class App extends Component {
  render() {
    return (
      <div>
      	<FilterPanel />
      </div>
    )
  }
>>>>>>> 9f51959dddc68a3157d07240a246a70e6d502e1f
}


const mapStateToProps = function(appState) {
  return {
    
  }
}

export default connect(mapStateToProps)(App)
<<<<<<< HEAD
// <Carousel />
=======
// <FilterChips /><FilterPanel />
>>>>>>> 9f51959dddc68a3157d07240a246a70e6d502e1f
