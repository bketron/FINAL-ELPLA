import React from 'react'


export default class FaveList extends React.Component {
  render() {
    return (
      <div>
        <h1>Saved List</h1>
        {this.props.items.map((item, i) => {
          return (
            <div>  
              <p>Name of Place: {item.text} </p>
              <p>Rate: {item.rate}/10 </p>
              <p>Notes: {item.note} </p>
              <button onClick={this.props.removeItem}>Delete</button>
            </div>
          )
        })}
      </div>
    )     
  }
}
