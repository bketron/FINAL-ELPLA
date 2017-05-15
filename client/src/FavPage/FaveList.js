import React from 'react'


const styles={
  container: {
    marginLeft:100,
    border:'1px solid black',
    overflow:'scroll',
    width: 400,
    height:400,
    backgroundColor:'rgb(242,242,242)',
    borderRadius:8,
    marginBottom:20 

  },
  box: {
    borderRadius:5,
    marginBottom:30,
    marginLeft:20,
    marginRight:20,
    marginTop:30,
    wordWrap:'break-word',
    backgroundColor:'rgb(242,242,242)',
    width:350,
    boxShadow:'0 1px 15px rgba(0,0,0,.1)'


  },
  nop: {
    marginTop:30,
    paddingTop:10,
    paddingLeft:10
    
  },
  rates: {
    paddingLeft:10
  },
  notes: {
    paddingLeft:10,
    paddingBottom:10,
    paddingRight:20
  },
  h1: {
    marginLeft:100,
    color:'white',
    textAlign:'center'
  },
  directionsButton: {
    border: 'none',
    outline: 'none',
    float:'right',
    backgroundColor: 'red',
    color: 'black',
    fontSize: '18px',
    fontWeight: 'bold',
    borderRadius:4
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
             <button style={styles.directionsButton} onClick={this.props.removeItem}>X</button>
              <p style={styles.nop}>{item.text} </p>
              <p style={styles.rates}>{item.rate}/10 </p>
              <p style={styles.notes}>{item.note} </p>
              
            </div>
          )
        })}
        </div>
      </div>
    )     
  }
}
