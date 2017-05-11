import React, { Component } from 'react'
import {connect} from 'react-redux'

const styles = {
    container: {

    },
    iFrame: {
        width: '100vw',
        height: '100vh'
    }
}

class Directions extends Component {
    constructor(props){
        super(props)
        this.state={
            latitude: '',
            longitude: ''
        }
    }

    componentWillReceiveProps(props){
        console.log(props)

        this.setState({
            latitude: props.location.latitude,
            longitude: props.location.longitude
        })
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
									&destination=${this.props.location.latitude},${this.props.location.longitude}
  									&avoid=tolls`} allowFullScreen>
							</iframe>

               
            </div>               
        )
    }
}

const mapStateToProps = function(appState) {
    return {
        location: appState.geoLocation
    }
}

export default connect(mapStateToProps)(Directions)