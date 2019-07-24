var websocket = require('ws');
var server = new websocket.Server({
    port: 2222
});
server.on('connection', function (client) {
    client.on('message', function (message) {
        console.log(message);
        server.clients.forEach((client) => {
            client.send(message)
        })
    })

})
console.log('服务器已启动');