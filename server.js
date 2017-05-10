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
app.post('/proxy', function(req, res){
    var url = req.body.url
    
    request(url, function(err, response, body){
        res.json(body)
    })
})
app.get('/yelpdata', function(req, res){
    //console.log(res, 'server')
    rapid.call('YelpAPI', 'getBusinesses', { 
        'accessToken': 'skhuidCAIIIwvtD_D1REk4esgDo3N3L-9pqZ_w0FGVGomSSCV-c0YjusLZOFLVld207Z_GL0OzwdahWx84k_Vt7zpIRkm3avfbXc4E09EpbohbX4MDv5bBRiHcYEWXYx',
        'term': 'restaurants',
        'location': req.query.location,
        'latitude': '',
        'longitude': '',
        'radius': '',
        'categories': '',
        'locale': '',
        'limit': '',
        'offset': '',
        'sortBy': '',
        'price': '',
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
// app.listen(3001, function(){
//     console.log('Server listening on port 3001')
// })
io.on('connection', function(socket){
    socket.on('addMessage', function(message){
        io.emit('newMessage', message)
    })
})
server.listen(3001, function(){
    console.log('listening on port 3001')
})