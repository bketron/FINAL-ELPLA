import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addLocations } from '../api/yelpapi'
import { Link } from 'react-router-dom'

import TopBar from '../HomePage/TopBar'
import RefreshIndicator from 'material-ui/RefreshIndicator'
import FlatButton from 'material-ui/FlatButton'
import { addToFavorites } from '../api/yelpapi'

const styles = {
	main: {
		height: '100vh',
		width: '100vw',
		backgroundColor: 'rgb(221,221,221)'
	},
	container: {
		padding: '100px',
		backgroundColor: '#082B3F'
	},
	resContainer: {
		
	},
	topBar: {
		display: 'flex',
		justifyContent: 'flex-start'
	},
	lowerSection: {
		display: 'flex',
		justifyContent: 'flex-start'
	},
	infoContainer: {
		marginLeft: '100px'
	},
	newButton: {
		outline: 'none',
		border: 'none',
		color: '#082B3F',
		backgroundColor: '#FF6E00',
		fontSize: '20px',
		marginRight: '8px',
		cursor: 'pointer',
		width: '35px',
		height: '35px',
		lineHeight: '30px',
		fontWeight: 'bold',
		position: 'relative',
		top: '35px'
	},
	title: {
		color: '#F7F7F7',
		fontSize: '25px',
		fontWeight: 'bold',
		margin: '0px 0px 5px 0px',
		padding: '0px 10px'
	},
	titleLine: {
		borderBottom: '2px solid #FF6E00'
	},
	imageContainer: {
		maxHeight: '400px',
		maxWidth: '40%',
		overflow: 'hidden'
	},
	image: {
		maxWidth: '100%'
	},
	list: {
		listStyleType: 'none',
		padding: '0px',
		margin: '0px'
	},
	listItem: {

	},
	infoProp: {
		display: 'flex',
		lineHeight: '40px'
	},
	infoLabel: {
		color: 'rgba(200,200,200,0.5)',
		fontSize: '13px',
		lineHeight: '40px',
		margin: '0px 10px 0px 0px'
	},
	stars: {
		color: 'white',
		margin: '0px'
	},
	phone: {
		color: '#F7F7F7',
		margin: '0px'
	},
	price: {
		color: '#F7F7F7',
		margin: '0px'
	},
	website: {
		textDecoration: 'none',
		color: '#F7F7F7',
		lineHeight: '40px'
	},
	categories: {

	},
	catList: {
		listStyleType: 'none',
		margin: 'none',
		padding: 'none',
		display: 'flex'
	},
	catItem: {

	},
	catTitle: {
		color: 'white'
	},
	directionsButton: {
		border: 'none',
		outline: 'none',
		height: '40px',
		backgroundColor: '#FF6E00',
		color: '#0B3954',
		padding: '0px 20px',
		fontSize: '18px',
		fontWeight: 'bold',
		marginBottom:-10
	},
	faveButton: {
		border: 'none',
		outline: 'none',
		height: '40px',
		backgroundColor: '#FF6E00',
		color: '#0B3954',
		padding: '0px 20px',
		fontSize: '14px',
		fontWeight: 'bold',
		width:168,
		marginTop:-10
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
			loadDisp: 'block'
		}
	}

	componentWillReceiveProps(props) {
		console.log(props)
		var id = (Math.random() * props.restaurants.length).toFixed(0)
		this.setState({
			restaurants: props.restaurants,
			res: props.restaurants[id],
			location: props.restaurants[id].coordinates,
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

   addFavorite = (event) => {
        var res = this.state.res

        var favObj = {
            resName: res.name,
            resPhone: res.display_phone,
            resAddress: this.state.resAddress,
            resRating: this.state.resRating,
        }

        console.log(favObj)

        addToFavorites(favObj)
    }

	render() {
		console.log(this.state)
		console.log(this.state.location)
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
						<div style={styles.resContainer}>
							<div style={styles.topBar}>
								<button style={styles.newButton} type="button" onClick={this.newRes}>x</button>
							</div>
							<div style={styles.lowerSection}>
								<div style={styles.imageContainer}>
									<img style={styles.image} src={this.state.res.image_url} alt="cover" />
								</div>

								<div style={styles.infoContainer}>
									<ul style={styles.list}>
										<li style={styles.listItem}>
											<p style={styles.title}>{this.state.res.name}</p>
										</li>

										<li style={styles.listItem}><div style={styles.titleLine}></div></li>

										<li style={styles.listItem}>
											<div style={styles.infoProp}>
												<p style={styles.stars}>
													<i style={{
														color: 'white'
													}} className="fa fa-star-o" aria-hidden="true"></i>
													<i style={{
														color: 'white'
													}} className="fa fa-star-o" aria-hidden="true"></i>
													<i style={{
														color: 'white'
													}} className="fa fa-star-o" aria-hidden="true"></i>
													<i style={{
														color: 'white'
													}} className="fa fa-star-o" aria-hidden="true"></i>
													<i style={{
														color: 'white'
													}} className="fa fa-star-o" aria-hidden="true"></i>

													<i style={{
														color: 'rgba(200,200,200,0.4)',
														fontSize: '11px',
														marginLeft: '7px',
														marginRight: '7px'
													}} className="fa fa-circle" aria-hidden="true"></i>

													<span>{this.state.res.review_count} </span>
													Reviews
												</p>
											</div>
										</li>
										<li style={styles.listItem}>
											<div style={styles.infoProp}>
												<p style={styles.infoLabel}>Phone Number: </p>
												<p style={styles.phone}>{this.state.res.display_phone}</p>
											</div>
										</li>
										<li style={styles.listItem}>
											<div style={styles.infoProp}>
												<p style={styles.infoLabel}>Price Range (per person): </p>
												<p style={styles.price}>{this.state.res.price}</p>
											</div>
										</li>
										<li style={styles.listItem}>
											<div style={styles.infoProp}>
												<p style={styles.infoLabel}>Website: </p>
												<a style={styles.website} href={this.state.res.url}>{this.state.res.name}</a>
											</div>
										</li>
									</ul>
								</div>
							</div>
						</div>

					<div style={{
						margin: '30px 0px'
					}}>
						<button style={styles.directionsButton} type="button" onClick={this.getDirections}>Get Directions</button>	
					</div>
				</div>
			</section>
			</div>
		)
	}
}

const mapStateToProps = function(appState) {
	return {
		restaurants: appState.restaurants
	}
}

export default connect(mapStateToProps)(Meal)
