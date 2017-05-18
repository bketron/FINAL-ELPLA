import React from 'react'
import Favorites from './Favorites'
import {connect} from 'react-redux'


const styles={
  container: {
    marginLeft:100,
    border:'1px solid black',
    overflow:'scroll',
    width: 400,
    height:400,
    backgroundColor:'rgb(242,242,242)',
    borderRadius:8,
    marginBottom:20 ,
    overflow: 'auto'
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
    marginTop:10,
    paddingTop:0,
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
  },
  h4: {
    marginTop: '0px',
    paddingTop: '10px'
  }
}


class FaveList extends React.Component {
  render() {
    return (
      <div>
        <h1 style={styles.h1}>Saved List</h1>
        <div style={styles.container}>
        {this.props.favorites.map((item, i) => {
          return (
            <div>  
              <div style={styles.box}> 
                <h4 style={styles.h4}>Restaunt</h4>
                <p style={styles.nop}>{item.resName} </p>
                <p style={styles.rates}>{item.resAddress} </p>
                <p style={styles.notes}>{item.resPhone} </p>
              </div>
              <div style={styles.box}>
                <h4 style={styles.h4}>Activity</h4>
                <p style={styles.nop}>{item.actName} </p>
                <p style={styles.rates}>{item.actAddress} </p>
                <p style={styles.notes}>{item.actPhone} </p>
              </div>
            </div>
          )
        })}
        </div>
      </div>
    )     
  }
}
const mapStateToProps = function(appState) {
    return {
        favorites: appState.favorites
    }
}

export default connect(mapStateToProps)(FaveList)
