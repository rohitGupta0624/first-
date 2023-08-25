
const ex = require('express');
const bodyparser = require('body-parser');
const app = ex();
const adminRoute = require('./routes/admin');
const shopRoute = require('./routes/shop');
app.use(bodyparser.urlencoded());
app.use('/admin',adminRoute);
app.use(shopRoute);
app.use((req,res,next) =>{
    res.status(404).send('<h1>page not found</h1>')
});
app.listen(7001);