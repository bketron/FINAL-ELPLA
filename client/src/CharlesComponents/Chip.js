import React from 'react'
import FilterForm from './FilterForm'

class Chip extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
    	filter: []
    }
  }

  render() {
    return (
      <div styles={style.chip}>
        <span>{this.props.eatChip.filter}</span> 
        <button>X</button>
      </div>
    )
  }
}
export default Chip