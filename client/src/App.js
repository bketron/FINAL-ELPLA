import React, { Component } from 'react'
import './App.css'
import {connect} from 'react-redux'
import FilterPanel from './CharlesComponents/FilterPanel'
import Results from './resultsPage/Results'
import {BrowserRouter as Router, Route} from 'react-router-dom'

class App extends Component {
 	  render() {
      return (
      	<Router>
        	<div>
          		<FilterPanel />

          		<Route exact={true} path="/Results" component={Results} />
        	</div>
        </Router>
      )
    }
  
}


const mapStateToProps = function(appState) {
  return {
    
  }
}

export default connect(mapStateToProps)(App)