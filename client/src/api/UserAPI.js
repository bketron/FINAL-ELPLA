import store from '../store'
import axios from 'axios'

export function addUser(username, password){
	axios.post('/register').then(function(response){
		store.dispatch({
			type: 'LOGIN'
			info: response.data
		})
	})
}
