import store from '../store'
// import axios from 'axios'
// import api from '../lib/api'

// api.new('http://localhost:3000')
// api.setTokenPath('/login')

// export function login(username, password) {
// 	api.login(username, password, function(){
// 		store.dispatch({
// 			type: 'LOGIN',
// 			username
// 		})
// 	})
// }

// export function addUser(username, password){
// 	api.post('/register').then(function(response){
// 		store.dispatch({
// 			type: 'REGISTER',
// 			username,
// 			password
// 		})
// 	})
// }

export function saveName(username) {
	store.dispatch({
		type: 'SAVE_USERNAME',
		username: username
	})
}

// export function saveReview(review) {
// 	store.dispatch({
// 		type: 'SAVE_REVIEW',
// 		review
// 	})
// }

export function saveReview(review){
	api.post('/review').then(function(response){
		store.dispatch({
			type: 'SAVE_REVIEW',
				review
		})
	})
}