const express = require('express');

const app = express();

const http = require('http');

let server = http.createServer(app);

const socketIO = require('socket.io');

// io = conexion directa con el servidor backend
module.exports.io = socketIO(server);

require('./sockets/socket');

const path = require('path');

const publicPath = path.resolve(__dirname, '../public');

const port = process.env.PORT || 3000;

app.use(express.static(publicPath));


server.listen(port, (err) => {

    if (err) throw new Error(err);

    console.log(`Servidor corriendo en puerto ${ port }`);

});