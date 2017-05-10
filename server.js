const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const server = require('http').createServer(app)
const io = require('socket.io')(server)
const request = require('request')
const RapidAPI = require('rapidapi-connect');
const rapid = new RapidAPI("Datenightrandomizer", "ecf01253-e862-4634-9484-41435ba1f574");
app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
})); 
// app.get("*", function(req, res){
//     res.sendfile(__dirname + '/client/public/index.html')
// })
// app.get("/api", function(req, res){
//     res.json({
//         "foo":"bar"
//     })
// })



function getPriceType(price) {
	if (price <= 10) {
		return 1
	} else if (price >= 11 && price <= 30) {
		return 1,2
	} else if (price >= 31 && price <= 60) {
		return 1,2,3
	}	else if (price >= 61) {
		return 1,2,3,4
	} 
} 

// getPriceType(req.query.maxPrice),



app.post('/proxy', function(req, res){
    var url = req.body.url
    
    request(url, function(err, response, body){
        res.json(body)
    })
})
app.get('/yelpdata', function(req, res){
    //console.log(res, 'server')

    var location =  'las vegas' || req.query.location

    // function locCheck()){
		  // if (req.query.location !== 'undefined'){
		  // 	return req.query.location
		  // } else {
		  // 	return 'las vegas'
		  // }
    // }


    rapid.call('YelpAPI', 'getBusinesses', { 
        'accessToken': 'skhuidCAIIIwvtD_D1REk4esgDo3N3L-9pqZ_w0FGVGomSSCV-c0YjusLZOFLVld207Z_GL0OzwdahWx84k_Vt7zpIRkm3avfbXc4E09EpbohbX4MDv5bBRiHcYEWXYx',
        'term': req.query.term,
        'location': location,
        'latitude': '',
        'longitude': '',
        'radius': '25000',
        'categories': '',
        'locale': '',
        'limit': '50',
        'offset': '',
        'sortBy': '',
        'price': getPriceType(req.query.price),
        'openNow': '',
        'openAt': '',
        'attributes': ''
     
    }).on('success', (payload)=>{
         res.send(payload); 
    }).on('error', (payload)=>{
         res.send(payload); 
    });
})


app.get('/yelpbusiness', function(req, res){
	rapid.call('/YelpAPI', 'getSingleBusiness', { 
		'accessToken': 'skhuidCAIIIwvtD_D1REk4esgDo3N3L-9pqZ_w0FGVGomSSCV-c0YjusLZOFLVld207Z_GL0OzwdahWx84k_Vt7zpIRkm3avfbXc4E09EpbohbX4MDv5bBRiHcYEWXYx',
		'businessId': req.query.businessId
	 
	}).on('success', (payload)=>{
		 res.send(payload);
	}).on('error', (payload)=>{
		 res.send(payload);
	})
})

    // rapid.call('YelpAPI', 'getBusinesses', {
    // 'accessToken': 'skhuidCAIIIwvtD_D1REk4esgDo3N3L-9pqZ_w0FGVGomSSCV-c0YjusLZOFLVld207Z_GL0OzwdahWx84k_Vt7zpIRkm3avfbXc4E09EpbohbX4MDv5bBRiHcYEWXYx',
    // 'term': req.query.term,
    // 'location': req.query.location,
    // 'latitude': '',
    // 'longitude': '',
    // 'radius': '8046',
    // 'categories': '',
    // 'locale': '',
    // 'limit': '',
    // 'offset': '',
    // 'sortBy': '',
    // 'price': req.query.price,
    // 'openNow': 'true',
    // 'openAt': '',
    // 'attributes': ''
    // }).on('success', (payload)=>{
    //      res.json(payload)
    // }).on('error', (payload)=>{
    //      res.json({
    //          error:true
    //      })
    // })
// }),
// - example code, do not use -
// app.get('/restaurant/:id', function(req, res){
//  var id = req.query.id
//  rapid.call('YelpAPI', 'getSingleBusiness', { 
//      'accessToken': 'skhuidCAIIIwvtD_D1REk4esgDo3N3L-9pqZ_w0FGVGomSSCV-c0YjusLZOFLVld207Z_GL0OzwdahWx84k_Vt7zpIRkm3avfbXc4E09EpbohbX4MDv5bBRiHcYEWXYx',
//      'bussinessId': id
     
//  }).on('success', (payload)=>{
//       /*YOUR CODE GOES HERE*/ 
//       res.json(payload)
//  }).on('error', (payload)=>{
//       /*YOUR CODE GOES HERE*/ 
//  });
// })
io.on('connection', function(socket){
    socket.on('addMessage', function(message){
        io.emit('newMessage', message)
    })
})
server.listen(3001, function(){
    console.log('listening on port 3001')
})