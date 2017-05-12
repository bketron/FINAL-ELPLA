import React from 'react'
import {removeFilter} from '../api/filter'

const styles = {
  chip: {
    background: 'rgba(125,125,125,0.2)',
    height: '16px',
    borderRadius: '8px',
    display: 'block',
    width: 'auto'
  },
  chipInfo: {
    display: 'flex',
    color: 'rgba(50,50,50,0.5)'
  },
  filterName: {
    margin: '0px 0px 0px 5px',
    fontSize: '12px',
    lineHeight: '16px'
  },
  filterValue: {
    margin: '0px 6px 0px 0px',
    fontSize: '12px',
    lineHeight: '16px'
  },
  clearButton: {
    background: 'none',
    border: 'none',
    outline: 'none',
    padding: '0'
  },
  icon: {
    lineHeight: '16px',
    margin: '0px 0px 0px 6px',
    color: 'rgba(50,50,50,0.5)'
  }
}

class Chip extends React.Component {
  
  handleClick = (e) =>{
    e.preventDefault()
    removeFilter(this.props.propName)
  }

  render() {
    return (
      <div style={styles.chip}>
        <div style={styles.chipInfo}>
          <button style={styles.clearButton} onClick={this.handleClick}>
            <i style={styles.icon} className="fa fa-times" aria-hidden="true"></i>
          </button>
          <p style={styles.filterName}>{this.props.name} </p>
          <p style={styles.filterValue}>{this.props.value}</p>
        </div>
      </div>
    )
  }
}
export default Chip