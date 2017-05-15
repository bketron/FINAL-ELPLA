import React, {Component} from 'react'
import { saveName } from '../api/UserAPI'
// import {connect} from 'react-redux'
import Dialog from 'material-ui/Dialog'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'

var userError = ''
var passError = ''

class Username extends Component {
  constructor() {
    super()
    this.state = {
      username: '',
      password: '',
      userError: '',
      passError: '',
      open: false
    }
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })

    console.log('Username:', this.state.username)
    console.log('Password:', this.state.password)
  }

  handleSubmit = (e) => {
    e.preventDefault()

    if(this.state.username === '' || this.state.password === ''){
        if(this.state.username === ''){
          this.setState({
            userError: 'This field is required!'
          })
        } else {this.setState({userError: ''})}

        if(this.state.password === ''){
          this.setState({
            passError: 'This field is required!'
          })
        } else {this.setState({passError: ''})}

    } else {
          saveName(this.state.username)
          this.setState({open: false})
    }
  }
  

  handleOpen = () => {
    this.setState({open: true})
  }

  handleClose = () => {
    this.setState({open: false})
  }

  render() {
    return (
      <div style={{padding:"0px"}}>
        <a onTouchTap={this.handleOpen}>Sign in</a>
        <Dialog
          modal={false}
          open={this.state.open}
          onRequestClose={this.handleClose}
          bodyStyle={{
            padding: '0px',
            height: '265px',
            overflowY: 'auto'
          }}
          style={{
            overflowY: 'auto'
          }}
        >
          <form onSubmit={this.handleSubmit} style={{padding: '0px 20px'}}>
            <p style={{
              color: '#0B3954',
              textAlign: 'center',
              fontSize: '27px',
              margin: '20px 0px 10px 0px'
            }}>Sign in</p>

            <div style={{
              display: 'block',
              margin: 'auto'
            }}>
              <TextField
                  hintText="Username"
                  errorText={this.state.userError}
                  name="username"
                  value={this.state.username}
                  underlineFocusStyle={{borderColor: '#FF6E00'}}
                  onChange={this.handleChange}
                  autoComplete="off"
                  style={{
                    display: 'block',
                    margin: 'auto',
                    width: '50%'
                  }}
                  inputStyle={{padding: '0px 10px'}}
                  hintStyle={{padding: '0px 10px'}}

              /><br />

              <TextField
                  hintText="Password"
                  errorText={this.state.passError}
                  name="password"
                  type="password"
                  value={this.state.password}
                  underlineFocusStyle={{borderColor: '#FF6E00'}}
                  onChange={this.handleChange}
                  autoComplete="off"
                  style={{
                    display: 'block',
                    margin: 'auto',
                    width: '50%'
                  }}
                  inputStyle={{padding: '0px 10px'}}
                  hintStyle={{padding: '0px 10px'}}
              /><br />
            </div>


            <RaisedButton
                label="Login"
                labelColor="#0B3954"
                labelStyle={{
                  lineHeight: '40px'
                }}
                backgroundColor="#FF6E00"
                style={{
                  width: '135px',
                  height: '40px',
                  margin: '10px auto 20px auto',
                  display: 'block'
                }}
                type="submit"
                buttonStyle={{
                  marginBottom: '20px'
                }}
            />
          </form>
        </Dialog>
      </div>
    );
  }
}

export default Username

// function mapStateToProps(appState){
//   return {username: appState.username}
// }

// export default connect(mapStateToProps)(Username)  