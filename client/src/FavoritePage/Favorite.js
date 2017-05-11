import React from 'react'



const styles = {

  container: {
    margin:'auto',
    width:'50%',
    height:500,
    width:300,
    backgroundColor:'grey',
    textAlign:'center',
    color:'white'
  },
  p: {
    textAlign:'left',
    color:'black',
    paddingLeft:10
  }
}

class Favorite extends React.Component {
  render() {
    return (
      <div style={styles.container} >
       <h1>Saved Favorites:</h1>  
       <p style={styles.p}>Resturant saved:</p> 
      </div>  
    )
  }
}

export default Favorite