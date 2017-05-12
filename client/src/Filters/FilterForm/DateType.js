import React, { Component } from 'react'
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

class DateType extends Component {
    state = {
        dateType: 'both'
    }

    handleChange = (event, index, value) => {
        console.log(value)
        this.setState({dateType: value})
    }

    render() {
        return (
            <div>
                <SelectField
                    floatingLabelText="Date Type"
                    floatingLabelStyle={{color: '#0B3954'}}
                    selectedMenuItemStyle={{color: '#FF6E00'}}
                    value={this.state.dateType}
                    onChange={this.handleChange}
                 >
                    <MenuItem value='both' primaryText="Meal and Activity" />
                    <MenuItem value='meal' primaryText="Meal Only" />
                    <MenuItem value='activity' primaryText="Activity Only" />
                 </SelectField>
            </div>
        )
    }
}

export default DateType