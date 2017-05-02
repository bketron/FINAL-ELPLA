import React, { Component } from 'react'
import './App.css'
import {connect} from 'react-redux'

class App extends Component {
 	  render() {
      return (
        <div>
          
        </div>
      )
    }
  } 
}


const mapStateToProps = function(appState) {
  return {
    
  }
}

export default connect(mapStateToProps)(App)