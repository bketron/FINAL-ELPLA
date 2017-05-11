import React from 'react'
import addUser from '../api/UserAPI'

class Register extends React.Component {
  constructor() {
    super()
    this.state = {
    	username:'',
    	password:''
    }
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

	handleSubmit = (e) => {
		console.log(this.state)
  	e.preventDefault()
  	addUser(this.state.username, this.state.password)
  	// login(this.state.username, this.state.password)
  	
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <p>Register</p>
        	<input onChange={this.handleChange} placeholder='Username' type='text' name='username' value={this.state.username}/><br />
        	<input onChange={this.handleChange} placeholder='Password' type='password' name='password' value={this.state.password}/>
        </form>
      </div>
    )
  }
}
export default Register