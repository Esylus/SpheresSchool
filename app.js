const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const nodemailer = require('nodemailer');



const app = express();
const port = 3000;
const send = require('./routes/send');  // subrouter ADD ME


app.use(bodyParser.json());
app.use(cors());

//set static folder to place front-end app in 
app.use(express.static(path.join(__dirname, 'public'))); 

app.get('/', function (req, res) {
    res.send('Invalid Enpoint');
});

app.use('/send', send);     // subrouter ADD ME

// Handling these redirects in Angular but below redirect worked as well

app.get('/*', function (req, res, next) {
    res.sendFile('public/index.html', {root: __dirname });
});

app.listen(port, function(){
    console.log('Server started on port ' + port);
});