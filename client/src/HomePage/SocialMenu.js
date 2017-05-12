import React, {Component} from 'react'
import { Link } from 'react-router-dom'

import FlatButton from 'material-ui/FlatButton';
import Popover from 'material-ui/Popover';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';

class Social extends Component {
    constructor(props){
        super(props)
        this.state = {
            open: false
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
        });
    }

    render() {
        return (
            <div>
                <FlatButton
                    onTouchTap={this.handleTouchTap}
                    disableTouchRipple={true}
                    label="Social"
                    style={{
                        height: '23px',
                        width: '100px'
                    }}
                    labelStyle={{
                        fontSize: '13px',
                        fontFamily: 'Pontano Sans, sans-serif',
                        textTransform: 'normal',
                        lineHeight: '23px',
                        color: 'rgba(125,125,125,0.6)',
                        position: 'relative',
                        top: '-6px',
                        width: '100px',
                    }}
                />

                <Popover
                    open={this.state.open}
                    anchorEl={this.state.anchorEl}
                    anchorOrigin={{horizontal: 'left', vertical: 'bottom'}}
                    targetOrigin={{horizontal: 'left', vertical: 'top'}}
                    onRequestClose={this.handleRequestClose}
                >

                <Menu
                    autoWidth={false}
                    style={{
                        padding: '0px 0px'
                    }}
                    menuItemStyle={{
                        width: '100px',
                        fontSize: '13px',
                        textAlign: 'center',
                        height: '30px',
                        padding: '0px'
                    }}
                    listStyle={{
                        padding: '0px'
                    }}
                >
                    <MenuItem>
                        <div>
                            <a href="http://www.twitter.com/elPlaApp" style={{textDecoration: 'none', color: '#1dcaff'}}>
                                <div>
                                    <i style={{
                                        color: '#1dcaff',
                                        marginRight: '5px'
                                    }} className="fa fa-twitter" aria-hidden="true"></i>
                                    <span>Twitter</span>
                                </div>
                            </a>
                        </div>
                    </MenuItem>

                    <MenuItem>
                        <div>
                            <a href="http://www.facebook.com" style={{textDecoration: 'none', color: '#3b5998'}}>
                                <div>
                                    <i style={{
                                        color: '#3b5998',
                                        marginRight: '5px'
                                    }} className="fa fa-facebook" aria-hidden="true"></i>
                                    <span>Facebook</span>
                                </div>
                            </a>
                        </div>
                    </MenuItem>

                    <MenuItem>
                        <div>
                            <a href="http://www.instagram.com" style={{textDecoration: 'none', color: '#e95950'}}>
                                <div>
                                    <i style={{
                                        color: '#e95950',
                                        marginRight: '5px'
                                    }} className="fa fa-instagram" aria-hidden="true"></i>
                                    <span>Instagram</span>
                                </div>
                            </a>
                        </div>
                    </MenuItem>
                </Menu>

                </Popover>
            </div>
        )
    }
}

export default Social