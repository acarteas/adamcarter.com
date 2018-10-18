// server.js

//tutorials:
//express: https://scotch.io/tutorials/build-a-restful-api-using-node-and-express-4 
//sqlite3: http://www.sqlitetutorial.net/sqlite-nodejs/

// BASE SETUP
// =============================================================================

// call the packages we need
var express    = require('express');        // call express
var app        = express();                 // define our app using express
var bodyParser = require('body-parser');
const sqlite3 = require('sqlite3').verbose();

// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = process.env.PORT || 8080;        // set our port

//set up DB
let db = new sqlite3.Database('./adamcarter_com_db.db3', sqlite3.OPEN_READWRITE, (err) => {
   if (err) {
     console.error(err.message);
   }
 });

 //Allow CORS from react
 app.use((req, res, next) => {
   const origin = req.get('origin');
 
   // TODO Add origin validation
   res.header('Access-Control-Allow-Origin', origin);
   res.header('Access-Control-Allow-Credentials', true);
   res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
   res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization, Cache-Control, Pragma');
 
   // intercept OPTIONS method
   if (req.method === 'OPTIONS') {
     res.sendStatus(204);
   } else {
     next();
   }
 });

// ROUTES FOR OUR API
// =============================================================================
var router = express.Router();              // get an instance of the express Router

// test route to make sure everything is working (accessed at GET http://localhost:8080/api)
router.get('/', function(req, res) {
    res.json({ message: 'hooray! welcome to our api!' });   
});

router.get('/fields/:id', (req, res) =>{
   let sql = "SELECT * FROM fields WHERE field_name = ?";
   let result = db.get(sql, [req.params.id], (err, row) => {
      res.json({response: row});
   });
});

router.get('/education', (req, res) =>{
   let sql = "SELECT * FROM education ORDER BY graduation_year DESC";
   let result = db.all(sql, [], (err, rows) => {
      res.json({response: rows});
   });
});

router.get('/expertise', (req, res) =>{
   let sql = "SELECT * FROM expertise ORDER BY rating DESC";
   let result = db.all(sql, [], (err, rows) => {
      res.json({response: rows});
   });
});

router.get('/work_history', (req, res) =>{
   let sql = "SELECT * FROM work_history ORDER BY start_date DESC";
   let result = db.all(sql, [], (err, rows) => {
      res.json({response: rows});
   });
});

// more routes for our API will happen here

// REGISTER OUR ROUTES -------------------------------
// all of our routes will be prefixed with /api
app.use('/api', router);

// START THE SERVER
// =============================================================================
app.listen(port);
console.log('Magic happens on port ' + port);

