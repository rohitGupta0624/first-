const demo = require('http');
const server = demo.createServer((req,res)=>{
    console.log(req.url, req.method,req.headers);
    if(req.url === '/home'){
        res.setHeader('content-type','text/html');
    res.write('<html>');
    res.write('<head><title>My First Node.js</title></head>');
    res.write('<body><h1> Welcome home</h1></body>');
    res.write('</html>');
    }
    else if(req.url === '/about' ){
        res.setHeader('content-type','text/html');
    res.write('<html>');
    res.write('<head><title>My First Node.js</title></head>');
    res.write('<body><h1> Welcome to About Us page</h1></body>');
    res.write('</html>');
    }
    else if(req.url === '/node'){
        res.setHeader('content-type','text/html');
    res.write('<html>');
    res.write('<head><title>My First Node.js</title></head>');
    res.write('<body><h1> Welcome to my Node Js project</h1></body>');
    res.write('</html>');
    }
    res.end();
})
server.listen(4000);