var path = require('path');
var express = require('express');
var broadcastHub = require('broadcast-hub'); // Use require('broadcast-hub') in your project.

// Create the express app (or skip this if you don't use express)
var app = express();

// Sets up the example app, serves files from the project root
app.use(express.static(__dirname));

// Start the express app
var server = app.listen(8888);

// Pass the http server to broadcastHub
broadcastHub.listen(server, {
    redisHost: 'ec2-54-175-222-130.compute-1.amazonaws.com',
    redisPort: 8769,
	redisAuth: 'h:p62cf26e2f0659c24e40e133858a641bb14b94d124f101182573261bbc254a83d'
});

console.log('Listening on http://localhost:8888/');
