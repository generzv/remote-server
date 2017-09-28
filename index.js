var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

app.get('/play', function(req, res){
  res.sendFile(__dirname + '/videos.html');
});

io.on('connection', function(socket){
  // // console.log('a user connected');
  // socket.on('disconnect', function(){
  //   console.log('user disconnected');
  // });
  socket.on('play video', function(videoID){
    console.log('play video: ', videoID);
    io.emit('play video', videoID);
  });
});

http.listen(3001, 'socketio-custom-server.herokuapp.com', function(){
  console.log('listening on //socketio-custom-server.herokuapp.com:3001');
});



// var PeerServer = require('peer').PeerServer;
// var server = PeerServer({port: 9000, path: '/myapp'});

// var express = require('express');
// var app = express();
// var ExpressPeerServer = require('peer').ExpressPeerServer;
//
// app.get('/', function(req, res, next) { res.send('Hello world!'); });
//
// var server = app.listen(9000);
//
// var options = {
//     debug: true
// }
//
// app.use('/api', ExpressPeerServer(server, options));
//
// // OR
//
// var server = require('http').createServer(app);
//
// app.use('/peerjs', ExpressPeerServer(server, options));
//
// server.listen(9000);



// // var app = require('express')();
// const express = require('express')
// const app = express()
// const https = require('https')
// const path = require('path')
// const fs = require('fs')
// const ExpressPeerServer = require('peer').ExpressPeerServer
//
// const options = {
//   // key: fs.readFileSync('/etc/apache2/ssl/apache.key'),
//   // cert: fs.readFileSync('/etc/apache2/ssl/apache.crt')
// }
//
// const server = https.createServer(options, app)
//
// const io = require('socket.io')(server)
//
// var PeerServer = require('peer').PeerServer({port: 8000 /*,
// 	proxied: true,
//   ssl: {key: fs.readFileSync('/etc/apache2/ssl/apache.key'),
//   certificate: fs.readFileSync('/etc/apache2/ssl/apache.crt')}},
// () => {
// 	console.log('peer server running')
// */})
//
// app.use('/peerjs', PeerServer)
//
// app.use(express.static(path.join(__dirname, 'public')))
//
// server.listen(3001, (req, res) => {
//   console.log('listening on port 3001')
// })
//
// app.get('/', (req, res) => {
//   res.sendFile(path.join(__dirname, 'public/index.html'))
// })
