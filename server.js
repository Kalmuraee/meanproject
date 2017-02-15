const port = process.env.PORT || '3000';
// Dependecies
const express = require('express');
const path = require('path');
const http = require('http');
const bodyParser = require('body-parser');
// API
const api = require('./server/routes/api');

const app=express();
//Parser for Post
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));


// Static Path
app.use(express.static(path.join(__dirname, 'dist')));


//Set API
app.use('/api',api);

// Default page
app.get('*', function(req,res,next){
res.sendFile(path.join(__dirname,'dist/index.html'))
});

app.set('port',port);


//HTTP Server
const server = http.createServer(app);



// Listen to the port
server.listen(port,function (){ console.log('Running on http://localhost:'+port)});

