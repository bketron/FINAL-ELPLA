import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addLocations } from '../api/yelpapi'

var actId = 1

const styles = {
	container: {
		padding: '30px',
		backgroundColor: '#082B3F'
	},
	activityContainer: {
		width: '80%',
	},
	topBar: {
		display: 'flex',
		justifyContent: 'space-between'
	},
	lowerSection: {
		display: 'flex'
	},
	lowerInfo: {
		margin: 'auto'
	},
	newButton: {
		outline: 'none',
		border: 'none',
		backgroundColor: '#FF6E00',
		color: '#082B3F',
		fontFamily: 'Montserrat, sans-serif'

	},
	title: {

	},
	imageContainer: {
		width: '50%',
		height: '400px',
		padding: '20px',
		overflow: 'hidden',
		backgroundColor: 'grey'
	},
	image: {
		maxWidth: '50%',
		height: 'auto'
	},
	list: {
		listStyleType: 'none',
		padding: '0px',
		margin: '0px'
	},
	listItem: {

	},
	phone: {

	},
	price: {

	},
	website: {

	}
}

class Activity extends Component {
	constructor(props) {
		super()
		this.state = {
			activities: [],
			act: {},
			location: {}
		}
	}

	componentWillReceiveProps(props) {
		var id = (Math.random() * props.activities.length).toFixed(0)
		this.setState({
			activities: props.activities,
			act: props.activities[id],
			location: props.activities[id].coordinates
		})
	}

	newAct = (e) => {
		e.preventDefault()
		var newId = (Math.random() * this.state.activities.length).toFixed(0)

		this.setState({
			act: this.state.activities[newId],
			location: this.state.activities[newId].coordinates
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
			<div style={styles.container}>
				<div style={styles.activityContainer}>
					<div style={styles.topBar}>
						<p style={styles.title}>{this.state.act.name}</p>
						<button style={styles.newButton} type="button" onClick={this.newAct}>New Activity</button>
					</div>
					<div style={styles.lowerSection}>
						<div style={styles.imageContainer}>
							<img style={styles.image} src={this.state.act.image_url} />
						</div>

						<div style={styles.lowerInfo}>

							<ul style={styles.list}>
								<li style={styles.listItem}>
									<p style={styles.phone}>{this.state.act.display_phone}</p>
								</li>
								<li style={styles.listItem}>
									<p style={styles.price}>{this.state.act.price}</p>
								</li>
								<li style={styles.listItem}>
									<a style={styles.website} href={this.state.act.url}>Website</a>
								</li>
							</ul>
						</div>
					</div>
				</div>

				<div>
					<button type="button" onClick={this.getDirections}>Get Directions</button>
				</div>
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
