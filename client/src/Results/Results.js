import React, { Component } from 'react'
import { connect } from 'react-redux'

class Results extends Component {
	constructor(props) {
		super()
		this.state = {
			restaurants: [],
			res: {},
			resId: 1
		}
	}

	componentWillReceiveProps(props) {
		this.setState({
			restaurants: props.restaurants,
			res: props.restaurants[this.state.resId]
		})
	}

	render() {
		return (
			<span>hi</span>
		)
	}
}

const mapStateToProps = function(appState) {
	return {
		restaurants: appState.restaurants
	}
}

export default connect(mapStateToProps)(Results)

