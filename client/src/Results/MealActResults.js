import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addLocation } from '../api/yelpapi'

const styles = {
	resImage: {

	}
}

var resId = 1
var actId = 1

class Results extends Component {
	constructor(props) {
		super()
		this.state = {
			restaurants: [],
			res: {},
			resAddress: '',
			resLocation: {},
			activities: [],
			act: {},
			actAddress: '',
			actLocation: {}
		}
	}

	componentWillReceiveProps(props) {
		var resId = (Math.random() * props.restaurants.length).toFixed(0)
		var actId = (Math.random() * props.activities.length).toFixed(0)

		this.setState({
			restaurants: props.restaurants,
			res: props.restaurants[resId],
			resLocation: props.restaurants[resId].coordinates,
			activities: props.activities,
			act: props.activities[actId],
			actLocation: props.activities[actId].coordinates
		})

		console.log((Math.random() * props.restaurants.length).toFixed(0))
	}

	newAct = (e) => {
		e.preventDefault()
		var newId = (Math.random() * this.state.activities.length).toFixed(0)

		this.setState({
			act: this.state.activities[newId],
			actLocation: this.state.activities[newId].coordinates
		})

		console.log(this.state)
	}

	newRes = (e) => {
		e.preventDefault()
		var newId = (Math.random() * this.state.restaurants.length).toFixed(0)

		this.setState({
			res: this.state.restaurants[newId],
			resLocation: this.state.restaurants[newId].coordinates
		})

		console.log(this.state)
	}

	getDirections = (e) => {
		e.preventDefault()
		
		addLocation({
			latitude: this.state.resLocation.latitude,
			longitude: this.state.resLocation.longitude
		})

		console.log(this.state.resLocation.latitude)
		console.log(this.state.resLocation.longitude)

		this.props.history.push('/directions')
	}

	render() {
		console.log(this.state.act)
		console.log(this.state.res)
		return (
			<div style={styles.container}>
				<div style={styles.activityContainer}>
					<div style={styles.topBar}>
						<p style={styles.title}>{this.state.act.name}</p>
						<button style={styles.newButton} type="button" onClick={this.newAct}>New Activity</button>
					</div>
					<div style={styles.lowerSection}>
						<img style={styles.image} src={this.state.act.image_url} />

						<div style={styles.lowerInfo}>
							<iframe
							  width="600"
							  height="450"
							  frameborder="0"
							  src={`https://www.google.com/maps/embed/v1/directions
									?key=AIzaSyDF64L_QOvF-0_cQ_goyyaMpBt_sVfcHMw
									&origin=The+Iron+Yard,Las+Vegas,NV
									&destination=${this.state.actLocation.latitude},${this.state.actLocation.longitude}
  									&avoid=tolls`} allowfullscreen>
							</iframe>
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

				<div style={styles.activityContainer}>
					<div style={styles.topBar}>
						<p style={styles.title}>{this.state.res.name}</p>
						<button style={styles.newButton} type="button" onClick={this.newRes}>New Activity</button>
					</div>
					<div style={styles.lowerSection}>
						<img style={styles.image} src={this.state.res.image_url} />

						<div style={styles.lowerInfo}>
							<iframe
							  width="600"
							  height="450"
							  frameborder="0"
							  src={`https://www.google.com/maps/embed/v1/directions
									?key=AIzaSyDF64L_QOvF-0_cQ_goyyaMpBt_sVfcHMw
									&origin=The+Iron+Yard,Las+Vegas,NV
									&destination=${this.state.resLocation.latitude},${this.state.resLocation.longitude}
  									&avoid=tolls`} allowfullscreen>
							</iframe>

							<ul style={styles.list}>
								<li style={styles.listItem}>
									<p style={styles.phone}>{this.state.res.display_phone}</p>
								</li>
								<li style={styles.listItem}>
									<p style={styles.price}>{this.state.res.price}</p>
								</li>
								<li style={styles.listItem}>
									<a style={styles.website} href={this.state.res.url}>Website</a>
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
		restaurants: appState.restaurants,
		activities: appState.activities
	}
}

export default connect(mapStateToProps)(Results)

