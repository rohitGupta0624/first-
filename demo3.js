
const ex = require('express');
const app = ex();
app.use((req,res,next) => {
    console.log('this is middle');
    next();
});
app.use((req,res,next) => {
    console.log('this is another middleware');
    res.send( { key1: value });
});
app.listen(7001);