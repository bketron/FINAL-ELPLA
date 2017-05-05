import React from 'react'
import {removeFilter} from '../api/filter'

const style = {
  chip: {
    background: 'gray'
  }
}

class Chip extends React.Component {
  
  handleClick = (e) =>{
    e.preventDefault()
    removeFilter(this.props.propName)
  }

  render() {
    return (
      <div style={style.chip}>
        <span>{this.props.name} </span>
        <span>{this.props.value}</span>
        <button onClick={this.handleClick}>X</button>
      </div>
    )
  }
}
export default Chip