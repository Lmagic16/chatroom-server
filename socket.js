const Server = require('socket.io');
const PORT   = 3000;
const server = require('http').Server({
    cors: {
      origin: "http://localhost:8080",
      methods: ["GET", "POST"]
    }
});

const io = Server(PORT);

io.on('connection', (socket) => {
    console.log('a user connected');
});

// io.close(); // Close current server

// server.listen(PORT); // PORT is free to use

// io = Server(server);