const path = require('path')
const express = require('express');
const fs = require('fs');
const route = express.Router();
route.get('/add-product',(req,res) => {
    res.sendFile(path.join(__dirname,'../','views','add-product.html'))
})

module.exports = route;