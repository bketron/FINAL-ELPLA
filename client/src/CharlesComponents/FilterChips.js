import React from 'react'
// import {filterChip} from '../api/filter'
// import FilterPanel from './FilterPanel'
import uuid from 'uuid'
import Chip from './Chip'
// import {filter} from '../api/filter'
import {connect} from 'react-redux'
// const activeFilters = require('./')



class FilterChips extends React.Component { 
  constructor() {
    super()
    this.state = {
      chips:[]
    }
  }

  updateBag(filter){
  	this.setState({
  		chips: [...this.props.filter, {
  			title: filter,
  			id: "id" + uuid()
  		}]
  	})
  }
  
  eatChip(id){
  	this.setState({
  		chips: this.props.chips.filter(chip=>{
  			return chip.id !== id
  		})
  	})
  }

  render() {
    console.log(this.props.chips)
    return (
      <div>
      <p>Test{this.props.aType}</p>
      	<span>
      		{this.props.chips.map((chip)=>(

        		<Chip eatChip={this.props.eatChip} {...chip} />
      		))}
      	</span>
      </div>  
    )
  }
}


function mapStateToProps(appState){
  console.log(appState)
	return {
		chips: appState.chips
	}
}

export default connect(mapStateToProps)(FilterChips)