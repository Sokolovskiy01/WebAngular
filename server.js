//server-side functions on node.js
var http = require('http')
var url = require('url')
var static = require('node-static')

var httpServer = http.createServer()
var fileServer = new static.Server('./public')

httpServer.on('request',function(request, response) {

    httpServer.listen(8888);
})