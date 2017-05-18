import React from 'react'
import Favorites from './Favorites'
import {connect} from 'react-redux'


const styles={
  container: {
    margin: 'auto',
    border: 'none',
    width: '70%',
    height:400,
    background:'none',
    borderRadius:3,
    marginBottom:20 ,
    overflow: 'auto',
    padding: '0px 20px'
  },
  section: {
    backgroundColor: '#F7F7F7',
    boxShadow: '0px 4px 0px orange',
    padding: '10px'
  },
  box: {
    wordWrap:'break-word',
    background:'none',
  },
  nop: {
    marginTop: '0px',
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
    color:'#0B3954',
    textAlign:'center'
  },
  directionsButton: {
    border: 'none',
    outline: 'none',
    float:'right',
    backgroundColor: '#FF6E00',
    color: 'black',
    fontSize: '18px',
    fontWeight: 'bold',
    borderRadius:0,
    position: 'relative',
    top: '-10px',
    right: '-10px'
  },
  heading: {
    marginTop: '0px',
    marginLeft: '20px',
    paddingTop: '10px',
    fontSize: '20px'
  },
  list: {
    listStyleType: 'none',
    margin: '0'
  }
}


class FaveList extends React.Component {
  render() {
    console.log(this.props, 'list bit')
    return (
      <div>
        <h1 style={styles.h1}>Saved List</h1>
        <div style={styles.container}>
          <ul style={styles.list}>
        {this.props.favorites.map((item, i) => (
          <li style={styles.listItem}>
          <div style={styles.section}>
            
             <button style={styles.directionsButton} onClick={this.props.removeItem}>X</button>

            <div>  
              <div style={styles.box}> 
                <h4 style={styles.heading}>Restaunt</h4>
                <p style={styles.nop}>{item.resName} </p>
                <p style={styles.rates}>{item.resAddress} </p>
                <p style={styles.notes}>{item.resPhone} </p>
              </div>
              <div style={styles.box}>
                <h4 style={styles.heading}>Activity</h4>
                <p style={styles.nop}>{item.actName} </p>
                <p style={styles.rates}>{item.actAddress} </p>
                <p style={styles.notes}>{item.actPhone} </p>
              </div>
            </div>
            </div>
            </li>
        ))}
        </ul>
        </div>
      </div>
    )     
  }
}
const mapStateToProps = function(appState) {
    console.log(appState.favorites, 'bot')

    return {
        favorites: appState.favorites
    }
}

export default connect(mapStateToProps)(FaveList)
