// import libraries
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoDbConnect = require('./dbConnect');
// routes
const studentRoute = require('./routes/student');


const PORT = 4000;

// create app and use cors and body parser
const app = express();
app.use(cors());
app.use(express.json());

/*body parser for sending requests properly
request body memory size can not be exceeded 20MB
if extended = false only strings allow in body parser*/
app.use(bodyParser.json({limit: "20mb", extended:true}));
app.use(bodyParser.urlencoded({limit: "20mb", extended:true}));

// create a express server
app.listen(PORT, () => {
    console.log(`Server created on port ${PORT}`);
});

// connect to mongo database
mongoDbConnect.dbConnect();


app.use('/students', studentRoute);
