import React, { Component } from 'react'
import { connect } from 'react-redux'


var resId = 1

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

class Meal extends Component {
	constructor(props) {
		super()
		this.state = {
			restaurants: [],
			res: {},
			location: {}
		}
	}

	componentWillReceiveProps(props) {
		console.log(props)
		var id = (Math.random() * props.restaurants.length).toFixed(0)
		this.setState({
			restaurants: props.restaurants,
			res: props.restaurants[id],
			location: props.restaurants[id].coordinates
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

	render() {
		console.log(this.state)
		console.log(this.state.location)
		return (
			<div style={styles.container}>
				<div style={styles.activityContainer}>
					<div style={styles.topBar}>
						<p style={styles.title}>{this.state.res.name}</p>
						<button style={styles.newButton} type="button" onClick={this.newRes}>New Activity</button>
					</div>
					<div style={styles.lowerSection}>
						<img style={styles.image} src={this.state.res.image_url} />

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

				<div>
					<button type="button" onClick={this.getDirections}>Get Directions</button>
				</div>
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
