import React from 'react'
// import {filter} from '../api/filter'
import RaisedButton from 'material-ui/RaisedButton'
import Drawer from 'material-ui/Drawer'
import FilterForm from './FilterForm'
import FilterChips from './FilterChips'

class FilterPanel extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
    	open: false,
    }
  }

  handleToggle = () => this.setState({open: !this.state.open})

  render() {
    return (
      <div>
      	<RaisedButton
          label="Toggle Drawer"
          onTouchTap={this.handleToggle}
        />
 				<Drawer width={200} openSecondary={true} open={this.state.open} >
          <FilterChips />
          <FilterForm />
 				</Drawer>
      </div>
    )
  }
}
export default FilterPanel         