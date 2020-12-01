var app = require('express')();
var httpServer = require('http');
// var io = require('socket.io')(http, {
//     cors: {
//       origin: true,
//     },
// });

var io = require("socket.io")(httpServer, {
    cors: {
      origin: "http://localhost:8080",
      methods: ["GET", "POST"]
    }
});

app.options("/*", function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');
    res.sendStatus(200);
});

app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    next();
});


io.on('connection', (socket) => {
  console.log('a user connected');
});

var server = httpServer.createServer(app);

server.listen(3000, () => {
  console.log('listening on *:3000');
});