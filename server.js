//server-side functions on node.js
//this .js file won't see anyone
var http = require('http')
var url = require('url')
var static = require('node-static')

var httpServer = http.createServer()
var fileServer = new static.Server('./public')

let sendJson = function(res, obj, code = 200) {
    res.writeHead(code, { "Content-Type": 'application/json' })
    res.write(JSON.stringify(obj))
    res.end()
}

let sendError = function(res,code,message = 'An error occured'){
    sendJson(res, {error : message}, code)
}

httpServer.on('request', function(req, res) {
    console.log(req.method, req.url) // this will log requests from client-side application
    fileServer.serve(req, res);
})

httpServer.listen(8888);