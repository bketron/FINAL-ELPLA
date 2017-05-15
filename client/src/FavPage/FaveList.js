import React from 'react'


const styles={
  container: {
    marginLeft:100,
    border:'1px solid black',
    overflow:'scroll',
    width: 600,
    height:400,
    backgroundColor:'rgb(242,242,242)',
    borderRadius:8,
    marginBottom:20 

  },
  box: {
    border:'1px solid red',
    marginBottom:30,
    marginLeft:20,
    marginRight:20,
    marginTop:30,
    wordWrap:'break-word'

  },
  lilbox: {
    marginTop:30
  },
  h1: {
    marginLeft:100,
    color:'white',
    textAlign:'center'
  }
}



export default class FaveList extends React.Component {
  render() {
    return (
      <div >
        <h1 style={styles.h1}>Saved List</h1>
        <div style={styles.container}>
        {this.props.items.map((item, i) => {
          return (
            <div style={styles.box}>  
              <p style={styles.lilbox}>Name of Place: {item.text} </p>
              <p>Rate: {item.rate}/10 </p>
              <p>Notes: {item.note} </p>
              <button onClick={this.props.removeItem}>Delete</button>
            </div>
          )
        })}
        </div>
      </div>
    )     
  }
}
