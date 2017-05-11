import React, { Component } from 'react'
import { connect } from 'react-redux'

var resId = 1

class Meal extends Component {
	constructor(props) {
		super()
		this.state = {
			restaurants: [],
			res: {}
		}
	}

	componentWillReceiveProps(props) {
		this.setState({
			restaurants: props.restaurants,
			res: props.restaurants[(Math.random() * props.restaurants.length).toFixed(0)]
		})
	}

	newRes = (e) => {
		e.preventDefault()
		resId += 1

		this.setState({
			res: this.state.restaurants[(Math.random() * this.state.restaurants.length).toFixed(0)]
		})

		console.log(this.state)
	}

	render() {
		console.log(this.state.act)
		return (
			<div>
				<div>
					<button type="button" onClick={this.newRes}>New Restaurant</button>
					<p>{this.state.res.name}</p>
					<img src={this.state.res.image_url} />
					<ul>
						<li>
							<p>{this.state.res.display_phone}</p>
						</li>
						<li>
							<p>{this.state.res.price}</p>
						</li>
						<li>
							<p>{this.state.res.url}</p>
						</li>

					</ul>
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