import React from 'react'
class Login extends React.Component {
  constructor() {
    super()
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render() {
    return (
      <div>
        <form>
        	<input onChange={handleChange} placeholder='Username' name='username' value=''/>
        	<input onChange={handleChange} placeholder='Password' name='password' value=''/>
        </form>
      </div>
    )
  }
}
export default Login