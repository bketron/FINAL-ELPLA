import React from 'react'
// import { reduxForm } from 'redux-form'

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

const style = {
	placeHolder:{
	  display: 'none'
	}
}
class FilterPanel extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
    	open: false,
    	partySize: '',
    	dType: '',
    	prto:'',
    	prfrom:'',
    	location:'',
    	fType:'',
    	aType:''
    }
  }

  handleToggle = () => this.setState({open: !this.state.open})

  handleChange = (e) => {
  	this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = (e) => {  
    e.preventDefault()
    filter({
      partySize: this.state.partySize,
      dType: this.state.dType,
    	prto: this.state.prto,
    	prfrom:this.state.prfrom,
    	location:this.state.location,
    	fType:this.state.fType,
    	aType:this.state.aType
    })
    this.setState({
    	partySize: '',
      dType: '',
    	prto:'',
    	prfrom:'',
    	location:'',
    	fType:'',
    	aType:''
    })
  }

  render() {
    return (
      <div>
      	<RaisedButton
          label="Toggle Drawer"
          onTouchTap={this.handleToggle}
        />
 				<Drawer width={200} openSecondary={true} open={this.state.open} >
 					<form onSubmit={this.handleSubmit}>
 						<p>General</p>
 						<select name='dtype' value={this.state.dType}>
 							<option style={style.placeHolder}>Select Date Type</option>
 							<option value='Casual'>Casual</option>
 							<option value='Professional'>Professional</option>
 							<option value='Romantic'>Romantic</option>
 						</select>
 						<input onChange={this.handleChange} type='number' placeholder='Party Size' value={this.partySize} name='partysize' /><br />
 						<label>Price Range</label>
 						<input onChange={this.handleChange} type='text' placeholder='From' value={this.prfrom} name='prfrom' />
 						<span>to</span>
 						<input onChange={this.handleChange} type='text' placeholder='To' value={this.prto} name='prto' />
 						<input onChange={this.handleChange} type='text' placeholder='Location' value={this.location} name='location' />
 						<p>Food</p>
 						<select value={this.fType} name='fType'>
 							<option style={style.placeHolder}>Select Food Type</option>
 							<option value='Chinese'>Chinese</option>
 							<option value='Korean'>Korean</option>
 							<option value='Italian'>Italian</option>
 							<option value='Indian'>Indian</option>
 							<option value='Mediterranean'>Mediterranean</option>
 							<option value='German'>German</option>
 						</select><br />
 						<label>Price Range</label>
 						<input onChange={this.handleChange} type='text' placeholder='From' value={this.prfrom} name='prfrom' />
 						<span>to</span>
 						<input onChange={this.handleChange} type='text' placeholder='To' value={this.prto} name='prto' />
 						<input onChange={this.handleChange} type='text' placeholder='Location' value={this.location} name='location' />
 						<p>Activity</p>
 						<select name='aType'>
 							<option style={style.placeHolder}>Select Activity Type</option>
 							<option value='Outdoor Physical'>Outdoor Physical</option>
 							<option value='Indoor Physical'>Indoor Physical</option>
 							<option value='Show'>Show</option>
 							<option value='Bar'>Bar</option>
 						</select><br />
 						<label>Price Range</label>
 						<input onChange={this.handleChange} type='text' placeholder='From' value={this.prfrom} name='prfrom' />
 						<span>to</span>
 						<input onChange={this.handleChange} type='text' placeholder='To' value={this.prto} name='prto' />
 						<input onChange={this.handleChange} type='text' placeholder='Location' value={this.location} name='location' />
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