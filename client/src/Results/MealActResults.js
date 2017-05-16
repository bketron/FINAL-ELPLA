import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addLocations } from '../api/yelpapi'
import { Link } from 'react-router-dom'
import TopBar from '../HomePage/TopBar'

const styles = {
	image: {
		width:400,
		height:300
	},
	container: {
		display:'flex',
		backgroundColor:'rgb(8,43,63)',
		height:600
	},
	left: {
		paddingRight:150,
    	paddingLeft:150
	},
	title: {
		color:'white',
		fontSize:20,
		borderBottom:'3px solid #ff6E00',
		textAlign:'center'
	},
	list: {
		listStyle:'none',
		color:'rgb(104,121,131)',
	},
	phone: {
		marginLeft:20
	},
	phone1: {
		marginLeft:20
	},
	box: {
		backgroundColor:'white',
    	borderRadius:11,
    	listStyle:'none',
    	height:120,
    	marginTop:30
	},
	flex1: {
		display:'flex',
		margin:-20
	},
	flex2: {
		display:'flex'
	},
	flex3: {
		display:'flex'
	},
	website: {
		marginTop:0,
    	marginRight:10,
    	textDecoration:'none',
    	color:'black'
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
		marginBottom:-10,
		marginRight:40
	},
	faveButton: {
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
	price: {
		marginRight:5
	},
	regen: {
		border: 'none',
		outline: 'none',
		height: '25px',
		backgroundColor: '#FF6E00',
		color: '#0B3954',
		fontSize: '14px',
		fontWeight: 'bold',
		borderRadius:5
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
		<div>
		<TopBar />
		<div style={styles.container}>
			<div style={styles.container}>
				<div style={styles.left}>
					<div style={styles.topBar}>
						<p style={styles.title}>{this.state.act.name}</p>
						<button style={styles.regen} type="button" onClick={this.newAct}>Re-Generate</button>
					</div>
					<div style={styles.lowerSection}>
						<img style={styles.image} src={this.state.act.image_url} />

						<div style={styles.lowerInfo}>
							<ul style={styles.box}>
								<li style={styles.listItem}>
								  <div style={styles.flex1}>
									<p style={styles.phone}>Phone number: </p>
									<p style={styles.phone1}>{this.state.act.display_phone}</p>
								  </div>
								</li>
								<li style={styles.flex3}>
									<p style={styles.price}>Price Range (per person):</p>
									<p>{this.state.act.price}</p>
								</li>
								<li style={styles.listItem}>
									<div style={styles.flex2}>
										<p style={styles.website}>Website: </p>
										<a style={styles.website} href={this.state.act.url}>{this.state.act.name}</a>
									</div>
								</li>
							</ul>
							<button style={styles.directionsButton} type="button" onClick={this.getDirections}>Get Directions</button>	
							<Link to={'/favorites/'}>
            					<button style={styles.faveButton}>Add to Favorites</button>
            				</Link>
						</div>
					</div>
				</div>

				<div style={styles.activityContainer}>
					<div style={styles.topBar}>
						<p style={styles.title}>{this.state.res.name}</p>
						<button style={styles.regen} type="button" onClick={this.newRes}>Re-Generate</button>
					</div>
					<div style={styles.lowerSection}>
						<img style={styles.image} src={this.state.res.image_url} />

						<div style={styles.lowerInfo}>

							<ul style={styles.box}>
								<li style={styles.listItem}>
								  <div style={styles.flex1}>
									<p style={styles.phone}>Phone number: </p>
									<p style={styles.phone1}>{this.state.res.display_phone}</p>
								  </div>
								</li>
								<li style={styles.flex3}>
									<p style={styles.price}>Price Range (per person):</p>
									<p>{this.state.res.price}</p>
								</li>
								<li style={styles.listItem}>
									<div style={styles.flex2}>
										<p style={styles.website}>Website: </p>
										<a style={styles.website} href={this.state.res.url}>{this.state.res.name}</a>
									</div>
								</li>
							</ul>
							<button style={styles.directionsButton} type="button" onClick={this.getDirections}>Get Directions</button>	
							<Link to={'/favorites/'}>
            					<button style={styles.faveButton}>Add to Favorites</button>
            				</Link>
						</div>
					</div>
				</div>

				<div style={{
					margin: '30px 0px'
				}}>
				</div>
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

