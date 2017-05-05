import React from 'react'
import {addFilters} from '../api/filter'

const style = {
  placeHolder:{
    display: 'none'
  }
}

class FilterForm extends React.Component {
  constructor() {
    super()
      this.state = {
        partySize: '',
        dType: '',
        gprto:'',
        gprfrom:'',
        gLocation:'',
        fprto:'',
        fprfrom:'',
        fLocation:'',
        aprto:'',
        aprfrom:'',
        aLocation:'',
        fType:'',
        aType:''
    }
  }


  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = (e) => {  
    e.preventDefault()
    console.log(this.state)
    addFilters({
      partySize: this.state.partySize,
      dType: this.state.dType,
      gprto: this.state.gprto,
      gprfrom:this.state.gprfrom,
      gLocation:this.state.gLocation,
      fprto: this.state.fprto,
      fprfrom:this.state.fprfrom,
      fLocation:this.state.fLocation,
      aprto: this.state.aprto,
      aprfrom:this.state.aprfrom,
      aLocation:this.state.aLocation,
      fType:this.state.fType,
      aType:this.state.aType
    })
    // this.setState({
    //  partySize: '',
    //   dType: '',
    //  gprto:'',
    //  gprfrom:'',
    //  gLocation:'',
    //  fprto:'',
    //  fprfrom:'',
    //  fLocation:'',
    //  aprto:'',
    //  aprfrom:'',
    //  aLocation:'',
    //  fType:'',
    //  aType:''
    // })
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <p>General</p>
          <select onChange={this.handleChange} name='dType' value={this.state.value}>
            <option style={style.placeHolder}>Select Date Type</option>
            <option value='Casual'>Casual</option>
            <option value='Professional'>Professional</option>
            <option value='Romantic'>Romantic</option>
          </select>
          <input onChange={this.handleChange} type='number' placeholder='Party Size' value={this.partySize} name='partySize' /><br />
          <label>Price Range</label>
          <input onChange={this.handleChange} type='number' placeholder='From' value={this.gprfrom} name='gprfrom' />
          <span>to</span>
          <input onChange={this.handleChange} type='number' placeholder='To' value={this.gprto} name='gprto' />
          <input onChange={this.handleChange} type='text' placeholder='Location' value={this.gLocation} name='gLocation' />
          
          <p>Food</p>
          <select onChange={this.handleChange} value={this.state.value} name='fType'>
            <option style={style.placeHolder}>Select Food Type</option>
            <option value='Chinese'>Chinese</option>
            <option value='Korean'>Korean</option>
            <option value='Italian'>Italian</option>
            <option value='Indian'>Indian</option>
            <option value='Mediterranean'>Mediterranean</option>
            <option value='German'>German</option>
          </select><br />
          <label>Price Range</label>
          <input onChange={this.handleChange} type='number' placeholder='From' value={this.fprfrom} name='fprfrom' />
          <span>to</span>
          <input onChange={this.handleChange} type='number' placeholder='To' value={this.fprto} name='fprto' />
          <input onChange={this.handleChange} type='text' placeholder='Food Location' value={this.fLocation} name='fLocation' />
          
          <p>Activity</p>
          <select onChange={this.handleChange} name='aType' value={this.state.value}>
            <option style={style.placeHolder}>Select Activity Type</option>
            <option value='Outdoor Physical'>Outdoor Physical</option>
            <option value='Indoor Physical'>Indoor Physical</option>
            <option value='Show'>Show</option>
            <option value='Bar'>Bar</option>
          </select><br />
          <label>Price Range</label>
          <input onChange={this.handleChange} type='number' placeholder='From' value={this.aprfrom} name='aprfrom' />
          <span>to</span>
          <input onChange={this.handleChange} type='number' placeholder='To' value={this.aprto} name='aprto' />
          <input onChange={this.handleChange} type='text' placeholder='Event Location' value={this.aLocation} name='aLocation' /><br />
          <button onSubmit={this.handleSubmit} type='submit'>Filter</button>
        </form>
      </div>
    )
  }
}

export default FilterForm

