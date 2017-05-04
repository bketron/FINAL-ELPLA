import React from 'react'
import {filterChip} from '../api/filter'
import FilterPanel from './FilterPanel'
import uuid from 'uuid'
import Chip from './Chip'

// const activeFilters = require('./')



const = FilterChips = (props) => 
  

  updateBag(filter){
  	this.setState({
  		chips: [...this.props.chips, {
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
      	<span>
      		{this.props.chips.map((chip)=>(
        		<Chip eatChip={this.props.eatChip} {...chips} />
      		))}
      	</span>
      </div>  
    )
  }
)


function mapStateToProps(appState){
	return {
		chips: appState.chips
	}
}

export default connect(mapStateToProps)(FilterChips)