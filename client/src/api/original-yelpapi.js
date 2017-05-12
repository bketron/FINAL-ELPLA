import store from '../store'
import axios from 'axios'
import $ from 'jquery'

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

export function generateDate() {
	axios.get(`/yelpstuff?term=restaurants&location=Las+Vegas&price=3`).then(function(response){
		console.log(response.data, 'api')
		store.dispatch({
			type: 'GET_RESTAURANTS',
			info: response.data
		})
	})
};

// export function generateDate(){
//   $.getJSON('https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=-33.8670,151.1957&radius=500&types=food&name=cruise&key=AIzaSyAeb9PVTPjp8tz9SsCQijC7GPeDcASKibA', function(data){
//      console.log('hello', data.results)
//     store.dispatch({

//       type: 'GET_DATA',
//       action: data.results
      
//     })
//   })
// }

// export function generateDate(searchObj) {
// 	var maxPrice = parseInt(searchObj.maxPrice)
// 	var priceRange = ''

// 	if(maxPrice > 0 && maxPrice <= 10){
// 		priceRange = '1'
// 	}
// 	if(maxPrice > 10 && maxPrice <= 30){
// 		priceRange = '2'
// 	}
// 	if(maxPrice > 30 && maxPrice <= 60){
// 		priceRange = '3'
// 	}
// 	if(maxPrice > 60){
// 		priceRange = '4'
// 	}

// 	const mealUrl = `/yelpdata?term=restaurant&location=LasVegas&price=${priceRange}`
// 	const activityUrl = `/yelpdata?term=fun&location=LasVegas&price=${priceRange}`

// 		if (searchObj.dateType === 'meal') {
// 			axios.get(mealUrl).then(function(response){
//         console.log(response.data, searchObj, 'meal')
//         store.dispatch({
//             type: 'GET_RESTAURANT',
//             info: response.data
//       	})
//   		})
// 		} else if (searchObj.dateType === 'entertainment') {
// 			axios.get(activityUrl).then(function(response){
//         console.log(response.data, searchObj, 'activity')
//         store.dispatch({
//             type: 'GET_ACTIVITY',
//             info: response.data
// 	      })
// 	    })
// 		} else {
// 				axios.get(mealUrl).then(function(response){
// 	        console.log(response.data, searchObj, 'meal')
// 	        store.dispatch({
// 	            type: 'GET_RESTAURANT',
// 	            info: response.data
// 	      	})
// 	  		})
// 				axios.get(activityUrl).then(function(response){
// 	        console.log(response.data, searchObj, 'activity')
// 	        store.dispatch({
// 	            type: 'GET_ACTIVITY',
// 	            info: response.data
// 		      })
// 		    })
// 		}

// }

