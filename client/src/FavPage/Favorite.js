import React from 'react'
import FaveList from './FaveList'


const styles = {
  container: {
    paddingLeft:'100',
    paddingTop:'50'
  },
  rate: {
    marginLeft:90
  },
  nop: {
    marginLeft:19
  },
  note: {
    marginLeft:82
  },
  fave: {
    marginTop:70,
    width:500,
  }
}



export default class Favorite extends React.Component {
    constructor () {
     super();
     this.state = { 
      text: '', 
      rate: '',
      note: '',
      items: [] 
    }
   }
 
    handleSubmit (event) {
      event.preventDefault();
      var text = this.state.text;
      var newItems = this.state.items.concat(text);
      console.log("form was submitted value", text);
      this.setState({ text: '', items: newItems });
   }
  
   handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  // handleChange (event) {
  //    var text = event.target.value;
  //    this.setState({ text: text });
  //    var note = event.target.value;
  //    this.setState({ note: note });
  //    var rate = event.target.value;
  //    this.setState({ rate: rate });
  //   }

  
    render () {
      return  <div style={styles.container}>
                <h1> Save The Moment  </h1>
                <form onSubmit={this.handleSubmit.bind(this)}>
                 
                 Name of Place:<input style={styles.nop} onChange={this.handleChange} name='Name of place' defaultValue={this.state.text} />
                 <br/>
                 Rate:<input style={styles.rate} onChange={this.handleChange} name='Rate' defaultValue={this.state.rate} />
                 <br/>
                 Notes:<input style={styles.note} onChange={this.handleChange} name='Notes' defaultValue={this.state.note} />
                 <br/>
                  <button> Submit </button>
                </form>

        
                <FaveList style={styles.fave} items={this.state.items}/>
              </div>;

    }
}