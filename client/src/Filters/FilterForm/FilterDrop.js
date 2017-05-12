import React, {Component} from 'react'

import RaisedButton from 'material-ui/RaisedButton'
import Popover from 'material-ui/Popover'
import Slider from 'material-ui/Slider'

class FilterDrop extends Component {
    constructor(props){
        super(props)

        this.state = {
            open: false,
            sliderVal: 12.5
        }
    }

    handleTouchTap = (e) => {
        e.preventDefault()

        this.setState({
            open: true,
            anchorEl: e.currentTarget,
        })
    }

    handleRequestClose = () => {
        this.setState({
            open: false,
        })
    }

    handleSlider = (event, value) => {
        this.setState({sliderVal: value})
    }

    render() {
        return (
            <div>
                <RaisedButton
                    onTouchTap={this.handleTouchTap}
                    label="More Filters"
                />

                <Popover
                    open={this.state.open}
                    anchorEl={this.state.anchorEl}
                    anchorOrigin={{horizontal: 'left', vertical: 'bottom'}}
                    targetOrigin={{horizontal: 'left', vertical: 'top'}}
                    onRequestClose={this.handleRequestClose}
                >
                    <div>
                        <Slider
                            min={0}
                            max={100}
                            step={1}
                            value={this.state.sliderVal}
                            onChange={this.handleSlider}
                        />
                        
                    </div>
                </Popover>
            </div>
        )
    }
}

export default FilterDrop