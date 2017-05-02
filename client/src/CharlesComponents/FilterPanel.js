import React from 'react'
import { reduxForm } from 'redux-form'

// import Menu from 'material-ui/Menu'
// import MenuItem from 'material-ui/MenuItem'
// import Divider from 'material-ui/Divider'
// import ArrowDropLeft from 'material-ui/svg-icons/navigation-arrow-drop-right'
import RaisedButton from 'material-ui/RaisedButton'
import Drawer from 'material-ui/Drawer'

// const renderFields = (fields) => (
//   <div>
//     <div className="input-row">
//       <input {...fields.firstName.input} type="text"/>
//       {fields.firstName.meta.touched && fields.firstName.meta.error && 
//        <span className="error">{fields.firstName.meta.error}</span>}
//     </div>
//     <div className="input-row">
//       <input {...fields.lastName.input} type="text"/>
//       {fields.lastName.meta.touched && fields.lastName.meta.error && 
//        <span className="error">{fields.lastName.meta.error}</span>}
//     </div>
//   </div>
// )

// <Fields names={[ 'firstName', 'lastName' ]} component={renderFields}/>

const placeholder {
  display: hidden;
}


class FilterPanel extends React.Component {
  constructor(props) {
    super(props)
    this.state = {open: false}
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
 					<form>
 						<p>General</p>
 						<select>
 							<option style={placeholder}>Select Date Type</option>
 							<option>Casual</option>
 							<option>Professional</option>
 							<option>Romantic</option>
 						</select>
 						<input type='text' placeholder='Party Size' value='' name='partysize' />
 						<label>Price Range</label>
 						<input type='text' placeholder='From' value='' name='prfrom' />
 						<span>to</span>
 						<input type='text' placeholder='To' value='' name='prto' />
 						
 					</form>
 				</Drawer>
      </div>
    )
  }
}
export default FilterPanel


// 				<RaisedButton
//           label="Toggle Drawer"
//           onTouchTap={this.handleToggle}
//         />
//         <Drawer width={200} openSecondary={true} open={this.state.open} >
//         	<MenuItem
// 	          primaryText="Custom: 1.2"
// 	          checked={true}
// 	          leftIcon={<ArrowDropLeft />}
// 	          menuItems={[
// 	            <MenuItem
// 	              primaryText="Show"
// 	              leftIcon={<ArrowDropLeft />}
// 	              menuItems={[
// 	                <MenuItem primaryText="Show Level 2" />,
// 	                <MenuItem primaryText="Grid lines" checked={true} />,
// 	                <MenuItem primaryText="Page breaks" insetChildren={true} />,
// 	                <MenuItem primaryText="Rules" checked={true} />,
// 	              ]}
// 	            />,
// 	            <MenuItem primaryText="Grid lines" checked={true} />,
// 	            <MenuItem primaryText="Page breaks" insetChildren={true} />,
// 	            <MenuItem primaryText="Rules" checked={true} />,
// 	          ]}
//         	/>
        
//         </Drawer>  


//         