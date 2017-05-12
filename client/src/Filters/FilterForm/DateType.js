import React, { Component } from 'react'
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';

const styles = {
    dropdown: {
        width: '300px',
        margin: 'auto'
    }
}

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
                <DropDownMenu
                    value={this.state.dateType}
                    onChange={this.handleChange}
                    style={styles.dropdown}
                    autoWidth={false}
                >
                    <MenuItem value="both" primaryText="Meal and Activity" />
                    <MenuItem value="meal" primaryText="Meal Only" />
                    <MenuItem value="activity" primaryText="Activity Only" />
                </DropDownMenu>
            </div>
        )
    }
}

export default DateType