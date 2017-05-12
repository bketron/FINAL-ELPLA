import React, { Component } from 'react'
import { connect } from 'react-redux'

const styles = {
    container: {

    },
    iFrame: {
        width: '100vw',
        height: '100vh'
    }
}

class MultiStop extends Component {
    constructor(props){
        super(props)
        this.state = {
            stops: []
        }
    }

    componentWillReceiveProps(props){
        console.log(props)
    }

    render() {
        console.log(this.props)
        return (
            <div style={styles.container}>

                            <iframe
							  style={styles.iFrame}
							  frameBorder="0"
							  src={`https://www.google.com/maps/embed/v1/directions
									?key=AIzaSyDF64L_QOvF-0_cQ_goyyaMpBt_sVfcHMw
									&origin=The+Iron+Yard,Las+Vegas,NV
                                    &waypoints=${this.props.stops.lat1},${this.props.stops.long1}
									&destination=${this.props.stops.lat2},${this.props.stops.long2}
  									&avoid=tolls`} allowFullScreen>
							</iframe>

               
            </div>  
        )
    }
}

const mapStateToProps = function(appState) {
    return {
        stops: appState.directions
    }
}

export default connect(mapStateToProps)(MultiStop)