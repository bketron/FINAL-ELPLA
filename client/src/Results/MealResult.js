import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addLocations } from '../api/yelpapi'
import { Link } from 'react-router-dom'
import FlatButton from 'material-ui/FlatButton'
import { addToFavorites }from '../api/yelpapi'

import TopBar from '../HomePage/TopBar'
import RefreshIndicator from 'material-ui/RefreshIndicator'

const styles = {
	main: {
        width: '100%',
    },
	resultContainer: {
		width: '80%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        margin: 'auto',
        paddingTop: '50px'
	},
	favoriteButton: {
        backgroundColor: 'rgba(100,100,100,0.1)',
        color: 'rgba(0,0,0,0.1)',
        border: 'none'
    },
	resResult: {
        display: 'flex',
        flexDirection: 'column'
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

class Meal extends Component {
	constructor(props) {
		super()
		this.state = {
			restaurants: [],
			res: {},
			location: {},
			status: 'loading',
			loaded: 'none',
			loadDisp: 'block',
			searchRadius: '',
			searchRating: '',
			foodTypes: {},
			delivery: false
		}
	}

	componentWillReceiveProps(props) {
		console.log(props)
		var id = (Math.random() * props.restaurants.length).toFixed(0)
		this.setState({
			restaurants: props.restaurants,
			res: props.restaurants[id],
			location: props.restaurants[id].coordinates,
			searchRadius: props.searchRadius,
			searchRating: props.searchRating,
			foodTypes: props.foodTypes,
			delivery: props.delivery,
			status: 'hide',
			loaded: 'block',
			loadDisp: 'none'
		})

	}

	newRes = (e) => {
		e.preventDefault()
		var newId = (Math.random() * this.state.restaurants.length).toFixed(0)

		this.setState({
			res: this.state.restaurants[newId],
			location: this.state.restaurants[newId].coordinates
		})

		console.log(this.state)
	}

    addFavorite = (event) => {
        var res = this.state.res

        var favObj = {
            resName: res.name,
            resPhone: res.display_phone,
            resAddress: this.state.resAddress,
            resRating: this.state.resRating
        }

        console.log(favObj)

        addToFavorites(favObj)

		alert("Item has been added to your favorites list!")
    }

	getDirections = (e) => {
		e.preventDefault()

		addLocations({
			latitude: this.state.location.latitude,
			longitude: this.state.location.longitude
		})

		console.log(this.state.location.latitude)
		console.log(this.state.location.longitude)

		this.props.history.push('/directions/single')
	}

	render() {
		return (
			<div style={styles.main}>
				<section>
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
                            	textTransform: 'uppercase'
                        	}}
                        	type="button" onClick={this.addFavorite}>Add this to your favorites!</button>
                    	</FlatButton>

						<div style={styles.resultContainer}>						
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
										onClick={this.newRes}
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
			</section>
			</div>
		)
	}
}

const mapStateToProps = function(appState) {
	return {
		restaurants: appState.restaurants,
		searchRadius: appState.searchRadius,
		searchRating: appState.searchRating,
		foodTypes: appState.foodTypes,
		delivery: appState.delivery
	}
}

export default connect(mapStateToProps)(Meal)
