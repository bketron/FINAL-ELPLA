import axios from 'axios'
import store from '../store'


export function getRestaurants(searchObj) {
	axios.get(`/yelpstuff?term=restaurant&location=Las+Vegas&price=1`).then(function(response){
		console.log(response.data, searchObj, 'api')
		store.dispatch({
			type: 'GET_RESTAURANTS',
			info: response.data
		})
	})
}

export function getRestaurant(id) {
	//console.log(id, 'b')
	axios.get(`/yelprest?bussinessId=${id.restId}`).then(function(response){
		//console.log(response.data, id, 'api')
		store.dispatch({
			type: 'GET_RESTAURANT',
			restInfo: response.data
		})
	})
}