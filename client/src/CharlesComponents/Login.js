import React from 'react'
import addUser from '../api/UserAPI'

class Login extends React.Component {
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
  	addUser({
  		username: this.state.username,
      password: this.state.password
  	})
  	this.setState({
  		username:'',
  		password:''
  	})
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
        	<input onChange={this.handleChange} placeholder='Username' name='username' value={this.state.username}/>
        	<input onChange={this.handleChange} placeholder='Password' name='password' value={this.state.password}/>
        </form>
      </div>
    )
  }
}
export default Login