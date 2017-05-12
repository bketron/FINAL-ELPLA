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
     this.state = { text: '', items: [] }
   }
 
    handleSubmit (event) {
      event.preventDefault();
      var text = this.state.text;
      var newItems = this.state.items.concat(text);
      console.log("form was submitted value", text);
      this.setState({ text: '', items: newItems });
   }
  
   handleChange (event) {
     var text = event.target.value;
     this.setState({ text: text });
    }
    handleChange (event) {
     var text = event.target.value;
     this.setState({ text: text });
    }



  
    render () {
      return  <div style={styles.container}>
                <h1> Save The Moment  </h1>
                <form onSubmit={this.handleSubmit.bind(this)}>
                 
                 Name of Place:<input style={styles.nop} onChange={this.handleChange.bind(this)} value={this.state.text} />
                 <br/>
                 Rate:<input style={styles.rate} onChange={this.handleChange.bind(this)} value={this.state.text} />
                 <br/>
                 Notes:<input style={styles.note} onChange={this.handleChange.bind(this)} value={this.state.text} />
                 <br/>
                  <button> Submit </button>
                </form>

        
                <FaveList style={styles.fave} items={this.state.items}/>
              </div>;

    }
}