const fs = require('fs');
const filehandler = (req,res)=>{
    const url = req.url;
    const method = req.method;
    if(url === '/'){
        fs.readFile("message.txt",{encoding : "utf-8"}, (err,data) =>{
            if(err){
                console.log(err);
            }
        console.log('data file ' + data);
        res.write('<html>');
        res.write('<head><title>Enter Message</title></head>');
        res.write(`<body>${data}</body>`);
        res.write('<body><form action="/message" method="POST"><input type="text" name="message" id="message"><button type="submit" id="submit">Send</button></form></body>');
        res.write('</html>');
        return res.end();
        })   
    }
    else if(url === '/message' && method === 'POST'){
        const body = [];
        req.on('data',(chunk)=>{
            console.log(chunk);
            body.push(chunk);
        })
         req.on('end', () => {
            const parsebody = Buffer.concat(body).toString();
            const ms = parsebody.split('=')[1];
            fs.writeFile('message.txt', ms, (err) => {
                res.statusCode = 302;
                res.setHeader('Location' , '/');
                return res.end();
                });
            }); 
    }
    // console.log(req.url,req.method,req.headers);
    else{
        res.setHeader('content-type','text/html');
        res.write('<html>');
        res.write('<head><title>My First Node.js</title></head>');
        res.write('<body><h1> Welcome home</h1></body>');
        res.write('</html>');
        res.end();
    }  
}
// module.exports = {
//     handler : filehandler,
//     sometext : 'I done it'
// }

// module.exports.handler = filehandler;
// module.exports.sometext = 'I done it';

exports.handler = filehandler;
exports.sometext = 'I done it';
