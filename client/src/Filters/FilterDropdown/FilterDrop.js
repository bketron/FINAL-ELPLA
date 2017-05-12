import React, {Component} from 'react'
import RaisedButton from 'material-ui/RaisedButton'
import Popover from 'material-ui/Popover'

import RadiusSlider from './RadiusSlider'
import FoodTypes from './FoodTypes'
import ActivityTypes from './ActivityTypes'
import Rating from './Rating'

class FilterDrop extends Component {
    constructor(props){
        super(props)

        this.state = {
            open: false,
            searchRadius: 12.5
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

    render() {
        return (
            <div>
                <RaisedButton
                    onTouchTap={this.handleTouchTap}
                    label="More Filters"
                    labelColor="#FF6E00"
                    fullWidth={true}
                    backgroundColor="#0B3954"
                    buttonStyle={{
                        height: '40px'
                    }}
                    style={{
                        marginTop: '10px',
                        borderRadius: '0px',
                        backgroundColor: '#0B3954',
                        background: '#0B3954'
                    }}
                    rippleStyle={{
                        color: 'black',
                        opacity: 0.5
                    }}
                />

                <Popover
                    open={this.state.open}
                    anchorEl={this.state.anchorEl}
                    anchorOrigin={{horizontal: 'left', vertical: 'bottom'}}
                    targetOrigin={{horizontal: 'left', vertical: 'top'}}
                    onRequestClose={this.handleRequestClose}
                    style={{
                        width: '36.5%',
                        borderRadius: '0px 0px 2px 2px'
                    }}
                >
                    <div>
                        <div style={{width:'50%'}}>
                            <RadiusSlider />
                        </div>
                        <div style={{width:'50%'}}>
                            <FoodTypes />
                            <ActivityTypes />
                        </div>
                        <Rating />
                    </div>
                </Popover>
            </div>
        )
    }
}

export default FilterDrop