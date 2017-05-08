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
<<<<<<< HEAD
      open: false,
=======
    	open: false,
>>>>>>> 9f51959dddc68a3157d07240a246a70e6d502e1f
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
<<<<<<< HEAD
        <Drawer width={200} openSecondary={true} open={this.state.open} >
          <FilterChips />
          <FilterForm />
        </Drawer>
=======
 				<Drawer width={200} openSecondary={true} open={this.state.open} >
          <FilterChips />
          <FilterForm />
 				</Drawer>
>>>>>>> 9f51959dddc68a3157d07240a246a70e6d502e1f
      </div>
    )
  }
}
<<<<<<< HEAD
export default FilterPanel
=======
export default FilterPanel         
>>>>>>> 9f51959dddc68a3157d07240a246a70e6d502e1f
