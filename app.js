const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const app = express();


app.set('view engine', 'ejs');
app.set('views', 'views');

const adminData = require('./routes/admin');
const shopRoutes = require('./routes/shop');
const contactUsRoutes = require('./routes/contact_us');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminData.routes);
app.use(shopRoutes);
app.use(contactUsRoutes);

app.use('/admin/success',(req,res,next) => {
  res.sendFile(path.join(__dirname,'views','success.html'));
})

app.use((req, res, next) => {
  res.status(404).sendFile(path.join(__dirname,'views','404.html'));
});

app.listen(3000);
