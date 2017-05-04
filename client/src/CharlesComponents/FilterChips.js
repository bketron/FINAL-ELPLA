import React from 'react'
import {filterChip} from '../api/filter'
import FilterPanel from './FilterPanel'
import uuid from 'uuid'
import Chip from './Chip'

// const activeFilters = require('./')

const styles = {
	chipBag: {
		width: '100%'
	}
}

class FilterChips extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
    	chips: []
    }
  }

  updateBag(filter){
  	this.setState({
  		chips: [...this.state.chips, {
  			title: filter,
  			id: "id" + uuid()
  		}]
  	})
  }

  eatChip(id){
  	this.setState({
  		chips: this.state.chips.filter(chip=>{
  			return chip.id !== id
  		})
  	})
  }

  render() {
    return (
      <div style={styles.chipBag}>
      	<span>
      		{this.props.chips.map((chip)=>(
        		<Chip eatChip={this.props.eatChip} {...chips} />
      		))}
      	</span>
      </div>  
    )
  }
}
export default FilterChips