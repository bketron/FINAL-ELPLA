import React from 'react'
import {saveReview} from '../api/UserAPI'
import {connect} from 'react-redux'

import TextField from 'material-ui/TextField'

class ReviewForm extends React.Component {
  constructor() {
    super()
    this.state = {
    	review: ''
    }
  }
  handleChange = (e) => {
  	this.setState({
      [e.target.name]: e.target.value
    })
  }
  handleSubmit = (e) => {
    var name = this.props.username
    e.preventDefault()
    saveReview(this.state.review, name)
    this.setState({
      review: ''
    })
  }
  render() {
    return (
      <div style={{
        padding: '40px'
      }}>
        <p style={{
          color: 'white',
          textAlign: 'center',
          fontSize: '30px'
        }}>Tell us how we're doing!</p>

        <form 
          style={{
            margin: 'auto',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
          }}
          onSubmit={this.handleSubmit}>
          
          <TextField
              hintText="Max. Price (per person)"
              onChange={this.handleChange}
              name="review"
              underlineFocusStyle={{borderColor: '#FF6E00'}}
              value={this.state.review}
              type="text"
              style={{
                  backgroundColor: 'white',
                  height: '40px',
                  width: '500px'
              }}
              hintStyle={{
                  position: 'absolute',
                  top: '8px',
                  left: '15px',
                  color: 'black'
              }}
              inputStyle={{
                  lineHeight: '40px',
                  fontSize: '17px',
                  padding: '0px 15px'
              }}
              underlineStyle={{
                  position: 'relative',
                  top: '0px'
              }}
          />
          
        	<button type='submit' onClick={this.handleSubmit}>Submit</button>
      	</form>
      </div>
    )
  }
}

function mapStateToProps(appState){
  return {username: appState.username}
}

export default connect(mapStateToProps)(ReviewForm)

// <input onChange={this.handleChange} type='text' placeholder='Enter your name' name='name' value={this.state.name} />