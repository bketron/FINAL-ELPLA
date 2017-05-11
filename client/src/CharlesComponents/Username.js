import React, {Component} from 'react'
import { saveName } from '../api/UserAPI'
import {connect} from 'react-redux'


class UserName extends Component {
  constructor() {
    super()
  	this.state = {
  		username: ''
  	}
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

	handleSubmit = (e) => {

    e.preventDefault()
    saveName(this.state.username)

  }

  render() {
    return (
      <div>
	      <form onSubmit={this.handleSubmit}>
	        <p>Sign in</p>
          <input onChange={this.handleChange} placeholder='Username' type='text' name='username' value={this.state.username}/><br />
          <input onChange={this.handleChange} placeholder='Password' type='password' name='password' value={this.state.password}/>
          <button type='submit'>Submit</button>
	      </form>
      </div>
    )
  }
}

function mapStateToProps(appState){
  console.log(appState)
  return {username: appState.username}
}

export default connect(mapStateToProps)(UserName)