const expres = require('express')
const route = expres.Router();
route.get('/add-product',(req,res,next) => {
    res.send('<form action="/admin/add-product" method="POST"><input type="text" name="product"></input><input type="text" name="size"></input><button type="sumbit">Send</button></form>');
});
route.post('/add-product',(req,res,next) => {
    console.log(req.body);
    res.redirect('/');
});
module.exports = route;