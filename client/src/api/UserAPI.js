import store from '../store'
import axios from 'axios'
import api from '../lib/api'

api.new('http://localhost:3000')
api.setTokenPath('/login')

export function login(username, password) {
	api.login(username, password, function(){
		store.dispatch({
			type: 'LOGIN'
			username
		})
	})
}

export function addUser(username, password){
	axios.post('/register').then(function(response){
		store.dispatch({
			type: 'LOGIN'
			username,
			password,
		})
	})
}
