import axios from 'axios'
import store from '../store'
import io from 'socket.io-client'

const socket = io.connect('http://localhost:3001')
// const socket = io.connect('http://10.68.0.141:3001')


export function getRestaurants(searchObj) {
	console.log(searchObj.price)
	if(searchObj.price !== ''){
		axios.get('http://localhost:3001/yelpstuff?term=restaurant&location=Las+Vegas&price=' + searchObj.price).then(function(resp){
			console.log(resp.data.businesses)
			store.dispatch({
				type: 'ADD_RESTAURANTS',
				restaurants: resp.data.businesses
			})
		})
	} else {
		axios.get(`http://localhost:3001/yelpstuff?term=restaurant&location=Las+Vegas&price=1,2,3,4`).then(function(resp){	
			console.log(resp.data.businessses)
			store.dispatch({
				type: 'ADD_RESTAURANTS',
				restaurants: resp.data.businesses
			})
		})
	}
}

export function getRestaurant(id) {
	console.log(id)
	axios.get(`http://localhost:3001/yelprest?bussinessId=${id.restId}`).then(function(response){
		store.dispatch({
			type: 'SINGLE_RESTAURANT',
			restaurant: response.data
		})
	})
}

export function getActivities(searchObj) {
	console.log(searchObj.price)
	if(searchObj.price !== ''){
		axios.get('http://localhost:3001/yelpstuff?term=fun&location=Las+Vegas&price=' + searchObj.price).then(function(resp){
			console.log(resp.data.businesses)
			store.dispatch({
				type: 'ADD_ACTIVITIES',
				activities: resp.data.businesses
			})
		})
	} else {
		axios.get(`/yelpstuff?term=fun&location=Las+Vegas&price=1,2,3,4`).then(function(resp){	
			console.log(resp.data.businessses)
			store.dispatch({
				type: 'ADD_ACTIVITIES',
				activities: resp.data.businesses
			})
		})
	}
}

export function addLocations(stops) {
	store.dispatch({
		type: 'ADD_LOCATIONS',
		stops
	})
}