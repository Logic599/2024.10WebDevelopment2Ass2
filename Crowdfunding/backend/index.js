//In summary, the code here is to use the Express framework to build a Node.js web server and integrate it with the database API (i.e. our API.js).
//The function of this server is to process HTTP requests and interact with the database to perform various operations required by the user.
const express = require('express');
// import cors request
const cors = require('cors');
//It is worth mentioning that bodyParser is a very commonly used express middleware,which parses incoming request bodies, 
//making it easier to extract data from POST and PUT requests.
const bodyParser = require('body-parser');
// import db api
const dbApi = require('./api');

//This thing creates a new instance of the Express application. 
//and this object will handle incoming HTTP requests and route them to the appropriate handler.
const serverApp = express();

//Configure various middleware to ensure the normal operation of the server
serverApp.use(bodyParser.json())
serverApp.use(bodyParser.urlencoded({ extended: false }));
serverApp.use(cors());
// use db api
serverApp.use('/api', dbApi);

// start port 3000
serverApp.listen(3000);

//starts the Express server listening on port 3000. This means that the server will be accessible at http://localhost:3000.
//Then we can use Postman to query the data
console.log('This thing seems to be glowing! Start port：3000');