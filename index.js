/* import libraries */
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');

/*create app and use cors and body parser*/
const app = express();
app.use(cors);
app.use(bodyParser);

/*body parser for sending requests properly
request body memory size can not be exceeded 20MB
if extended = false only strings allow in body parser*/
app.use(bodyParser.json({limit: "20mb", extended:true}));
app.use(bodyParser.urlencoded({limit: "20mb", extended:true}));

const CONNECTION_URL = 'mongodb+srv://admin:admin123@cluster0.n0uvi.mongodb.net/studentsdb?retryWrites=true&w=majority'
const PORT = process.env.PORT || 5002;
/* connecto mongo db and create a server */
mongoose.connect(CONNECTION_URL, 
{
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(()=> {
    app.listen(PORT, () => {
        console.log(`Connection established and running on port : ${PORT}`);
    })
}).catch(
    (err) => console.log(err)
);

/* to avoid warnings in the console */
mongoose.set('useFindAndModify', false);