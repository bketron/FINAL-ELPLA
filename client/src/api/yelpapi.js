import store from '../store'

export function getRestaurant(searchObj) {
	const url = `/yelpdata?term=${searchObj.term}&location=${searchObj.location}&price=${searchObj.price}`


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