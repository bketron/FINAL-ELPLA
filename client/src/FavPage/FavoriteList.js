import React from 'react'
import FaveList from './FaveList'
import TopBar from '../HomePage/TopBar'




const styles = {
  container: {
    display:'flex',
    paddingLeft:100,
    paddingTop:50
  },
  rate: {
    marginLeft:35,
    fontSize:15,
    width:30
  },
  nop: {
    marginLeft:35,
    fontSize:15
  },
  note: {
    marginLeft:35,
    height:100,
    
    fontSize:15
  },
  fave: {
    marginTop:70,
    width:500,
    overflow:'scroll'
  },
  all: {
    backgroundColor:'#082B3F'
  },
  directionsButton: {
    border: 'none',
    outline: 'none',
    height: '40px',
    backgroundColor: '#FF6E00',
    color: '#0B3954',
    padding: '0px 20px',
    fontSize: '18px',
    fontWeight: 'bold',
    float:'right',
    borderRadius:10,
    marginTop:10
  },
  white: {
    backgroundColor:'rgb(242,242,242)',
    height:240,
    padding:20,
    borderRadius:8,

  },
  tittle: {
    display:'flex',
    flexDirection:'column',
    marginLeft:100
  },
  h1: {
    color:'white'
  }
}

export default class FavoriteList extends React.Component {
  constructor () {
     super()
     this.state = { 
      text: '', 
      rate: '',
      note: '',
      items: [] 
    }
   }


  componentWillMount() {
    const getList = JSON.parse(localStorage.getItem('favouriteList'))
    this.setState({
      items: getList ? getList : []
    })
  }

  handleSubmit (event) {
    event.preventDefault()
    const text = this.state.text
    const rate = this.state.rate
    const note = this.state.note
    const obj = {
      'text' : text,
      'rate' : rate,
      'note' : note
    }
    var newItems = this.state.items.concat(obj)
    this.setState({
      text: '',
      rate: '',
      note: '',
      items: newItems }) 
    localStorage.setItem('favouriteList', JSON.stringify(newItems))
  }
  
  

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }



  removeItem(i) {
    this.state.items.splice(i, 1)
    localStorage.setItem('favouriteList', JSON.stringify(this.state.items))
    this.setState({
      items: this.state.items
    })
  }

  render() {
    return (
     <div style={styles.all}> 
     <TopBar />
      <div style={styles.container}>
      <div style={styles.tittle}>
        <h1 style={styles.h1}> Save Your Moment  </h1>
        <form onSubmit={this.handleSubmit.bind(this)}>
        <div style={styles.white}>
          
          
            Name of Place:<br/><input style={styles.nop} onChange={this.handleChange} name='text' value={this.state.text} />
          <br/>
            Rate:<br/><input style={styles.rate} onChange={this.handleChange} name='rate' value={this.state.rate} />/10
          <br/>
            Notes:<br/><textarea style={styles.note} onChange={this.handleChange} name='note' value={this.state.note} />
          <br/>
          
         
        </div>
        <button style={styles.directionsButton}>Submit</button>
         </form>
        </div>
        <div>
          <FaveList style={styles.fave} items={this.state.items} removeItem={(i) => this.removeItem(i)}/>
        </div>
      </div>
    </div>
    )        

  }
}


