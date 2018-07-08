var express = require('express'),
    app = express(),
    port = 4000,
    mongoose = require('mongoose'),
    User = require('./models/userModel'),
    bodyParser = require('body-parser');
var cors = require('cors');

// mongoose instance connection url connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/housessoldeasily');

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(cors());

var routes = require('./routes/userRoute'); //importing route
routes(app); //register the route

app.listen(port);


console.log('API server started on: ' + port);
