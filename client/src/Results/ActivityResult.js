import React, { Component } from 'react'
import { connect } from 'react-redux'


var actId = 1

const styles = {
	container: {
		padding: '30px'
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
		color: '#0B3954'

	},
	title: {

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
						<img style={styles.image} src={this.state.act.image_url} />

						<div style={styles.lowerInfo}>
<iframe
							  width="600"
							  height="450"
							  frameborder="0"
							  src={`https://www.google.com/maps/embed/v1/directions
									?key=AIzaSyDF64L_QOvF-0_cQ_goyyaMpBt_sVfcHMw
									&origin=The+Iron+Yard,Las+Vegas,NV
									&destination=${this.state.location.latitude},${this.state.location.longitude}
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
