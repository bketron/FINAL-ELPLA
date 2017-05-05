import React from 'react'
// import {filterChip} from '../api/filter'
// import FilterPanel from './FilterPanel'
// import uuid from 'uuid'
// import {filter} from '../api/filter'
import Chip from './Chip'
import {connect} from 'react-redux'
// const activeFilters = require('./')
// import {addFilters} from '../api/filter'

class FilterChips extends React.Component {
  render() {
    return (
      <div className="chips">
        {this.props.aLocation ? <Chip propName="aLocation" name="Activity Location" value={this.props.aLocation} /> : ''}
        {this.props.aType ? <Chip propName="aType" name="Activity Type" value={this.props.aType} /> : ''}
        {this.props.aprfrom ? <Chip propName="aprfrom" name="Activity Price From" value={this.props.aprfrom} /> : ''}
        {this.props.aprto ? <Chip propName="aprto" name="Activity Price To" value={this.props.aprto} /> : ''}
        {this.props.dType ? <Chip propName="dType" name="Date Type" value={this.props.dType} /> : ''}
        {this.props.fLocation ? <Chip propName="fLocation" name="Food Location" value={this.props.fLocation} /> : ''}
        {this.props.fType ? <Chip propName="fType" name="Food Type" value={this.props.fType} /> : ''}
        {this.props.fprfrom ? <Chip propName="fprfrom" name="Food Price From" value={this.props.fprfrom} /> : ''}
        {this.props.fprto ? <Chip propName="fprto" name="Food Price To" value={this.props.fprto} /> : ''}
        {this.props.gLocation ? <Chip propName="gLocation" name="General Location" value={this.props.gLocation} /> : ''}
        {this.props.gprfrom ? <Chip propName="gprfrom" name="General Price From" value={this.props.gprfrom} /> : ''}
        {this.props.gprto ? <Chip propName="gprto" name="General Price To" value={this.props.gprto} /> : ''}
        {this.props.partySize ? <Chip propName="partySize" name="Party Size" value={this.props.partySize} /> : ''}
      </div>
    )
  }
}


function mapStateToProps(appState){
	return {...appState.filters}
}

export default connect(mapStateToProps)(FilterChips)