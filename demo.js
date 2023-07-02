

const demo = require('http');
const server = demo.createServer((req,res)=>{
    console.log(req);
    res = 'Rohit';
    console.log(res);
})
server.listen(4000);