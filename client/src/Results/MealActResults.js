import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addLocations } from '../api/yelpapi'

import TopBar from '../HomePage/TopBar'
import RefreshIndicator from 'material-ui/RefreshIndicator'

const styles = {
	main: {
		width: '100vw',
		height: '100vh',
		backgroundColor: 'rgb(221,221,221)',
		overflow: 'hidden',
		overflowX: 'hidden'
	},
	resImage: {

	}
}

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
			actLocation: {},
			status: 'loading',
			loaded: 'none',
			loadDisp: 'block'
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
			actLocation: props.activities[actId].coordinates,
			status: 'hide',
			loaded: 'block',
			loadDisp: 'none'
		})

		styles.main.height = 'auto'
		styles.main.overflow = 'initial'

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
		console.log(this.state.act)
		console.log(this.state.res)
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
					<div style={styles.activityContainer}>
						<div style={styles.topBar}>
							<p style={styles.title}>{this.state.act.name}</p>
							<button style={styles.newButton} type="button" onClick={this.newAct}>New Activity</button>
						</div>
						<div style={styles.lowerSection}>
							<img style={styles.image} src={this.state.act.image_url} alt="activity cover"/>

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

					<div style={styles.activityContainer}>
						<div style={styles.topBar}>
							<p style={styles.title}>{this.state.res.name}</p>
							<button style={styles.newButton} type="button" onClick={this.newRes}>New Activity</button>
						</div>
						<div style={styles.lowerSection}>
							<img style={styles.image} src={this.state.res.image_url} alt="restaurant cover"/>

							<div style={styles.lowerInfo}>

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

					<div style={{
						margin: '30px 0px 0px'
					}}>
						<button type="button" onClick={this.getDirections}>Get Directions</button>
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

export default connect(mapStateToProps)(Results)

