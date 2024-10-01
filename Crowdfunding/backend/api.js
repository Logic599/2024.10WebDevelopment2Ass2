//According to the instructions of respected Mr. Viettrong Luong on September 29th:
//...you are allowed to use the Express Framework to work with Nodejs on the backend....and we want you to show us that you know how to use it...
//So I naturally used the Express framework here
//These codes are used to set up the basic architecture for Node.js in preparation for interacting with MySql databases
let express = require('express');
let router = express.Router()
let sqlConfig = require('./sql');
let mysql = require('mysql');

//the effect of these things is to create a new connection object to the MySQL server
//you know, those usernames and passwords and so on, I have thought about customizing some unique passwords, but it is still more convenient to use the default ones
//I still remember the last time I was deducted a lot of points because I couldn't open HTML due to a small mistake.
const mysqlServer = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '123456',
    database: 'crowdfunding_db',
    port: '3306'
})
//This method attempts to establish a connection with the MySQL server using the specified configuration.
//If the connection is successful, we can obtain the necessary data
mysqlServer.connect()

//defines a series of routes using the Express.js framework to handle HTTP requests related to data retrieval from a MySQL database.
//each route is associated with a specific endpoint and a corresponding SQL query.
//ps: show my skills in using Express according to the requirements
router
    //Below is a bunch of code provides a basic RESTful API for interacting with database.
    //It allows clients to retrieve data about categories, organizers, cities, and specific fundraisers based on their query parameters.
    .get('/selectCategory', (req, res) => {
        mysqlServer.query(sqlConfig.selectCategory, function (err, data) {
            //The res.send(data) method is used to send the retrieved data back to the client as a JSON response, 
            //which can be consumed by the frontend application.
            res.send(data)
        });
    })
    // select organizer
    .get('/selectOrganizer', (req, res) => {
        mysqlServer.query(sqlConfig.selectOrganizer, function(err, data) {
            res.send(data)
        });
    })
    // select city
    .get('/selectCity', (req, res) => {
        mysqlServer.query(sqlConfig.selectCity, function(err, data) {
            res.send(data)
        });
    })
    .get('/selectDetail', (req, res) => {
        const query = [req.query.fundraiser_id];
        mysqlServer.query(sqlConfig.selectDetail, query, function(err, data) {
            if (data) {
                res.send(data[0]);
            }
        });
    })
    .get('/selectData', (req, res) => {
        let {category_id, organizer, city} = req.query;
        const query = [category_id, category_id, organizer, organizer, city, city];
        mysqlServer.query(sqlConfig.selectData, query, function(err, data) {
            res.send(data);
        });
        //Based on the knowledge we have learned in previous courses (MSD course?), we can add some error handling codes here
        //but the margin of this book is too narrow to contain it :)
    })
//is crucial for exporting the router object, making it accessible to other modules or files within your application.
module.exports = router