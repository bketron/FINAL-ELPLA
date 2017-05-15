import React from 'react'
import FaveList from './FaveList'



const styles = {
  container: {
    display:'flex',
    paddingLeft:100,
    paddingTop:50
  },
  rate: {
    marginLeft:90
  },
  nop: {
    marginLeft:19
  },
  note: {
    marginLeft:82,
    height:100
  },
  fave: {
    marginTop:70,
    width:500,
    overflow:'scroll'
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
      <div style={styles.container}>
        <div>
          <h1> Save The Moment  </h1>
          <form onSubmit={this.handleSubmit.bind(this)}>
            Name of Place:<input style={styles.nop} onChange={this.handleChange} name='text' value={this.state.text} />
          <br/>
            Rate:<input style={styles.rate} onChange={this.handleChange} name='rate' value={this.state.rate} />/10
          <br/>
            Notes:<input style={styles.note} onChange={this.handleChange} name='note' value={this.state.note} />
          <br/>
          <button>Submit</button>
          </form>
        </div>
        <div>
          <FaveList style={styles.fave} items={this.state.items} removeItem={(i) => this.removeItem(i)}/>
        </div>
      </div>
    )        

  }
}


