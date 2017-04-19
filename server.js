
var http = require('http');

var portGood = 7000;
var portBad = 7500;


function serverResponseGood(request, response){
	// Do Something Here
	response.end('it worked singh for GOOD!! Path hit:'+request.url);
}

var serverGood = http.createServer(serverResponseGood);

serverGood.listen(portGood, function(){
	// Do something when we start
	console.log('server started!! Listening on: http://localhost:'+portGood);
});


function serverResponseBad(request, response){
	// Do Something Here
	response.end('it worked singh for BAD!! Path hit:'+request.url);
}

var serverBad = http.createServer(serverResponseBad);

serverBad.listen(portGood, function(){
	// Do something when we start
	console.log('server started!! Listening on: http://localhost:'+portBad);
});
