var WebSocketServer = require('ws').Server;
var wss = new WebSocketServer({port: 8080,host:"127.0.0.1"});
wss.on('connection', function(ws) {
    var array = new Float32Array(5);
    for (var i = 0; i < array.length; ++i) array[i] = i / 2;
    ws.send(array, {binary: true, mask: false});
  });