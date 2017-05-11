import store from '../store'
import axios from 'axios'

export function getRestaurant(searchObj) {
	const url = `/yelpdata?term=restaurant&location=${searchObj.location}&price=${searchObj.maxPrice}`


    axios.get(url).then(function(response){
        console.log(response.data, searchObj, 'api')
        store.dispatch({
            type: 'GET_RESTAURANT',
            info: response.data
        })
    })
}

export function getOneRestaurant(searchObj) {
	const url = `/yelpbusiness?businessId=${searchObj.businessId}`


    axios.get(url).then(function(response){
        console.log(response.data, searchObj, 'api')
        store.dispatch({
            type: 'GET_ONE_RESTAURANT',
            info: response.data
        })
    })
}

export function generateDate(searchObj) {
	const mealUrl = `/yelpdata?term=restaurant&location=${searchObj.location}&price=${searchObj.maxPrice}`
	const activityUrl = `/yelpdata?term=fun&location=${searchObj.location}&price=${searchObj.maxPrice}`


		if (searchObj.dateType === 'meal') {
			axios.get(mealUrl).then(function(response){
        console.log(response.data, searchObj, 'meal')
        store.dispatch({
            type: 'GET_RESTAURANT',
            info: response.data
      	})
  		})
		} else if (searchObj.dateType === 'entertainment') {
			axios.get(activityUrl).then(function(response){
        console.log(response.data, searchObj, 'activity')
        store.dispatch({
            type: 'GET_ACTIVITY',
            info: response.data
	      })
	    })
		} else {
				axios.get(mealUrl).then(function(response){
	        console.log(response.data, searchObj, 'meal')
	        store.dispatch({
	            type: 'GET_RESTAURANT',
	            info: response.data
	      	})
	  		})
				axios.get(activityUrl).then(function(response){
	        console.log(response.data, searchObj, 'activity')
	        store.dispatch({
	            type: 'GET_ACTIVITY',
	            info: response.data
		      })
		    })
		}

}

