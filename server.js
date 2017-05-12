const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const server = require('http').createServer(app)
const io = require('socket.io')(server)
const request = require('request')
const RapidAPI = require('rapidapi-connect')
const rapid = new RapidAPI("Datenightrandomizer", "ecf01253-e862-4634-9484-41435ba1f574")
const uuid = require('uuid')
const sha1 = require('sha1')
const mysql      = require('mysql');
const connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'elPlaAdmin',
  password : 'Fin@lPr0ject',
  database : 'elPla'
})

connection.connect()

app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
})); 

// ==============================Login Stuff====================================================
// app.post('/login', function(req, res){
//     var query = 'SELECT * FROM users WHERE username=? AND password=?'

//     connection.query(query, [req.body.username, sha1(req.body.password)], function(err, results){      
//         if (results.length > 0) {

//             const token = uuid()

//             var tokenSQL = "UPDATE users SET token = ? WHERE id = " + results[0].id

//             connection.query(tokenSQL, [token], function(err, updaters){
//                 res.json({
//                     message: 'login sucessful',
//                     token: token
//                 })
//             })
//         } else {
//             res.status(401).json({
//                 'message':"Wrong username or password"
//             })
//         }
//     })
// })



// app.post('/register', function(req, res){
//     var query 'INSERT INTO users (username, password) VALUES (?, ?)'

//     connection.query(query, [req.body.username, sha1(req.body.password)], function(err, results){
//         res.json({
//             'message': 'User Added'
//         })
//     })
// })

// function isAuthenticated(req, res, next) {
//     const token = req.get('Authoization')

//     if (!token) {
//         res.status(401).json({
//             message:'Not Authenticated'
//         })
//     } else {
//         var tokenSQL = 'SELECT count(1) AS count FROM users WHERE token = ?'

//         connection.query(tokenSQL, [token], function(err, results){
//             const count = results[0].count

//             if (count === 1) {
//                 next()
//             } else {
//                 res.status(401).json({
//                     message:'Not Authenticated'
//                 })
//             }
//         })
//     }
// }

// ======================================================================================================

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


io.on('connection', function(socket){
    socket.on('addMessage', function(message){
        io.emit('newMessage', message)
    })
})
server.listen(3001, function(){
    console.log('listening on port 3001')
})