import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addLocations } from '../api/yelpapi'
import { Link } from 'react-router-dom'

import TopBar from '../HomePage/TopBar'
import RefreshIndicator from 'material-ui/RefreshIndicator'

const styles = {
	main: {
		height: '100vh',
		width: '100vw',
		backgroundColor: 'rgb(221,221,221)'
	},
	container: {
		padding: '100px',
		backgroundColor: 'rgb(221,221,221)'
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
	bottomSection: {
		marginTop: '40px'
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

class Activity extends Component {
	constructor(props) {
		super()
		this.state = {
			activities: [],
			act: {},
			location: {},
			status: 'loading',
			loaded: 'none',
			loadDisp: 'block'
		}
	}

	componentWillReceiveProps(props) {
		console.log(props)
		var id = (Math.random() * props.activities.length).toFixed(0)
		this.setState({
			activities: props.activities,
			act: props.activities[id],
			location: props.activities[id].coordinates,
			status: 'hide',
			loaded: 'block',
			loadDisp: 'none'
		})
	}

	newAct = (e) => {
		e.preventDefault()
		var newId = (Math.random() * this.state.activities.length).toFixed(0)

		this.setState({
			act: this.state.activities[newId],
			location: this.state.activities[newId].coordinates,
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

	render() {
		console.log(this.state)
		console.log(this.state.location)
		return (
			<div style={styles.main} >
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
					<div >
						<div style={styles.topBar}>
							<button style={styles.newButton} type="button" onClick={this.newAct}>x</button>
						</div>
						<div style={styles.lowerSection}>
							<div style={styles.imageContainer}>
								<img style={styles.image} src={this.state.act.image_url} alt="cover"/>
							</div>

							<div style={styles.infoContainer}>
								<ul style={styles.list}>
									<li style={styles.listItem}>
										<p style={styles.title}>{this.state.act.name}</p>
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

												<span>{this.state.act.review_count} </span>
												 Reviews
											</p>
										</div>
									</li>
									<li style={styles.listItem}>
										<div style={styles.infoProp}>
											<p style={styles.infoLabel}>Phone Number: </p>
											<p style={styles.phone}>{this.state.act.display_phone}</p>
										</div>
									</li>
									<li style={styles.listItem}>
										<div style={styles.infoProp}>
											<p style={styles.infoLabel}>Price Range (per person): </p>
											<p style={styles.price}>{this.state.act.price}</p>
										</div>
									</li>
									<li style={styles.listItem}>
										<div style={styles.infoProp}>
											<p style={styles.infoLabel}>Website: </p>
											<a style={styles.website} href={this.state.act.url}>{this.state.act.name}</a>
										</div>
									</li>
								</ul>
							</div>
						</div>
					</div>

					<div style={{
						margin: '30px 0px 0px',
						display: this.state.loaded
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
		activities: appState.activities
	}
}

export default connect(mapStateToProps)(Activity)