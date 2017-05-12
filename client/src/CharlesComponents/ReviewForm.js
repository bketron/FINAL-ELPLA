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
    saveReview(this.state.review)
    this.setState = ({
    	review: ''
    })
  }
  clearForm = () => {
  	this.setState =({

  	})
  }
  render() {
    return (
      <div>
        Review Form
        <form onSubmit={this.handleSubmit}>
        	<input onChange={this.handleChange} type='text' placeholder='' name='review' value={this.state.review} />
        	<button type='submit' onClick={this.handleSubmit}>Submit</button>
        	<button onClick={this.clearForm}type='reset'>Clear</button>
      	</form>
      </div>
    )
  }
}
export default ReviewForm