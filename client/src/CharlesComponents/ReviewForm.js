import React from 'react'
import {saveReview} from '../api/UserAPI'

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
    e.preventDefault()
    saveReview(this.state.review,this.state.name)
    this.setState({
    	name: '',
      review: ''
    })
  }
  render() {
    return (
      <div>
        Review Form
        <form onSubmit={this.handleSubmit}>
          <input onChange={this.handleChange} type='text' placeholder='Enter your name' name='name' value={this.state.name} />
        	<input onChange={this.handleChange} type='textarea' placeholder='Write a review' name='review' value={this.state.review} />
        	<button type='submit' onClick={this.handleSubmit}>Submit</button>
      	</form>
      </div>
    )
  }
}
export default ReviewForm