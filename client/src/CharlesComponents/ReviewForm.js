import React from 'react'
import {saveReview} from '../api/UserAPI'
import {connect} from 'react-redux'

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
      <div>
        Review Form
        <form onSubmit={this.handleSubmit}>
          
        	<input onChange={this.handleChange} type='textarea' placeholder='Write a review' name='review' value={this.state.review} />
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