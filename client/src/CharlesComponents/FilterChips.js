import React from 'react'
// import {filterChip} from '../api/filter'
// import FilterPanel from './FilterPanel'
import uuid from 'uuid'
import Chip from './Chip'
// import {filter} from '../api/filter'
import {connect} from 'react-redux'
// const activeFilters = require('./')




// aLocation
// aType
// aprfrom
// aprto
// dType
// fLocation
// fType
// fprfrom
// fprto
// gLocation
// gprfrom
// gprto
// partySize


class FilterChips extends React.Component {
  render() {
    console.log(this.props.filters.aLocation)
    return (
      <div className="chips">
        {this.props.filters.aLocation ? <Chip name="Activity Location" value={this.props.filters.aLocation} /> : ''}
        {this.props.filters.aType ? <Chip name="Activity Type" value={this.props.filters.aType} /> : ''}
        {this.props.filters.aprfrom ? <Chip name="Activity Price From" value={this.props.filters.aprfrom} /> : ''}
        {this.props.filters.aprto ? <Chip name="Activity Price To" value={this.props.filters.aprto} /> : ''}
        {this.props.filters.dType ? <Chip name="Date Type" value={this.props.filters.dType} /> : ''}
        {this.props.filters.fLocation ? <Chip name="Food Location" value={this.props.filters.fLocation} /> : ''}
        {this.props.filters.fType ? <Chip name="Food Type" value={this.props.filters.fType} /> : ''}
        {this.props.filters.fprfrom ? <Chip name="Food Price From" value={this.props.filters.fprfrom} /> : ''}
        {this.props.filters.fprto ? <Chip name="Food Price To" value={this.props.filters.fprto} /> : ''}
        {this.props.filters.gLocation ? <Chip name="General Location" value={this.props.filters.gLocation} /> : ''}
        {this.props.filters.gprfrom ? <Chip name="General Price From" value={this.props.filters.gprfrom} /> : ''}
        {this.props.filters.gprto ? <Chip name="General Price To" value={this.props.filters.gprto} /> : ''}
        {this.props.filters.partySize ? <Chip name="Party Size" value={this.props.filters.partySize} /> : ''}
      </div>
    )
  }
}


function mapStateToProps(appState){
	return {
		filters: appState.filters
	}
}

export default connect(mapStateToProps)(FilterChips)