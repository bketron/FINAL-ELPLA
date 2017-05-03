import React, { Component } from 'react'
import './App.css'
import {connect} from 'react-redux'
import FilterPanel from './CharlesComponents/FilterPanel'
import FilterChips from './CharlesComponents/FilterChips'

class App extends Component {
 	  render() {
      return (
        <div>
        	<FilterChips />
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