const { io } = require('../server');

io.on('connection', (client) => {
    console.log('Usuario conectador');

    client.on('disconnect', () => {
        console.log('usuario desconectado');
    });

    // emitir o enviar info
    client.emit('emitirMensaje', {
        nombre: 'Usuario Administrador',
        message: 'Bienvenido'
    });

    // escuchando informacion
    client.on('emitirMensaje', (data) => {
        // console.log(data);

        client.broadcast.emit('emitirMensaje', data);

        // if (message.nombre) {

        //     callback({
        //         resp: 'Todo salio mal'
        //     })
        // } else {

        //     callback({
        //         resp: 'TODO SALIO BIEN'
        //     });

        // }
    });
});