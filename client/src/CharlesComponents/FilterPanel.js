import React from 'react'

import Menu from 'material-ui/Menu'
import MenuItem from 'material-ui/MenuItem'
import Divider from 'material-ui/Divider'
import ArrowDropLeft from 'material-ui/svg-icons/navigation-arrow-drop-right'
import RaisedButton from 'material-ui/RaisedButton'
import Drawer from 'material-ui/Drawer'

class FilterPanel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {open: false};
  }

  handleToggle = () => this.setState({open: !this.state.open});
  render() {
    return (
      <div>
 				<RaisedButton
          label="Toggle Drawer"
          onTouchTap={this.handleToggle}
        />
        <Drawer width={200} openSecondary={true} open={this.state.open} >
        	<MenuItem
	          primaryText="Custom: 1.2"
	          checked={true}
	          leftIcon={<ArrowDropLeft />}
	          menuItems={[
	            <MenuItem
	              primaryText="Show"
	              leftIcon={<ArrowDropLeft />}
	              menuItems={[
	                <MenuItem primaryText="Show Level 2" />,
	                <MenuItem primaryText="Grid lines" checked={true} />,
	                <MenuItem primaryText="Page breaks" insetChildren={true} />,
	                <MenuItem primaryText="Rules" checked={true} />,
	              ]}
	            />,
	            <MenuItem primaryText="Grid lines" checked={true} />,
	            <MenuItem primaryText="Page breaks" insetChildren={true} />,
	            <MenuItem primaryText="Rules" checked={true} />,
	          ]}
        	/>
        
        </Drawer>     


        
      </div>
    )
  }
}
export default FilterPanel