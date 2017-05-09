export function getRestaurants(searchObj) {
    axios.get(`/yelpdata?term=${searchObj.term}&location=${searchObj.location}&price=${searchObj.price}`).then(function(response){
        console.log(response.data, searchObj, 'api')
        store.dispatch({
            type: 'GET_RESTAURANT',
            info: response.data
        })
    })
}