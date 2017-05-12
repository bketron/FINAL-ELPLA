import React, { Component } from 'react'
import SelectField from 'material-ui/SelectField'
import MenuItem from 'material-ui/MenuItem'

const types = [
    'American',
    'Chinese',
    'French',
    'Italian',
    'Japanese',
    'Mexican',
    'Tai',
    'Vietnamese'
]

class FoodTypes extends Component {
    state = {
        types: []
    }

    handleChange = (event, index, values) => {
        this.setState({
            types: values
        })
    }

    menuItems(values) {
        return types.map((type) => (
            <MenuItem
                key={type}
                insetChildren={true}
                checked={values && values.includes(type)}
                value={type.toLowerCase()}
                primaryText={type}
            />
        ))
    }

    render() {
        const {types} = this.state
        return (
            <SelectField
                multiple={true}
                hintText="Food Categories"
                value={types}
                onChange={this.handleChange}
                selectedMenuItemStyle={{
                    color: '#FF6E00'
                }}
            >
                {this.menuItems(types)}
            </SelectField>
        )
    }
}

export default FoodTypes