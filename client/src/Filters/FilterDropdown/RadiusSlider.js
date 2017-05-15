import React, {Component} from 'react'
import Slider from 'material-ui/Slider'

class RadiusSlider extends Component {
    state = {
        sliderVal: 12.5
    }

    handleSlider = (event, value) => {
        this.setState({sliderVal: value});
        console.log(this.state.sliderVal, 'state')
    }

    render() {
        return (
            <div>
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
                    min={0.5}
                    max={25}
                    step={0.1}
                    value={this.state.sliderVal}
                    onChange={this.handleSlider}
                    style={{
                        width: '80%',
                        margin: '0px'
                    }}
                    selectionColor= 'orange'
                />
            </div>
        )
    }
}

export default RadiusSlider