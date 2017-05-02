import React, { Component } from 'react'
import './App.css'
import {connect} from 'react-redux'
import FilterPanel from './CharlesComponents/FilterPanel'

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