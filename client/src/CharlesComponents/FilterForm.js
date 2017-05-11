import React from 'react'
import {addFilters} from '../api/filter'
import {connect} from 'react-redux'

const styles = {
  placeHolder:{
    display: 'none'
  },
  container: {
  },
  form: {
    display: 'flex',
    flexDirection: 'column'
  },
  innerForm: {
    padding: '10px'
  },
  header: {
    textAlign: 'center'
  },
  subHeader: {
    textAlign: 'center'
  },
  locationInput: {
    height: '30px',
    lineHeight: '30px',
    width: '100%'
  },
  priceRanges: {
    display: 'flex',
    justifyContent: 'space-between'
  },
  priceInput: {
    width: '47%',
    margin: '15px 0px',
    height: '30px',
    fontSize: '13px',
    paddingLeft: '10px'
  },
  filterButton: {
    position: 'absolute',
    bottom: '0px',
    width: '100%',
    borderRadius: '0px',
    border: 'none',
    outline: 'none',
    height: '60px',
    lineHeight: '60px',
    fontSize: '25px',
    backgroundColor: '#0B3954',
    color: '#FF6E00'
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

  componentWillReceiveProps(props) {
    this.setState({
      partySize: props.partySize,
      dType: props.dType,
      gprto:props.gprto,
      gprfrom:props.gprfrom,
      gLocation:props.gLocation,
      fprto:props.fprto,
      fprfrom:props.fprfrom,
      fLocation:props.fLocation,
      aprto:props.aprto,
      aprfrom:props.aprfrom,
      aLocation:props.aLocation,
      fType:props.fType,
      aType:props.aType
    })
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = (e) => {  
    e.preventDefault()
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



    // componentWillRecieveProps = (formValue) => {
      
    //   })
    // }

    // var usedFilters = {}

    // for(var i=0; i<this.state.length; i++){
    //   if(this.state[])
    // }

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
          <p>General</p>
      <div style={styles.container}>
          <div style={styles.innerForm}>
          <p style={styles.header}>General Filters</p>
      
          <select onChange={this.handleChange} name='dType' value={this.state.dType}>
            <option style={styles.placeHolder}>Select Date Type</option>
            <option value='Casual'>Casual</option>
            <option value='Professional'>Professional</option>
            <option value='Romantic'>Romantic</option>
          </select>

          <input onChange={this.handleChange} type='number' placeholder='Party Size' value={this.state.partySize} name='partySize' /><br />

          <p style={styles.subHeader}>Price Range</p>

          <div style={styles.priceRanges}>
            <input style={styles.priceInput} onChange={this.handleChange} type='number' placeholder='From' value={this.state.gprfrom} name='gprfrom' />
            <input style={styles.priceInput} onChange={this.handleChange} type='number' placeholder='To' value={this.state.gprto} name='gprto' />
          </div>

          <p style={styles.subHeader}>Location</p>
          <input style={styles.locationInput} onChange={this.handleChange} type='text' placeholder='Search Radius' value={this.state.gLocation} name='gLocation' />
          
          <p style={styles.header}>Food Filters</p>
          <select onChange={this.handleChange} value={this.state.fType} name='fType'>
            <option style={styles.placeHolder}>Select Food Type</option>
            <option value='Chinese'>Chinese</option>
            <option value='Korean'>Korean</option>
            <option value='Italian'>Italian</option>
            <option value='Indian'>Indian</option>
            <option value='Mediterranean'>Mediterranean</option>
            <option value='German'>German</option>
          </select><br />
          <input onChange={this.handleChange} type='text' placeholder='Food Location' value={this.state.fLocation} name='fLocation' />
          
          <p style={styles.header}>Activity Filters</p>
          <select onChange={this.handleChange} name='aType' value={this.state.aType}>
            <option style={styles.placeHolder}>Select Activity Type</option>
            <option value='Outdoor Physical'>Outdoor Physical</option>
            <option value='Indoor Physical'>Indoor Physical</option>
            <option value='Show'>Show</option>
            <option value='Bar'>Bar</option>
          </select><br />
          <input onChange={this.handleChange} type='text' placeholder='Event Location' value={this.state.aLocation} name='aLocation' /><br />

          <button style={styles.filterButton} onClick={this.handleSubmit} type='submit'>Filter</button>
          </div>
      </div>
    )
  }
}


function mapStateToProps(appState) {
  return {...appState.filters}
}

export default connect(mapStateToProps)(FilterForm)