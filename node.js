const express = require('express')
const app = express()
const port = 3000
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);
var screens = {};
var controlers = {};
app.use(express.static('public'))
//app.get('/', (req, res) => {
//  res.send('Hello World!')
//})
io.on('connection', (socket) => {
	const userId = socket.id;
  console.log('a user: ' + userId + ' connected');
  //console.log(socket);
  socket.on('disconnect', () => {
    console.log('user: ' + socket.id + ' disconnected');
    if(typeof screens[socket.id] != 'undefined'){
		delete screens[socket.id];
		}
	// emit a message to all players to remove this player
	io.emit('disc', socket.id);
    
  });
  socket.on('screen', (msg) => {
	  screens[socket.id] = {
		  screen: socket.id,
		  p1: '',
		  p2: ''
		  }
    
    io.in(socket.id).socketsJoin(socket.id);
    console.log(screens[socket.id]);
  });
  socket.on('link', (msg) => {
	  screens[socket.id] = {
		  screen: socket.id,
		  p1: socket.id,
		  p2: ''
		  }
		  
    io.in(socket.id).socketsJoin(socket.id);
    console.log(screens[socket.id]);
  });
});
server.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
