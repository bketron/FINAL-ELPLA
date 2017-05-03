import React from 'react'
import {filterChip} from '../api/filter'
import FilterPanel from './FilterPanel'
import uuid from 'uuid'

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
  		items: [...this.state.items, {
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
      <div>
        <div style={styles.chipBag}>

        </div>
      </div>
    )
  }
}
export default FilterChips