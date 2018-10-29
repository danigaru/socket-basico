var socket = io();

socket.on('connect', function() {
    console.log('Conectado al servidor');
});

socket.on('disconnect', function() {
    console.log('Perdimos conexión con servidor');
});

// enviar o emitir info
socket.emit('emitirMensaje', {
    usuario: 'SERGIO',
    edad: '22'
}, function(res) {
    console.log('res', res);
});

// recibir o escuchar info
socket.on('emitirMensaje', function(message) {
    console.log(message);
});