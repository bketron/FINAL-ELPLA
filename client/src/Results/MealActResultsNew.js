import React, { Component } from 'react'
import { connect } from 'react-redux'
import FlatButton from 'material-ui/FlatButton'
import { addLocations } from '../api/yelpapi'

import TopBar from '../HomePage/TopBar'
import RefreshIndicator from 'material-ui/RefreshIndicator'

import { addToFavorites } from '../api/yelpapi'

const styles = {
    main: {
        width: '100%',
    },
    favoriteButton: {
        backgroundColor: 'rgba(100,100,100,0.1)',
        color: 'rgba(0,0,0,0.1)',
        border: 'none'
    },
    resultsContainer: {
        width: '80%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        margin: 'auto',
        paddingTop: '50px'
    },
    resResult: {
        display: 'flex',
        flexDirection: 'column'
    },
    actResult: {
        display: 'flex',
        flexDirection: 'column'
    },
    regenButton: {
        display: 'block',
        width: '20px',
        height: '20px',
        border: 'none',
        outline: 'none'
    },
    image: {
        width: '400px',
        height: '300px',
        backgroundColor: 'black',
        overflow: 'hidden'
    },
    directionsContainer: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center'
    },
    dispName: {
        fontSize: '20px',
        color: '#FF6E00',
        margin: '0px'
    },
    dispRating: {
        margin: '0px',
        color: '#FF6E00'
    },
    dispPhone: {
        color: '#282828',
        margin: '0px'
    },
    dispAddress: {
        color: '#282828',
        margin: '0px'
    },
    dispLink: {
        color: '#282828',
        textDecoration: 'none',
        margin: '0px',
        borderBottom: '2px solid #FF6E00',
        width: '77px'
    }
}

class MealActResultsNew extends Component {
    state = {
        restaurants: [],
        res: {},
        resAddress: '',
        activities: [],
        act: {},
        actAddress: '',
        status: 'loading',
		loaded: 'none',
		loadDisp: 'block'
    }

    componentWillReceiveProps = (props) => {

        var resIndex = (Math.random() * props.restaurants.length).toFixed(0)
        var actIndex = (Math.random() * props.activities.length).toFixed(0)

        console.log('Restaurant #', resIndex)
        console.log('Activity #', actIndex)
        
        this.setState({
            restaurants: props.restaurants,
            res: props.restaurants[resIndex],
            resLocation: props.restaurants[resIndex].coordinates,
            resRating: this.getRating(props.restaurants[resIndex].rating),
            resAddress: props.restaurants[resIndex].location.address1 + ', ' + props.restaurants[resIndex].location.city + ', ' + props.restaurants[resIndex].location.state + ', ' + props.restaurants[resIndex].location.zip_code,
            activities: props.activities,
            act: props.activities[actIndex],
            actLocation: props.activities[actIndex].coordinates,
            actRating: this.getRating(props.activities[actIndex].rating),
            actAddress: props.activities[actIndex].location.address1 + ', ' + props.activities[actIndex].location.city + ', ' + props.activities[actIndex].location.state + ', ' + props.activities[actIndex].location.zip_code,
            status: 'hide',
            loaded: 'block',
            loadDisp: 'none'
        })
    }

    resRegen = (event) => {
        var newIndex = (Math.random() * this.state.restaurants.length).toFixed(0)

        this.setState({
            res: this.state.restaurants[newIndex],
            resAddress: this.state.restaurants[newIndex].location.address1 + ', ' + this.state.restaurants[newIndex].location.city + ', ' + this.state.restaurants[newIndex].location.state + ', ' + this.state.restaurants[newIndex].location.zip_code,
            resRating: this.getRating(this.state.restaurants[newIndex].rating)
        })
    }

    actRegen = (event) => {
        var newIndex = (Math.random() * this.state.activities.length).toFixed(0)

        this.setState({
            act: this.state.activities[newIndex],
            actAddress: this.state.activities[newIndex].location.address1 + ', ' + this.state.activities[newIndex].location.city + ', ' + this.state.activities[newIndex].location.state + ', ' + this.state.activities[newIndex].location.zip_code,
            actRating: this.getRating(this.state.activities[newIndex].rating)
        })
    }

    addFavorite = (event) => {
        var res = this.state.res
        var act = this.state.act

        var favObj = {
            resName: res.name,
            resPhone: res.display_phone,
            resAddress: this.state.resAddress,
            resRating: this.state.resRating,
            actName: act.name,
            actPhone: act.display_phone,
            actAddress: this.state.actAddress,
            actRating: this.state.actRating
        }

        console.log(favObj)

        addToFavorites(favObj)
    }

    getRating = (rating) => {
        if(rating === 0.5) {
            return <div>
                        <i className="material-icons">star_half</i>
                    </div>
        }

        if(rating === 1) {
            return <div>
                        <i className="material-icons">star</i>
                    </div>
        }

        if(rating === 1.5) {
            return <div>
                        <i className="material-icons">star</i>
                        <i className="material-icons">star_half</i>
                    </div>
        }

        if(rating === 2) {
            return <div>
                        <i className="material-icons">star</i>
                        <i className="material-icons">star</i>
                    </div>
        }

        if(rating === 2.5) {
            return <div>
                        <i className="material-icons">star</i>
                        <i className="material-icons">star</i>
                        <i className="material-icons">star_half</i>
                    </div>
        }

        if(rating === 3) {
            return <div>
                        <i className="material-icons">star</i>
                        <i className="material-icons">star</i>
                        <i className="material-icons">star</i>
                    </div>
        }

        if(rating === 3.5) {
            return <div>
                        <i className="material-icons">star</i>
                        <i className="material-icons">star</i>
                        <i className="material-icons">star</i>
                        <i className="material-icons">star_half</i>
                    </div>
        }

        if(rating === 4) {
            return <div>
                        <i className="material-icons">star</i>
                        <i className="material-icons">star</i>
                        <i className="material-icons">star</i>
                        <i className="material-icons">star</i>
                    </div>
        }

        if(rating === 4.5) {
            return <div>
                        <i className="material-icons">star</i>
                        <i className="material-icons">star</i>
                        <i className="material-icons">star</i>
                        <i className="material-icons">star</i>
                        <i className="material-icons">star_half</i>
                    </div>
        }

        if(rating === 5) {
            return <div>
                        <i className="material-icons">star</i>
                        <i className="material-icons">star</i>
                        <i className="material-icons">star</i>
                        <i className="material-icons">star</i>
                        <i className="material-icons">star</i>
                    </div>
        }
    }

