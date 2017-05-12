import React, {Component} from 'react'
import { saveName } from '../api/UserAPI'
import {connect} from 'react-redux'
import Dialog from 'material-ui/Dialog';


class Username extends Component {
  constructor() {
    super()
    this.state = {
      username: '',
      open: false
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
    this.setState({open: false})
  }

  handleOpen = () => {
    this.setState({open: true})
  }

  handleClose = () => {
    this.setState({open: false})
  }

  render() {
    console.log(this.state.username, 'state_username')
    return (
      <div>
        <a onTouchTap={this.handleOpen}>Sign in</a>
        <Dialog
          modal={false}
          open={this.state.open}
          onRequestClose={this.handleClose}
        >
          <form onSubmit={this.handleSubmit}>
            <p>Sign in</p>
            <input onChange={this.handleChange} placeholder='Username' type='text' name='username' defaultValue={this.state.username}/><br />
            <input onChange={this.handleChange} placeholder='Password' type='password' name='password' defaultValue={this.state.password}/>
            <button>Submit</button>
            <button onClick={this.handleClose}>Cancel</button>
          </form>
        </Dialog>
      </div>
    );
  }
}

function mapStateToProps(appState){
  console.log(appState)
  return {username: appState.username}
}

export default connect(mapStateToProps)(Username)