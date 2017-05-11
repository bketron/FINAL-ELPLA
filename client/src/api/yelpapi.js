import axios from 'axios'
import store from '../store'


export function getRestaurants(searchObj) {
	axios.get(`/yelpstuff?term=restaurant&location=Las+Vegas&price=1`).then(function(response){
		console.log(response.data.businesses, 'api')
		store.dispatch({
			type: 'ADD_RESTAURANTS',
			restaurants: response.data.businesses
		})
	})
}

export function getRestaurant(id) {
	console.log(id)
	axios.get(`/yelprest?bussinessId=${id.restId}`).then(function(response){
		store.dispatch({
			type: 'SINGLE_RESTAURANT',
			restaurant: response.data
		})
	})
}