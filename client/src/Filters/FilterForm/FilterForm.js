import React, { Component } from 'react'
import DateType from './DateType'
import PriceRange from './PriceRange'
import MealCategories from './MealCategories'
import ActivityCategories from './ActivityCategories'

import TextField from 'material-ui/TextField'

class FilterForm extends Component {
  constructor(props){
    super()
    this.state = {
      dateType: '',
      searchRadius: ''
    }
  }

handleChange = (e) => {
    this.setState({
        [e.target.name]: e.target.value
    })

    console.log(this.state)
}

  render() {
    return (
      <div style={{
          overflow: 'hidden',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center'
      }}>
        <DateType />
        <PriceRange />
        <TextField 
            onChange={this.handleChange}
            name="searchRadius"
            hintText="Search Radius"
            hintStyle={{color: '#0B3954'}}
            underlineFocusStyle={{borderColor: '#FF6E00'}}
            value={this.state.searchRadius}/>
        <MealCategories />
        <ActivityCategories />
      </div>
    )
  }
}

export default FilterForm