const express = require('express')
const bodyParser = require('body-parser')
const app = require('express')()
const server = require('http').createServer(app);
const io = require('socket.io')(server);
const cors = require('cors')
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

app.post('/register', function(req, res){
    var query 'INSERT INTO reviews (review) VALUES (?)'

    connection.query(query, [req.body.rewiew], function(err, results){
        res.json({
            'message': 'Thank you for your review'
        })
    })
})

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



app.use(cors())


app.get("*", function(req, res){
    res.sendfile(__dirname + '/client/public/index.html')
})


app.get('/yelpstuff', function(req, res){
	//console.log(res, 'server')
	rapid.call('YelpAPI', 'getBusinesses', { 
	'accessToken': 'SL6alfUTxepXGG38qBlJoVlmTKkhG4H2g07wQ8myZTngUdlIoOdqkaJ1eu2CzbN5KvaqDpgjO9tQfmwJqSQNqJcHCvktf_qryrHb9g5Q9pPWP16BsNc_-L2vPQIIWXYx',
	'term': req.query.term,
	'location': req.query.location,
	'latitude': '',
	'longitude': '',
	'radius': '8046',
	'categories': '',
	'locale': '',
	'limit': '',
	'offset': '',
	'sortBy': '',
	'price': req.query.price,
	'openNow': 'true',
	'openAt': '',
	'attributes': ''
 
	}).on('success', (payload)=>{
		 res.json(payload)
	}).on('error', (payload)=>{
		 res.json({
		 	error:true
		 })
	})
}),

io.on('connection', function(socket){

})


app.get('/yelprest', function(req, res){
	//console.log(res, 'server')
	rapid.call('YelpAPI', 'getSingleBusiness', { 
		'accessToken': 'SL6alfUTxepXGG38qBlJoVlmTKkhG4H2g07wQ8myZTngUdlIoOdqkaJ1eu2CzbN5KvaqDpgjO9tQfmwJqSQNqJcHCvktf_qryrHb9g5Q9pPWP16BsNc_-L2vPQIIWXYx',
		'bussinessId': req.query.bussinessId
	 
		}).on('success', (payload)=>{
			 res.json(payload)
		}).on('error', (payload)=>{
		res.json({
		 	error:true
		})		 
	})
})

server.listen(3001, function(){
	console.log('Server listening on port 3001')
})



