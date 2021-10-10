/* import libraries */
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoDbConnect = require('./dbConnect');

const PORT = 4000;

/*create app and use cors and body parser*/
const app = express();

/*body parser for sending requests properly
request body memory size can not be exceeded 20MB
if extended = false only strings allow in body parser*/
app.use(bodyParser.json({limit: "20mb", extended:true}));
app.use(bodyParser.urlencoded({limit: "20mb", extended:true}));
app.use(cors);

/* create a express server */
app.listen(PORT, () => {
    console.log(`Server created on port ${PORT}`);
});

/* connect to mongo database */
mongoDbConnect.dbConnect();

