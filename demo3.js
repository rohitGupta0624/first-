
const ex = require('express');
const bodyparser = require('body-parser');
const app = ex();
app.use(bodyparser.urlencoded());
app.use('/localhost',(req,res,next) => {
    res.send('<form action="/product" method="POST"><input type="text" name="product"></input><input type="text" name="size"></input><button type="sumbit">Send</button></form>');
});
app.post('/product',(req,res,next) => {
    console.log(req.body);
    res.redirect('/');
});
app.use('/',(req,res,next) => {
    res.send('<h1>ERROR! go back</h1>');
});
app.listen(7001);