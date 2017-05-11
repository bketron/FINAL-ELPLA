import React, {Component} from 'react'
import { saveName } from '../api/UserAPI'
import {connect} from 'react-redux'
import Dialog from 'material-ui/Dialog';
import RaisedButton from 'material-ui/RaisedButton'

class Username extends Component {
  constructor() {
    super()
    this.state = {
      username: '',
      open: false
    }
  }


  handleSubmit = (e) => {

    e.preventDefault()
    saveName(this.state.username)

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

  handleOpen = () => {
    this.setState({open: true})
  }

  handleClose = () => {
    this.setState({open: false})
  }

  render() {

    return (
      <div>
        <RaisedButton label="Dialog" onTouchTap={this.handleOpen} />
        <Dialog
          modal={false}
          open={this.state.open}
          onRequestClose={this.handleClose}
        >
          <form onSubmit={this.handleSubmit, this.handleClose}>
            <p>Sign in</p>
            <input onChange={this.handleChange} placeholder='Username' type='text' name='username' value={this.state.username}/><br />
            <input onChange={this.handleChange} placeholder='Password' type='password' name='password' value={this.state.password}/>
            <button type='submit'>Submit</button>
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