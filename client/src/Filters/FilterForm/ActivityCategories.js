import React, { Component } from 'react'
import SelectField from 'material-ui/SelectField'
import MenuItem from 'material-ui/MenuItem'

const categories = [
  'Oliver Hansen',
  'Van Henry',
  'April Tucker',
  'Ralph Hubbard',
  'Omar Alexander',
  'Carlos Abbott',
  'Miriam Wagner',
  'Bradley Wilkerson',
  'Virginia Andrews',
  'Kelly Snyder',
];

class ActCats extends Component {
    state = {
        foodCats: []
    }

    handleChange = (event, index, values) => {
        this.setState({
            foodCats: values
        })
        console.log(this.state)
    }
        

    menuItems(values) {
        return categories.map((cat) => (
            <MenuItem
                key={cat}
                insetChildren={true}
                checked={values && values.includes(cat)}
                value={cat}
                primaryText={cat}
            />
        ));
    }

    render() {
        const {foodCats} = this.state;
        return (
            <SelectField
                multiple={true}
                hintText="Activity Categories"
                value={foodCats}
                onChange={this.handleChange}
                floatingLabelText="Activity Categories"
                floatingLabelStyle={{color: '#FF6E00'}}
            >
                {this.menuItems(foodCats)}
            </SelectField>
        )
    }
}

export default ActCats