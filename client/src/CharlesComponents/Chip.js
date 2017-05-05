import React from 'react'



class Chip extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
    	filter: {}
    }
  }

  render() {
    console.log("dude")
    return (

      <div>
        <span>test{this.props.eatChip.chips}</span> 
        <button>X</button>
      </div>
    )
  }
}
export default Chip