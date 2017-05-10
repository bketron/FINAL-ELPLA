import React, { Component } from 'react'

const restaurantData = require('./json')
const filteredData = []
const displayData = {}

class Filters extends Component{
    constructor(props){
        super()

        this.state = {
            data: restaurantData
        }
    }

    componentWillMount() {
        filteredData = this.state.data.filter( (restaurant, i) => {
            if(restaurant.foodType === this.props.filters.foodType && restaurant.price === this.props.filters.price){
                filteredData.push(restaurant)
            }
        })

        var index = (Math.random() * filteredData.length).float()

        displayRestaurant = filteredData[index]
    }

    render() {
        return (
            <div>
                <ul>
                    {displayData.map((object, i) => (
                        <li>
                            <div>
                                <h1>{object.name}</h1>
                                <img src={object.image} />
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        )
    }
}

export default Filters