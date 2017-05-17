import React, {Component} from 'react'
import Slider from 'material-ui/Slider'

import {updateRadius} from '../../api/yelpapi.js'


class RadiusSlider extends Component {
    state = {
        sliderVal: 12.5
    }

    handleSlider = (event, value) => {
        this.setState({sliderVal: value})
    }

    updateRadius = (e) => {
        updateRadius(this.state.sliderVal)
        this.props.callback(this.state.sliderVal)
    }

    render() {
        return (
            <div style={{
                position: 'relative',
                top: '5px'
            }}>
                <div>
                    <p style={{margin: '0px'}}>
                        <span style={{
                            color: '#0B3954'
                        }}>Search Radius (km): </span>
                        <span style={{
                            color: '#FF6E00'
                        }}>{this.state.sliderVal}</span>
                    </p>
                </div>
                <Slider
                    id="radiusSlider"
                    min={0.5}
                    max={25}
                    step={0.1}
                    value={this.state.sliderVal}
                    onChange={this.handleSlider}
                    onDragStop={this.updateRadius}
                    sliderStyle={{
                        fill: 'orange',
                        width: '200px'
                    }}
                />
            </div>
        )
    }
}

export default RadiusSlider