var PORT = 9000;
var HOST = 'api.anidb.net';
const CLIENTNAME = "AnidbJS"
const VERSION = "0.0.1"
const USERNAME = "Chaos_Therum"
const PASSWORD = "114018471"

var dgram = require('dgram');

var client = dgram.createSocket('udp4');

const authenticate = (username, password, apiversion, clientname) => {
    const message = new Buffer(`AUTH user=${USERNAME}&pass=${PASSWORD}&protover=1&client=${CLIENTNAME}&clientver=${VERSION}`)
    client.send(message, 0, message.length, PORT, HOST, function (err, bytes) {
        console.log('Message Sent')
    })
}

client.on('message', (msg) => {
    console.log('message received')
    console.log(msg.toString('utf8'))
    client.close();
})

authenticate()