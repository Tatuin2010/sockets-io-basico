var socket = io();

socket.on('connect', function() {
    console.log('Servidor conectado');
})

// Escuchar
socket.on('disconnect', function() {
    console.log('Servidor desconectado');
})

// Enviar informacion
socket.emit('enviarMensaje', {
    usuario: 'Dani',
    mensaje: 'Hola mundo'
}, function(resp) {
    console.log('Respuesta server:  ', resp);
})

// Escuchar informacion
socket.on('enviarMensaje', function(mensaje) {
    console.log('Servidor: ', mensaje);
})