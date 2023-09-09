const path = require('path')
const ex = require('express');
const bodyparser = require('body-parser');
const app = ex();
const adminRoute = require('./routes/admin');
const shopRoute = require('./routes/shop');
const contactRoute = require('./routes/contact_us')
app.use(bodyparser.urlencoded());
app.use(adminRoute);
app.use(shopRoute);
app.use(contactRoute);
app.use((req,res,next) =>{
    res.sendFile(path.join(__dirname,'views','success.html'))
})
app.use((req,res,next) =>{
    res.status(404).sendFile(path.join(__dirname,'views','404.html'));
});
app.listen(7001);