    getDirections = (e) => {
		e.preventDefault()
		console.log('getDirections')
		addLocations({
			lat1: this.state.resLocation.latitude,
			long1: this.state.resLocation.longitude,
			lat2: this.state.actLocation.latitude,
			long2: this.state.actLocation.longitude
		})

		console.log(this.state.resLocation.latitude)
		console.log(this.state.resLocation.longitude)

		this.props.history.push('/directions/multi')
	}

    render() {
        console.log('Restaurant:')
        console.log(this.state.res)

        console.log('Activity:')
        console.log(this.state.act)
        return (
            <div style={styles.main}>
                <TopBar />
                <RefreshIndicator
						size={70}
						left={70}
						top={0}
						loadingColor="#FF6E00"
						status={this.state.status}
						style={{
							display: this.state.loadDisp,
							margin: '300px auto',
							position: 'initial',
							transform: 'none'
						}}
    			    />

                <div style={{display: this.state.loaded}}>
                    <FlatButton
                        backgroundColor="rgba(100,100,100,0.1)"
                        style={{
                            color: '#0B3954',
                            padding: '0px 12px'
                        }}
                        hoverColor="#FF6E00"
                    >
                        <button style={{
                            background: 'none',
                            border: 'none',
                            outline: 'none',
                            fontFamily: 'Roboto, sans-serif',
                            fontSize: '14px',
                            textTransform: 'uppercase',
                            cursor: 'pointer'
                        }}
                        type="button" onClick={this.addFavorite}>Add this to your favorites!</button>
                    </FlatButton>

                    <div style={styles.resultsContainer}>
                        <section style={styles.resResult}>
                            <button style={{
                                        border: 'none',
                                        outline: 'none',
                                        backgroundColor: 'rgba(125,125,125,0.7)',
                                        width: '50px',
                                        height: '23px',
                                        position: 'relative',
                                        top: '23px',
                                        cursor: 'pointer'
                                    }} 
                                    type="button" 
                                    onClick={this.resRegen}
                            >
                                <span style={{color: 'rgba(255,255,255,0.8)', display: 'flex'}}>Next <i style={{fontSize: '14px', marginLeft: '3px'}} className="fa fa-angle-double-right" aria-hidden="true"></i></span>

                            </button>

                            <img style={styles.image} src={this.state.res.image_url} alt={ this.state.res.name + 'Cover Image'} />

                            <p style={styles.dispName}>{this.state.res.name} - <span style={{color: '#282828'}}>{this.state.res.price}</span></p>
                            <div style={styles.dispRating}>{this.state.resRating}</div>
                            <p style={styles.dispPhone}>{this.state.res.display_phone}</p>
                            <p style={styles.dispAddress}>{this.state.resAddress}</p>
                            <a style={styles.dispLink} href={this.state.res.url}>Yelp Page</a>

                        </section>

                        <section style={styles.actResult}>
                            <button style={{
                                        border: 'none',
                                        outline: 'none',
                                        backgroundColor: 'rgba(125,125,125,0.7)',
                                        width: '50px',
                                        height: '23px',
                                        position: 'relative',
                                        top: '23px',
                                        cursor: 'pointer'
                                    }} 
                                    type="button" 
                                    onClick={this.actRegen}
                            >
                                <span style={{color: 'rgba(255,255,255,0.8)', display: 'flex'}}>Next <i style={{fontSize: '14px', marginLeft: '3px'}} className="fa fa-angle-double-right" aria-hidden="true"></i></span>

                            </button>

                            <img style={styles.image} src={this.state.act.image_url} alt={ this.state.act.name + 'Cover Image'} />

                            <p style={styles.dispName}>{this.state.act.name} - <span style={{color: '#282828'}}>{this.state.act.price}</span></p>
                            <div style={styles.dispRating}>{this.state.actRating}</div>
                            <p style={styles.dispPhone}>{this.state.act.display_phone}</p>
                            <p style={styles.dispAddress}>{this.state.actAddress}</p>
                            <a style={styles.dispLink} href={this.state.act.url}>Yelp Page</a>

                        </section>

                        <section style={styles.directionsContainer}>
                            <FlatButton
                                label="Get Directions!"
                                onTouchTap={this.getDirections}
                                style={{
                                    height: '40px',
                                    lineHeight: '40px',
                                    padding: '0px 3px',
                                    backgroundColor: '#FF6E00',
                                    color: '#0B3954',
                                    position: 'relative',
                                    top: '-40px',
                                }}
                            />
                        </section>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = function(appState) {
    return {
        restaurants: appState.restaurants,
        activities: appState.activities
    }
}

export default connect(mapStateToProps)(MealActResultsNew)