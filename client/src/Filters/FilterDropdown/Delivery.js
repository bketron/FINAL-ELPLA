import React, {Component} from 'react'
import FlatButton from 'material-ui/FlatButton'

class Delivery extends Component {
    state = {
        delivery: false,
        delColor: '#CCCCCC'
    }

    toggleDelivery = (e) => {
        if(this.state.delivery === false){
            this.setState({
                delivery: true,
                delColor: '#4CAF50'
            })

            console.log(this.state)
        } else {
            this.setState({
                delivery: false,
                delColor: '#CCCCCC'
            })
        }
    }

    render() {
        return (
            <div>
                <FlatButton 
                    style={{
                        height: '30px',
                        width: '30px',
                        background: 'none'
                    }}
                    hoverColor="none"
                    disableTouchRipple={true}
                    onClick={this.toggleDelivery}
                >
                    <i style={{
                            width: '30px',
                            height: '30px',
                            lineHeight: '30px',
                            fontSize: '17px',
                            color: this.state.delColor
                        }}
                        className="material-icons"
                    >
                        local_shipping
                    </i>
                </FlatButton>
            </div>
        )
    }
}

export default Delivery