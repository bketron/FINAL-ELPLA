import React from 'react'

const style = {
  chip: {
    background: 'gray'
  }
}

class Chip extends React.Component {
  render() {
    return (
      <div style={style.chip}>
        <span>{this.props.name}</span>
        <span>{this.props.value}</span>
        <button>X</button>
      </div>
    )
  }
}
export default Chip