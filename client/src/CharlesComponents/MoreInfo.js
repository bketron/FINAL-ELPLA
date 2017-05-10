import React from 'react'
import yelpReducer from '../reducers/yelpreducer'

class MoreInfo extends React.Component {
  constructor(props) {
    super(props)
    this.state =
    	info: data.businesses
  }

  render() {
    return (
      <div>
        {this.state.info.map(info=>(
        	<div>
        		<p>{info.name}</p>
        	</div>
        ))}
      </div>
    )
  }
}
export default MoreInfo