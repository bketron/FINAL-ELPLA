import React, { Component } from 'react'
import Map from './GoogleMap'

class Directions extends Component {
    render() {
        return (
            <Map google={window.google} />                
        )
    }
}

export default Directions