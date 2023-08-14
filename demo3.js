const demo = require('http');
const routw = require('./route');
console.log(routw.sometext)
const server = demo.createServer(routw.handler);
server.listen(7001);