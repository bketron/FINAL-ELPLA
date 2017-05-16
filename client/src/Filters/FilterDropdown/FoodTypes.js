import React, { Component } from 'react'
import SelectField from 'material-ui/SelectField'
import MenuItem from 'material-ui/MenuItem'

import {updateFoodTypes} from '../../api/yelpapi.js'

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

        updateFoodTypes(values)
    }

    menuItems(values) {
        return types.map((type) => (
            <MenuItem
                key={type}
                insetChildren={true}
                checked={values && values.includes(type)}
                value={type.toLowerCase()}
                name={type.toLowerCase()}
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
                style={{
                    width: '200px',
                    marginTop: '5px'
                }}
            >
                {this.menuItems(types)}
            </SelectField>
        )
    }
}

export default FoodTypes