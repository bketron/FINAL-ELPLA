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

class SingleStop extends Component {
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
        console.log(this.props.stops.latitude)
        console.log(this.props.stops.longitude)
        return (
            <div style={styles.container}>

                            <iframe
							  style={styles.iFrame}
							  frameBorder="0"
							  src={`https://www.google.com/maps/embed/v1/directions
									?key=AIzaSyDF64L_QOvF-0_cQ_goyyaMpBt_sVfcHMw
									&origin=The+Iron+Yard,Las+Vegas,NV
									&destination=${this.props.stops.latitude},${this.props.stops.longitude}
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

export default connect(mapStateToProps)(SingleStop)